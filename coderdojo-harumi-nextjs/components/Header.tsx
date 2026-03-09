'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'ホーム', href: '/' },
    { name: '活動内容', href: '/activities' },
    { name: '参加方法', href: '/join' },
    { name: '活動報告', href: '/blog' },
    { name: 'お問い合わせ', href: '/contact' },
  ]

  return (
    <header className="header">
      <div className="container container--full-width">
        <nav className="nav">
          <Link href="/" className="nav-brand">
            <Image
              src="/log.png"
              alt="CoderDojo HARUMI"
              width={50}
              height={50}
              className="logo"
            />
            <h1>CoderDojo HARUMI</h1>
          </Link>
          <ul className="nav-menu">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <ul>
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}