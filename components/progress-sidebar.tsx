'use client'

import { motion } from 'framer-motion'
import { Chapter } from '@/lib/chapters-data'
import { cn } from '@/lib/utils'

interface ProgressSidebarProps {
  chapters: Chapter[]
  activeChapter: number
}

export function ProgressSidebar({ chapters, activeChapter }: ProgressSidebarProps) {
  const scrollToChapter = (chapterId: number) => {
    const element = document.getElementById(`chapter-${chapterId}`)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="hidden lg:block w-80 sticky top-24 h-fit">
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Learning Progress</h3>
        <div className="space-y-1">
          {chapters.map((chapter, index) => (
            <motion.button
              key={chapter.id}
              onClick={() => scrollToChapter(chapter.id)}
              className={cn(
                'w-full text-left px-4 py-3 rounded-lg transition-all text-sm',
                activeChapter === index
                  ? 'bg-purple-600 text-white font-semibold'
                  : 'hover:bg-purple-500/10 text-muted-foreground'
              )}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{chapter.icon}</span>
                <div>
                  <div className="font-medium">Chapter {chapter.id}</div>
                  <div className="text-xs opacity-75">{chapter.title}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="text-sm text-muted-foreground">
            Progress: {activeChapter + 1} / {chapters.length}
          </div>
          <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: `${((activeChapter + 1) / chapters.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
