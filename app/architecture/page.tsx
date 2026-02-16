'use client'

import { motion } from 'framer-motion'
import { FullSystemDiagram } from '@/components/full-system-diagram'
import { ModelComparison } from '@/components/model-comparison'
import { TokenCostCalculator } from '@/components/token-cost-calculator'
import { ChunkSizeSimulator } from '@/components/chunk-size-simulator'

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Complete AI System Architecture
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore how all components work together in a production AI system
          </p>
        </motion.div>

        {/* Full System Diagram */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-4xl">🏗️</span>
              Interactive System Flow
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Click and drag to explore. Each node represents a key component in the AI pipeline.
            </p>
            <FullSystemDiagram />
          </div>
        </motion.section>

        {/* Model Comparison */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="glass rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-4xl">🤖</span>
              LLM Model Comparison
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Compare leading LLM providers by context window, cost, and capabilities.
            </p>
            <ModelComparison />
          </div>
        </motion.section>

        {/* Token Cost Calculator */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="glass rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-4xl">💰</span>
              Token Cost Calculator
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Calculate API costs based on token usage and model selection.
            </p>
            <TokenCostCalculator />
          </div>
        </motion.section>

        {/* Chunk Size Simulator */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <div className="glass rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-4xl">✂️</span>
              Chunk Size Simulator
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Visualize how different chunk sizes affect document splitting for RAG.
            </p>
            <ChunkSizeSimulator />
          </div>
        </motion.section>

        {/* Architecture Explanation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <div className="glass rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">System Components Explained</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: '👤',
                  title: 'User Interface',
                  description: 'Web, mobile, or CLI interface where users interact with the system',
                },
                {
                  icon: '🚪',
                  title: 'API Gateway',
                  description: 'Handles authentication, rate limiting, and request routing',
                },
                {
                  icon: '🔗',
                  title: 'Orchestration (LangChain)',
                  description: 'Coordinates between components and manages workflow logic',
                },
                {
                  icon: '🧠',
                  title: 'LLM Provider',
                  description: 'OpenAI, Anthropic, or Google models for text generation',
                },
                {
                  icon: '🗄️',
                  title: 'Vector Database',
                  description: 'Stores and retrieves embeddings for semantic search',
                },
                {
                  icon: '🔌',
                  title: 'MCP Servers',
                  description: 'External tools and integrations (files, APIs, databases)',
                },
                {
                  icon: '⚡',
                  title: 'Caching Layer',
                  description: 'Redis or similar for fast repeated query responses',
                },
                {
                  icon: '📊',
                  title: 'Monitoring',
                  description: 'Track costs, latencies, errors, and usage metrics',
                },
              ].map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all"
                >
                  <div className="text-4xl mb-3">{component.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{component.title}</h3>
                  <p className="text-muted-foreground">{component.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
