// Ghost CMS Integration for CoderDojo HARUMI
class GhostBlogIntegration {
    constructor(ghostUrl, apiKey) {
        this.ghostUrl = ghostUrl;
        this.apiKey = apiKey;
        this.apiUrl = `${ghostUrl}/ghost/api/v3/content`;
    }

    // 記事一覧を取得
    async getPosts(limit = 10, page = 1) {
        try {
            const url = `${this.apiUrl}/posts/?key=${this.apiKey}&limit=${limit}&page=${page}&include=tags,authors&formats=html`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data.posts;
        } catch (error) {
            console.error('記事の取得に失敗しました:', error);
            return [];
        }
    }

    // 特定の記事を取得
    async getPost(slug) {
        try {
            const url = `${this.apiUrl}/posts/slug/${slug}/?key=${this.apiKey}&include=tags,authors&formats=html`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data.posts[0];
        } catch (error) {
            console.error('記事の取得に失敗しました:', error);
            return null;
        }
    }

    // 日付をフォーマット
    formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}年${month}月${day}日`;
    }

    // 記事の抜粋を生成
    generateExcerpt(html, length = 150) {
        const text = html.replace(/<[^>]*>/g, '');
        return text.length > length ? text.substring(0, length) + '...' : text;
    }

    // タグの種類を日本語に変換
    getTagLabel(tagName) {
        const tagMap = {
            'activity': '活動報告',
            'works': '作品紹介',
            'event': 'イベント',
            'news': 'お知らせ',
            'volunteer': 'ボランティア'
        };
        return tagMap[tagName] || 'その他';
    }

    // ブログ記事のHTMLを生成
    generatePostHTML(post) {
        const formattedDate = this.formatDate(post.published_at);
        const excerpt = this.generateExcerpt(post.html);
        const primaryTag = post.tags && post.tags.length > 0 ? post.tags[0] : null;
        const tagLabel = primaryTag ? this.getTagLabel(primaryTag.slug) : 'その他';
        const featureImage = post.feature_image || '';
        
        // アイコンを決定
        let iconClass = '📝';
        if (primaryTag) {
            const iconMap = {
                'activity': '📸',
                'works': '🎨',
                'event': '🎉',
                'news': '📢',
                'volunteer': '👥'
            };
            iconClass = iconMap[primaryTag.slug] || '📝';
        }

        return `
            <article class="blog-post">
                <div class="post-image">
                    ${featureImage ? 
                        `<img src="${featureImage}" alt="${post.title}" loading="lazy">` : 
                        `<div class="placeholder-image">${iconClass}</div>`
                    }
                </div>
                <div class="post-content">
                    <div class="post-meta">
                        <span class="post-date">${formattedDate}</span>
                        <span class="post-category">${tagLabel}</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p>${excerpt}</p>
                    <a href="blog-post.html?slug=${post.slug}" class="read-more">続きを読む →</a>
                </div>
            </article>
        `;
    }

    // ブログ一覧を表示
    async displayBlogPosts(containerId, limit = 6) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('コンテナが見つかりません:', containerId);
            return;
        }

        // ローディング表示
        container.innerHTML = '<div class="loading">記事を読み込み中...</div>';

        const posts = await this.getPosts(limit);
        
        if (posts.length === 0) {
            container.innerHTML = '<div class="no-posts">記事が見つかりませんでした。</div>';
            return;
        }

        const postsHTML = posts.map(post => this.generatePostHTML(post)).join('');
        container.innerHTML = postsHTML;
    }

    // 個別記事を表示
    async displaySinglePost(slug, containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('コンテナが見つかりません:', containerId);
            return;
        }

        container.innerHTML = '<div class="loading">記事を読み込み中...</div>';

        const post = await this.getPost(slug);
        
        if (!post) {
            container.innerHTML = '<div class="error">記事が見つかりませんでした。</div>';
            return;
        }

        const formattedDate = this.formatDate(post.published_at);
        const primaryTag = post.tags && post.tags.length > 0 ? post.tags[0] : null;
        const tagLabel = primaryTag ? this.getTagLabel(primaryTag.slug) : 'その他';
        const featureImage = post.feature_image || '';

        const postHTML = `
            <article class="single-post">
                ${featureImage ? `<img src="${featureImage}" alt="${post.title}" class="feature-image">` : ''}
                <div class="post-header">
                    <div class="post-meta">
                        <span class="post-date">${formattedDate}</span>
                        <span class="post-category">${tagLabel}</span>
                    </div>
                    <h1>${post.title}</h1>
                </div>
                <div class="post-content">
                    ${post.html}
                </div>
                <div class="post-footer">
                    <a href="blog.html" class="back-link">← ブログ一覧に戻る</a>
                </div>
            </article>
        `;

        container.innerHTML = postHTML;
        
        // ページタイトルを更新
        document.title = `${post.title} - CoderDojo HARUMI`;
    }
}

// デモ用の設定（実際の使用時は変更が必要）
const GHOST_CONFIG = {
    url: 'https://your-ghost-site.ghost.io', // 実際のGhost URLに変更
    key: 'your-content-api-key' // 実際のAPIキーに変更
};

// グローバル変数として利用可能にする
let ghostBlog;

// DOM読み込み完了後に初期化
document.addEventListener('DOMContentLoaded', function() {
    // デモモード（Ghost未設定時）
    if (GHOST_CONFIG.url === 'https://your-ghost-site.ghost.io') {
        console.log('Ghost CMSの設定が必要です。GHOST_CONFIGを更新してください。');
        // デモ用の記事を表示
        displayDemoContent();
        return;
    }

    // Ghost CMS連携を初期化
    ghostBlog = new GhostBlogIntegration(GHOST_CONFIG.url, GHOST_CONFIG.key);
    
    // ブログ一覧ページの場合
    if (document.getElementById('blog-posts')) {
        ghostBlog.displayBlogPosts('blog-posts');
    }
    
    // 個別記事ページの場合
    if (document.getElementById('single-post')) {
        const urlParams = new URLSearchParams(window.location.search);
        const slug = urlParams.get('slug');
        if (slug) {
            ghostBlog.displaySinglePost(slug, 'single-post');
        }
    }
});

// デモ用コンテンツ表示（Ghost未設定時）
function displayDemoContent() {
    const container = document.getElementById('blog-posts');
    if (!container) return;
    
    container.innerHTML = `
        <div class="demo-notice">
            <h3>🔧 Ghost CMS設定が必要です</h3>
            <p>現在はデモモードで表示されています。実際のブログを表示するには以下の手順を完了してください：</p>
            <ol>
                <li><a href="https://ghost.org" target="_blank">Ghost.org</a>でアカウントを作成</li>
                <li>新しいサイトを作成</li>
                <li>Content APIキーを取得</li>
                <li><code>js/ghost-integration.js</code>のGHOST_CONFIGを更新</li>
            </ol>
            <p><strong>現在の設定例:</strong> 記事は現在のHTMLファイルで表示されています。</p>
        </div>
    `;
}