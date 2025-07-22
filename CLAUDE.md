# CoderDojo HARUMI Website - 開発ガイド

## プロジェクト概要
CoderDojo HARUMIの公式ウェブサイト。海をテーマにしたデザインで、子供向けプログラミング教育の情報を提供。

## CSS設計方針

### 色彩テーマ - Ocean Colors
- **Primary**: `#06b6d4` (cyan-500)
- **Secondary**: `#0891b2` (cyan-600) 
- **Accent**: `#0284c7` (sky-600)
- **Dark**: `#155e75` (cyan-800)
- **Text**: `#64748b` (slate-500)

### レイアウトクラス

#### Container
- `.container`: 通常のコンテナ (max-width: 1200px, 中央揃え)
- `.container--full-width`: 全幅コンテナ (ホームページ用)

#### ヒーローセクション
- `.hero`: ホームページ専用ヒーロー
- `.page-hero`: サブページ用ヒーロー
- 共通の波装飾と海テーマグラデーション

### デザインシステム

#### 波装飾パターン
```css
background: url("data:image/svg+xml,%3Csvg...")
```
全ヒーローセクションの下部に統一された波装飾

#### グラデーション
```css
radial-gradient(circle at 25% 15%, rgba(6, 182, 212, 0.20) 0%, transparent 50%),
linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)
```

## ファイル構成

### 主要ページ（今後の変更対象）
- `index.html`: ホームページ (特別なスタイリング)
- `activities.html`: 活動内容一覧
- `join.html`: 参加方法
- `contact.html`: お問い合わせ
- `blog.html`: 活動報告

### 詳細ページ（メンテナンス対象外）
- `scratch.html`: Scratchプログラミング詳細
- `mbot2.html`: mBot2ロボット詳細
- `embot.html`: embotダンボールロボット詳細
- `web-programming.html`: Webプログラミング詳細
- `ai-programming.html`: AIプログラミング詳細
- `creative-programming.html`: クリエイティブプログラミング詳細
- `blog-post.html`: 記事詳細ページ

### 共通コンポーネント
- `components/header.html`: 共通ヘッダーコンポーネント
- `components/footer.html`: 共通フッターコンポーネント

### CSS
- `styles/main.css`: メインスタイルシート

### JavaScript
- `js/components.js`: 共通コンポーネント読み込みシステム
- `js/main.js`: ターミナルタイピングアニメーション、モバイルメニュー

## 保守作業のガイドライン

**重要**: 今後の変更は主要5ページ（index.html, activities.html, join.html, contact.html, blog.html）のみを対象とする。詳細ページは現状維持。

### 共通コンポーネントシステム
主要5ページは共通コンポーネントシステムを採用：
1. **ヘッダ**: `components/header.html` で統一管理
2. **フッタ**: `components/footer.html` で統一管理  
3. **読み込み**: `js/components.js` で自動読み込み
4. **一元管理**: コンポーネントファイルの修正で全ページ反映

### 統一ページ構成
全主要ページで同一の構成を採用：
```html
<body>
    <div id="header-placeholder"></div>
    <main class="main">
        <section class="page-hero">
            <div class="container container--full-width">
                <!-- ページ固有のヒーローコンテンツ -->
            </div>
        </section>
        <!-- その他のセクション：全て container--full-width を使用 -->
    </main>
    <div id="footer-placeholder"></div>
</body>
```

### 主要ページの変更方針
1. **ヘッダ・フッタの変更**: `js/components.js` で一元管理
2. **個別ページ**: `<main>` タグ内のコンテンツのみ編集
3. **コンテナクラス**: 全て `container container--full-width` で統一
4. デザイン統一性の完全保証

### スタイル統一
- **全主要ページ**: `container--full-width` クラスで統一
- **レスポンシブ**: 一貫したパディング・レイアウト
- **ヘッダ**: 全ページで同一の見え方を保証
- 海テーマの色を維持
- レスポンシブ対応を確認

### CSS統一アーキテクチャ
- **一元管理**: 全スタイルを `styles/main.css` に統一
- **インラインCSS禁止**: 個別ページでの `<style>` タグ使用禁止
- **共通コンポーネント**: ヘッダ・フッタは `js/components.js` で管理
- **統一クラス**: 全ページで `container--full-width` 使用

### パフォーマンス
- CSS versioning: `?v=20250122q`
- 画像最適化推奨
- キャッシュ設定: netlify.toml参照

## トラブルシューティング

### 幅の問題
- ホームページ: `.container--full-width` クラス使用
- サブページ: `.container` クラス使用

### タイピングエフェクト
- `js/main.js`のTypingEffectクラス
- HTML構造: `.code-terminal > .code-block > .typing-text`

## デプロイ
- Netlify自動デプロイ
- キャッシュ期間: 300秒 (netlify.toml)