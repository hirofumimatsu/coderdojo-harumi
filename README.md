# CoderDojo HARUMI Website

CoderDojo HARUMIの公式ウェブサイトです。子供向けプログラミングクラブの活動内容、参加方法、活動報告などを紹介しています。

## 🌟 特徴

- **親しみやすいデザイン**: 子供たちにとって親しみやすく、わかりやすいUI/UX
- **レスポンシブ対応**: スマートフォン、タブレット、PCに対応
- **Ghost CMS連携**: ブログ記事の管理が簡単
- **モダンな技術**: HTML5, CSS3, Vanilla JavaScript使用

## 📁 ファイル構成

```
CoderDojo-HARUMI/
├── index.html              # ホームページ
├── activities.html         # 活動内容
├── join.html              # 参加方法
├── blog.html              # 活動報告（ブログ一覧）
├── blog-post.html         # 記事詳細ページ
├── contact.html           # お問い合わせ
├── styles/
│   └── main.css          # メインスタイル
├── js/
│   └── ghost-integration.js  # Ghost CMS連携
└── README.md             # このファイル
```

## 🚀 セットアップ手順

### 1. 基本セットアップ
1. このディレクトリをWebサーバーにデプロイ
2. ブラウザで `index.html` にアクセス

### 2. Ghost CMS連携（ブログ機能）

#### Step 1: Ghostサイトの作成
1. [Ghost.org](https://ghost.org) でアカウント作成
2. 新しいサイトを作成（無料プランでOK）
3. サイトのURLをメモ（例: `https://your-site.ghost.io`）

#### Step 2: Content API設定
1. Ghost管理画面 → Settings → Integrations
2. 「Add custom integration」をクリック
3. 名前を「CoderDojo HARUMI Website」に設定
4. Content APIキーをコピー

#### Step 3: 連携設定
`js/ghost-integration.js` の設定を更新:

```javascript
const GHOST_CONFIG = {
    url: 'https://your-ghost-site.ghost.io', // 実際のURLに変更
    key: 'your-content-api-key'              // 実際のAPIキーに変更
};
```

#### Step 4: タグ設定（推奨）
Ghost管理画面でブログ記事に以下のタグを設定すると、適切なカテゴリ表示されます：

- `activity` → 活動報告
- `works` → 作品紹介  
- `event` → イベント
- `news` → お知らせ
- `volunteer` → ボランティア

## 💡 カスタマイズ

### 色の変更
`styles/main.css` のCSS変数を編集:
```css
:root {
    --primary-color: #4f46e5;    /* メインカラー */
    --secondary-color: #7c3aed;  /* セカンダリカラー */
    --accent-color: #ff6b6b;     /* アクセントカラー */
}
```

### コンテンツの編集
各HTMLファイルのテキストを直接編集して、組織の情報に合わせてカスタマイズしてください。

## 📝 ブログ運用のヒント

1. **記事作成**: Ghost管理画面で記事を作成・公開
2. **画像**: 記事にFeature Imageを設定すると、一覧で表示される
3. **タグ付け**: 適切なタグを設定してカテゴリ分け
4. **公開設定**: 記事の公開/非公開はGhost側で管理

## 🔧 トラブルシューティング

### ブログが表示されない場合
1. ブラウザの開発者ツールでエラーを確認
2. Ghost CMSのURLとAPIキーが正しく設定されているか確認
3. CORSエラーが出る場合は、Ghost側でドメインを許可

### モバイル表示の問題
- CSS Grid/Flexboxのブラウザ互換性を確認
- viewport設定を確認

## 🌐 デプロイ

### GitHub Pages
1. GitHubリポジトリにアップロード
2. Settings → Pages → Source をmainブランチに設定

### Netlify
1. [Netlify](https://netlify.com) にフォルダをドラッグ&ドロップ
2. 自動的にURLが生成される

### 独自ドメイン
1. DNSの設定で A record または CNAME record を設定
2. SSL証明書を設定（Let's Encrypt推奨）

## 📞 サポート

ウェブサイトに関する技術的な質問や問題がありましたら、以下までご連絡ください：

- Email: coderdojo.harumi@example.com
- LINE: @coderdojo-harumi

---

## 🎯 今後の改善予定

- [ ] 検索機能の追加
- [ ] 多言語対応（英語）
- [ ] PWA対応
- [ ] 画像最適化
- [ ] アクセス解析の追加

CoderDojo HARUMIで素晴らしいプログラミング体験を！🚀