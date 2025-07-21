# CoderDojo HARUMI Website - 開発ガイド

## 🐳 DevContainer を使用した開発

### 前提条件
- Docker Desktop
- Visual Studio Code
- Dev Containers 拡張機能

### 開発環境の起動

1. **VS Code でプロジェクトを開く**
   ```bash
   code .
   ```

2. **DevContainer で再度開く**
   - Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - "Dev Containers: Reopen in Container" を選択
   - 初回は環境構築に数分かかります

3. **開発サーバー起動**
   ```bash
   npm run dev
   ```
   → http://localhost:3000 でサイトを確認

### 🛠️ 開発用コマンド

```bash
# Live Server で開発サーバー起動（リアルタイム更新）
npm run dev

# コードの自動整形
npm run format

# JavaScript の構文チェック
npm run lint

# Python HTTP サーバーでの起動
npm run serve
```

### 🔧 VS Code の便利機能

#### Live Server
- HTMLファイル上で右クリック → "Open with Live Server"
- ファイル保存時に自動的にブラウザが更新される

#### デバッグ機能
- `F5` でChrome デバッガー起動
- ブレークポイント設定でJavaScript をステップ実行
- Console でリアルタイムデバッグ

#### 拡張機能
- **Live Server**: リアルタイム更新
- **Prettier**: コード自動整形
- **ESLint**: JavaScript 構文チェック
- **Auto Rename Tag**: HTMLタグの自動リネーム
- **CSS Peek**: CSSクラスの定義ジャンプ

## 🎨 デバッグのヒント

### Ghost CMS 連携のデバッグ

1. **開発者ツールを開く** (`F12`)
2. **Console タブで API エラーを確認**
   ```javascript
   // Ghost API の接続テスト
   ghostBlog.getPosts(1).then(posts => console.log(posts));
   ```

3. **Network タブで API リクエストを監視**
   - 失敗したリクエストを確認
   - CORS エラーの特定

### CSS デバッグ

1. **Elements タブでスタイルを実時間編集**
2. **Computed タブで最終的なスタイルを確認**
3. **デバイスモードでレスポンシブをテスト**

### JavaScript デバッグ

```javascript
// デバッグ用のログ出力
console.log('Debug:', variable);

// ブレークポイント（コード内）
debugger;

// エラー処理の改善
try {
  // 処理
} catch (error) {
  console.error('Error:', error);
}
```

## 📱 レスポンシブテスト

### ブラウザの開発者ツール
1. デバイスモードを有効化 (`Ctrl+Shift+M`)
2. 様々なデバイスサイズでテスト
3. ネットワーク速度のシミュレーション

### テスト対象デバイス
- iPhone (375px)
- iPad (768px)
- Desktop (1200px+)

## 🚀 パフォーマンス最適化

### 画像の最適化
```bash
# 画像圧縮ツール（必要に応じて）
npm install -g imagemin-cli
```

### CSS/JS の軽量化
- 本番デプロイ時は minify を検討
- 不要な CSS の削除

## 🔍 トラブルシューティング

### よくある問題

**1. Live Server が動かない**
```bash
# ポート変更
npm run dev -- --port=3001
```

**2. Ghost API が動かない**
- `js/ghost-integration.js` の GHOST_CONFIG を確認
- CORS エラーの場合は Ghost の設定確認

**3. CSS が反映されない**
- ブラウザのキャッシュをクリア (`Ctrl+F5`)
- DevTools でキャッシュ無効化

### DevContainer の再構築
```bash
# Command Palette
# "Dev Containers: Rebuild Container"
```

## 📋 開発ワークフロー

1. **ブランチ作成**
   ```bash
   git checkout -b feature/new-feature
   ```

2. **コード編集**
   - Live Server で確認しながら開発
   - 定期的に `npm run format` でコード整形

3. **テスト**
   - 複数ブラウザでの動作確認
   - モバイル・タブレットでの表示確認

4. **コミット前チェック**
   ```bash
   npm run lint    # JavaScript チェック
   npm run format  # コード整形
   ```

## 🌟 便利なキーボードショートカット

- `Ctrl+Shift+P`: Command Palette
- `Ctrl+`` `: Terminal 切り替え
- `F5`: デバッガー起動
- `Ctrl+Shift+M`: デバイスモード切り替え
- `Ctrl+F5`: 強制リロード（キャッシュクリア）

Happy coding! 🎉