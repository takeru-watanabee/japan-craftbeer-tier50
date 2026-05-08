# 日本クラフトブルワリー TOP30 統合 Tier 表（最終確定版）

**統合元**: ChatGPT GPT-5 Deep Research (`deep-research-report.md` + `deep-research-report_3_5.md`) / Gemini 3 Pro Deep Research (`日本クラフトブルワリーTier表作成タスク.docx`)
**Untappd 準 ground truth**: ChatGPT が Phase 3 で live-fetch した brewery-level aggregate（16 社分、レビュー件数付き、N/A 明記）
**Web 再検証**: WBC2024/2026・WBA2025・JGBA2026・IBC2025 公式の主要乖離 5 件のみ実施
**作成日**: 2026-05-08

---

## Executive Summary

統合判定では **S=9 / A=11 / A-Provisional=1 / B=7 / B-Provisional=2**、合計 30 社。

両 AI を突き合わせた最大の収穫は、**互いに違う種類の弱点を炙り出せた**こと:

- **Gemini に明確なハルシネーション 1 件**: 富士桜高原麦酒に関する「WBC2025 Gold (Imperial Pilsner)」記述は、URL を確認すると **WBA2020 Country Winner** で年と大会の混同。これにより富士桜は統合 TOP30 から除外（Gemini 単独では S=9 位だった）。
- **ChatGPT に手続的見落とし 2 件**: **CRAFT BEER BASE**（JGBA2026 Gold 確認）と **大山 G ビール**（WBA2025 Country Winner + IBC2025 Gold 確認）が Phase 1 ロングリストの段階で漏れていた。両者とも統合 TOP30 入り。
- **Untappd 値の規則②違反**: Gemini が「3.808」「4.033」「3.826」など小数 3 桁で報告した値のうち、ChatGPT 側が live-fetch で確認できなかったケースが多数（VERTERE、Black Tide、Inkhorn 等）。**ChatGPT 値を採用、Gemini 単独主張値は採点根拠から除外**。

---

## Phase 1: 共通集合と差分集合

### 1.1 両 AI TOP30 共通（22 社）

| ブルワリー | ChatGPT 順位 | Gemini 順位 |
|---|---:|---:|
| 伊勢角屋麦酒 / ISEKADO | 2 | 1 |
| West Coast Brewing | 9 | 2 |
| 箕面ビール | 11 | 3 |
| 志賀高原ビール | 6 | 4 |
| うちゅうブルーイング | 8 | 5 |
| 奈良醸造 | 3 | 7 |
| Spring Valley Brewery | 17 | 8 |
| 常陸野ネスト | 5 | 11 |
| ヤッホーブルーイング | 7 | 12 |
| COEDO | 10 | 13 |
| 横浜ベイブルーイング | 19 | 14 |
| DevilCraft | 12 | 15 |
| VERTERE | 16 | 16 |
| 京都醸造 | 13 | 17 |
| Far Yeast Brewing | 15 | 18 |
| Y.MARKET BREWING | 14 | 19 |
| 忽布古丹醸造 / Hop Kotan | 30 | 21 |
| Black Tide Brewing | 28 | 22 |
| Totopia Brewery | 20 | 23 |
| Bighand Bros. Beer | 25 | 25 |
| RePuBrew | 22 | 26 |
| エチゴビール | 29 | 27 |

### 1.2 ChatGPT TOP30 のみ（8 社）

| ブルワリー | ChatGPT 順位 | Gemini の扱い | 包含/除外根拠 |
|---|---:|---|---|
| Baird Brewing | 1 (S 90.0) | TOP30 外、ただし **Q7 で「軸 4 過小評価」と自認** | 暗黙合意あり → 統合採用 |
| 宮崎ひでじビール | 4 (S 87.0) | ロングリスト 80 社にも非該当 | WBC2022 Gold (KURI KURO) 4 要素揃い → 統合採用 |
| スワンレイクビール | 18 (A 76.0) | 母集団に含むが TOP30 外 | Untappd 3.63/14,839 確認、長期実績 → 統合採用 |
| Teenage Brewing | 24 (A Prov. 75.0) | **「除外したが惜しい 5 社」#2 で言及** | 暗黙合意あり、操業 3 年未満で Provisional 維持 → 統合採用 |
| Brasserie Knot | 21 (B 74.0) | 言及なし | Untappd 3.80/4,660 強い、ChatGPT 単独評価 → 「惜しい 5 社」へ |
| South Horizon Brewing | 23 (B 74.0) | 80 社ロングリストに入るが Phase 2 で soft cut | upcycling・白麹独自性、ChatGPT 単独評価 → 「惜しい 5 社」へ |
| Anglo Japanese Brewing | 26 (B 71.0) | 言及なし | source 薄、影響限定 → 不採用 |
| Be Easy Brewing | 27 (B 71.0) | 言及なし | source 薄、影響限定 → 不採用 |

### 1.3 Gemini TOP30 のみ（8 社）

| ブルワリー | Gemini 順位 | ChatGPT の扱い | 包含/除外根拠 |
|---|---:|---|---|
| CRAFT BEER BASE | 6 (S 87.0) | **ロングリスト 80 社・母集団 50 社の双方に未収録** | **JGBA2026 Gold 確認 → ChatGPT 手続的見落としを是正、統合採用** |
| 富士桜高原麦酒 | 9 (S 86.0) | 母集団 50 社に含むが TOP30 外 (70.0) | **Gemini「WBC2025 Gold」は WBA2020 Country Winner の誤記=ハルシネーション。WBC2025 該当なし → 統合除外、惜しい 5 社へ** |
| 大山 G ビール | 10 (S 86.0) | **ロングリスト・母集団双方に未収録** | **WBA2025 Country Winner Pilsner + IBC2025 Gold 確認 → ChatGPT 手続的見落としを是正、統合採用** |
| 湘南ビール | 20 (A 76.0) | 母集団に含むが TOP30 外 (69.0) | 両者で評価あり、長期運営 → 統合採用 |
| Inkhorn Brewing | 24 (B 74.0) | 母集団に含むが TOP30 外 (71.0) | 両者で評価、Untappd 4.034 主張は ChatGPT 未確認 (N/A) → 統合採用（B 帯保守） |
| Great Dane Brewing | 28 (B Prov. 70.0) | ロングリスト未収録 | 2024 年宮城進出、操業 2 年未満 → 不採用 |
| T.Y.HARBOR Brewery | 29 (B 70.0) | 母集団に含むが TOP30 外 (69.0) | 両者の総合点が C 帯境界、上位候補と比較し劣る → 「惜しい 5 社」へ |
| ロコビア | 30 (C 60.0) | 母集団に含むが TOP30 外 (54.0) | 両者で C 帯、上位候補に届かず → 不採用 |

---

## Phase 2: スコア差分の検証

### 2.1 総合点 10 点以上乖離（Web 再検証実施）

| ブルワリー | ChatGPT | Gemini | 乖離 | Web 検証結果 | 統合判定 |
|---|---:|---:|---:|---|---:|
| 箕面ビール | 82.0 | 92.0 | **10** | WBC2024 Bronze (Pilsner) ＋ WBC2025 Bronze (Pilsner)。**Gold 級は 2016 (Stout)・2012 (Yuzu White) と評価期間外**。Gemini の軸 1=5 は過大、Bronze 止まり。 | **82.0 (ChatGPT 寄り)** |
| Spring Valley Brewery | 76.0 | 86.0 | **10** | WBC2026 Silver (Hojun Lager 496) 確認＋IBC2025 Gold 複数確認。両者の根拠は事実だが、Gemini の軸 1=5・軸 2=5 は過大評価。「キリン傘下」の独立性議論で評価が割れる構造。 | **82.0 (中間値、論争的判定)** |
| 富士桜高原麦酒 | 70.0 (TOP30 外) | 86.0 (S) | **16** | **Gemini 主張「WBC2025 Gold (Imperial Pilsner)」は実際には WBA2020 Country Winner（年と大会の混同）。WBA2025 で検索しても Pilsner Gold 該当なし、Weizen Country Winner のみ確認**。 | **70.0 (ChatGPT 寄り)、TOP30 除外** |

### 2.2 ChatGPT 母集団漏れ × Gemini S 評価（Web 再検証）

| ブルワリー | ChatGPT | Gemini | Web 検証結果 | 統合判定 |
|---|---:|---:|---|---:|
| CRAFT BEER BASE | 母集団外 | 87.0 (S) | JGBA2026 Gold (Lavender & Chamomile, Herb & Spice 部門) 確認。Gemini 主張「WBC2026 Silver」は要追加検証だが、JGBA Gold 単体で軸 1=4-5 の根拠十分。 | **84.0 (A、保守的に -3 補正)** |
| 大山 G ビール | 母集団外 | 86.0 (S) | WBA2025 Japan Country Winner (Pilsner) + IBC2025 Gold + WBA2024 Country Winner Pilsner 確認。**Country Winner は WBA 階層で Gold 相当だが World's Best 未満**。Gemini の軸 1=5 はやや過大。 | **83.0 (A、保守的に -3 補正)** |

### 2.3 軸別 2 点以上差

**該当なし**。共通 22 社の全軸で最大 1 点差に収まっており、AI 間の軸別評価は概ね整合。総合点の乖離は**重み配分（軸 1 の 0.35）に対する個別軸の 1 点ブレが累積した結果**であり、判定ロジック自体は両 AI で類似。

### 2.4 統合スコア計算則

| 乖離幅 | 統合スコア計算 |
|---|---|
| 0–3 点差 | 単純平均 |
| 4–9 点差 | 軸別根拠を再点検し、より硬いソース側を優先 |
| 10 点以上差 | Web 再検証ベースの判定（上記 2.1） |
| 片方のみ TOP30 入り | -2〜-3 点の保守補正を加えた採用 |

---

## Phase 3: Untappd データの統合

### 3.1 採用方針

ChatGPT が Phase 3 実行中に live-fetch した brewery-level aggregate を**準 ground truth**として採用。理由:

1. **レビュー件数を併記**しており、「50 件以上」規則の充足判断が可能
2. **取得不能銘柄を N/A と明記**し、規則②（推定値挿入禁止）を順守
3. Open Air Brewing のように **「29 ratings 表示で規定未達」と理由まで開示**

### 3.2 Untappd 値の AI 間比較（規則②違反検出）

| ブルワリー | ChatGPT live-fetch | Gemini 主張 | 判定 |
|---|---|---|---|
| うちゅうブルーイング | 4.03 / 83,411 | 4.033 | ✅ 実質同一（小数桁丸め差のみ） |
| West Coast Brewing | 3.98 / 110,113 | （言及なし） | ✅ ChatGPT 値採用 |
| 志賀高原ビール | N/A | 「3.808」 | ⚠️ **Gemini 単独主張、未検証** |
| VERTERE | N/A | 「3.826」 | ⚠️ **Gemini 単独主張、未検証** |
| Black Tide Brewing | N/A | 「3.826」 | ⚠️ **Gemini 単独主張、未検証** |
| Inkhorn Brewing | N/A | 「4.034」 | ⚠️ **Gemini 単独主張、未検証** |
| Totopia Brewery | N/A | 「4.011」 | ⚠️ **Gemini 単独主張、未検証** |

> **判定**: Gemini の小数 3 桁未検証値は規則②「推定値・近似値の挿入は禁止。取得できなければ N/A と明記」に抵触。**統合判定の採点根拠からは除外**。当該銘柄の軸 1・軸 2 は他のソース（受賞・専門メディア）に依存して採点する。

### 3.3 Untappd と AI 評価の乖離

ChatGPT 自身が Phase 5 で認めているとおり、**Untappd 高値だが今回ルーブリックで A 止まり**となった事例:

- **うちゅうブルーイング 4.03/83,411**: ChatGPT/Gemini ともにスコア上は S 帯（85.5 統合）に達するが、recent 国際金賞の硬ソースが薄い → 統合では S 採用（境界で揺れる旨を Phase 5 Q5 に記録）
- **West Coast Brewing 3.98/110,113**: 同上、**WBC2026 Gold (The Gateway) を Gemini が引用しており、Web 検証の余地あり** → 統合では S 採用（境界事例）

---

## Phase 4: 統合 TOP30 最終 Tier 表

3 列構成（ChatGPT 判定 / Gemini 判定 / 統合判定）で 30 社を確定。

| 順位 | ブルワリー | 所在地 | 代表銘柄 | ChatGPT 判定 (点 / Tier) | Gemini 判定 (点 / Tier) | **統合判定 (点 / Tier)** | 軸 1 | 軸 2 | 軸 3 | 軸 4 | 入手性 | 信頼度 | 主要根拠 | 注釈 |
|---:|---|---|---|---|---|---|---:|---:|---:|---:|---|---|---|---|
| 1 | 伊勢角屋麦酒 (ISEKADO) | 三重県伊勢 | ペールエール / ヒメホワイト | 89.0 / S | 96.0 / S | **92.5 / S** | 5 | 5 | 4 | 5 | Limited | High | IBC2024 受賞 + 老舗体系 | 独立運営 |
| 2 | West Coast Brewing | 静岡県静岡市 | Starwatcher / The Gateway | 84.0 / A | 93.0 / S | **88.5 / S** | 5 | 4 | 5 | 4 | Allocation | Mid | WBC2026 Gold (Gateway) ※Gemini 引用 + Untappd 3.98/110,113 | 独立運営、論争的判定 |
| 3 | 志賀高原ビール | 長野県山ノ内町 | 志賀高原 IPA | 86.0 / S | 90.0 / S | **88.0 / S** | 4 | 4 | 5 | 5 | Limited | Mid | JBT 歴史 + 自家栽培ホップ | 玉村本店 |
| 4 | Baird Brewing | 静岡県伊豆 | Wabi-Sabi Japan Pale Ale | 90.0 / S | TOP30 外 | **87.0 / S** | 4 | 4 | 5 | 5 | Standard | Mid | JBT 歴史 + Untappd 3.52/131,420 | **Gemini Q7 で「軸 4 過小評価」自認** |
| 5 | 奈良醸造 | 奈良県奈良市 | FUNCTION / LIGHTHOUSE | 87.0 / S | 87.0 / S | **87.0 / S** | 5 | 4 | 4 | 4 | Limited | High | WBC2026 Gold ダブル | 独立運営 |
| 6 | 常陸野ネスト | 茨城県那珂市 | White Ale | 86.0 / S | 86.0 / S | **86.0 / S** | 4 | 4 | 4 | 5 | Mass | Mid | IBC2025 Bronze + 国際輸出 | 木内酒造 |
| 7 | うちゅうブルーイング | 山梨県北杜市 | 宇宙 IPA | 84.0 / A | 87.0 / S | **85.5 / S** | 4 | 4 | 5 | 4 | Allocation | Mid | Untappd 4.03/83,411 | 境界事例（S/A 揺れ） |
| 8 | 宮崎ひでじビール | 宮崎県延岡市 | KURI KURO | 87.0 / S | TOP30 外 | **85.0 / S** | 5 | 4 | 4 | 4 | Limited | Mid | WBC2022 Gold (KURI KURO) | ChatGPT 単独支持、4 要素揃い |
| 9 | ヤッホーブルーイング | 長野県軽井沢町 | よなよなエール | 85.0 / S | 85.0 / S | **85.0 / S** | 4 | 5 | 3 | 5 | Mass | High | IBC2025 Silver + GPTW10 連 | 大手本体ブランドではない |
| 10 | CRAFT BEER BASE | 大阪府大阪市 | Lavender & Chamomile | **母集団外** | 87.0 / S | **84.0 / A** | 5 | 4 | 4 | 4 | Limited | High | JGBA2026 Gold (Herb & Spice) | **ChatGPT 手続的見落とし是正** |
| 11 | COEDO | 埼玉県川越市 | 毬花 Marihana / 瑠璃 | 82.0 / A | 85.0 / S | **83.5 / A** | 4 | 4-5 | 3 | 5 | Mass | High | 全国流通 + 海外輸出 | 独立運営 |
| 12 | 大山 G ビール | 鳥取県西伯郡 | ピルスナー / 八郷 | **母集団外** | 86.0 / S | **83.0 / A** | 5 | 4 | 4 | 4 | Standard | High | WBA2025 Country Winner Pilsner + IBC2025 Gold | **ChatGPT 手続的見落とし是正** |
| 13 | 箕面ビール | 大阪府箕面市 | Pilsner / W-IPA | 82.0 / A | 92.0 / S | **82.0 / A** | 4 | 4-5 | 3 | 5 | Standard | High | WBC2024 Bronze + WBC2025 Bronze | **Gemini 軸 1=5 は過大** |
| 14 | Spring Valley Brewery | 東京都渋谷区ほか | 豊潤 / 496 | 76.0 / A | 86.0 / S | **82.0 / A** | 4-5 | 4-5 | 3 | 4 | Mass | High | WBC2026 Silver + IBC2025 Gold 複数 | キリン傘下、論争的判定 |
| 15 | DevilCraft | 東京都品川区 | Black Igneous | 81.0 / A | 83.0 / A | **82.0 / A** | 5 | 4 | 3-4 | 3-4 | Standard | Mid | WBC2024 Gold (Black Igneous) + Untappd 3.77/24,098 | 都市型 brewpub |
| 16 | 京都醸造 | 京都府京都市 | 一意専心 / 一期一会 | 80.0 / A | 80.0 / A | **80.0 / A** | 4 | 4 | 4 | 4 | Standard | High | Untappd 3.75/55,987 + Belgian×US Hop | 独立運営 |
| 17 | 横浜ベイブルーイング | 神奈川県横浜市 | BAYSTARS ALE / Yuzu Weiss | 76.0 / A | 83.0 / A | **79.5 / A** | 4-5 | 4 | 3 | 4 | Standard | High | WBC2024 Gold (Yuzu Weiss) + IBC2025 Silver | 独立運営 |
| 18 | VERTERE | 東京都奥多摩町 | Westbound 系 / Passiflora | 77.0 / A | 80.0 / A | **78.5 / A** | 4 | 3-4 | 4 | 4 | Allocation | Mid | taproom 拡張 + 奥多摩文脈 | Gemini Untappd 3.826 は未検証 |
| 19 | Far Yeast Brewing | 山梨県小菅村 | Tokyo White / Off Trail | 77.0 / A | 80.0 / A | **78.5 / A** | 4 | 3-4 | 4 | 4 | Standard | Mid | WBC2022 Bronze (Tokyo White) + IBC2024 Gold | 独立運営、源流醸造所 |
| 20 | Y.MARKET BREWING | 愛知県名古屋市 | Yellow Sky Pale Ale | 80.0 / A | 77.0 / A | **78.5 / A** | 4 | 3-4 | 4 | 4 | Standard | High | IBC2025 Bronze + Untappd 3.76/49,413 | 独立運営 |
| 21 | Totopia Brewery | 愛知県長久手市 | Phobia シリーズ | 75.0 / A | 75.0 / B Prov. | **75.0 / A Prov.** | 4 | 3 | 5 | 3 | Allocation | Mid | 愛知 HAZY 文脈、2022 設立 | **操業 4 年、Provisional 維持** |
| 22 | 忽布古丹醸造 / Hop Kotan | 北海道上富良野町 | upopo / 無法地帯 | 71.0 / B | 76.0 / A | **73.5 / B** | 4 | 3-4 | 4 | 3 | Limited | Mid | 上富良野ホップ 100% | 独立運営 |
| 23 | Black Tide Brewing | 宮城県気仙沼市 | Kesennuma Pride | 71.0 / B | 76.0 / A | **73.5 / B** | 4 | 3-4 | 4 | 3 | Limited | Mid | 震災後気仙沼文脈 | Gemini Untappd 3.826 は未検証 |
| 24 | スワンレイクビール | 新潟県阿賀野市 | Porter | 76.0 / A | TOP30 外 | **73.0 / B** | 4 | 4 | 3 | 4 | Standard | Mid | Untappd 3.63/14,839 + 老舗 | ChatGPT 単独支持 |
| 25 | Teenage Brewing | 埼玉県ときがわ町 | Hazy Jane | 75.0 / A Prov. | TOP30 外 (惜しい 5) | **73.0 / A Prov.** | 4 | 3 | 5 | 3 | Allocation | Low | Untappd 3.93/12,188、2023 設立 | **両 AI 暗黙合意、操業 3 年で Provisional** |
| 26 | RePuBrew | 静岡県沼津市 | 69IPA / Hop Kings | 74.0 / B | 71.0 / B | **72.5 / B** | 4 | 3-4 | 4 | 3 | Limited | Mid | JGBA2026 Gold + WBC2026 Bronze | 独立運営 |
| 27 | 湘南ビール (熊澤酒造) | 神奈川県茅ヶ崎市 | ピルスナー / アルト | 69.0 / TOP30 外 | 76.0 / A | **72.5 / B** | 3-4 | 4 | 3 | 4 | Standard | Mid | 酒蔵併設、長期運営 | 両者で評価あり |
| 28 | Inkhorn Brewing | 東京都豊島区 | Java Finch / Shima Fukuro | 71.0 / TOP30 外 | 74.0 / B | **72.5 / B** | 4 | 3-4 | 4 | 3 | Limited | Low | 設計思想は明快、Untappd は未検証 | Gemini Untappd 4.034 は未検証 |
| 29 | Bighand Bros. Beer | 京都府京都市 | Andalusite | 72.0 / B Prov. | 72.0 / B Prov. | **72.0 / B Prov.** | 5 | 3 | 4 | 2 | Allocation | Low | WBC2024 Gold (Andalusite)、2023 設立 | **操業 3 年で Provisional** |
| 30 | エチゴビール | 新潟県新潟市 | Flying IPA / ピルスナー | 71.0 / B | 71.0 / B | **71.0 / B** | 3 | 4 | 2 | 5 | Mass | High | 日本初の地ビール、Untappd 3.48/86,144 | 老舗 pioneer |

### 4.1 Tier 別社数分布

| Tier | 社数 | 割合 |
|---|---:|---:|
| **S** | 9 | 30% |
| **A** | 11 | 37% |
| **A Provisional** | 1 | 3% |
| **B** | 7 | 23% |
| **B Provisional** | 2 | 7% |
| 合計 | 30 | 100% |

> **両 AI 単独判定との差**: ChatGPT は S=7, Gemini は S=13。**統合は S=9** で中間に着地。Gemini の S 帯バブル（富士桜・大山 G・CRAFT BEER BASE の Gemini 単独 S 評価）は、Web 検証で 1 件除外・2 件 A 降格となった。

### 4.2 入手性ディメンション別分布

| 入手性 | 社数 | 構成銘柄（一部） |
|---|---:|---|
| Mass | 5 | ヤッホー、COEDO、SVB、常陸野、エチゴ |
| Standard | 11 | Baird、志賀高原、箕面、DevilCraft、京都醸造、Y.MARKET、横浜ベイ、Far Yeast、湘南、大山 G、Open Air |
| Limited | 9 | ISEKADO、奈良、CBB、Hop Kotan、Black Tide、RePuBrew、Inkhorn、宮崎ひでじ、Brasserie Knot |
| Allocation | 5 | うちゅう、WCB、VERTERE、Totopia、Teenage、Bighand |
| Tap-only | 0 | （T.Y.HARBOR は TOP30 外で除外） |

### 4.3 カテゴリ A-E 別の入賞数

| カテゴリ | 定義 | 統合 TOP30 入賞数 |
|---|---|---:|
| A | シーン創造世代 | 8 |
| B | 技術派・玄人評価系 | 11 |
| C | 新世代カルト/革新派 | 8 |
| D | 都市型・グローバル志向 | 2 (DevilCraft, SVB, Far Yeast の一部、TY HARBOR 除外) |
| E | 地域密着・ローカル代表 | 1 (Black Tide のみ) |

> **観察**: D・E が薄いのは ChatGPT/Gemini 共通の弱点。評価軸 1（コンペ受賞）と軸 4（業界影響力）が D・E で点を取りにくい構造。

### 4.4 除外したが惜しいブルワリー 5 社

| ブルワリー | 統合スコア | 惜しかった理由 |
|---|---:|---|
| Brasserie Knot (北海道鶴居村) | 72.0 | Untappd 3.80/4,660 は B 上位の硬さ。ChatGPT 単独評価で Gemini 言及なく届かず。1 つでも 2025-2026 の公的賞があれば即 A。 |
| South Horizon Brewing (高知) | 71.0 | upcycling・白麹・椎茸のコンセプトが極めて明快。BeerTengoku 特集あり。**Gemini が 80 社ロングリストに入れていたが Phase 2 で soft cut**。 |
| 富士桜高原麦酒 (山梨) | 70.0 | クラシカル品質は高い。**Gemini の「WBC2025 Gold」は WBA2020 Country Winner の誤記 = ハルシネーション**。実績は WBA Country Winner と JGBA 入賞中心で TOP30 ボーダー外。 |
| T.Y.HARBOR Brewery (東京) | 69.5 | 1997 創業、東京水辺の都市型 brewpub 文化を醸成。recent hard-award の積み増しが薄く Tap-only 流通でスコアが伸びなかった。 |
| 横浜ビール (神奈川) | 70.0 | 地域核として重要だが、近年の国際・国内 hard-award の密度が一歩劣った。Untappd 3.50/10,694 は中堅標準。 |

### 4.5 統合判定が両 AI と異なる主要ケースと根拠

| ブルワリー | ChatGPT | Gemini | 統合 | 統合理由 |
|---|---|---|---|---|
| West Coast Brewing | A 84.0 | S 93.0 | **S 88.5** | Gemini 引用の WBC2026 Gold (Gateway) が事実なら軸 1=5、Untappd 3.98/110,113 も最強級。境界判定だが S を採用。 |
| 富士桜高原麦酒 | A 70.0 | S 86.0 | **TOP30 除外** | **Gemini ハルシネーション**（WBC2025 Gold 誤記）が S 押し上げの主因のため、削除対象。 |
| CRAFT BEER BASE | 母集団外 | S 87.0 | **A 84.0** | ChatGPT 手続的見落とし。JGBA2026 Gold は確認できたが、Gemini 単独 S は他軸の検証薄。-3 補正で A 採用。 |
| 大山 G ビール | 母集団外 | S 86.0 | **A 83.0** | 同上。WBA Country Winner は Gold 相当だが World's Best 未満で軸 1=5 はやや過大。-3 補正で A 採用。 |
| 箕面ビール | A 82.0 | S 92.0 | **A 82.0** | Gemini の軸 1=5・軸 2=5 は WBC Bronze 止まりに対して過大。ChatGPT 値を採用。 |
| Teenage Brewing | A Prov. 75.0 | TOP30 外 (惜しい) | **A Prov. 73.0** | 操業 3 年未満で Provisional 維持、両 AI 暗黙合意で TOP30 入り。 |

---

## Phase 5: 統合版セルフクリティーク

### Q1. このTier判定の最大の弱点を3つ挙げよ

第一に、**カテゴリ D（都市型・グローバル志向）と E（地域密着・ローカル代表）の構造的過小評価**だ。統合 TOP30 では D=2、E=1 に留まり、両 AI が独立に出した分布（ChatGPT D=2/E=1、Gemini D=6/E=2）と比較しても、評価軸 1（コンペ受賞）と軸 4（業界影響力）が D・E のブルワリーには点が乗りにくい。これは**評価関数の設計に内在する偏り**であり、3 回再評価しても解消されない。具体的には、T.Y.HARBOR・Tokyo Aleworks・CRAFTROCK などの都市型 brewpub と、ロコビア・遠野醸造・Sanriku Brewing などのローカル代表が、軸 1 のハードソースを蓄積する戦略的余裕がないため、構造的に下位に押しやられた。

第二に、**Untappd brewery-level aggregate の取得安定性が銘柄ごとに不均一**であることだ。ChatGPT live-fetch では Baird・うちゅう・WCB・京都醸造・Y.MARKET・Brasserie Knot などが取れたが、志賀高原・常陸野ネスト・宮崎ひでじ・VERTERE・Black Tide・Inkhorn などは N/A になった。これにより**取れた銘柄だけが軸 1・軸 2 で点を上積みできる**という不公平が残った。Gemini が小数 3 桁で示した値（3.808、4.034 等）は規則②違反として除外したが、もし手動 CSV があれば取得できた可能性は高く、データ可用性の差が判定に影響している。

第三に、**両 AI 共通のロングリスト網羅漏れリスク**だ。今回 ChatGPT は CRAFT BEER BASE と大山 G ビールを Phase 1 ロングリストに含めず、Web 検証で初めて発覚した。逆に Gemini は富士桜の WBC/WBA 混同というハルシネーションを犯した。**1 つの AI に依存すると見落としかハルシネーションのいずれかを必ず発生させる**という構造的弱点が、統合プロセスでようやく可視化された。これは個別ブルワリー評価より重要な、メソドロジー上の知見である。

### Q2. SランクとAランクの境界事例と決め手・反証可能性

**最大の境界事例は West Coast Brewing 88.5 (S)・うちゅうブルーイング 85.5 (S) と CRAFT BEER BASE 84.0 (A)・COEDO 83.5 (A) の境界**だ。WCB と UCHU は Untappd 値が 3.98/110k と 4.03/83k で群を抜くが、recent 国際金賞の硬ソース密度は WCB の WBC2026 Gold 主張のみ（要追加検証）。CRAFT BEER BASE は JGBA2026 Gold が確認できたが国際大会の実績は薄く、COEDO は海外メディア露出は厚いが直近の硬賞が乏しい。境界の決め手は **Untappd の絶対値 + 全国流通の象徴性**で、もし Untappd 値の重みを 0.05 落とせば 4 社とも A 中位に並ぶ。この判定は反証可能性が高い。

**第二の境界は宮崎ひでじビール 85.0 (S) と CRAFT BEER BASE 84.0 (A)** だ。宮崎ひでじは WBC2022 Gold (KURI KURO) という 4 要素揃った硬証拠で S を確保したが、これは 2022 年の 1 件で、2024-2026 年の更新がない。CRAFT BEER BASE は JGBA2026 Gold で年は新しいが国際大会ではない。**「国際 vs 直近」のどちらに重みを置くか**で 1 ランク動く。3 回独立評価では宮崎ひでじが A に落ちる回が出る可能性が高い。

**第三の境界は Baird Brewing 87.0 (S) の判定そのもの**だ。ChatGPT は #1 (90.0) で S 確定、Gemini は TOP30 外で実質的に「S 圏外」と判定。統合スコアは Gemini の Q7「軸 4 過小評価」自認を加味して 87.0 まで戻したが、**Gemini の評価関数では S に届かなかった事実は重い**。Untappd 3.52/131,420 はレビュー件数では国内最大級だが平均値は中堅標準で、軸 1 がハードに刺さらない。3 回評価で S/A を行き来する典型的境界事例。

### Q3. AランクとBランクの境界事例

**Y.MARKET 78.5 (A) と Hop Kotan・Black Tide 73.5 (B) の境界**は最も明瞭だ。Y.MARKET は IBC2025 Bronze + Untappd 3.76/49,413 という ChatGPT 実取得値で点を稼いだ。一方 Hop Kotan は上富良野ホップ 100% という独自性で軸 3=4 だが軸 4=3 で頭打ち、Black Tide は震災後文脈で軸 3=4 だが Untappd N/A で軸 1 が伸びない。**軸 4（業界影響力）が 4 か 3 か**で約 5 点動く構造で、この境界は 3 回評価でもほぼ動かない。

**Totopia 75.0 (A Prov.) と RePuBrew・湘南・Inkhorn 72.5 (B) の境界**も重要だ。Totopia は革新性 5 で押し切り A を維持、RePuBrew は JGBA2026 Gold + WBC2026 Bronze の硬賞で B 上位、湘南は熊澤酒造の長期運営で軸 4 を稼ぐが軸 3=3 で伸びず。**この帯では「革新性をどう数値化するか」が決め手**で、Totopia の軸 3=5 を 4 に落とせば即 B。

**スワンレイク・Teenage 73.0 と RePuBrew 72.5 の境界**は 0.5 点差で、信頼度・操業年数・代表銘柄の知名度のいずれを重視するかで容易に逆転する。Teenage は Provisional 扱いで操業 3 年制約があり、2026 年 6 月以降に再評価すれば自動で A/B 通常判定に変わる。

### Q4. 除外条件で外したが、実は含めるべき有力ブルワリーがないか

**最大の再点検対象は Open Air Brewing**だ。ChatGPT が下位 25 社の中で 69.0 (Low 信頼度) と評価したが、**WBC2025 Gold (Sansho Gose - Koji) という極めて硬いソース**を持つ。除外の主因は Untappd brewery-level が 29 ratings 表示で「50 件以上」規則を満たさなかったこと。これは**ルーブリックの運用上の除外であり、実力否定ではない**。手動で Untappd を再取得して 50 件以上が確認できれば、TOP30 中位 (75-78 点) に滑り込む可能性が高い。

**第二は South Park Brewing (北海道)**。両 AI ともロングリストには seed として保持したが、ChatGPT は手続的に Phase 2 で hard exclusion、Gemini はコロラド州の同名ブルワリーとの混同を検出して除外。**統合プロセスでも実在確認できなかった**。これは seed 提示自体に誤りがある可能性が高く、ユーザー側で実在性の再確認が必要。

**第三は寒菊銘醸 (Kankiku Brewery, 千葉)**。Gemini ロングリストに WBA2025 経由で発見されたが Phase 2 で soft cut、ChatGPT はそもそもロングリスト未収録。日本酒蔵がモダンクラフトを手がける成長株で、国際大会のメダル獲得が始まっている。両 AI が拾い切れなかった**ChatGPT/Gemini 双方の網羅漏れ事例**で、次回ロングリスト構築時には必ず seed 候補に入れるべき。

### Q5. 3回独立評価でTierが変動しうるブルワリー5社

**1. West Coast Brewing**: ChatGPT は A、Gemini は S 2 位、統合では S 2 位。**Gemini 引用の WBC2026 Gold (Gateway) を独立検証できれば S 確定、誤記なら A 帯に落ちる**。境界に最も近い銘柄。

**2. Spring Valley Brewery**: 「キリン傘下」を独立運営扱いするか除外条件適用するかで大きく動く。今回は両 AI とも「独立運営」扱いだが、評価者によっては除外対象に変わり、結果として TOP30 から消える可能性がある。

**3. Teenage Brewing**: 2023 年開業で Provisional 制約。2026 年 6 月以降の再評価では制約が外れ、Untappd 3.93/12,188 の強さがそのまま A 中位 (78-80 点) に変わる可能性。

**4. Bighand Bros. Beer**: WBC2024 Gold (Andalusite) という強烈な軸 1=5 がある一方、2023 年開業で軸 4=2。「金賞 1 件をどれだけ重く見るか」で B Prov. と A Prov. を行き来する。

**5. CRAFT BEER BASE**: ChatGPT が母集団漏れだったため 1 度目の評価では実質除外、2 度目以降の Gemini 経由で初めて評価対象。**ロングリスト網羅性に依存する典型例**で、評価者が JGBA を強調するか国際大会を強調するかで A 中位〜S 下位を行き来する。

### Q6. seed20社のうち下位に来たもの

**ロコビア (千葉)** は Gemini #30 (60.0 / C)、ChatGPT 母集団 50 で 54.0 と最下位帯。歴史ある確かな技術を持ち、ローカルで深く愛されているが、**WBC のような国際金賞も Untappd 高値も持たない**ため、国際指向のルーブリックでは構造的に下位に置かれる。これはルーブリックに対する忠実さゆえの**正当な過小評価**であり、品質否定ではない。

**T.Y.HARBOR Brewery (東京)** は両 AI で 69.0-70.0 の B/C 境界。1997 年創業の都市型 brewpub 文化の先行例で、**Tap-only 流通**が軸 1・軸 2 でハードソースを積みにくい構造をもたらす。これは**ルーブリックの構造的バイアスによる過小評価**で、軸 4 を強く取れば A 帯まで上がる余地がある。

**South Park Brewing (北海道)** は seed 指定だったが、両 AI とも Phase 2 で除外。**実在確認が取れない以上評価不能**であり、これは過小評価ではなく seed リストの誤りに起因する手続的問題。**過小評価/正当評価の判定そのものが成立しない**特殊例。

### Q7. 海外メディアでの言及・軸4で過小評価された可能性

**最も明確に軸 4 を過小評価した可能性があるのは常陸野ネスト**だ。BeerAdvocate で White Ale が **Score 91 / 1,768 ratings**、Japanese Classic Ale が **86 / 497**、Ancient Nipponia が **87 / 206** と、**長期にわたり海外読者から評価され続ける希少な日本ブルワリー**。今回は軸 4=5 を与えたが、ChatGPT 自身が Phase 5 で「むしろ過小評価ではなく妥当〜やや控えめだった可能性」と認めており、追加で 1-2 点上積みする余地がある。

**Baird Brewing** は Gemini が Q7 で「ベアードは軸 4 で明らかに過小評価」と自認。Good Beer Hunting と RateBeer での言及は Hitachino ほど硬くないが、**日本クラフトビールを海外に知らしめたパイオニア**としての文化資本は数値化が難しい。今回統合では S 4 位 (87.0) としたが、ChatGPT 単独評価の 90.0 (S 1 位) のほうが妥当な可能性もある。

**京都醸造**は Good Beer Hunting の travel/culture 文脈で自然に名前が出る。「京都で飲むべき体験」として海外読者の旅程に組み込まれており、軸 4 を**国際カルチャー文脈で再採点すれば** 80.0 から 83-85 に上がる余地がある。今回は A 中位だが、A 上位〜S 下位への移動が反証可能。

### Q8. 2つのAIで判定が分かれたブルワリーの構造的洞察3つ ★統合版独自★

**洞察1: AI ごとに「ハードソース」の定義が違う**

ChatGPT は **WBC・IBC の公式 PDF と専門メディア（Beer Tengoku・Japan Beer Times）の特集記事**をハードソースとして重視した。Gemini は **JGBA・WBA・Untappd の数値データ**を重視した。この「何を硬い証拠と見るか」の違いが、富士桜（Gemini WBA Country Winner 過大評価）、Baird（ChatGPT 専門メディア由来の歴史性で S、Gemini はそれを評価せず TOP30 外）、CRAFT BEER BASE（JGBA Gold のみで Gemini は S、ChatGPT は母集団にすら入れず）という対照的な判定差を生んだ。**解決策**: ハードソースの優先度を更に細分化し、「国際大会 World's Best > Country Winner > Gold > Silver/Bronze」と「国内大会 JGBA/IBC Gold > Silver/Bronze」を明示的に重み付けすべき。

**洞察2: 「Provisional」運用の解像度差が新興ブルワリーの判定を割る**

操業 3 年未満を Provisional とするルールは両 AI が遵守したが、**「Provisional の中での順位付け」**が割れた。Totopia（2022 開業、4 年目）を ChatGPT は通常 A、Gemini は B Provisional と判定。Teenage（2023 開業）と Bighand（2023 開業）を含めると、3 社の判定が AI ごとに動く。**これは評価関数のバグではなく、Provisional の意味論が曖昧**であることを示している。**解決策**: Provisional は「Tier から外す予備区分」ではなく「全 Tier に Provisional フラグを横断付与する」設計に変えるべき（例: A Provisional, B Provisional）。今回の統合判定はこの方針を採用した。

**洞察3: ロングリスト網羅性は AI のクロスチェックで初めて担保される**

ChatGPT は CRAFT BEER BASE と大山 G ビールを Phase 1 で見落とし、Gemini は富士桜の WBA を WBC と誤記した。**両者を独立に走らせなければどちらも検出できなかった**。これは「Deep Research を 2 つ並走させる」運用の最大の効用で、単一 AI の Deep Research は **見落とし or ハルシネーションを必ずどこかで発生させる**前提で運用する必要がある。**解決策**: 本タスクのような網羅性が問われる調査では、必ず 2 つ以上の独立 AI 出力 + 手動 ground truth（今回の Untappd CSV のような）の 3 点クロスバリデーションを標準化すべき。1 AI 単独の出力は本番採用せず、最低でも統合プロセスを挟む。

---

## 不確実性開示

<uncertainty>
- **WCB の WBC2026 Gold (The Gateway)**: Gemini が引用したが ChatGPT の WBC26 公式 PDF 確認では未取得。Web 検索で WBC2026 Winners List 1 PDF が存在することは確認したが、本統合では PDF 内訳を全社分は確認していない。WCB の S 判定は Gemini の引用を信頼した処理であり、独立検証が完了していない。
</uncertainty>

<uncertainty>
- **Untappd 値の取得時期**: ChatGPT live-fetch は Phase 3 実行時点（2026 年 4-5 月推定）の値だが、正確な取得日時はドキュメントに記録なし。Untappd の brewery-level aggregate は新作リリースで月単位で動くため、本表の値は ±0.05 の誤差を許容する前提で読むべき。
</uncertainty>

<uncertainty>
- **CRAFT BEER BASE の WBC2026 Silver**: Gemini が言及したが、Web 検索では JGBA2026 Gold の確認に留まった。Gemini の根拠 URL が `craftbeerbase.com/news/rPkWjzMq` で「European Beer Star 2025 Herb & Spice 部門」と書かれており、「European Beer Star 2025 Silver」と「WBC2026 Silver」の混同の可能性がある。統合判定では JGBA2026 Gold のみを根拠として A 採用しており、ESBS が真なら追加で +1 点の上積み余地。
</uncertainty>

<uncertainty>
- **Baird・宮崎ひでじ・スワンレイクの軸 1**: ChatGPT-only 採用銘柄で、Gemini 側の独立クロスチェックがない。特に宮崎ひでじの WBC2022 Gold (KURI KURO) は 4 要素揃いだが、Gemini が同じ銘柄を 80 社ロングリストに入れていない事実は気になる（Gemini のロングリスト網羅漏れの可能性 vs ChatGPT のソース取り違えの可能性、両方が成立しうる）。
</uncertainty>

<uncertainty>
- **「論争的判定」明記対象**: West Coast Brewing (S)、Spring Valley Brewery (A)、Teenage Brewing (A Prov.) の 3 社は、評価者の重み付け次第で 1 ランク動く境界事例。本表の判定はこれらを「中央値寄り」に置いたものであり、独立検証で覆る余地がある。
</uncertainty>
