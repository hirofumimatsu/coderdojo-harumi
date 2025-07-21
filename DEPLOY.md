# CoderDojo HARUMI Website - Netlify デプロイガイド

## 🚀 Netlify デプロイ手順

### Step 1: Netlifyアカウント作成
1. [netlify.com](https://netlify.com) にアクセス
2. 「Sign up」をクリック
3. GitHub、Google、またはメールでアカウント作成

### Step 2: サイトファイルの準備
必要なファイルを確認：
```
CoderDojo-HARUMI/
├── index.html           ✅ メインページ
├── activities.html      ✅ 活動内容
├── join.html           ✅ 参加方法
├── blog.html           ✅ ブログ一覧
├── blog-post.html      ✅ 記事詳細
├── contact.html        ✅ お問い合わせ
├── styles/
│   └── main.css        ✅ スタイル
├── js/
│   └── ghost-integration.js ✅ Ghost連携
└── README.md           ✅ 説明書
```

### Step 3: デプロイ方法

#### 方法A: ドラッグ&ドロップ（推奨）
1. Netlify にログイン
2. 「Sites」タブを選択
3. プロジェクトフォルダ全体をドラッグ&ドロップ
4. 自動的にビルド＆デプロイ開始
5. 完了すると `https://ランダム名.netlify.app` のURLが生成

#### 方法B: GitHub連携（自動更新）
1. GitHubにリポジトリ作成
2. ファイルをpush
3. Netlify で「New site from Git」
4. GitHubリポジトリを選択
5. 以降、GitHubにpushすると自動デプロイ

### Step 4: サイト名の変更
1. Site settings → Site details
2. 「Change site name」で任意の名前に変更
   - 例：`coderdojo-harumi.netlify.app`

### Step 5: 独自ドメインの設定（オプション）
1. Domain settings → Add custom domain
2. 独自ドメインを入力
3. DNS設定を指示に従って変更

## 🔧 Netlify設定ファイル

### netlify.toml（オプション）
```toml
[build]
  publish = "."
  
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"

[[redirects]]
  from = "/blog/*"
  to = "/blog.html"
  status = 200

[context.production.environment]
  HUGO_VERSION = "0.75.1"
```

## 🌐 Ghost CMS連携の設定

デプロイ後にGhost CMSの設定を更新：

1. Ghost管理画面 → Settings → Integrations
2. Content APIの「Allowed origins」に追加：
   ```
   https://your-site-name.netlify.app
   ```

3. `js/ghost-integration.js` の GHOST_CONFIG を更新：
   ```javascript
   const GHOST_CONFIG = {
       url: 'https://your-ghost-site.ghost.io',
       key: 'your-content-api-key'
   };
   ```

## ✅ デプロイ後のチェックリスト

- [ ] 全ページが正常に表示される
- [ ] モバイル表示が適切
- [ ] Ghost CMSからブログ記事が取得できる
- [ ] お問い合わせフォームが動作する
- [ ] SSL証明書が有効（https://）
- [ ] SEO設定（meta tags）

## 🔍 トラブルシューティング

### よくある問題

**1. 404エラーが出る**
- ファイル名の大文字小文字を確認
- パスの記述ミスをチェック

**2. Ghost APIが動かない**
- CORS設定を確認
- APIキーが正しいか確認

**3. CSS/JSが読み込まれない**
- 相対パスが正しいか確認
- ファイル構造を確認

**4. フォームが送信されない**
- Netlify Formsの設定追加が必要
- HTMLフォームに `netlify` 属性を追加

## 💡 Netlifyの便利機能

### フォーム機能
HTMLフォームに `netlify` を追加：
```html
<form netlify>
  <!-- フォーム内容 -->
</form>
```

### 分析機能
- アクセス数の確認
- 訪問者の地域分析
- パフォーマンス監視

### 継続的デプロイ
- GitHubにpushで自動更新
- プレビューデプロイ機能
- ロールバック機能

## 🎯 完成予定URL例
```
メインサイト: https://coderdojo-harumi.netlify.app
ホーム: https://coderdojo-harumi.netlify.app/
活動内容: https://coderdojo-harumi.netlify.app/activities.html
参加方法: https://coderdojo-harumi.netlify.app/join.html
ブログ: https://coderdojo-harumi.netlify.app/blog.html
お問い合わせ: https://coderdojo-harumi.netlify.app/contact.html
```

## 🚀 次のステップ

1. サイトデプロイ
2. Ghost CMS設定
3. 独自ドメイン取得（オプション）
4. Google Analytics設定（オプション）
5. SEO最適化

頑張って素晴らしいサイトを公開しましょう！🎉