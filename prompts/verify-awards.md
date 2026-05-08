# Claude Code 並列検証プロンプト — 受賞反映用

このファイルは、コンペ結果発表後に `data/breweries.json` を更新する際に、Claude Code (CLI) で起動するプロンプトのテンプレートです。

---

## 使い方

1. このリポジトリのローカルクローンで Claude Code を起動: `cd japan-craftbeer-tier50 && claude`
2. このファイル全体をプロンプトとして貼り付け
3. `<<EVENT>>` `<<YEAR>>` を実際の値で置換
4. Claude が並列サブエージェントで独立検証 → JSON Patch を提案

---

## プロンプト本文

```
あなたはクラフトビール業界の Tier 評価を担当する分析者です。
このリポジトリの data/breweries.json を更新するために、以下の手順で受賞情報を反映してください。

## 対象イベント
- 大会名: <<EVENT>>
- 年: <<YEAR>>
- 公式 URL:
  - <<URL_1>>
  - <<URL_2>>

## アンチハルシネーション規則 (元プロンプト準拠)

1. 受賞は「**大会名・年・賞ランク・銘柄名**」の 4 要素全てが揃った場合のみ採用
2. 1 要素でも欠けたものは記載禁止
3. 推定値・近似値の挿入禁止 (Untappd 等の数値が live-fetch できなければ N/A)
4. 不明な情報は「不明」と明記
5. 矛盾する場合は <uncertainty> タグで明示
6. ソースの優先度: 国際コンペ > 国内コンペ > Untappd (50 件以上) > 専門メディア > 公式 > ブログ・SNS

## 並列検証の指示

WebFetch / WebSearch を活用し、以下を並列サブエージェント (4-8 並列) で独立検証:

- Agent 1: 公式 PDF Winners List の日本ブルワリー全件抽出
- Agent 2: 二次集計 (Rihobeer, Brewers Association 等) のクロスチェック
- Agent 3: 各受賞ブルワリーが既存 data/breweries.json に存在するか照合
- Agent 4: 未収録ブルワリーの基本情報 (所在地・代表銘柄・操業年) を補強
- Agent 5+ (任意): 個別受賞銘柄の Untappd brewery aggregate 取得試行

各エージェントは「他のエージェントの結論を見ない」ルールで独立検証。

## 出力形式

以下の 3 つを順に提示:

### 1. 抽出した受賞リスト

| ブルワリー | 大会名 | 年 | 賞ランク | 銘柄名 | ソース URL |
|---|---|---|---|---|---|

### 2. data/breweries.json への変更案 (JSON Patch 形式)

```json
[
  {
    "op": "add",
    "path": "/breweries/N/evidences/-",
    "value": {
      "axis": 1,
      "type": "WBC Gold",
      "detail": "...",
      "url": "...",
      "priority": 1,
      "verified": true,
      "conf": "High"
    }
  },
  {
    "op": "replace",
    "path": "/breweries/N/axis/1",
    "value": 5
  },
  {
    "op": "replace",
    "path": "/breweries/N/score",
    "value": 92.0
  }
]
```

### 3. Tier 動揺予測

| ブルワリー | Before | After | 根拠 |
|---|---|---|---|

### 4. 不確実性 (<uncertainty> タグ)

- 取得できなかった情報
- 矛盾するソース
- 4 要素揃わなかった受賞

## ChangeReason テンプレート

判定が動いたブルワリーには `changed: true`, `changeReason: "..."` を設定。
書き方は中立に: 「Web 再検証で〇〇受賞を確認」「××により S 帯へ昇格」等。
AI のメタ情報 (ハルシネーション/見落とし等) は記述しないこと。

## 完了後

更新された data/breweries.json と CHANGELOG エントリ案を提示してください。
```

---

## 補足: Tier 計算の早見表

| 軸スコア (技術的品質 / 一貫性 / 革新性 / 業界影響力) | 統合点 |
|---|---:|
| 5 / 5 / 5 / 5 | 100.0 |
| 5 / 4 / 4 / 4 | 87.0 |
| 4 / 4 / 4 / 4 | 80.0 |
| 4 / 4 / 4 / 3 | 77.0 |
| 4 / 3 / 4 / 3 | 71.0 |
| 3 / 3 / 3 / 3 | 60.0 |

式: `(axis.1 × 0.35 + axis.2 × 0.15 + axis.3 × 0.20 + axis.4 × 0.30) × 20`

## Tier 閾値

- S: 85 点以上
- A: 75〜84
- B: 65〜74
- C: 55〜64
- D: 55 未満
- Provisional: 信頼度 Low / 操業 3 年未満
