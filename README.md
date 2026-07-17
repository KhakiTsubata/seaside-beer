# SeasideBeer website

松山発のAI教育・AI導入支援プロジェクト「SeasideBeer」の公式サイトです。

## 更新方法

- 通常のページは `src/pages/` にあります。
- ブログ・事例・考察記事は `src/content/insights/` にMarkdownで追加します。
- 色、書体、余白、共通UIは `src/styles/global.css` にまとめています。
- SNS共有画像とアプリアイコンは `npm run brand:assets` で同じデザインから再生成できます。
- 公開前に `npm run build` を実行します。
- `main`への反映でVercelの本番サイトが更新されます。

サイト運用をCodexへ依頼する場合は、記事の「テーマ」「誰に読んでほしいか」「公開してよい事実」の3点を伝えれば更新できます。原稿、ページ追加、表示確認、公開前ビルドまで同じ流れで行います。

本番へ直接反映せず、通常は作業ブランチ → Vercel確認用URL → 内容確認 → `main`へ反映、の順で進めます。

記事ファイルには、タイトル、概要、公開日、分類、想定読者を先頭に記載します。`draft: true`にすると、ファイルを残したままサイトには公開されません。

## ローカル確認

```sh
npm install
npm run dev
```

問い合わせフォームはVercel Functionsの `/api/contact` を通して送信します。VercelのProductionとPreviewに `WEB3FORMS_ACCESS_KEY` を設定してください。キーをリポジトリや公開HTMLへ書かないでください。

## 公開前に確認するもの

- 会社名・大学名・人物名・実績の公開許可
- 料金、日程、募集状況など変化する情報
- 問い合わせフォームの受信
- PCとスマートフォンの表示
