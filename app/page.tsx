'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Brain, Database, Network } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ArchitecturePreview } from '@/components/architecture-preview'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-20 -z-10" />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Complete AI Learning Journey</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            AI From Zero to RAG
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Master modern AI concepts through one complete project.
            <span className="text-purple-400 font-semibold"> From fundamentals to production systems</span> —
            explained so clearly, even a 7-year-old can understand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/journey">
              <Button size="lg" className="group text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700">
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/architecture">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Architecture
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-6 hover:scale-105 transition-transform"
            >
              <Brain className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">13 Core Concepts</h3>
              <p className="text-muted-foreground">
                From AI basics to advanced RAG systems, agents, and MCP servers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass rounded-2xl p-6 hover:scale-105 transition-transform"
            >
              <Network className="w-12 h-12 text-pink-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Interactive Diagrams</h3>
              <p className="text-muted-foreground">
                Explore live system architectures with React Flow and Mermaid
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass rounded-2xl p-6 hover:scale-105 transition-transform"
            >
              <Database className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Production Ready</h3>
              <p className="text-muted-foreground">
                Learn with real code examples and best practices
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Architecture Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Understand the Complete AI Pipeline
          </h2>
          <ArchitecturePreview />
        </motion.div>
      </section>

      {/* Learning Path Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">What You'll Learn</h2>

          <div className="space-y-4">
            {[
              'What AI and LLMs really are (explained like you\'re 7)',
              'How context windows and tokens work',
              'Transform text into searchable vectors',
              'Build semantic search with vector databases',
              'Implement RAG (Retrieval Augmented Generation)',
              'Use LangChain to simplify AI development',
              'Create intelligent agents and workflows with LangGraph',
              'Integrate MCP servers for tool calling',
              'Master prompt engineering techniques',
              'Connect everything in a production system',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 glass rounded-lg p-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-lg">{item}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/journey">
              <Button size="lg" className="text-lg px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Begin Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
