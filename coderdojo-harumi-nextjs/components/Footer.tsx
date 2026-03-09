import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 no-underline">
              <Image
                src="/log.png"
                alt="CoderDojo HARUMI"
                width={40}
                height={40}
                className="object-contain"
              />
              <h3 
                className="text-xl font-bold m-0"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 30%, #0284c7 70%, #155e75 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                CoderDojo HARUMI
              </h3>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed">
              子供たちがプログラミングを楽しみながら学べる<br />
              ボランティア運営のプログラミングクラブです。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">ナビゲーション</h4>
            <ul className="space-y-2 list-none">
              <li><Link href="/" className="text-slate-600 hover:text-primary-600 text-sm no-underline transition-colors">ホーム</Link></li>
              <li><Link href="/activities" className="text-slate-600 hover:text-primary-600 text-sm no-underline transition-colors">活動内容</Link></li>
              <li><Link href="/join" className="text-slate-600 hover:text-primary-600 text-sm no-underline transition-colors">参加方法</Link></li>
              <li><Link href="/blog" className="text-slate-600 hover:text-primary-600 text-sm no-underline transition-colors">活動報告</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-primary-600 text-sm no-underline transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">関連リンク</h4>
            <ul className="space-y-2 list-none">
              <li>
                <a 
                  href="https://coderdojo.jp/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-600 hover:text-primary-600 text-sm no-underline transition-colors"
                >
                  CoderDojo JAPAN
                </a>
              </li>
              <li>
                <a 
                  href="https://coderdojo-harumi.connpass.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-600 hover:text-primary-600 text-sm no-underline transition-colors"
                >
                  Connpassページ
                </a>
              </li>
              <li>
                <a 
                  href="https://dojocon2025.coderdojo.jp/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-600 hover:text-primary-600 text-sm no-underline transition-colors"
                >
                  DojoCon Japan 2025
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © 2024 CoderDojo HARUMI. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              <a 
                href="https://coderdojo.jp/charter" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary-600 no-underline transition-colors"
              >
                CoderDojo憲章
              </a>
              に基づく運営
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}