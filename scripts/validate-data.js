#!/usr/bin/env node
/**
 * data/breweries.json の整合性をチェック (PR 検証用)。
 *
 * 検証項目:
 *   1. JSON 構文 (require の段階で検出)
 *   2. 必須フィールドの存在
 *   3. axis 値が 1-5 の範囲か
 *   4. score が計算式と一致するか (許容誤差 ±0.05)
 *   5. tier が score+閾値と整合するか
 *   6. provisional フラグと tier サフィックスの整合
 *   7. coords が日本国内バウンディングボックス内か
 *   8. founded > 3 年経過なのに provisional=true は warning
 *
 * 終了コード: errors > 0 で 1、warnings のみは 0。
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'breweries.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const errors = [];
const warnings = [];

const REQUIRED_FIELDS = [
  'rank', 'name', 'location', 'tier', 'score', 'axis',
  'category', 'availability', 'confidence', 'evidences'
];
// 順序重要 (高い閾値から評価)
const TIER_THRESHOLDS = [
  ['S', 85], ['A', 75], ['B', 65], ['C', 55], ['D', 0]
];
const WEIGHTS = { 1: 0.35, 2: 0.15, 3: 0.20, 4: 0.30 };
// 日本のバウンディングボックス (沖ノ鳥島・南鳥島・与那国島・北海道含む余裕あり)
const JP_BOUNDS = { lngMin: 122, lngMax: 154, latMin: 20, latMax: 46 };

function expectedTier(score) {
  for (const [t, threshold] of TIER_THRESHOLDS) {
    if (score >= threshold) return t;
  }
  return 'D';
}

function tierBase(tier) {
  // "A Prov." → "A", "B-" → "B"
  const m = String(tier).match(/^[SABCD]/);
  return m ? m[0] : null;
}

// 1+2+3. Required fields & axis range
data.breweries.forEach((b, i) => {
  REQUIRED_FIELDS.forEach(f => {
    if (b[f] === undefined || b[f] === null) {
      errors.push(`#${b.rank ?? i} ${b.name ?? '(unnamed)'}: missing required field "${f}"`);
    }
  });
  if (!b.axis) return;
  for (let k = 1; k <= 4; k++) {
    const v = b.axis[k] ?? b.axis[String(k)];
    if (v === undefined || v === null) {
      errors.push(`#${b.rank} ${b.name}: missing axis ${k}`);
    } else if (v < 1 || v > 5) {
      errors.push(`#${b.rank} ${b.name}: axis ${k} = ${v} out of range [1, 5]`);
    }
  }
});

// 4. Score == calculated (graduated thresholds)
//    diff > 5.0  → ERROR (gross inconsistency, likely forgotten recalc after axis change)
//    diff > 0.05 → WARNING (intentional manual adjustment, surfaced for review)
data.breweries.forEach(b => {
  if (!b.axis || b.score == null) return;
  const a = b.axis;
  const v = (k) => a[k] ?? a[String(k)];
  const expected = (
    v(1) * WEIGHTS[1] +
    v(2) * WEIGHTS[2] +
    v(3) * WEIGHTS[3] +
    v(4) * WEIGHTS[4]
  ) * 20;
  const diff = Math.abs(b.score - expected);
  const msg = `#${b.rank} ${b.name}: score ${b.score} ≠ calculated ${expected.toFixed(2)} (diff ${diff.toFixed(2)})`;
  if (diff > 5.0) {
    errors.push(msg + ' [GROSS — likely forgot to recalc score after axis change]');
  } else if (diff > 0.05) {
    warnings.push(msg);
  }
});

// 5. Tier matches threshold
data.breweries.forEach(b => {
  if (b.score == null || !b.tier) return;
  const base = tierBase(b.tier);
  const exp = expectedTier(b.score);
  if (base && base !== exp) {
    warnings.push(`#${b.rank} ${b.name}: tier "${b.tier}" but score ${b.score} suggests "${exp}"`);
  }
});

// 6. Provisional consistency
data.breweries.forEach(b => {
  const hasProvSuffix = b.tier && /Prov/i.test(b.tier);
  const hasProvFlag = b.provisional === true;
  if (hasProvSuffix !== hasProvFlag) {
    errors.push(
      `#${b.rank} ${b.name}: tier "${b.tier}" but provisional=${b.provisional} — inconsistent`
    );
  }
});

// 7. Coords in Japan
data.breweries.forEach(b => {
  if (!b.coords) {
    warnings.push(`#${b.rank} ${b.name}: missing coords (will not appear on map view)`);
    return;
  }
  if (!Array.isArray(b.coords) || b.coords.length !== 2) {
    errors.push(`#${b.rank} ${b.name}: coords must be [lng, lat] array`);
    return;
  }
  const [lng, lat] = b.coords;
  if (lng < JP_BOUNDS.lngMin || lng > JP_BOUNDS.lngMax ||
      lat < JP_BOUNDS.latMin || lat > JP_BOUNDS.latMax) {
    errors.push(
      `#${b.rank} ${b.name}: coords [${lng}, ${lat}] outside Japan bounds ` +
      `[${JP_BOUNDS.lngMin}-${JP_BOUNDS.lngMax}, ${JP_BOUNDS.latMin}-${JP_BOUNDS.latMax}]`
    );
  }
});

// 8. Provisional flag should match `founded` (warn-only)
const thisYear = new Date().getFullYear();
data.breweries.forEach(b => {
  if (b.provisional && b.founded && (thisYear - b.founded) >= 3) {
    warnings.push(
      `#${b.rank} ${b.name}: provisional=true but operating ${thisYear - b.founded} years (>=3). ` +
      `Run \`node scripts/check-provisional.js\` and consider reclassification.`
    );
  }
});

// Result
console.log(`Validated ${data.breweries.length} breweries from data/breweries.json`);
console.log(`  Errors:   ${errors.length}`);
console.log(`  Warnings: ${warnings.length}`);
console.log('');

if (errors.length > 0) {
  console.error('❌ ERRORS:');
  errors.forEach(e => console.error('  ✗ ' + e));
}
if (warnings.length > 0) {
  console.log('⚠️  WARNINGS:');
  warnings.forEach(w => console.log('  - ' + w));
}
if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All checks passed');
}

process.exit(errors.length > 0 ? 1 : 0);
