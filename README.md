# 日本クラフトブルワリー TOP50 統合 Tier ダッシュボード

[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?logo=github)](https://takeru-watanabee.github.io/japan-craftbeer-tier50/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

ChatGPT GPT-5 / Gemini 3 Pro の Deep Research 出力を統合し、Web 一次情報の追加検証で更新した、**日本のクラフトブルワリー TOP50 の Tier 表** をインタラクティブに探索できるダッシュボードです。

業界関係者・ブルワー本人・玄人愛好家が **個別判定に対して具体的に反論できる粒度** を狙った成果物で、バズ用ビジュアルではなく、反証可能性の最大化を設計目標としています。

## 🚀 Live Dashboard

→ **<https://takeru-watanabee.github.io/japan-craftbeer-tier50/>**

## 📁 ファイル一覧

| ファイル | 内容 |
|---|---|
| `index.html` | メインダッシュボード (`data/breweries.json` を fetch) |
| **`data/breweries.json`** | **50 社の評価データ (canonical source、更新時はここを編集)** |
| `discussion-deep-report.md` | 議論たたき台レポート (反証条件 / ブルワー反論導線 / セルフクリティーク) |
| `evidence-matrix.csv` | 30 社×4 評価項目×ソース URL の完全追跡マトリクス (200 行) |
| `sensitivity-analysis.md` | 評価項目重み・閾値変動による Tier 動揺シミュレーション |
| `comparison-chatgpt-vs-gemini.md` | 元 AI 出力比較 (ChatGPT vs Gemini) |
| `integrated-final-tier-table.md` | Phase A 検証前の暫定統合版 (参考) |

## 🔄 データ更新方法

評価データは **`data/breweries.json`** に分離されています。HTML はこの JSON を fetch するだけなので、データ更新時に `index.html` を触る必要はありません。

```json
{
  "version": "1.0.0",
  "lastUpdated": "2026-05-08",
  "evaluationPeriod": "2025-05〜2026-05",
  "breweries": [
    {
      "rank": 1,
      "name": "ISEKADO (伊勢角屋麦酒)",
      "location": "三重県伊勢市",
      "tier": "S",
      "score": 96.0,
      "axis": { "1": 5, "2": 5, "3": 4, "4": 5 },
      "coords": [136.7104, 34.4869],
      "evidences": [
        { "axis": 1, "type": "WBC Gold", "detail": "...", "url": "..." }
      ],
      ...
    }
  ]
}
```

### 更新ワークフロー (推奨)

| 時期 | トリガー | 対応 |
|---|---|---|
| 4 月末 | World Beer Cup 結果発表 | S 帯入れ替え検討、`evidences` 追加 |
| 3 月末 | Japan Great Beer Awards 発表 | A/B 帯補強 |
| 8〜10 月 | World Beer Awards 各ラウンド | 段階的に上位帯候補が判明 |
| 6 月 | Provisional 自動降格チェック | 操業 3 年経過銘柄を通常 Tier に |

### ローカルでの動作確認

ブラウザの `file://` 直開きでは fetch がブロックされるため、ローカル確認時はサーバ起動が必要です:

```bash
cd japan-craftbeer-tier50
python3 -m http.server 8000
# → http://localhost:8000/ をブラウザで開く
```

または公開版 <https://takeru-watanabee.github.io/japan-craftbeer-tier50/> をそのまま参照してください。

## 📊 ダッシュボード機能

- **3 ビュー切替**: 📋 テーブル / 📊 散布図 (技術 × 影響力) / 🗾 地図 (MapLibre GL JS)
- **感度スライダー**: 4 評価項目の重みと Tier 閾値をリアルタイム再計算
- **マルチフィルタ**: Tier / カテゴリ / 入手性 を組合せ
- **詳細ドロワー**: 4 項目レーダーチャート + 全エビデンス URL + 反証条件 + ブルワー反論テンプレート
- **ピン留め比較**: 最大 4 社の 4 項目レーダーをオーバーレイ
- **CSV エクスポート**: 現在のフィルタ・スライダー設定で出力
- **スマホ対応**: タブレット〜SP まで完全対応 (タップターゲット 44px+)

## 🧮 評価方法 (要約)

総合スコア = (**技術的品質** × 0.35 + **一貫性** × 0.15 + **革新性・独自性** × 0.20 + **業界影響力・文化資本** × 0.30) × 20

各項目 5 点満点 → 100 点換算。Tier 閾値は **S ≥ 85 / A 75–84 / B 65–74 / C 55–64 / D < 55**。操業 3 年未満等で信頼度 Low の場合は **Provisional**。

詳細なルーブリック (各項目の 1–5 段階定義) はダッシュボード起動時に自動展開される「📖 評価基準・ルーブリック」パネル、または `discussion-deep-report.md` を参照。

## 🔍 ソース優先度

1. **国際ビアコンペ受賞歴** (WBC, European Beer Star, Brussels Beer Challenge, Australian International 等、2022 年以降)
2. **国内ビアコンペ** (IBC, JGBA, JBC 等、2022 年以降)
3. **Untappd 平均スコア・レビュー数** (50 件以上のみ採用)
4. **専門メディア** (Beer Tengoku, Japan Beer Times, Good Beer Hunting, RateBeer 等)
5. **ブルワリー公式サイト** (一次情報)
6. **個人ブログ・SNS** (補助、単独根拠としない)

受賞は「**大会名・年・賞ランク・銘柄名**」の **4 要素全て揃う場合のみ** 採用。

## 💬 異論・反証歓迎

各ブルワリーの詳細ドロワー内に **「ブルワー反論テンプレート」** を実装しています。Tier 判定に異論がある場合、以下のいずれかでお知らせください:

- [GitHub Issues](https://github.com/takeru-watanabee/japan-craftbeer-tier50/issues) を立てる
- `evidence-matrix.csv` の該当行番号を指して具体的に指摘
- 公式 URL や受賞情報 (4 要素揃い) を提供

## 🛠️ 技術スタック

- **HTML / Vanilla JavaScript** (ビルドなし、単一ファイル)
- **Chart.js v4.4** (レーダー / 散布図)
- **MapLibre GL JS v4.7** (Mapbox GL JS の OSS フォーク、WebGL マップ)
- **CARTO Voyager basemap** (無料、API キー不要)

## ⚠️ 制約・限界

- **評価期間**: 2026 年 5 月時点で市場流通している定番＋直近 1 年 (2025-05〜2026-05) の限定品が対象
- **Untappd 取得**: brewery-level aggregate が live-fetch できなかった銘柄は N/A
- **WBC 開催**: 2023 年から年次開催に変更 (それ以前は隔年)
- **Provisional**: 操業 3 年未満は信頼度 Low、2026 年 6 月以降に再評価で Tier が動く可能性あり

## 📜 License

MIT License — 商用・非商用問わず自由に利用可能。データ・分析・引用元 URL は Web 上の一次情報に依拠しており、各ソースの利用規約も併せて確認してください。

## 🙏 Acknowledgments

- ChatGPT GPT-5 / Gemini 3 Pro の Deep Research 機能
- 評価対象 50 ブルワリーと、その公式サイト / SNS / ニュースリリース
- World Beer Cup, World Beer Awards, Japan Great Beer Awards, International Beer Cup の公式記録
- Beer Tengoku, Japan Beer Times, Good Beer Hunting, BeerAdvocate, Untappd の継続的なクラフトビールジャーナリズム
