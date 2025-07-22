// CoderDojo HARUMI - Main JavaScript
class TypingEffect {
    constructor() {
        this.codeBlocks = [
            {
                code: `<span class="code-keyword">function</span> <span class="code-function">createProject</span>() {\n    <span class="code-keyword">const</span> <span class="code-variable">idea</span> = <span class="code-string">"素晴らしいアイデア"</span>;\n    <span class="code-keyword">return</span> <span class="code-variable">idea</span>.<span class="code-method">makeMagic</span>();\n}`
            },
            {
                code: `<span class="code-keyword">def</span> <span class="code-function">learn_programming</span>():\n    <span class="code-variable">skills</span> = [<span class="code-string">"Python"</span>, <span class="code-string">"Scratch"</span>, <span class="code-string">"Web"</span>]\n    <span class="code-keyword">for</span> <span class="code-variable">skill</span> <span class="code-keyword">in</span> <span class="code-variable">skills</span>:\n        <span class="code-function">practice</span>(<span class="code-variable">skill</span>)`
            },
            {
                code: `<span class="code-comment">// CoderDojo HARUMIへようこそ</span>\n<span class="code-keyword">let</span> <span class="code-variable">friendship</span> = <span class="code-string">"仲間と一緒に"</span>;\n<span class="code-keyword">let</span> <span class="code-variable">creativity</span> = <span class="code-string">"創造力を育む"</span>;\n\n<span class="code-function">buildFuture</span>(<span class="code-variable">friendship</span>, <span class="code-variable">creativity</span>);`
            }
        ];
        this.currentBlockIndex = 0;
        this.isTyping = false;
        this.typeSpeed = 40; // ミリ秒
        this.deleteSpeed = 20; // ミリ秒
        this.displayTime = 3000; // コード表示時間
        this.messageDisplayTime = 2000; // メッセージ表示時間
    }

    init() {
        // DOMが読み込まれたら開始
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.startTypingCycle());
        } else {
            this.startTypingCycle();
        }
    }

    startTypingCycle() {
        const codeTerminal = document.querySelector('.code-terminal');
        if (!codeTerminal) return;

        // 最初のコードブロックを表示
        this.showNextCodeBlock();
    }

    showNextCodeBlock() {
        if (this.isTyping) return;

        const currentBlock = this.codeBlocks[this.currentBlockIndex];
        this.typeCode(currentBlock.code);
        
        // 次のブロックのインデックスを準備
        this.currentBlockIndex = (this.currentBlockIndex + 1) % this.codeBlocks.length;
    }

    typeCode(codeHTML) {
        this.isTyping = true;
        
        const codeBlock = document.querySelector('.code-block.active');
        if (!codeBlock) return;

        const typingContent = codeBlock.querySelector('.typing-text');
        const cursor = codeBlock.querySelector('.cursor');

        // 現在の内容をクリア
        typingContent.innerHTML = '';
        cursor.style.display = 'inline-block';

        // HTMLの構造を維持しながらタイピング効果を実現
        let currentHTML = '';
        let charIndex = 0;
        let isInTag = false;
        let currentTag = '';

        const typeChar = () => {
            if (charIndex < codeHTML.length) {
                const char = codeHTML[charIndex];
                
                if (char === '<') {
                    isInTag = true;
                    currentTag = '<';
                } else if (char === '>' && isInTag) {
                    isInTag = false;
                    currentTag += '>';
                    currentHTML += currentTag;
                    currentTag = '';
                    charIndex++;
                    setTimeout(typeChar, this.typeSpeed);
                    return;
                } else if (isInTag) {
                    currentTag += char;
                    charIndex++;
                    setTimeout(typeChar, 0); // タグ内は即座に処理
                    return;
                } else {
                    currentHTML += char;
                }
                
                typingContent.innerHTML = currentHTML;
                charIndex++;
                setTimeout(typeChar, this.typeSpeed);
            } else {
                // タイピング完了
                cursor.style.display = 'none';
                
                // しばらく表示してから削除開始
                setTimeout(() => {
                    this.deleteCurrentCode();
                }, this.displayTime);
            }
        };

        typeChar();
    }


    deleteCurrentCode() {
        const codeBlock = document.querySelector('.code-block.active');
        if (!codeBlock) return;

        const typingContent = codeBlock.querySelector('.typing-text');
        const cursor = codeBlock.querySelector('.cursor');

        // 一括でコンテンツを削除
        typingContent.innerHTML = '';
        cursor.style.display = 'none';
        this.isTyping = false;
        
        // 少し待ってから次のコードブロックを表示
        setTimeout(() => {
            this.showNextCodeBlock();
        }, 500);
    }
}

// モバイルメニューの制御
class MobileMenu {
    constructor() {
        this.menuToggle = document.querySelector('.menu-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        
        if (this.menuToggle && this.navMenu) {
            this.init();
        }
    }

    init() {
        this.menuToggle.addEventListener('click', () => {
            this.toggleMenu();
        });

        // メニュー項目クリック時にメニューを閉じる
        this.navMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                this.closeMenu();
            }
        });

        // 外側クリック時にメニューを閉じる
        document.addEventListener('click', (e) => {
            if (!this.menuToggle.contains(e.target) && !this.navMenu.contains(e.target)) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.menuToggle.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }

    closeMenu() {
        this.menuToggle.classList.remove('active');
        this.navMenu.classList.remove('active');
    }
}

// スムーススクロール
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // ページ内リンクにスムーススクロールを適用
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const headerOffset = 80; // ヘッダーの高さを考慮
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// アニメーション観察
class ScrollAnimation {
    constructor() {
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // アニメーション対象の要素を観察
        document.querySelectorAll('.feature-card, .faq-card, .activity-card').forEach(el => {
            observer.observe(el);
        });
    }
}

// アプリケーション初期化
document.addEventListener('DOMContentLoaded', function() {
    // タイピングエフェクトを初期化
    const typingEffect = new TypingEffect();
    typingEffect.init();
    
    // モバイルメニューを初期化
    new MobileMenu();
    
    // スムーススクロールを初期化
    new SmoothScroll();
    
    // スクロールアニメーションを初期化
    new ScrollAnimation();
    
    // パフォーマンス最適化: 画像遅延読み込み
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Intersection Observer fallback for older browsers
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});