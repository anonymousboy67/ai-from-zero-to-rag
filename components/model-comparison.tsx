'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Model {
  name: string
  provider: string
  contextWindow: string
  inputCost: string
  outputCost: string
  strengths: string[]
  color: string
}

const models: Model[] = [
  {
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    contextWindow: '128K tokens',
    inputCost: '$0.01 / 1K',
    outputCost: '$0.03 / 1K',
    strengths: ['General purpose', 'Strong reasoning', 'Code generation'],
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'GPT-3.5 Turbo',
    provider: 'OpenAI',
    contextWindow: '16K tokens',
    inputCost: '$0.0005 / 1K',
    outputCost: '$0.0015 / 1K',
    strengths: ['Cost effective', 'Fast', 'Good for simple tasks'],
    color: 'from-teal-500 to-cyan-600',
  },
  {
    name: 'Claude 3 Opus',
    provider: 'Anthropic',
    contextWindow: '200K tokens',
    inputCost: '$0.015 / 1K',
    outputCost: '$0.075 / 1K',
    strengths: ['Largest context', 'Advanced reasoning', 'Analysis'],
    color: 'from-purple-500 to-violet-600',
  },
  {
    name: 'Claude 3 Sonnet',
    provider: 'Anthropic',
    contextWindow: '200K tokens',
    inputCost: '$0.003 / 1K',
    outputCost: '$0.015 / 1K',
    strengths: ['Balanced performance', 'Good value', 'Large context'],
    color: 'from-indigo-500 to-blue-600',
  },
  {
    name: 'Gemini 1.5 Pro',
    provider: 'Google',
    contextWindow: '1M tokens',
    inputCost: '$0.00035 / 1K',
    outputCost: '$0.0014 / 1K',
    strengths: ['Massive context', 'Multimodal', 'Very affordable'],
    color: 'from-blue-500 to-sky-600',
  },
]

export function ModelComparison() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {models.map((model, index) => (
        <Card
          key={index}
          className="glass border-2 border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105"
        >
          <CardHeader>
            <div className={`h-2 w-full rounded-full bg-gradient-to-r ${model.color} mb-4`} />
            <CardTitle className="text-xl">{model.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{model.provider}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground">Context Window</div>
              <div className="text-lg font-semibold text-purple-400">{model.contextWindow}</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-muted-foreground">Input</div>
                <div className="font-semibold">{model.inputCost}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Output</div>
                <div className="font-semibold">{model.outputCost}</div>
              </div>
            </div>

            <div>
              <div className="text-sm text-muted-foreground mb-2">Best For:</div>
              <ul className="space-y-1">
                {model.strengths.map((strength, idx) => (
                  <li key={idx} className="text-sm flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
