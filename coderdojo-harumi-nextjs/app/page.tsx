import { HeroSection } from '@/components/HeroSection'
import Link from 'next/link'

// Feature Card Component
function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode
  title: string
  description: string 
}) {
  return (
    <div className="feature-card text-center space-y-4">
      <div className="flex justify-center">{icon}</div>
      <h4 className="text-xl font-semibold text-slate-800">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}

// SVG Icon Components (matching original design)
function InteractiveIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#gradient1)" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="url(#gradient1)" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="url(#gradient1)" strokeWidth="2" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4"/>
          <stop offset="100%" stopColor="#f59e0b"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function LogicalIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 2L8 6L2 6.5L6 10L4.5 16L9.5 14L14.5 16L13 10L17 6.5L11 6L9.5 2Z" stroke="url(#gradient2)" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M12 8V16M8 12H16" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round"/>
      <defs>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4"/>
          <stop offset="100%" stopColor="#0ea5e9"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function CreativeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.5 8.5L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L8.5 8.5L12 2Z" stroke="url(#gradient3)" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="url(#gradient3)" strokeWidth="2"/>
      <defs>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#06b6d4"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function CollaborationIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="url(#gradient4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9" cy="7" r="4" stroke="url(#gradient4)" strokeWidth="2"/>
      <path d="M23 21V19C23 18.1645 22.7155 17.3581 22.2094 16.7169C21.7033 16.0757 20.0078 15.6428 19 15.2498" stroke="url(#gradient4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 3.13C17.0093 3.52251 17.7044 4.41323 17.8985 5.48993C18.0926 6.56662 17.7647 7.68327 17.0013 8.49499C16.2379 9.30671 15.1203 9.72595 14.0139 9.61693C12.9075 9.50791 11.8993 8.88781 11.2685 7.93" stroke="url(#gradient4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9"/>
          <stop offset="100%" stopColor="#f59e0b"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="features">
        <div className="container container--full-width">
          <h3>CoderDojo HARUMIの特徴</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <InteractiveIcon />
              </div>
              <h4>インタラクティブ学習</h4>
              <p>ゲームやロボットを使って、楽しみながらプログラミングの基礎を身につけます</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <LogicalIcon />
              </div>
              <h4>ロジカルシンキング</h4>
              <p>プログラミングを通じて、問題解決能力と論理的思考力を自然に身につけます</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <CreativeIcon />
              </div>
              <h4>クリエイティビティ</h4>
              <p>自分のアイデアをプログラムで表現し、創造性と発表力を伸ばします</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <CollaborationIcon />
              </div>
              <h4>コラボレーション</h4>
              <p>同年代の仲間と協力しながら、チームワークとコミュニケーション力を養います</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container container--full-width">
          <h3>CoderDojo HARUMIについて</h3>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                CoderDojo HARUMIは、7歳から17歳の子供・青少年を対象とした非営利のプログラミングクラブです。
              </p>
              <p>
                2011年にアイルランドで始まったCoderDojoの理念に基づき、子供たちが自主的にプログラミングを学び、創造性を発揮できる場を提供しています。
              </p>
              <p>
                私たちは
                <a 
                  href="https://coderdojo.jp/charter" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  CoderDojo憲章
                </a>
                に従って活動し、性別、人種、信条、宗教、能力に関わらず、すべての子供とボランティアを歓迎します。完全無料で、オープンで包括的なコミュニティを維持し、子供たちの保護を最優先に考えています。
              </p>
              <p>
                CoderDojo HARUMIは、中央区にあるマンション晴海フラッグの地域住民有志により2024年9月に立ち上げました。運営メンバーが協力し合い、試行錯誤しながらより良い運営を目指しています。
              </p>
              <p>
                経験豊富なメンター（指導者）がボランティアでサポートし、一人ひとりのペースに合わせた学習をお手伝いします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em' }}>
              一緒に未来を創りませんか？
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.7', fontFamily: 'Inter, sans-serif', marginBottom: '2rem' }}>
              CoderDojo HARUMIで、お子様の可能性を広げる第一歩を踏み出しましょう。<br />
              見学だけでも大歓迎です！
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://coderdojo-harumi.connpass.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ocean"
              >
                参加してみる
              </a>
              <Link
                href="/contact"
                className="btn-ocean-outline"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}