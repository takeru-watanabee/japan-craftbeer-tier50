---
name: 📅 四半期データ更新
about: コンペ結果反映や Provisional 銘柄再分類など、定期データ更新タスク
title: "[Update] YYYY-MM データ更新"
labels: ["update", "data"]
assignees: takeru-watanabee
---

## 🎯 更新トリガー

<!-- どれが該当しますか? -->
- [ ] WBC (World Beer Cup) — 例年 4 月末発表
- [ ] JGBA (Japan Great Beer Awards) — 例年 3 月末発表
- [ ] WBA Country Winner — 例年 8〜9 月発表
- [ ] WBA Style Winner / World's Best — 例年 10〜11 月発表
- [ ] IBC (International Beer Cup) — 例年 9 月発表
- [ ] Provisional 銘柄の操業 3 年経過チェック (毎年 6 月)
- [ ] 個別ブルワリーからの異論反映
- [ ] その他: 

## 📚 確認するソース URL

<!-- 該当するものをチェック -->
- [ ] WBC Winners: https://www.worldbeercup.org/winners/award-winners/
- [ ] JGBA 入賞一覧 (場所順): https://www.beertaster.org/medal/jgbaYYYY_award_location.pdf
- [ ] JGBA 入賞一覧 (スタイル順): https://www.beertaster.org/medal/jgbaYYYY_award_beerstyle.pdf
- [ ] WBA Winners: https://www.worldbeerawards.com/winner-beer/beer/YYYY/
- [ ] IBC Winners: https://www.beertaster.org/medal/ibcYYYY_award.pdf
- [ ] Rihobeer Japan 集計: https://rihobeer.com/world-beer-cup-YYYY-japan-breweries/
- [ ] Brewers Association: https://www.brewersassociation.org/
- [ ] Japan Beer Times: https://www.japanbeertimes.com/

## 🛠️ 作業手順

1. 上記 URL から日本ブルワリーの全受賞 (Gold/Silver/Bronze + Country/Style/World's Best) を抽出
2. 該当ブルワリーの `data/breweries.json` の `evidences` 配列に新規受賞を **4 要素 (大会名・年・賞ランク・銘柄名) 揃えて** 追加
3. 必要に応じて `axis` (各評価項目スコア) を再計算
4. `score` を再計算 — 式: `(axis.1×0.35 + axis.2×0.15 + axis.3×0.20 + axis.4×0.30) × 20`
5. `lastUpdated` を本日に更新
6. **未収録ブルワリーの発見**: 受賞 PDF に `data/breweries.json` 未掲載のブルワリーが出現したら新規追加検討 (Phase A 検証同様の品質で)
7. PR を作成 → Pages 自動更新

## 🤖 Claude Code 並列検証 (推奨)

`prompts/verify-awards.md` を参照し、以下の形でサブエージェント並列検証を起動:

```
prompts/verify-awards.md の内容で、{大会名}{年} の日本ブルワリー受賞を独立検証してください。

検証対象:
- 上記 URL リスト
- 日本ブルワリーの全受賞 (4 要素揃いのみ採用)
- data/breweries.json への JSON Patch 形式で出力

並列度: 4-8 サブエージェント
```

## ✅ チェックリスト

- [ ] 日本ブルワリーの全受賞をリストアップ
- [ ] 新規 Gold は対象ブルワリーの **技術的品質=5 への昇格** を検討
- [ ] 新規 Country Winner / Style Winner / World's Best は別格扱いで再評価
- [ ] **`data/breweries.json` の `lastUpdated` フィールドを更新**
- [ ] JSON validity チェック: `python3 -m json.tool data/breweries.json > /dev/null`
- [ ] ローカル動作確認: `python3 -m http.server 8000` で開いて 50 件表示
- [ ] PR 作成 (タイトル: `[Update] YYYY-MM 月次更新`)
- [ ] レビュー後 main にマージ
- [ ] Pages デプロイ完了確認 (https://takeru-watanabee.github.io/japan-craftbeer-tier50/)
- [ ] CHANGELOG.md または README に変更概要を追記 (任意)

## 📊 影響予測

<!-- このアップデートでどのブルワリーの Tier が動く可能性があるか? -->
- 

## 関連 Issue / PR

<!-- 関連する過去の Issue / PR があればリンク -->
-
