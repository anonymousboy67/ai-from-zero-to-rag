'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Lightbulb, BookOpen, Code, Copy, Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Chapter } from '@/lib/chapters-data'
import { CodeBlock } from '@/components/code-block'
import { FlowDiagram } from '@/components/flow-diagram'
import { MermaidDiagram } from '@/components/mermaid-diagram'

interface ChapterCardProps {
  chapter: Chapter
  index: number
}

export function ChapterCard({ chapter, index }: ChapterCardProps) {
  const [expandedSections, setExpandedSections] = useState({
    eli5: false,
    technical: false,
    code: false,
    diagram: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <Card className="glass border-2 border-purple-500/20 hover:border-purple-500/40 transition-all">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="text-5xl">{chapter.icon}</div>
          <div className="flex-1">
            <CardTitle className="text-3xl mb-2">
              <span className="text-purple-400">Chapter {chapter.id}:</span> {chapter.title}
            </CardTitle>
            <CardDescription className="text-lg">{chapter.subtitle}</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Explain Like I'm 7 */}
        <motion.div
          initial={false}
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/20"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection('eli5')}
          >
            <div className="flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-semibold">Explain Like I'm 7</h3>
            </div>
            {expandedSections.eli5 ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>
          <AnimatePresence>
            {expandedSections.eli5 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-lg leading-relaxed">{chapter.eli5}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Real Life Analogy */}
        <div className="bg-blue-500/10 rounded-lg p-6 border border-blue-500/20">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🎯</span>
            <h3 className="text-xl font-semibold">Real Life Analogy</h3>
          </div>
          <p className="text-lg leading-relaxed">{chapter.analogy}</p>
        </div>

        {/* Technical Explanation */}
        <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection('technical')}
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-semibold">Technical Explanation</h3>
            </div>
            {expandedSections.technical ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>
          <AnimatePresence>
            {expandedSections.technical && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-lg leading-relaxed">{chapter.technical}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Key Points */}
        <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">✨</span>
            Key Takeaways
          </h3>
          <ul className="space-y-2">
            {chapter.keyPoints.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span className="text-lg">{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Diagram */}
        {(chapter.diagramType === 'flow' || chapter.diagramType === 'both') && (
          <div className="bg-slate-500/10 rounded-lg p-6 border border-slate-500/20">
            <div
              className="flex items-center justify-between cursor-pointer mb-4"
              onClick={() => toggleSection('diagram')}
            >
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Interactive Diagram
              </h3>
              {expandedSections.diagram ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
            <AnimatePresence>
              {expandedSections.diagram && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FlowDiagram chapterId={chapter.id} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {chapter.diagramType === 'mermaid' && (
          <div className="bg-slate-500/10 rounded-lg p-6 border border-slate-500/20">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">📊</span>
              Process Diagram
            </h3>
            <MermaidDiagram chapterId={chapter.id} />
          </div>
        )}

        {/* Code Example */}
        {chapter.codeExample && (
          <div className="bg-indigo-500/10 rounded-lg p-6 border border-indigo-500/20">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('code')}
            >
              <div className="flex items-center gap-3">
                <Code className="w-6 h-6 text-indigo-400" />
                <h3 className="text-xl font-semibold">Code Example</h3>
              </div>
              {expandedSections.code ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
            <AnimatePresence>
              {expandedSections.code && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 mb-3 text-muted-foreground">
                    {chapter.codeExample.description}
                  </p>
                  <CodeBlock
                    code={chapter.codeExample.code}
                    language={chapter.codeExample.language}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
