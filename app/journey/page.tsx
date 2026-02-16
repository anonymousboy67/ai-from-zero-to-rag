'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChapterCard } from '@/components/chapter-card'
import { ProgressSidebar } from '@/components/progress-sidebar'
import { ScrollProgress } from '@/components/scroll-progress'
import { chapters } from '@/lib/chapters-data'

export default function JourneyPage() {
  const [activeChapter, setActiveChapter] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      chapters.forEach((chapter, index) => {
        const element = document.getElementById(`chapter-${chapter.id}`)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveChapter(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen pt-20">
      <ScrollProgress />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Your AI Learning Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master AI from fundamentals to advanced systems through 13 interactive chapters
          </p>
        </motion.div>

        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-24">
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.id}
                id={`chapter-${chapter.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
              >
                <ChapterCard chapter={chapter} index={index} />
              </motion.div>
            ))}
          </div>

          {/* Sticky Sidebar */}
          <ProgressSidebar chapters={chapters} activeChapter={activeChapter} />
        </div>
      </div>
    </div>
  )
}
