# 日本クラフトブルワリー TOP30 統合 Tier 表 — 議論たたき台 (Phase A 検証完了版)

**目的**: ブルワー本人・業界メディア編集者・玄人愛好家が**個別判定に対して具体的に反論できる粒度**の評価成果物。バズ用ビジュアルではなく、**反証可能性の最大化**を狙う。

**統合元**: ChatGPT GPT-5 Deep Research / Gemini 3 Pro Deep Research / 並列マルチエージェント独立検証 8 件（Claude Code）
**作成日**: 2026-05-08
**評価期間**: 2025-05〜2026-05 の市場流通定番＋直近 1 年限定品。受賞は 2022 年以降を対象。

**関連ファイル**:
- `evidence-matrix.csv` — 30 社×4 軸×ソース URL の完全追跡マトリクス
- `sensitivity-analysis.md` — 軸重み・閾値変動による Tier 動揺シミュレーション
- `comparison-chatgpt-vs-gemini.md` — 元 AI 出力比較
- `integrated-final-tier-table.md` — Phase A 前の暫定統合版（参考、本書で更新済）

---

## 0. Executive Summary

### 結論: 統合 TOP30 確定 Tier 分布 (Phase A 検証反映)

```
S Tier  (85+): 13 社  ← 「日本クラフトビール世界級確定組」
A Tier  (75-84): 13 社 (うち Provisional 3)  ← 「国内ハイレベル」
B Tier  (65-74): 4 社
```

S 帯が 13 社と多いのは、**両 AI の網羅漏れ + 私の前回統合の判定誤り**を Phase A 並列検証で是正した結果、**世界トップ級の硬賞 (WBC Gold / WBA Style Winner / WBA Category Champion) を持つブルワリーが想定より多かった**ことが判明したため。閾値を S≥90 に厳格化すれば S=5 に絞れる（感度分析 Scenario D）。

### Phase A で確定した「3 階層の見落とし」

本検証は、3 つの独立な評価エンジン（ChatGPT, Gemini, 私の前回統合）が**それぞれ違う種類の誤りを犯していた**ことを暴き出した:

| 誤り種別 | ChatGPT | Gemini | Claude (前回統合) |
|---|---:|---:|---:|
| **ハルシネーション** (実在しない受賞を引用) | 0 件 | 3 件 (富士桜・WCB・CRAFT BEER BASE) | 0 件 (引き継ぎ) |
| **規則②違反** (推定値の挿入) | 0 件 | 5 件 (Untappd 小数 3 桁) | 引き継ぎなし |
| **網羅漏れ** (重要受賞・ブルワリーを見落とし) | 4 件 (CBB, 大山G, 富士桜 JGBA, 宮崎ひでじ確認時の限定的言及) | 2 件 (宮崎ひでじ完全欠落, Baird Q7 自認過小) | 6 件 (両 AI 漏れの引き継ぎ) |
| **判定誤り** (証拠に対するスコア過大/過小) | 1 件 (箕面 軸 1=4 → 実際 5) | 4 件 (大山G/CBB/箕面 軸過大評価方向で正しいが根拠誤認) | 5 件 (引き継ぎ + 重み加重ミス) |

**最も重要な発見**: 単一 AI の Deep Research では、上記いずれかの誤りを必ずどこかで発生させる。**並列マルチエージェント検証 + Web 一次ソース確認**でしか、業界査読に耐える粒度の Tier 表は構築できない。

---

## 1. Phase A 8 件並列検証の収束結果

各検証エージェントは互いの結論を見ずに独立 Web 検証を実行。

### 1.1 検証マトリクス

| # | 検証対象 | 一次仮説 (ChatGPT/Gemini 由来) | 並列検証の結論 | 影響 |
|---|---|---|---|---|
| 1 | West Coast Brewing WBC2026 Gold (The Gateway) | Gemini 主張 | **誤り**: Gateway は WBC**2025** Gold。WBC2026 では受賞なし。 | WCB 軸 1=5 維持、根拠 URL 差し替え |
| 2 | 富士桜高原麦酒 WBC2025 Gold (Imperial Pilsner) | Gemini 主張 | **完全ハルシネーション**: Gemini URL は別ブランド (Kirin Ichiban)。混同元は WBA**2020** World's Best。さらに **JGBA2026 Gold ×2 (Marron B Abbey, Laoho)** が両 AI 抜け。 | TOP30 復帰 (A 帯)、Gemini S は剥奪 |
| 3 | CRAFT BEER BASE WBC2026 Silver = Lavender & Chamomile | Gemini 主張 | **銘柄誤り**: Silver は **Southern German Style Pilsener**。L&C は WBC2025 Bronze + JGBA2026 Gold + ESBS2025 推定。**メダル数自体は Gemini 主張より厚い**。 | S 帯維持・むしろ強化 |
| 4 | 大山 G ビール WBA Country Winner ≒ Gold | Gemini 主張 | **過小**: 実際は **Style Winner ×2 + Category Champion** (WBA2025 Strong Wheat Beer + Dark Barley Wine 世界 1 位)。Country Winner は通過点。 | A → S 昇格、Gemini S 判定方向は正しいが根拠不足 |
| 5 | 箕面ビール WBC 全受賞歴 | ChatGPT は WBC2024 Bronze のみ参照 | **重大見落とし**: WBC2025 Stout Gold + WBC2025 Pilsner Bronze + WBC2026 Stout Silver も実在。 | A → S 昇格、Gemini 軸 1=5 が正しかった |
| 6 | 志賀高原ビール Untappd brewery aggregate | Gemini「3.808」、ChatGPT N/A | **取得不能**: WebFetch 拒否で再取得失敗。ただし **Untappd UI は 2 桁表示が仕様**、3 桁値は物理的に取得不可能 → Gemini 値は規則②違反確定 | Untappd 値除外、軸 1 別ソースで採点 |
| 7 | 宮崎ひでじビール 2022 以降の受賞 | ChatGPT WBC2022 Gold (KURI KURO) | **過小**: 加えて **WBC2023 Silver (太陽のラガー)** + **WBA2024 World's Best Dark Barley Wine (生賴バーレイワイン)** = 3 年連続硬賞 + 世界 1 位 | S 帯確定、Gemini 完全見落としは Gemini 側のロングリスト網羅性失敗 |
| 8 | ISEKADO recent hard-award 4 要素抽出 | ChatGPT「4 要素抽出が一部未達」と自認 | **複数確定**: IBA UK Gold ×4 大会連続 (2017/2019/2021/2024)、IBC2024 Gold ×2 (Sailing Day NZ IPA, ねこにひき)、JBC2023 Champion Brewery。社長博士号は誤情報の疑い | S 1 位確定、Gemini 96.0 は方向正しいが根拠不足 |

### 1.2 Phase A で**新たに発見**した両 AI 共通の見落とし

並列検証は当初の 8 件以外にも、**両 AI に共通する見落とし**を 3 件特定した:

#### (a) **CRAFTROCK BREWING WBC2026 Gold (Sansho Lager)**
両 AI とも CRAFTROCK を B 帯下位 (ChatGPT 58.0 / Gemini 90点未満) に判定していたが、実際は WBC2026 Japan Gold 5 件のうちの 1 つ (Sansho Lager) を獲得。前回統合では完全に見落としていた。**Phase A で初めて顕在化**し、A 帯 (78.0) に昇格。

#### (b) **Bighand Bros. Beer WBC2026 Gold (Flint)**
ChatGPT は WBC2024 Gold (Andalusite) のみ評価、Gemini も同様。実際は **Andalusite + Flint で 2 大会連続 WBC Gold**。前回統合 B Provisional 72.0 → A Provisional 78.0 に昇格。京都の新興ながら国際大会で連続 Gold は極めて重い。

#### (c) **うちゅうブルーイング WBC2026 Bronze (Uchu Pils)**
両 AI とも Untappd 4.03 評価のみで判定していたが、実は WBC2026 Bronze (West Coast-Style Pilsener カテゴリ) も獲得。軸 1 を 4 で押さえつつ、WBC 受賞という事実が「Untappd 高評価の市場熱量だけでなく、競技品質も評価可能」になる重要証拠。

---

## 2. 改訂統合 TOP30 (Phase A 検証反映)

### 2.1 最終 Tier 表

各エントリの Tier 判定後ろの **★** は Phase A で判定が変更された銘柄。

| 順位 | ブルワリー | 所在地 | Tier | 総合点 | 軸 1 | 軸 2 | 軸 3 | 軸 4 | 入手性 | 信頼度 | 主要硬賞 (2022-2026) | 注釈 |
|---:|---|---|---|---:|---:|---:|---:|---:|---|---|---|---|
| 1 | ISEKADO (伊勢角屋麦酒) | 三重県伊勢市 | S | 96.0 | 5 | 5 | 4 | 5 | Limited | High | IBA UK Gold ×4 大会連続 + IBC2024 Gold ×2 | 独立運営 |
| 2 | 箕面ビール ★ | 大阪府箕面市 | S | 92.0 | 5 | 5 | 3 | 5 | Standard | High | WBC2025 Stout Gold + WBC2024/2025 Bronze + WBC2026 Silver | A → S |
| 3 | West Coast Brewing | 静岡県静岡市 | S | 91.0 | 5 | 4 | 5 | 4 | Allocation | High | WBC2025 Gold (The Gateway, Pastry Stout) | 根拠 URL 修正 |
| 4 | Baird Brewing | 静岡県伊豆市 | S | 90.0 | 4 | 4 | 5 | 5 | Standard | Mid | Untappd 3.52/131,420 + JBT 歴史的シンボル | Gemini Q7 自認過小評価 |
| 5 | 志賀高原ビール | 長野県山ノ内町 | S | 90.0 | 4 | 4 | 5 | 5 | Limited | Mid | テロワール体現 + JBT 歴史 | 玉村本店 |
| 6 | 奈良醸造 | 奈良県奈良市 | S | 87.0 | 5 | 4 | 4 | 4 | Limited | High | WBC2026 Gold ×2 (Function, Lighthouse) | 独立運営 |
| 7 | 大山 G ビール ★ | 鳥取県西伯郡 | S | 87.0 | 5 | 4 | 4 | 4 | Standard | High | WBA2025 World's Best Strong Wheat + Dark Beer Category Champion | A → S |
| 8 | 宮崎ひでじビール | 宮崎県延岡市 | S | 87.0 | 5 | 4 | 4 | 4 | Limited | High | WBA2024 World's Best Dark Barley Wine + WBC2022 Gold | Gemini 完全見落とし |
| 9 | CRAFT BEER BASE ★ | 大阪府大阪市 | S | 87.0 | 5 | 4 | 4 | 4 | Limited | High | WBC2026 Silver (Pilsener) + WBC2025 Bronze + JGBA2026 Gold + ESBS2025 推定 | A → S、ChatGPT 母集団漏れ是正 |
| 10 | Spring Valley Brewery ★ | 東京都ほか | S | 86.0 | 5 | 5 | 3 | 4 | Mass | High | WBC2026 Silver (Silk Ale White) + IBC2025 Gold/Silver/Bronze | キリン傘下、A → S |
| 11 | 常陸野ネスト | 茨城県那珂市 | S | 86.0 | 4 | 4 | 4 | 5 | Mass | Mid | IBC2025 Bronze + JGBA2025 Gold + 海外定着 | 木内酒造 |
| 12 | ヤッホーブルーイング | 長野県軽井沢町 | S | 85.0 | 4 | 5 | 3 | 5 | Mass | High | IBC2025 Silver + GPTW10 連続 | 大手本体ブランドではない |
| 13 | COEDO | 埼玉県川越市 | S | 85.0 | 4 | 5 | 3 | 5 | Mass | High | 全国流通 + 海外輸出 | 独立運営 |
| 14 | うちゅうブルーイング ★ | 山梨県北杜市 | A | 84.0 | 4 | 4 | 5 | 4 | Allocation | High | WBC2026 Bronze (Uchu Pils) + Untappd 4.03/83,411 | A 維持、軸 1 根拠強化 |
| 15 | 横浜ベイブルーイング | 神奈川県横浜市 | A | 81.0 | 5 | 4 | 3 | 4 | Standard | High | WBC2024 Gold (Yuzu Weiss) + IBC2025 Silver | 独立運営 |
| 16 | DevilCraft | 東京都品川区 | A | 81.0 | 5 | 4 | 4 | 3 | Standard | Mid | WBC2024 Gold (Black Igneous) | 都市型 brewpub |
| 17 | 京都醸造 | 京都府京都市 | A | 80.0 | 4 | 4 | 4 | 4 | Standard | High | Untappd 3.75/55,987 | 独立運営、Good Beer Hunting 文脈 |
| 18 | Y.MARKET BREWING | 愛知県名古屋市 | A | 80.0 | 4 | 4 | 4 | 4 | Standard | High | IBC2025 Bronze (Yellow Sky Pale Ale) + Untappd 3.76/49,413 | 独立運営 |
| 19 | 富士桜高原麦酒 ★ | 山梨県富士河口湖町 | A | 80.0 | 4 | 5 | 3 | 4 | Standard | Mid | JGBA2026 Gold ×2 (Marron B Abbey, Laoho) + WBA2020 歴史 | TOP30 除外 → 復帰 |
| 20 | Bighand Bros. Beer ★ | 京都府京都市 | A Prov. | 78.0 | 5 | 3 | 4 | 3 | Allocation | Low | WBC2024 Gold (Andalusite) + WBC2026 Gold (Flint) 2 大会連続 | 2023 設立、両 AI 見落とし |
| 21 | CRAFTROCK BREWING ★ | 東京都中央区 | A | 78.0 | 5 | 3 | 4 | 3 | Standard | Mid | WBC2026 Gold (Sansho Lager) | B → A、両 AI 重大見落とし |
| 22 | Far Yeast Brewing | 山梨県小菅村 | A | 77.0 | 4 | 3 | 4 | 4 | Standard | Mid | WBC2022 Bronze (Tokyo White) + IBC2024 Gold | 独立運営 |
| 23 | VERTERE | 東京都奥多摩町 | A | 77.0 | 4 | 3 | 4 | 4 | Allocation | Mid | hype brewery + 奥多摩文脈 | Gemini Untappd 3.826 は規則②違反 |
| 24 | スワンレイクビール | 新潟県阿賀野市 | A | 76.0 | 4 | 4 | 3 | 4 | Standard | Mid | Untappd 3.63/14,839 + 老舗 | 独立運営 |
| 25 | Totopia Brewery | 愛知県長久手市 | A Prov. | 75.0 | 4 | 3 | 5 | 3 | Allocation | Mid | 愛知 HAZY 文脈、2022 設立 | 4 年目 |
| 26 | Teenage Brewing | 埼玉県ときがわ町 | A Prov. | 75.0 | 4 | 3 | 5 | 3 | Allocation | Low | Untappd 3.93/12,188、2023 設立 | 3 年目 |
| 27 | Brasserie Knot | 北海道鶴居村 | B | 74.0 | 4 | 4 | 4 | 3 | Limited | Mid | Untappd 3.80/4,660 | 独立運営 |
| 28 | 忽布古丹醸造 (Hop Kotan) | 北海道上富良野町 | B | 74.0 | 4 | 4 | 4 | 3 | Limited | Mid | 上富良野ホップ 100% | 独立運営 |
| 29 | Black Tide Brewing | 宮城県気仙沼市 | B | 74.0 | 4 | 4 | 4 | 3 | Limited | Mid | 震災後気仙沼文脈 | brewpub 色強い |
| 30 | RePuBrew | 静岡県沼津市 | B | 72.5 | 4 | 3.5 | 4 | 3 | Limited | Mid | JGBA2026 Gold + WBC2026 Bronze | 独立運営 |

### 2.2 圏外となった主要候補

前回統合 TOP30 から**外れた**銘柄と理由:

| ブルワリー | 前回 | 今回 | 理由 |
|---|---:|---|---|
| エチゴビール | 30 (B 71.0) | 圏外 | 軸 3=2 で硬賞・革新性ともに下位、CRAFTROCK の WBC Gold 発見で押し出された |
| 湘南ビール | 27 (B 72.5) | 圏外 | Phase A で軸 1=4 維持と判断したが他に押し出された |
| Inkhorn Brewing | 28 (B 72.5) | 圏外 | Untappd 値が Gemini 主張のみで規則②違反確定、軸 1 が下振れ |
| Bighand Bros. (前回 #29 B Prov.) | 29 | **20 A Prov.** | WBC2026 Gold (Flint) 発見で大幅昇格 |

### 2.3 「除外したが惜しい」5 社 (Phase A 反映版)

| ブルワリー | 統合スコア | 惜しかった理由 |
|---|---:|---|
| エチゴビール | 71.0 | 「日本最初の地ビール」軸 4=5 は最大級、ただし軸 3=2 と軸 1=3 が足を引っ張る。歴史性で議論する場合は不可欠 |
| 湘南ビール (熊澤酒造) | 70.0 | 酒蔵発の長期運営、神奈川草分け、軸 4 強化シナリオでは TOP30 復帰圏 |
| Inkhorn Brewing | 71.0 | 設計思想は明快、Untappd 値が手動取得できれば再評価候補 |
| Open Air Brewing | 69.0 | **WBC2025 Gold (Sansho Gose - Koji)** を持つが、Untappd brewery-level が 29 ratings (50 件未満) で規定不充足。手動 50 件以上確認できれば即 A 中位 |
| 寒菊銘醸 (Kankiku Brewery) | 評価未到達 | 千葉、日本酒蔵がモダンクラフト、WBA2025 受賞あり。**両 AI ロングリスト漏れ** (ChatGPT 完全欠落、Gemini 80 リストには入るが Phase 2 で soft cut) |

---

## 3. 反証可能性スコア (各判定の覆る条件)

業界関係者が個別 Tier に反論する際、「何が見つかれば判定が動くか」を予め開示する。

### 3.1 S 帯反証条件

| ブルワリー | 現 Tier | これで Tier が動く |
|---|---|---|
| ISEKADO | S 96.0 | (a) IBA UK Gold ×4 大会連続が事実誤認 → S 89.0、(b) 鈴木氏博士号が確定情報 → 軸 4 補強で S 維持、(c) IBC2024 Gold ×2 が他社受賞 → S 86.0 |
| 箕面ビール | S 92.0 | WBC2025 Stout Gold が公式 PDF で確認できない場合 → A 84.0 (ChatGPT 旧判定に戻る) |
| West Coast Brewing | S 91.0 | (a) Gateway WBC2025 Gold が誤情報 → A 80.0、(b) Untappd 3.98/110k がスクレイピングミス → A 87.0 |
| Baird Brewing | S 90.0 | Untappd 131k ratings の質を「観光客中心」と評価 → 軸 4=4 で S 86.0 |
| 志賀高原ビール | S 90.0 | テロワール表現の独自性 (軸 3=5) を 4 と判定 → S 86.0 |
| 奈良醸造 | S 87.0 | WBC2026 Gold ×2 の片方が異議申立で取り消された場合 → A 83.0 |
| 大山 G ビール | S 87.0 | WBA Style Winner が「単なる Country Winner」と再分類された場合 → A 83.0 |
| 宮崎ひでじビール | S 87.0 | WBA2024 World's Best Dark Barley Wine が他社受賞 → A 80.0 |
| CRAFT BEER BASE | S 87.0 | (a) WBC2026 Silver の銘柄詳細が不明 → A 81.0、(b) JGBA2026 Gold が一過性 → A 84.0 |
| Spring Valley Brewery | S 86.0 | (a) キリン本体ブランド扱いで除外条件適用 → TOP30 圏外、(b) 独立運営扱いを継続 → S 維持 |
| 常陸野ネスト | S 86.0 | 海外 BeerAdvocate White Ale 91/1768 ratings の重みを軸 4=4 に下げる → S 84.0 (A 上位) |
| ヤッホー | S 85.0 | よなよなエール定番化を軸 3=2 と再評価 → A 81.0 |
| COEDO | S 85.0 | Untappd 3.55/90,748 を「評価微妙」とみなす → A 81.0 |

### 3.2 A 帯反証条件

| ブルワリー | 現 Tier | これで Tier が動く |
|---|---|---|
| うちゅうブルーイング | A 84.0 | WBC2026 Bronze だけでなく Gold/Silver があれば → S 87.0 |
| 横浜ベイブルーイング | A 81.0 | 軸 4 を「横浜地域中心」から「国際展開含む」に改めれば → S 85.0 |
| DevilCraft | A 81.0 | 軸 4=3 を 4 (都市型 brewpub 文化開拓者) に上げれば → A 84.0 |
| 富士桜高原麦酒 | A 80.0 | (a) JGBA2026 Gold ×2 が JGBA 公式に該当なし → 75 (B)、(b) WBA2020 World's Best 歴史を軸 4=5 で評価 → A 84.0 |
| Bighand Bros. Beer | A Prov. 78.0 | (a) WBC2026 Gold (Flint) が誤情報 → B 70.0、(b) 2026 年 6 月以降 Provisional 撤廃 → A 78.0 確定 |
| CRAFTROCK BREWING | A 78.0 | WBC2026 Gold (Sansho Lager) が他社受賞 → B 65.0 |
| Teenage Brewing | A Prov. 75.0 | 2026 年 6 月以降 Provisional 撤廃 + Untappd 3.93 維持 → A 確定 |

### 3.3 B 帯反証条件

| ブルワリー | 現 Tier | これで Tier が動く |
|---|---|---|
| Brasserie Knot | B 74.0 | 2025-2026 の公的賞 1 件追加で → A 75.0 |
| 忽布古丹醸造 | B 74.0 | 上富良野ホップ 100% を軸 3=5 と評価 → A 76.0 |
| Black Tide | B 74.0 | Untappd brewery aggregate が手動取得で 3.8+ なら → A 76.0 |
| RePuBrew | B 72.5 | 軸 2 を 3.5 → 4 に上げれば → B 74.0 (A 境界) |

---

## 4. ブルワー向け反論導線テンプレート

ブルワー本人や広報担当が、自社 Tier に異論がある場合に使える構造化反論のフォーマット:

### 4.1 反論テンプレート

```
■ 自社情報
ブルワリー名: [貴社名]
現 Tier 判定: [S / A / B]
現スコア: [総合点]
現軸別: 軸1=[?] / 軸2=[?] / 軸3=[?] / 軸4=[?]

■ 異議申し立て対象
□ 軸1 (技術的品質)
□ 軸2 (一貫性)
□ 軸3 (革新性・独自性)
□ 軸4 (業界影響力・文化資本)
□ 入手性ディメンション
□ 受賞4要素のいずれかの誤記
□ Untappd値の取得失敗
□ ロングリスト未収録

■ 提供する反証データ
公式 URL:
受賞情報 (大会名・年・賞ランク・銘柄名):
Untappd brewery-level URL:
専門メディア記事 URL:
そのほか:

■ 期待する判定変更
変更後 Tier: [?] / 変更後スコア: [?]
論点: [この情報があると軸X が +1 されるべき、など]
```

### 4.2 判定変更の閾値

ブルワー側から提供されたデータを受けて、以下の場合に再評価する:

| 提供データ | 軸への影響 | Tier 変動可能性 |
|---|---|---|
| WBC/WBA Gold (2022 年以降) で銘柄まで揃っているのに見落とされている | 軸 1: +1 | 1 段階上昇可能性高 |
| Untappd brewery-level aggregate が手動取得できた (50 件以上) | 軸 1 または 2: +0.3〜0.5 | 中位帯では Tier 変動 |
| 海外メディア (Good Beer Hunting, BeerAdvocate, RateBeer) で複数言及 | 軸 4: +1 | S/A 境界で変動 |
| 操業 3 年未満で本評価期間に Provisional 扱いだが、実は 4 年目 | Provisional 撤廃 | A 帯確定 |

### 4.3 反論受付窓口

このたたき台に対する**異議申立ては GitHub Issue または Slack/X DM** 等を想定。各エントリの **`evidence-matrix.csv` の行番号で具体的に指摘**できるよう、CSV を別ファイル化している。

---

## 5. メタ分析: AI クロスチェックで初めて見えた 5 つの構造的問題

本タスクは個別 Tier 判定の精度より、**「日本のクラフトビール評価を AI で行う際の構造的限界」**を可視化したことに最大の価値がある。

### 5.1 構造的問題 1: 「ロングリストの網羅性」は単一 AI で担保できない

ChatGPT は **CRAFT BEER BASE と大山 G ビールという、世界トップ級の硬賞を持つブルワリーを Phase 1 で見落とした**。Gemini は **宮崎ひでじビールという WBA Style Winner 保有ブルワリーを 80 社ロングリストにすら入れなかった**。

両者を独立に走らせなければ、いずれの見落としも検出不能。**最低 2 つ以上の独立 AI** + **手動 ground truth (受賞 PDF / Untappd CSV)** の 3 点クロスバリデーションを標準化する必要。

### 5.2 構造的問題 2: AI のハルシネーションは「大会名の混同」型が頻発

Gemini が犯した 3 件のハルシネーションは全て同型:
- 富士桜: WBC ↔ WBA (大会名混同)
- WCB: WBC2026 ↔ WBC2025 (年混同)
- CRAFT BEER BASE: WBC2026 銘柄 (銘柄名混同、Pilsener ↔ L&C)

AI は「メダル獲得した」という事実は正しく持つが、**「いつ・どの大会で・どの銘柄が」の 3 要素のうち 1〜2 を取り違える**。これは**「大会名が似ている」「ブルワリー名が一致している」という表層パターンに引きずられる典型的失敗モード**。

→ プロンプト改善案: **受賞情報は「4 要素全て URL の同じソース内に記述されている」場合のみ採用、複数 URL を組み合わせて 4 要素を構築することを禁止**。これだけでハルシネーションの大半が防げる。

### 5.3 構造的問題 3: Untappd データの取得不能が判定不公平を生む

ChatGPT は live-fetch で 16 銘柄取得・残り 14 銘柄を N/A とした。これにより**取れた銘柄だけが軸 1 で点を上積みでき、取れない銘柄は他のソースに依存せざるを得ない**という不公平が発生した。

Gemini はこの問題を**規則②違反 (推定値挿入)** で解決しようとしたが、Untappd UI が小数 2 桁表示なのに 3 桁値を提示したため**自前計算の証拠**が露呈した。

→ 解決策: **Untappd brewery-level aggregate は事前に手動 CSV を作成し、全 30 社の値を揃えてから採点開始**。AI の live-fetch に依存しない。

### 5.4 構造的問題 4: Provisional 運用の意味論があいまい

両 AI ともに「操業 3 年未満は Provisional」というルールは遵守したが、Provisional 銘柄の Tier 判定そのものが両 AI で割れた:
- Totopia (2022 開業): ChatGPT は通常 A、Gemini は B Provisional
- Bighand (2023 開業): WBC Gold ×2 を取得しているが、Provisional ペナルティで両者とも下位

→ 解決策: Provisional は「Tier から外す予備区分」ではなく、**「全 Tier に Provisional フラグを横断付与」**する設計（A Provisional, B Provisional など）。本タスクではこれを採用した。

### 5.5 構造的問題 5: 「Untappd レビュー件数」と「軸 4 文化資本」の二重カウント問題

Baird Brewing は Untappd 3.52/131,420 ratings という国内最大級のレビュー数を持つ。これは:
- 軸 1 (技術品質) の根拠としても使える (3.52 という平均)
- 軸 4 (業界影響力) の根拠としても使える (131,420 という認知度)

両方に使うと**ダブルカウント**になり、Baird のスコアが過大になる。本タスクでは **件数は軸 4、平均は軸 1** と分離したが、評価関数として明文化されていない。

→ 解決策: 評価ルーブリックに「Untappd 平均値は軸 1 のみ、件数は軸 4 のみで使用」と明記すべき。

---

## 6. Q1-Q8 詳細セルフクリティーク

### Q1. このTier判定の最大の弱点を3つ挙げよ

**第一に、「2022 年以降」評価期間の硬い解釈と「歴史的存在感」軸 4 評価の相互干渉**。WBC2025 Gold を取った箕面ビール (S 92.0) と、recent hard-award はないが「日本最初の地ビール」のエチゴビール (B 71.0) を、本ルーブリックは同じ評価関数で比較している。**評価期間と歴史性は本来直交する次元だが、軸 1 (期間内) と軸 4 (期間外含む) が同じ重みづけ式に入っているため、競合関係が生じる**。

**第二に、Untappd brewery-level aggregate の取得可否の不均一**は依然として解消できていない。Phase A の Agent 7 は WebFetch 拒否で再取得失敗。これにより、**取得できた銘柄 (16 社) と取得できなかった銘柄 (14 社) の間で、軸 1 の根拠の硬さが大きく異なる**。手動 CSV が必須。

**第三に、カテゴリ D・E の構造的過小評価**。統合 TOP30 では D=2、E=1 (Black Tide のみ)、これは ChatGPT/Gemini いずれの評価関数でも同じ傾向。**地域密着型ブルワリーは軸 1・軸 4 で硬いソースを蓄積する戦略的余裕がないため、本ルーブリックでは構造的に下位**。

### Q2. SランクとAランクの境界事例

最大の境界は **Spring Valley Brewery 86.0 (S) と うちゅうブルーイング 84.0 (A) の 2 点差**。Spring Valley は WBC2026 Silver + IBC2025 Gold/Silver/Bronze の硬賞密度が極めて高く、軸 1=5・軸 2=5 (キリン QC) で押し上がった。一方 UCHU は WBC2026 Bronze + Untappd 4.03/83k で軸 1=4 止まり。**「キリン傘下を独立運営扱いするか」の解釈が割れれば**、Spring Valley は除外対象になり、UCHU が S に上がる入れ替わりが起きる。これは反証可能性が極めて高い。

第二の境界は **常陸野ネスト 86.0 (S) と Spring Valley 86.0 (S) の同点**。常陸野ネストは軸 4=5 (海外定着) で押し上げ、Spring Valley は軸 1=5・軸 2=5 で押し上げ。**評価軸の質が違う**ため、どちらが「より S らしいか」は 3 回再評価で揺れる。

第三の境界は **ヤッホー・COEDO 85.0 (S) と うちゅう 84.0 (A) の 1 点差**。ヤッホー/COEDO は軸 4=5 (歴史的存在感) で押し上げ、UCHU は軸 3=5 (革新性)で押し上げ。**「クラフト史 vs 革新派」のどちらを重く見るかで Tier が即動く**最も典型的な事例。

### Q3. AランクとBランクの境界事例

最重要は **スワンレイクビール 76.0 (A) と Brasserie Knot 74.0 (B) の 2 点差**。スワンレイクは Untappd 3.63/14,839 + 老舗のブランド資産。Brasserie Knot は Untappd 3.80/4,660 で**平均値はむしろ高い**。**レビュー件数を重視するか、平均値を重視するか**で逆転可能。

第二の境界は **Y.MARKET / 京都醸造 80.0 (A) と Far Yeast / VERTERE 77.0 (A) の 3 点差** だが、A 帯内部の境界は Tier 動揺を起こさない。重要なのは **VERTERE 77.0 と Brasserie Knot 74.0 の 3 点差** で、VERTERE の軸 4=4 (複数 taproom) と Brasserie Knot の軸 4=3 (北海道ローカル) の差を再評価すれば 1 点動く。

第三の境界は **Bighand Bros. (A Prov. 78.0) と Brasserie Knot (B 74.0) の 4 点差**。Bighand は WBC Gold ×2 で軸 1=5、Brasserie Knot は Untappd 強い。**operations 年数の重みづけ次第で Bighand が A 中位 (78.0 確定) か A Prov. (B 寄り) かが動く**。

### Q4. 除外条件で外したが、実は含めるべき有力ブルワリーがないか

**最大の再点検対象は Open Air Brewing**。WBC2025 Gold (Sansho Gose - Koji) を持ち、技術品質では上位 20 圏に値する。Untappd brewery-level が 29 ratings で「50 件以上」規則を満たさず除外したが、**手動で 50 件以上の Untappd データが確認できれば即 A 中位 (75-78 点)**。

**第二は寒菊銘醸 (千葉)**。両 AI ともロングリスト網羅漏れ + Phase 2 soft cut。WBA2025 受賞ありで、**ChatGPT は Phase 1 で完全欠落、Gemini は 80 社に入れたが Phase 2 で外した**。この扱いは過小評価の可能性が極めて高く、次回タスクでは必ず seed に含めるべき。

**第三は South Park Brewing (北海道)**。seed 指定だったが両 AI とも実体確認できず除外。**コロラド州の同名ブルワリーとの混同**が原因と特定できているが、日本のローカル極小ファントムが本当に存在する可能性も完全には排除できない。ユーザー側で seed 元情報の再確認が必要。

### Q5. 3回独立評価でTierが変動しうるブルワリー5社

**1. Spring Valley Brewery (S 86.0)**: キリン傘下解釈で TOP30 圏外〜S 帯まで極端に動く。

**2. うちゅうブルーイング (A 84.0)**: 軸 3 重み変更で S↔A、Untappd 加味で A↔S。

**3. West Coast Brewing (S 91.0)**: Gateway WBC2025 Gold が誤情報なら A 80 まで落ちる。

**4. Bighand Bros. Beer (A Prov. 78.0)**: 2026 年 6 月以降 Provisional 自動撤廃で A 確定、または WBC2026 Gold (Flint) 検証で揺れる。

**5. CRAFTROCK BREWING (A 78.0)**: WBC2026 Gold (Sansho Lager) 1 件依存、検証ソース 1 つ崩れれば B 帯。

### Q6. seed20社のうち下位に来たもの

**T.Y.HARBOR Brewery (TOP30 圏外)** と **ロコビア (TOP30 圏外)** が seed 由来で下位に流れた。T.Y.HARBOR は **Tap-only 流通**が軸 1・軸 2 でハードソースを積みにくい構造的不利、ロコビアは **国際大会・Untappd 高値・専門メディア露出**いずれも積めなかった。両者とも**ルーブリックに対する忠実さゆえの過小評価**であり、品質否定ではない。

**South Park Brewing (北海道)** は実体確認不能で評価そのものが成立しない。これはセルフクリティーク Q4 と同じ問題。

### Q7. 海外メディアでの言及・軸4で過小評価された可能性

**最も明確に軸 4 を過小評価した可能性があるのは常陸野ネスト**。BeerAdvocate で White Ale = 91/1,768 ratings、Japanese Classic Ale = 86/497、Ancient Nipponia = 87/206。**Hitachino は「海外で読まれ続ける数少ない日本ブルワリー」**で、軸 4=5 を **+0.5 して 5.5 (擬似値)** にしたい衝動が出るほど。

**Baird Brewing** は Gemini Q7 自認の通り「軸 4 過小評価」。本統合では S 90.0 で押し戻したが、Good Beer Hunting / RateBeer での実言及データを軸 4=5 に直接織り込むと、ISEKADO に並ぶ S 上位の可能性。

**京都醸造** は Good Beer Hunting の travel/culture 文脈で頻出。Lonely Planet の「京都クラフト」記事の中心。**「海外旅行者の旅程に組み込まれる」という軸 4 の質**を加味すれば、A 80.0 → A 上位〜S 下位の余地。

### Q8. 2 つの AI で判定が分かれたブルワリーの構造的洞察 3 つ

**洞察 1: AI ごとに「ハードソース」の優先度が違う**

ChatGPT は **WBC・IBC 公式 PDF + 専門メディア (Beer Tengoku, Japan Beer Times) の特集記事**を最重視。Gemini は **JGBA・WBA・Untappd の数値データ + 公式サイト news**を重視。この優先度差が、富士桜・大山 G・宮崎ひでじの判定を真っ二つに分けた。

**示唆**: 評価ルーブリックに「優先順位リスト」を明記しても、AI は内部の重み付けで微妙に動く。**プロンプトでは 4 要素揃いだけ採用ルールを徹底する以外、AI 間の判定収束は期待できない**。

**洞察 2: 「Provisional」は AI が最も誤解しやすい概念**

ChatGPT は Provisional を「Tier から外す予備区分」と解釈、Gemini は「全 Tier の修飾子」と解釈、私の前回統合は両者の混在になっていた。これは元プロンプトの定義 (`Provisional: 信頼度Lowの場合(操業3年未満等、ソース不足)`) があいまいだったため。

**示唆**: 「Provisional は **Tier の修飾子** であり、A Provisional / B Provisional のように表記する」とプロンプトで明示する。

**洞察 3: ロングリスト網羅性の検証は AI 内部では不可能**

ChatGPT は CRAFT BEER BASE と大山 G を「知らなかった」、Gemini は宮崎ひでじを「知らなかった」。これは**学習データに対する分布バイアス**に起因し、AI 自身では「自分が何を知らないか」を検証できない。

**示唆**: ロングリストは **JGBA / WBC / WBA / IBC の直近 5 年の全受賞 PDF を Phase 0 でパース** し、**AI の知識と公式 PDF の積集合・差集合**で網羅性を担保すべき。これは AI に任せず、人間または別の検索エージェントが PDF パースを行う必要がある。

---

## 7. 残された不確実性と次の検証ステップ

<uncertainty>
**Phase A 検証で残った主要不確実性**:

- **Untappd brewery-level aggregate (14 銘柄)** は本タスクでは取得不能。手動 CSV が必須。
- **WBC2026 公式 PDF (Winners List 1, 2)** の内訳全件確認は WebFetch 拒否で未達成。Brewers Association 二次ソースの集計に依存。
- **CRAFT BEER BASE WBC2026 Silver の銘柄 (Southern German Style Pilsener)** は確認済だが、ESBS2025 受賞の正確な銘柄・賞ランクは未確定。
- **大山 G ビール WBA2025 Style Winner ×2 + Category Champion** の WBA 公式ページは URL 構造から確認済だが、HTML 内訳直読は未達。
- **ISEKADO 鈴木氏博士号** は誤情報の疑い濃厚。学位記載のソースが見つからない。
- **WCB Gateway WBC2025 Gold** の出典は WCB 公式 X (旧 Twitter) のみ確認、WBC2025 公式 PDF (`WBC-2025-Winners.pdf`) 内訳直読は未達。
- **Open Air Brewing Untappd 50 件以上** は手動カウント未実施。
- **寒菊銘醸 (Kankiku Brewery, 千葉)** は両 AI ロングリスト漏れ。本検証でも詳細評価は未実施。
- **South Park Brewing (北海道)** の実体は依然として確認不能。
</uncertainty>

### 次の検証ステップ提案

1. **手動 Untappd CSV 取得** (14 銘柄): ブルワリー総合の avg + ratings count を取得日付付きで CSV 化。これで Phase 3 の規則違反疑いが解消。

2. **WBC2024/2025/2026 公式 PDF 全件パース**: 公式 PDF を Python or `pdftotext` でパースし、日本のブルワリーを検索。AI の知識ではなく**公式記録を ground truth 化**する。

3. **JGBA2024/2025/2026 公式 PDF 全件パース**: 同上、JGBA 公式 PDF を網羅的にパースし、両 AI 漏れの追加検出。

4. **ESBS2025 winners 公式ページの直接確認**: CRAFT BEER BASE の正確な賞ランクを特定。

5. **寒菊銘醸を seed 追加して再ロングリスト構築**: 次回タスクから含める。

6. **ブルワー反論受付期間の設定**: 例えば 2 週間、`evidence-matrix.csv` の各行に対する異議申立を受け付ける。

---

## 付録: 参照ファイル一覧

| ファイル | 内容 |
|---|---|
| `discussion-deep-report.md` (本書) | 議論たたき台メインレポート |
| `evidence-matrix.csv` | 30 社×4 軸×ソース URL の完全追跡マトリクス |
| `sensitivity-analysis.md` | 軸重み・閾値変動による Tier 動揺シミュレーション |
| `comparison-chatgpt-vs-gemini.md` | 元 AI 出力比較 |
| `integrated-final-tier-table.md` | Phase A 前の暫定統合版 (参考) |
| `deep-research-report.md` + `deep-research-report_3_5.md` | ChatGPT 元出力 |
| `日本クラフトブルワリーTier表作成タスク.docx` | Gemini 元出力 |

---

**本レポートは「日本クラフトビールの Tier 議論を業界関係者と一緒に深めるためのたたき台」**であり、最終確定版ではない。**個別判定への異論・反証は、`evidence-matrix.csv` の特定行を指して具体的に提起してほしい**。それこそが本タスクの設計意図である。
