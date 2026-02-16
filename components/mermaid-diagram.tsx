'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidDiagramProps {
  chapterId: number
}

const getMermaidCode = (chapterId: number): string => {
  const diagrams: Record<number, string> = {
    1: `
graph TB
    A[📚 Training Data] --> B[🧠 AI Model]
    B --> C[📊 Learn Patterns]
    C --> D[🎯 Make Predictions]
    D --> E[✅ Improve Over Time]

    style A fill:#8b5cf6,color:#fff
    style B fill:#ec4899,color:#fff
    style C fill:#3b82f6,color:#fff
    style D fill:#10b981,color:#fff
    style E fill:#f59e0b,color:#fff
`,
    3: `
graph LR
    A["Hello World! 👋"] --> B[Tokenizer]
    B --> C[Token 1: Hello]
    B --> D[Token 2: World]
    B --> E[Token 3: !]

    F[Context Window] -.->|128K tokens| G[GPT-4]
    F -.->|200K tokens| H[Claude 3]
    F -.->|1M tokens| I[Gemini Pro]

    style A fill:#8b5cf6,color:#fff
    style B fill:#ec4899,color:#fff
    style C fill:#3b82f6,color:#fff
    style D fill:#10b981,color:#fff
    style E fill:#f59e0b,color:#fff
    style F fill:#ef4444,color:#fff
`,
    6: `
graph TB
    A[🔍 Query: happy dog] --> B[Generate Embedding]
    B --> C[Search Vector DB]

    C --> D[Match 1: joyful puppy ✅]
    C --> E[Match 2: cheerful canine ✅]
    C --> F[Match 3: excited pet ✅]

    G[❌ Keyword Search] -.->|Would miss| D
    G -.->|Would miss| E

    style A fill:#8b5cf6,color:#fff
    style B fill:#ec4899,color:#fff
    style C fill:#3b82f6,color:#fff
    style D fill:#10b981,color:#fff
    style E fill:#10b981,color:#fff
    style F fill:#10b981,color:#fff
    style G fill:#ef4444,color:#fff
`,
    10: `
graph TB
    A[Zero-Shot] --> B[Direct instruction<br/>No examples]
    C[Few-Shot] --> D[Include 2-5 examples<br/>Shows pattern]
    E[Chain-of-Thought] --> F[Step by step reasoning<br/>Think aloud]

    G[Temperature] --> H{Creativity Level}
    H -->|0.0| I[Deterministic]
    H -->|0.7| J[Balanced]
    H -->|1.0| K[Creative]

    style A fill:#8b5cf6,color:#fff
    style C fill:#ec4899,color:#fff
    style E fill:#3b82f6,color:#fff
    style G fill:#10b981,color:#fff
    style I fill:#f59e0b,color:#fff
    style J fill:#f59e0b,color:#fff
    style K fill:#f59e0b,color:#fff
`,
  }

  return (
    diagrams[chapterId] ||
    `
graph TD
    A[Concept] --> B[Coming Soon]
    style A fill:#8b5cf6,color:#fff
    style B fill:#ec4899,color:#fff
`
  )
}

export function MermaidDiagram({ chapterId }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      themeVariables: {
        primaryColor: '#8b5cf6',
        primaryTextColor: '#fff',
        primaryBorderColor: '#7c3aed',
        lineColor: '#ec4899',
        secondaryColor: '#3b82f6',
        tertiaryColor: '#10b981',
      },
    })

    if (ref.current) {
      const code = getMermaidCode(chapterId)
      const id = `mermaid-${chapterId}-${Date.now()}`

      mermaid.render(id, code).then(({ svg }) => {
        if (ref.current) {
          ref.current.innerHTML = svg
        }
      })
    }
  }, [chapterId])

  return <div ref={ref} className="flex justify-center items-center min-h-[300px] p-4" />
}
