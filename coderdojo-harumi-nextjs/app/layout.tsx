import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: 'CoderDojo HARUMI - 子供向けプログラミングクラブ',
  description: 'CoderDojo HARUMIは、子供たちがプログラミングを楽しみながら学べるボランティア運営のクラブです。論理的思考能力と自己表現能力を育み、未来の可能性を一緒に広げましょう！',
  keywords: 'CoderDojo, HARUMI, プログラミング, 子供, 教育, Scratch, Python, Web開発',
  authors: [{ name: 'CoderDojo HARUMI' }],
  creator: 'CoderDojo HARUMI',
  publisher: 'CoderDojo HARUMI',
  robots: 'index, follow',
  openGraph: {
    title: 'CoderDojo HARUMI - 子供向けプログラミングクラブ',
    description: 'CoderDojo HARUMIは、子供たちがプログラミングを楽しみながら学べるボランティア運営のクラブです。',
    url: 'https://coderdojo-harumi.netlify.app',
    siteName: 'CoderDojo HARUMI',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoderDojo HARUMI - 子供向けプログラミングクラブ',
    description: 'CoderDojo HARUMIは、子供たちがプログラミングを楽しみながら学べるボランティア運営のクラブです。',
  },
  icons: {
    icon: '/log.png',
    shortcut: '/log.png',
    apple: '/log.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}