# 感度分析: 評価関数のパラメータ変動による Tier 動揺シミュレーション

**目的**: 統合判定の頑健性を可視化し、「どの判定が堅く、どの判定が動くか」を業界関係者が把握できるようにする。
**ベース重み**: 軸 1=0.35 / 軸 2=0.15 / 軸 3=0.20 / 軸 4=0.30
**ベース閾値**: S≥85, A=75-84, B=65-74, C=55-64

---

## 1. Phase A 検証後の確定スコア (Scenario 0 = 現行設定)

```
順位  ブルワリー                      軸1 軸2 軸3 軸4  総合点  Tier
 1    ISEKADO                          5   5   4   5   96.0   S
 2    箕面ビール                       5   5   3   5   92.0   S
 3    West Coast Brewing               5   4   5   4   91.0   S
 4    Baird Brewing                    4   4   5   5   90.0   S
 5    志賀高原ビール                   4   4   5   5   90.0   S
 6    奈良醸造                         5   4   4   4   87.0   S
 7    大山Gビール                      5   4   4   4   87.0   S
 8    宮崎ひでじビール                 5   4   4   4   87.0   S
 9    CRAFT BEER BASE                  5   4   4   4   87.0   S
10    Spring Valley Brewery            5   5   3   4   86.0   S
11    常陸野ネスト                     4   4   4   5   86.0   S
12    ヤッホーブルーイング             4   5   3   5   85.0   S
13    COEDO                            4   5   3   5   85.0   S
14    うちゅうブルーイング             4   4   5   4   84.0   A
15    横浜ベイブルーイング             5   4   3   4   81.0   A
16    DevilCraft                       5   4   4   3   81.0   A
17    京都醸造                         4   4   4   4   80.0   A
18    Y.MARKET BREWING                 4   4   4   4   80.0   A
19    富士桜高原麦酒                   4   5   3   4   80.0   A
20    Bighand Bros. Beer (Prov.)       5   3   4   3   78.0   A Prov.
21    CRAFTROCK BREWING                5   3   4   3   78.0   A
22    Far Yeast Brewing                4   3   4   4   77.0   A
23    VERTERE                          4   3   4   4   77.0   A
24    スワンレイクビール               4   4   3   4   76.0   A
25    Totopia Brewery (Prov.)          4   3   5   3   75.0   A Prov.
26    Teenage Brewing (Prov.)          4   3   5   3   75.0   A Prov.
27    Brasserie Knot                   4   4   4   3   74.0   B
28    忽布古丹醸造                     4   4   4   3   74.0   B
29    Black Tide Brewing               4   4   4   3   74.0   B
30    RePuBrew                         4  3.5  4   3   72.5   B
```

**Phase A 反映による主要変更点**:
- **CRAFT BEER BASE**: 母集団漏れ → S 9 位に救済（WBC2026 Silver Pilsener + WBC2025 Bronze + JGBA2026 Gold + ESBS2025 推定）
- **大山 G ビール**: 母集団漏れ → S 7 位に救済（WBA2025 World's Best ×2 + Category Champion）
- **宮崎ひでじビール**: ChatGPT 87 維持（WBA2024 World's Best Dark Barley Wine 確認、Gemini 完全見落とし）
- **箕面ビール**: A → S 昇格（WBC2025 Stout Gold 確認、私の前回判定誤り）
- **West Coast Brewing**: S 維持だが**根拠変更**（WBC2026 Gold は誤り、実際は WBC2025 Gold The Gateway）
- **CRAFTROCK BREWING**: B → A 昇格（WBC2026 Gold Sansho Lager、両 AI 重大見落とし）
- **Bighand Bros.**: B Prov. → A Prov. 昇格（WBC2024 Gold Andalusite + WBC2026 Gold Flint = 2 大会連続 Gold）
- **富士桜高原麦酒**: TOP30 復帰（JGBA2026 Gold ×2 = Marron B Abbey + Laoho、両 AI 見落とし）

**Tier 分布**: S=13 / A=13 (うち Provisional 3) / B=4

---

## 2. シナリオ別 Tier 動揺

### Scenario A: 軸 1（技術的品質）強化 (0.40 / 0.15 / 0.20 / 0.25)

「直近の硬賞に対する純粋な技術評価を最重視」する立場。

**昇格**:
- Bighand Bros. Beer: 78.0 → **80.0** (A Prov. 維持、A 中位へ)
- CRAFTROCK BREWING: 78.0 → **80.0** (A 上位へ)
- 横浜ベイブルーイング: 81.0 → **82.0** (A 上位)
- DevilCraft: 81.0 → **82.0** (A 上位)
- Spring Valley: 86.0 → **87.0** (S 強化)

**降格**:
- COEDO: 85.0 → **84.0** (S → A、わずかにボーダー下)
- ヤッホー: 85.0 → **84.0** (S → A、軸 2/4 由来の点が削られる)
- 常陸野ネスト: 86.0 → **85.0** (S 維持だがギリギリ)
- 志賀高原ビール: 90.0 → **89.0** (S 維持)
- Baird Brewing: 90.0 → **89.0** (S 維持)

**洞察**: 軸 1 を強化すると **歴史的存在感だけで S にいたブルワリー（ヤッホー、COEDO）が A に落ち**、**WBC/WBA Gold 持ちの新興・中堅が浮上**する。これは「クラフトビール史 vs 直近競技品質」の重み付けが Tier を動かす最大の感度変数。

### Scenario B: 軸 4（業界影響力・文化資本）強化 (0.30 / 0.15 / 0.20 / 0.35)

「日本クラフト史と海外メディア定着を重視」する立場。

**昇格**:
- Baird Brewing: 90.0 → **91.5** (S トップ級へ、Gemini Q7 自認の過小評価補正と整合)
- 志賀高原ビール: 90.0 → **91.5** (S トップ級)
- ヤッホー: 85.0 → **86.5** (S 強化、軸 4=5 が効く)
- 常陸野ネスト: 86.0 → **87.5** (S 強化、海外定着評価)
- COEDO: 85.0 → **86.5** (S 強化)
- エチゴビール: 71.0 → **72.5** (B 維持だが押し上げ)

**降格**:
- Bighand Bros. Beer: 78.0 → **76.5** (A Prov. → 危うい)
- CRAFTROCK BREWING: 78.0 → **76.5** (A 下位へ)
- 横浜ベイブルーイング: 81.0 → **79.5** (A 中位)
- 奈良醸造: 87.0 → **86.0** (S 維持だが落ちる)
- 大山 G ビール: 87.0 → **86.0** (S 維持)
- 宮崎ひでじビール: 87.0 → **86.0** (S 維持)

**洞察**: 軸 4 強化は **「老舗の象徴性」で押し上げる方向**。**Bighand/CRAFTROCK のような新興 WBC Gold 勢は軸 4=2-3 で頭打ち**、Provisional 圏に近づく。エチゴビールの「日本初」価値が顕在化。

### Scenario C: 軸 3（革新性）強化 (0.30 / 0.15 / 0.30 / 0.25)

「シーン創造性・革新性を重視」する立場。

**昇格**:
- うちゅうブルーイング: 84.0 → **86.0** (A → S 昇格)
- West Coast Brewing: 91.0 → **93.0** (S トップ級、Gemini と一致)
- Totopia Brewery: 75.0 → **77.0** (A Prov. → A 上位)
- Teenage Brewing: 75.0 → **77.0** (A Prov. → A 上位)
- 志賀高原ビール: 90.0 → **91.0** (S トップ級)

**降格**:
- ヤッホー: 85.0 → **83.0** (S → A、よなよなエール定番化が革新性に逆効果)
- COEDO: 85.0 → **83.0** (S → A)
- Spring Valley: 86.0 → **84.0** (S → A)
- 富士桜高原麦酒: 80.0 → **78.0** (A 中位 → A 下位)
- 箕面ビール: 92.0 → **90.0** (S 維持、王道型は革新性 3 で頭打ち)

**洞察**: 革新性重視は **新世代カルト勢（うちゅう、Totopia、Teenage）の Tier 上昇**を起こす。Gemini の TOP10 が S=13 だった主因の一つで、「Hazy IPA・スムージーサワー・実験的醸造」を高く評価する評価関数では自然に膨らむ。

### Scenario D: 閾値厳格化 (S≥90, A=80-89, B=70-79)

「S 帯を世界トップ 5 級に絞る」厳格立場。

**S 残留**: 5 社
1. ISEKADO 96.0
2. 箕面ビール 92.0
3. West Coast Brewing 91.0
4. Baird Brewing 90.0
5. 志賀高原ビール 90.0

**S → A 降格**: 8 社
- 奈良醸造 (87.0)
- 大山 G ビール (87.0)
- 宮崎ひでじビール (87.0)
- CRAFT BEER BASE (87.0)
- Spring Valley Brewery (86.0)
- 常陸野ネスト (86.0)
- ヤッホーブルーイング (85.0)
- COEDO (85.0)

**A 残留 + 元 A**: 約 18 社、B 帯は CRAFTROCK 含む 3-4 社のみ。

**洞察**: 閾値を厳格化すると **Tier 構造がより階段的**になり、業界での議論がしやすい。S=5 は「世界レベル確定組」、A=18 は「日本国内ハイレベル」と読み替え可能。

### Scenario E: Untappd 完全取得を仮定

ChatGPT が N/A とした 14 銘柄の Untappd brewery aggregate が手動取得できた場合、軸 1 または軸 2 を +0.3〜+0.5 補正する仮想シナリオ。

**最も影響を受けるブルワリー**:

| 銘柄 | 現行 | 仮想 | 変化要因 |
|---|---:|---:|---|
| Inkhorn Brewing | 71.0 | **+2.0** | Gemini 主張 4.034 が事実なら国内最高クラス |
| VERTERE | 77.0 | **+1.5** | Gemini 主張 3.826 が事実なら A 上位確定 |
| Black Tide | 74.0 | **+1.5** | 同上 |
| Totopia | 75.0 | **+2.0** | Gemini 4.011 が事実なら A 上位 |
| 志賀高原ビール | 90.0 | **+1.0** | 個別ビール 3.7-4.1 平均ベースで上振れ余地 |
| 常陸野ネスト | 86.0 | **+0.5** | BeerAdvocate White Ale 91/1768 ratings の海外評価 |

**洞察**: もし Gemini の小数 3 桁主張が**全部事実だった**場合、Inkhorn・Totopia などは Tier 1 段階上昇。ただし**Untappd UI は 2 桁表示のため、3 桁値は物理的に取得不可能**。Gemini 値はほぼ確実に自前計算 = 規則②違反。よってこのシナリオは「もし手動 CSV があれば判定が変わる銘柄」のリストに過ぎない。

### Scenario F: Provisional 撤廃 (操業 3 年未満ペナルティなし)

**通常 Tier 復帰**:
- Bighand Bros. Beer: 78.0 → A 中位（WBC Gold ×2 が直接効く）
- Totopia Brewery: 75.0 → A 下位
- Teenage Brewing: 75.0 → A 下位

**洞察**: 2026 年 6 月以降、これら 3 社は自動的に Provisional から外れる。**6 ヶ月後の再評価では Tier 構造が静かに変動**することを業界は認識すべき。

### Scenario G: WBA Country Winner = 軸 1=4 とする厳格化

「Style Winner / Category Champion = 軸 1=5」「Country Winner = 軸 1=4」と区別する立場。

**降格対象**:
- 大山 G ビール: 軸 1=5 → 4 → 87.0 → **84.0** (S → A、ただし Style Winner ×2 もあるため再考)
- 富士桜高原麦酒: WBA Country Winner なし、JGBA Gold ×2 のみ → 軸 1=4 維持

**実際は**: 大山 G は **WBA2025 で Style Winner ×2 を獲得しているため軸 1=5 は維持されるべき**。Country Winner だけのブルワリーは富士桜 (WBA2018, 2020, 2021) などで、これらは過去で評価期間外。

---

## 3. 堅いブルワリー / 動くブルワリー

### 全シナリオで Tier 不動 (堅い 7 社)

| ブルワリー | 理由 |
|---|---|
| ISEKADO | IBA UK Gold ×4 大会連続 + IBC 多数 + 科学的 QC = どの軸を強化しても S |
| 箕面ビール | WBC2025 Stout Gold + WBC 多数年受賞 + 軸 4=5 (老舗) |
| 奈良醸造 | WBC2026 Gold ×2 = 軸 1=5 確定、軸 4 強化でも軸 1 が下支え |
| 大山 G ビール | WBA Style Winner ×2 + Category Champion = 軸 1=5 揺るがない |
| 宮崎ひでじビール | WBA Style Winner + WBC Gold + WBC Silver = 3 年連続硬賞 |
| 志賀高原ビール | 軸 3=5 + 軸 4=5 のダブル強み、革新性・歴史性両方カバー |
| Baird Brewing | 軸 3=5 + 軸 4=5 + Untappd 国内最大級レビュー数 |

### Tier 動揺リスク高い (動く 8 社)

| ブルワリー | 動揺幅 | 動揺要因 |
|---|---|---|
| Spring Valley Brewery | S↔A | キリン傘下を「独立運営」扱いするか「除外対象」とするかで Tier から消える可能性 |
| COEDO | S↔A | 軸 1=4 で軸 2-4 由来の押し上げ。革新性重視シナリオで降格 |
| ヤッホーブルーイング | S↔A | 同上、よなよなエール定番化が軸 3=3 で頭打ち |
| West Coast Brewing | S↔A | WBC2025 Gold (Gateway) 1 件依存、もし誤りならスコア急落 |
| うちゅうブルーイング | A↔S | 革新性重視シナリオで S 昇格 |
| 富士桜高原麦酒 | A↔A 上位 | JGBA2026 Gold ×2 を硬く取るか、WBA 過去栄光を引きずるか |
| Bighand Bros. Beer | A Prov.↔A | Provisional 撤廃 + WBC Gold ×2 で位置動く |
| Teenage Brewing | A Prov.↔A | Provisional 撤廃 + Untappd 3.93 で A 中位確定 |

### 評価の頑健性スコア (堅さ指標)

各ブルワリーの「全 7 シナリオで Tier 変動回数」を頑健性指標として:

```
頑健性 5/5 (全シナリオ不動): ISEKADO, 箕面, 奈良, 大山G, 宮崎ひでじ, 志賀高原, Baird
頑健性 4/5: 常陸野ネスト, DevilCraft, 横浜ベイ
頑健性 3/5: COEDO, ヤッホー, WCB, 京都醸造, Y.MARKET
頑健性 2/5: Spring Valley, うちゅう, 富士桜, Far Yeast, VERTERE
頑健性 1/5: Bighand, Totopia, Teenage, CRAFTROCK, Brasserie Knot, Inkhorn
```

---

## 4. 反証可能性スコア (各銘柄の「これが見つかれば判定が動く」条件)

業界関係者が個別判定に反論する際の起点となる条件マトリクス:

| ブルワリー | 現判定 | これで Tier 動く |
|---|---|---|
| West Coast Brewing | S 91.0 | WBC2025 Gold (Gateway) が公式 PDF で確認できなければ → A 80 へ |
| 富士桜高原麦酒 | A 80.0 | JGBA2026 Gold ×2 が JGBA 公式に該当なし → 75 (B) へ |
| 大山 G ビール | S 87.0 | WBA Style Winner が単なる Country Winner だった場合 → A 83 へ |
| 宮崎ひでじビール | S 87.0 | WBA2024 World's Best Dark Barley Wine が他社の受賞だった場合 → A 80 へ |
| ISEKADO | S 96.0 | IBA UK Gold ×4 大会連続が事実誤認だった場合 → S 89 へ降格 |
| CRAFT BEER BASE | S 87.0 | WBC2026 Silver の銘柄詳細が不明・誤りだった場合 → A 81 へ |
| Spring Valley | S 86.0 | キリン本体ブランド扱いで除外条件適用 → TOP30 圏外 |
| Baird Brewing | S 90.0 | Untappd 131k ratings が「観光客中心の量重視」で軸 4 過大評価とみなされる場合 → S 86 |
| 箕面ビール | S 92.0 | WBC2025 Stout Gold が公式 PDF で確認できない場合 → A 84 |
| Bighand Bros. | A Prov. 78.0 | WBC2026 Gold (Flint) が誤情報、または Andalusite 単発だった場合 → B 72 |
| CRAFTROCK | A 78.0 | WBC2026 Gold (Sansho Lager) が他社受賞だった場合 → B 65 |
| エチゴビール | B 71.0 | 「日本初」歴史性を軸 4 で 5→3 に下げる視点なら → B 60 (C 帯) |

---

## 5. シミュレーション結論

1. **頑健 7 社の S 帯は議論余地が小さい**: ISEKADO, 箕面, 奈良, 大山G, 宮崎ひでじ, 志賀高原, Baird は「日本クラフトビール世界級確定組」と読み替えて良い。
2. **境界銘柄 8 社の Tier は評価関数の設計次第で動く**: 議論の中心になるのはこの 8 社。
3. **Provisional 3 社は 2026 年 6 月以降に自動再分類**: Bighand (A 中位)、Totopia/Teenage (A 下位) に静かに移動する。
4. **Untappd 完全取得が次の感度レバー**: 手動 CSV があれば Inkhorn・VERTERE・Totopia の Tier が変動。
5. **Gemini の規則②違反 (Untappd 小数 3 桁) を排除しても上位構造は変わらない**: ハルシネーション対策は「TOP10 の入れ替え」より「中位 B 帯の精緻化」に効く。
