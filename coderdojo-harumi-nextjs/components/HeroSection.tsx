'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

interface CodeBlock {
  code: string
}

export function HeroSection() {
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0)
  const [displayedCode, setDisplayedCode] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const codeBlocks: CodeBlock[] = [
    {
      code: `<span class="code-keyword">function</span> <span class="code-function">createProject</span>() {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">const</span> <span class="code-variable">idea</span> = <span class="code-string">"素晴らしいアイデア"</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-variable">idea</span>.<span class="code-method">makeMagic</span>();<br>}`
    },
    {
      code: `<span class="code-keyword">def</span> <span class="code-function">learn_programming</span>():<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-variable">skills</span> = [<span class="code-string">"Python"</span>, <span class="code-string">"Scratch"</span>, <span class="code-string">"Web"</span>]<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">for</span> <span class="code-variable">skill</span> <span class="code-keyword">in</span> <span class="code-variable">skills</span>:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">practice</span>(<span class="code-variable">skill</span>)`
    },
    {
      code: `<span class="code-comment">// CoderDojo HARUMIへようこそ</span><br><span class="code-keyword">let</span> <span class="code-variable">friendship</span> = <span class="code-string">"仲間と一緒に"</span>;<br><span class="code-keyword">let</span> <span class="code-variable">creativity</span> = <span class="code-string">"創造力を育む"</span>;<br><br><span class="code-function">buildFuture</span>(<span class="code-variable">friendship</span>, <span class="code-variable">creativity</span>);`
    }
  ]

  const typeCode = (htmlCode: string) => {
    setIsTyping(true)
    setDisplayedCode('')
    
    let currentIndex = 0
    let currentHTML = ''
    let isInTag = false
    let currentTag = ''

    const typeChar = () => {
      if (currentIndex < htmlCode.length) {
        const char = htmlCode[currentIndex]
        
        if (char === '<') {
          isInTag = true
          currentTag = '<'
        } else if (char === '>' && isInTag) {
          isInTag = false
          currentTag += '>'
          currentHTML += currentTag
          currentTag = ''
          currentIndex++
          typingTimeoutRef.current = setTimeout(typeChar, 0)
          return
        } else if (isInTag) {
          currentTag += char
          currentIndex++
          typingTimeoutRef.current = setTimeout(typeChar, 0)
          return
        } else {
          currentHTML += char
        }
        
        setDisplayedCode(currentHTML)
        currentIndex++
        typingTimeoutRef.current = setTimeout(typeChar, 40)
      } else {
        setIsTyping(false)
        setTimeout(() => {
          deleteCode(currentHTML)
        }, 3000)
      }
    }

    typeChar()
  }

  const deleteCode = (htmlCode: string) => {
    let currentHTML = htmlCode
    let deleteIndex = htmlCode.length

    const deleteChar = () => {
      if (deleteIndex > 0) {
        // HTMLタグを考慮した削除
        const char = currentHTML[deleteIndex - 1]
        if (char === '>') {
          // タグの終了なので、対応する開始タグまで一気に削除
          const tagEnd = deleteIndex
          let tagStart = deleteIndex - 1
          let openBrackets = 1
          
          while (tagStart > 0 && openBrackets > 0) {
            tagStart--
            if (currentHTML[tagStart] === '>') openBrackets++
            if (currentHTML[tagStart] === '<') openBrackets--
          }
          
          currentHTML = currentHTML.substring(0, tagStart) + currentHTML.substring(tagEnd)
          deleteIndex = tagStart
        } else {
          currentHTML = currentHTML.substring(0, deleteIndex - 1)
          deleteIndex--
        }
        
        setDisplayedCode(currentHTML)
        typingTimeoutRef.current = setTimeout(deleteChar, 20)
      } else {
        // 削除完了、次のコードブロックへ
        setCurrentBlockIndex((prev) => (prev + 1) % codeBlocks.length)
      }
    }

    deleteChar()
  }

  useEffect(() => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }
    
    const timer = setTimeout(() => {
      typeCode(codeBlocks[currentBlockIndex].code)
    }, 500)

    return () => {
      clearTimeout(timer)
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
    }
  }, [currentBlockIndex])

  return (
    <section className="hero">
      <div className="container container--full-width">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h2>未来をつくる<br />プログラミングクラブ</h2>
            <p>
              CoderDojo HARUMIは、子供たちがプログラミングを楽しみながら学べるボランティア運営のクラブです。<br />
              論理的思考能力と自己表現能力を育み、未来の可能性を一緒に広げましょう！
            </p>
            <div className="hero-buttons">
              <a
                href="https://coderdojo-harumi.connpass.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                参加してみる
              </a>
              <Link
                href="/activities"
                className="btn btn-secondary"
              >
                活動を見る
              </Link>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="code-terminal">
              <div className="code-block active">
                <div 
                  className="typing-text"
                  dangerouslySetInnerHTML={{ __html: displayedCode }}
                />
                <span className={`cursor ${isTyping ? '' : 'hidden'}`}>|</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}