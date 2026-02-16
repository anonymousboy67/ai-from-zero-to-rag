'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatNumber } from '@/lib/utils'

const models = [
  { id: 'gpt-4', name: 'GPT-4 Turbo', input: 0.01, output: 0.03 },
  { id: 'gpt-3.5', name: 'GPT-3.5 Turbo', input: 0.0005, output: 0.0015 },
  { id: 'claude-opus', name: 'Claude 3 Opus', input: 0.015, output: 0.075 },
  { id: 'claude-sonnet', name: 'Claude 3 Sonnet', input: 0.003, output: 0.015 },
  { id: 'gemini', name: 'Gemini 1.5 Pro', input: 0.00035, output: 0.0014 },
]

export function TokenCostCalculator() {
  const [selectedModel, setSelectedModel] = useState(models[0])
  const [inputTokens, setInputTokens] = useState(1000)
  const [outputTokens, setOutputTokens] = useState(500)
  const [requests, setRequests] = useState(100)

  const calculateCost = () => {
    const inputCost = (inputTokens / 1000) * selectedModel.input
    const outputCost = (outputTokens / 1000) * selectedModel.output
    const perRequestCost = inputCost + outputCost
    const totalCost = perRequestCost * requests

    return {
      perRequest: perRequestCost,
      total: totalCost,
      monthly: totalCost * 30,
    }
  }

  const costs = calculateCost()

  return (
    <div className="space-y-6">
      {/* Model Selection */}
      <div>
        <label className="block text-sm font-medium mb-3">Select Model</label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {models.map((model) => (
            <Button
              key={model.id}
              variant={selectedModel.id === model.id ? 'default' : 'outline'}
              onClick={() => setSelectedModel(model)}
              className="h-auto py-3"
            >
              {model.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Input Controls */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="glass">
          <CardContent className="pt-6">
            <label className="block text-sm font-medium mb-2">Input Tokens</label>
            <input
              type="number"
              value={inputTokens}
              onChange={(e) => setInputTokens(Number(e.target.value))}
              className="w-full bg-slate-800/50 border border-purple-500/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p className="text-xs text-muted-foreground mt-2">
              ≈ {Math.round(inputTokens * 0.75)} words
            </p>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="pt-6">
            <label className="block text-sm font-medium mb-2">Output Tokens</label>
            <input
              type="number"
              value={outputTokens}
              onChange={(e) => setOutputTokens(Number(e.target.value))}
              className="w-full bg-slate-800/50 border border-purple-500/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p className="text-xs text-muted-foreground mt-2">
              ≈ {Math.round(outputTokens * 0.75)} words
            </p>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="pt-6">
            <label className="block text-sm font-medium mb-2">Number of Requests</label>
            <input
              type="number"
              value={requests}
              onChange={(e) => setRequests(Number(e.target.value))}
              className="w-full bg-slate-800/50 border border-purple-500/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p className="text-xs text-muted-foreground mt-2">Per day</p>
          </CardContent>
        </Card>
      </div>

      {/* Cost Results */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="glass border-2 border-green-500/30">
          <CardContent className="pt-6 text-center">
            <div className="text-sm text-muted-foreground mb-2">Cost Per Request</div>
            <div className="text-3xl font-bold text-green-400">
              ${costs.perRequest.toFixed(4)}
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-2 border-blue-500/30">
          <CardContent className="pt-6 text-center">
            <div className="text-sm text-muted-foreground mb-2">Daily Cost</div>
            <div className="text-3xl font-bold text-blue-400">${costs.total.toFixed(2)}</div>
          </CardContent>
        </Card>

        <Card className="glass border-2 border-purple-500/30">
          <CardContent className="pt-6 text-center">
            <div className="text-sm text-muted-foreground mb-2">Monthly Cost (Est.)</div>
            <div className="text-3xl font-bold text-purple-400">
              ${costs.monthly.toFixed(2)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pricing Details */}
      <Card className="glass">
        <CardContent className="pt-6">
          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Input cost:</span>
              <span>
                ${selectedModel.input.toFixed(4)} per 1K tokens × {formatNumber(inputTokens)} ={' '}
                ${((inputTokens / 1000) * selectedModel.input).toFixed(4)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Output cost:</span>
              <span>
                ${selectedModel.output.toFixed(4)} per 1K tokens × {formatNumber(outputTokens)} ={' '}
                ${((outputTokens / 1000) * selectedModel.output).toFixed(4)}
              </span>
            </div>
            <div className="border-t border-white/10 pt-2 mt-2 flex justify-between font-semibold">
              <span>Total per request:</span>
              <span className="text-purple-400">${costs.perRequest.toFixed(4)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
