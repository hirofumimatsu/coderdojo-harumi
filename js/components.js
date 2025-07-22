// 共通コンポーネント直接埋め込みシステム
class ComponentLoader {
    static getHeaderHTML() {
        return `
        <header class="header">
            <div class="container container--full-width">
                <nav class="nav">
                    <div class="nav-brand">
                        <img src="log.png" alt="CoderDojo HARUMI" class="logo">
                        <h1>CoderDojo HARUMI</h1>
                    </div>
                    <ul class="nav-menu">
                        <li><a href="index.html">ホーム</a></li>
                        <li><a href="activities.html">活動内容</a></li>
                        <li><a href="join.html">参加方法</a></li>
                        <li><a href="blog.html">活動報告</a></li>
                        <li><a href="contact.html">お問い合わせ</a></li>
                    </ul>
                    <button class="menu-toggle" aria-label="メニューを開く">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </div>
        </header>`;
    }
    
    static getFooterHTML() {
        return `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-info">
                        <h4>CoderDojo HARUMI</h4>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 CoderDojo HARUMI. All rights reserved.</p>
                </div>
            </div>
        </footer>`;
    }
    
    static loadCommonComponents() {
        // ヘッダーを読み込み
        const headerElement = document.getElementById('header-placeholder');
        if (headerElement) {
            headerElement.innerHTML = this.getHeaderHTML();
        }
        
        // フッターを読み込み
        const footerElement = document.getElementById('footer-placeholder');
        if (footerElement) {
            footerElement.innerHTML = this.getFooterHTML();
        }
        
        // コンポーネント読み込み後に初期化
        this.initializeAfterLoad();
    }
    
    static initializeAfterLoad() {
        // 現在のページをハイライト
        this.highlightCurrentPage();
    }
    
    static highlightCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || 
                (currentPage === '' && href === 'index.html')) {
                link.style.color = '#06b6d4';
                link.style.fontWeight = '600';
            }
        });
    }
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', function() {
    ComponentLoader.loadCommonComponents();
});