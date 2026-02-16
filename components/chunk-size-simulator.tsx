'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

const sampleText = `Artificial intelligence (AI) is transforming how we interact with technology. Machine learning, a subset of AI, enables systems to learn from data without explicit programming. Deep learning uses neural networks with multiple layers to process complex patterns. Natural language processing allows computers to understand human language. Computer vision enables machines to interpret visual information. These technologies power applications from virtual assistants to autonomous vehicles. AI systems can analyze vast amounts of data quickly, identifying patterns humans might miss. However, AI also raises important ethical questions about privacy, bias, and job displacement. As AI continues to advance, society must balance innovation with responsible development. The future of AI holds both tremendous promise and significant challenges that we must address thoughtfully.`

export function ChunkSizeSimulator() {
  const [chunkSize, setChunkSize] = useState(200)
  const [overlap, setOverlap] = useState(50)

  const chunkText = (text: string, size: number, overlapSize: number) => {
    const chunks: string[] = []
    const words = text.split(' ')
    let currentIndex = 0

    while (currentIndex < words.length) {
      const chunk = words.slice(currentIndex, currentIndex + size).join(' ')
      chunks.push(chunk)
      currentIndex += size - overlapSize
    }

    return chunks
  }

  const chunks = chunkText(sampleText, chunkSize, overlap)

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glass">
          <CardContent className="pt-6">
            <label className="block text-sm font-medium mb-3">
              Chunk Size: {chunkSize} words
            </label>
            <input
              type="range"
              min="50"
              max="500"
              step="50"
              value={chunkSize}
              onChange={(e) => setChunkSize(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>50</span>
              <span>250</span>
              <span>500</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="pt-6">
            <label className="block text-sm font-medium mb-3">Overlap: {overlap} words</label>
            <input
              type="range"
              min="0"
              max="100"
              step="10"
              value={overlap}
              onChange={(e) => setOverlap(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="glass text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-purple-400">{chunks.length}</div>
            <div className="text-sm text-muted-foreground">Total Chunks</div>
          </CardContent>
        </Card>

        <Card className="glass text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-blue-400">
              {Math.round(chunkSize * 1.33)}
            </div>
            <div className="text-sm text-muted-foreground">Tokens per Chunk</div>
          </CardContent>
        </Card>

        <Card className="glass text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-400">{overlap}</div>
            <div className="text-sm text-muted-foreground">Overlap Words</div>
          </CardContent>
        </Card>
      </div>

      {/* Explanation */}
      <Card className="glass bg-blue-500/10 border-blue-500/20">
        <CardContent className="pt-6">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <span>💡</span>
            Why Chunking Matters for RAG
          </h4>
          <ul className="text-sm space-y-2 text-muted-foreground">
            <li>
              • <strong>Smaller chunks</strong> = more precise retrieval but less context
            </li>
            <li>
              • <strong>Larger chunks</strong> = more context but less precision
            </li>
            <li>
              • <strong>Overlap</strong> prevents information loss at chunk boundaries
            </li>
            <li>• Optimal size depends on your use case (usually 200-500 tokens)</li>
          </ul>
        </CardContent>
      </Card>

      {/* Visualized Chunks */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Visualized Chunks</h3>
        {chunks.map((chunk, index) => (
          <Card
            key={index}
            className="glass hover:border-purple-500/40 transition-all cursor-pointer"
          >
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-2">
                    {chunk.split(' ').length} words • ≈{' '}
                    {Math.round(chunk.split(' ').length * 1.33)} tokens
                  </div>
                  <p className="text-sm leading-relaxed">{chunk}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
