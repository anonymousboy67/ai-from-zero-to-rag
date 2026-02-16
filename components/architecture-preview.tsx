'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function ArchitecturePreview() {
  const nodes = [
    { id: 'user', label: 'User', color: 'from-purple-500 to-purple-600' },
    { id: 'llm', label: 'LLM', color: 'from-pink-500 to-pink-600' },
    { id: 'embeddings', label: 'Embeddings', color: 'from-blue-500 to-blue-600' },
    { id: 'vectordb', label: 'Vector DB', color: 'from-green-500 to-green-600' },
    { id: 'rag', label: 'RAG', color: 'from-yellow-500 to-yellow-600' },
    { id: 'agent', label: 'Agent', color: 'from-red-500 to-red-600' },
  ]

  return (
    <div className="glass rounded-3xl p-8 md:p-12">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center"
          >
            <div
              className={`px-6 py-3 rounded-xl bg-gradient-to-r ${node.color} text-white font-semibold shadow-lg hover:scale-110 transition-transform cursor-pointer`}
            >
              {node.label}
            </div>
            {index < nodes.length - 1 && (
              <ArrowRight className="w-6 h-6 mx-2 text-muted-foreground" />
            )}
          </motion.div>
        ))}
      </div>
      <p className="text-center mt-8 text-muted-foreground">
        Click "Start Learning" to explore each component in detail
      </p>
    </div>
  )
}
