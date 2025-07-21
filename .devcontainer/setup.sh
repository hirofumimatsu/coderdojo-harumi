#!/bin/bash

echo "🚀 CoderDojo HARUMI 開発環境を設定中..."

# Node.js パッケージをインストール
echo "📦 npm パッケージをインストール中..."
npm install -D live-server prettier eslint eslint-config-prettier

# package.json にスクリプトを追加
echo "⚙️ package.json を設定中..."
cat > package.json << 'EOF'
{
  "name": "coderdojo-harumi-website",
  "version": "1.0.0",
  "description": "CoderDojo HARUMI公式ウェブサイト",
  "main": "index.html",
  "scripts": {
    "dev": "live-server --port=3000 --host=0.0.0.0 --open=index.html",
    "start": "live-server --port=3000 --host=0.0.0.0",
    "format": "prettier --write \"**/*.{html,css,js,md}\"",
    "lint": "eslint js/**/*.js",
    "serve": "python3 -m http.server 8080"
  },
  "keywords": ["coderdojo", "programming", "kids", "education"],
  "author": "CoderDojo HARUMI",
  "license": "MIT",
  "devDependencies": {
    "eslint": "^8.0.0",
    "eslint-config-prettier": "^8.0.0",
    "live-server": "^1.2.2",
    "prettier": "^2.8.0"
  }
}
EOF

# .prettierrc 設定
echo "🎨 Prettier を設定中..."
cat > .prettierrc << 'EOF'
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "htmlWhitespaceSensitivity": "css",
  "endOfLine": "lf"
}
EOF

# ESLint 設定
echo "🔍 ESLint を設定中..."
cat > .eslintrc.json << 'EOF'
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off",
    "prefer-const": "error",
    "no-var": "error"
  }
}
EOF

# .gitignore 設定
echo "📝 .gitignore を設定中..."
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Development
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/settings.json
.vscode/launch.json
.idea/

# OS
.DS_Store
Thumbs.db

# Build
dist/
build/

# Logs
logs/
*.log

# Runtime
*.pid
*.seed
*.pid.lock

# Coverage
coverage/
.nyc_output/

# Temporary
tmp/
temp/
EOF

# VS Code 設定
echo "🔧 VS Code 設定を追加中..."
mkdir -p .vscode
cat > .vscode/settings.json << 'EOF'
{
  "liveServer.settings.port": 3000,
  "liveServer.settings.CustomBrowser": "chrome",
  "liveServer.settings.donotShowInfoMsg": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "html.format.enable": false,
  "css.format.enable": false,
  "javascript.format.enable": false,
  "emmet.includeLanguages": {
    "javascript": "html"
  }
}
EOF

# 開発用のタスク設定
cat > .vscode/tasks.json << 'EOF'
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Live Server",
      "type": "shell",
      "command": "npm",
      "args": ["run", "dev"],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "new"
      },
      "problemMatcher": []
    },
    {
      "label": "Format Code",
      "type": "shell",
      "command": "npm",
      "args": ["run", "format"],
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      }
    },
    {
      "label": "Lint JavaScript",
      "type": "shell",
      "command": "npm",
      "args": ["run", "lint"],
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      }
    }
  ]
}
EOF

# Launch 設定（デバッグ用）
cat > .vscode/launch.json << 'EOF'
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}",
      "sourceMaps": true
    },
    {
      "name": "Attach to Chrome",
      "type": "chrome",
      "request": "attach",
      "port": 9222,
      "webRoot": "${workspaceFolder}"
    }
  ]
}
EOF

echo "✨ 開発環境のセットアップが完了しました！"
echo ""
echo "🎉 使用可能なコマンド:"
echo "  npm run dev     - Live Serverでサイトを起動（推奨）"
echo "  npm run format  - コードを自動整形"
echo "  npm run lint    - JavaScript をチェック"
echo "  npm run serve   - Python HTTPサーバーで起動"
echo ""
echo "🌐 ブラウザで http://localhost:3000 を開いてサイトを確認できます"
echo "💡 VS Codeの Live Server 拡張機能も利用可能です"
echo ""
echo "Happy coding! 🚀"