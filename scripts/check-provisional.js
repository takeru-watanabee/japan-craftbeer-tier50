#!/usr/bin/env node
/**
 * 操業 3 年経過した Provisional ブルワリーをリストアップ。
 * 6 月の年次再分類 Issue で使用。
 *
 * 使い方:
 *   node scripts/check-provisional.js
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, '..', 'data', 'breweries.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const thisYear = new Date().getFullYear();

const candidates = data.breweries
  .filter(b => b.provisional && b.founded && (thisYear - b.founded) >= 3)
  .map(b => ({
    rank: b.rank,
    name: b.name,
    founded: b.founded,
    age: thisYear - b.founded,
    tier: b.tier,
    score: b.score,
    location: b.location
  }));

if (candidates.length === 0) {
  console.log('✅ 該当する Provisional ブルワリーはありません (今年は再分類対象なし)');
  process.exit(0);
}

console.log(`📋 ${candidates.length} 社が操業 3 年以上経過、Provisional 解除候補:\n`);

const colWidths = { rank: 4, name: 30, founded: 8, age: 5, tier: 10, score: 6 };
const fmt = (v, w) => String(v).padEnd(w);
console.log(
  fmt('順位', colWidths.rank) +
  fmt('ブルワリー名', colWidths.name) +
  fmt('創業年', colWidths.founded) +
  fmt('年数', colWidths.age) +
  fmt('現Tier', colWidths.tier) +
  fmt('スコア', colWidths.score)
);
console.log('─'.repeat(Object.values(colWidths).reduce((a, b) => a + b, 0)));

candidates.forEach(c => {
  console.log(
    fmt(`#${c.rank}`, colWidths.rank) +
    fmt(c.name.length > 28 ? c.name.slice(0, 27) + '…' : c.name, colWidths.name) +
    fmt(c.founded, colWidths.founded) +
    fmt(`${c.age}年`, colWidths.age) +
    fmt(c.tier, colWidths.tier) +
    fmt(c.score, colWidths.score)
  );
});

console.log('\n💡 推奨アクション:');
console.log('1. 各候補の data/breweries.json で `provisional: false` に変更');
console.log('2. tier フィールドから " Prov." サフィックスを削除');
console.log('3. PR 作成して main にマージ');
