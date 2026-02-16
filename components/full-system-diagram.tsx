'use client'

import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
} from 'reactflow'
import 'reactflow/dist/style.css'

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: '👤 User' },
    position: { x: 250, y: 0 },
    style: { background: '#8b5cf6', color: 'white', fontWeight: 'bold', padding: '15px', borderRadius: '12px', border: '2px solid #7c3aed' },
  },
  {
    id: '2',
    data: { label: '🌐 API Gateway' },
    position: { x: 250, y: 100 },
    style: { background: '#ec4899', color: 'white', fontWeight: 'bold', padding: '15px', borderRadius: '12px' },
  },
  {
    id: '3',
    data: { label: '🔗 LangChain Orchestration' },
    position: { x: 250, y: 200 },
    style: { background: '#3b82f6', color: 'white', fontWeight: 'bold', padding: '15px', borderRadius: '12px' },
  },
  {
    id: '4',
    data: { label: '📝 Generate Embeddings' },
    position: { x: 50, y: 320 },
    style: { background: '#10b981', color: 'white', fontWeight: 'bold', padding: '12px', borderRadius: '10px', width: '180px' },
  },
  {
    id: '5',
    data: { label: '🗄️ Vector DB\n(Chroma/Pinecone)' },
    position: { x: 50, y: 420 },
    style: { background: '#14b8a6', color: 'white', fontWeight: 'bold', padding: '12px', borderRadius: '10px', whiteSpace: 'pre-line', width: '180px' },
  },
  {
    id: '6',
    data: { label: '🔍 Semantic Search' },
    position: { x: 50, y: 520 },
    style: { background: '#06b6d4', color: 'white', fontWeight: 'bold', padding: '12px', borderRadius: '10px', width: '180px' },
  },
  {
    id: '7',
    data: { label: '📚 Retrieved Context' },
    position: { x: 250, y: 620 },
    style: { background: '#0ea5e9', color: 'white', fontWeight: 'bold', padding: '12px', borderRadius: '10px', width: '180px' },
  },
  {
    id: '8',
    data: { label: '🧠 LLM\n(GPT-4/Claude/Gemini)' },
    position: { x: 450, y: 320 },
    style: { background: '#f59e0b', color: 'white', fontWeight: 'bold', padding: '12px', borderRadius: '10px', whiteSpace: 'pre-line', width: '200px' },
  },
  {
    id: '9',
    data: { label: '🤖 Agent Decision' },
    position: { x: 450, y: 450 },
    style: { background: '#ef4444', color: 'white', fontWeight: 'bold', padding: '12px', borderRadius: '10px', width: '180px' },
  },
  {
    id: '10',
    data: { label: '🔌 MCP Servers\n(Tools/APIs)' },
    position: { x: 700, y: 450 },
    style: { background: '#a855f7', color: 'white', fontWeight: 'bold', padding: '12px', borderRadius: '10px', whiteSpace: 'pre-line', width: '180px' },
  },
  {
    id: '11',
    data: { label: '⚡ Cache\n(Redis)' },
    position: { x: 450, y: 200 },
    style: { background: '#ec4899', color: 'white', fontWeight: 'bold', padding: '12px', borderRadius: '10px', whiteSpace: 'pre-line', width: '150px' },
  },
  {
    id: '12',
    data: { label: '📊 Monitoring\n& Logging' },
    position: { x: 700, y: 200 },
    style: { background: '#8b5cf6', color: 'white', fontWeight: 'bold', padding: '12px', borderRadius: '10px', whiteSpace: 'pre-line', width: '150px' },
  },
  {
    id: '13',
    type: 'output',
    data: { label: '✨ Response to User' },
    position: { x: 250, y: 750 },
    style: { background: '#10b981', color: 'white', fontWeight: 'bold', padding: '15px', borderRadius: '12px', border: '2px solid #059669' },
  },
]

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2-3', source: '2', target: '3', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e3-4', source: '3', target: '4', label: 'Query', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e4-5', source: '4', target: '5', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e5-6', source: '5', target: '6', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e6-7', source: '6', target: '7', label: 'Top-K', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e3-8', source: '3', target: '8', label: 'Prompt', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e7-8', source: '7', target: '8', label: 'Context', animated: true, style: { stroke: '#10b981' }, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e8-9', source: '8', target: '9', label: 'Needs tool?', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e9-10', source: '9', target: '10', label: 'Use tool', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e10-8', source: '10', target: '8', label: 'Result', animated: true, style: { stroke: '#a855f7' }, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e3-11', source: '3', target: '11', label: 'Check', style: { strokeDasharray: '5,5' }, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e3-12', source: '3', target: '12', label: 'Log', style: { strokeDasharray: '5,5' }, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e8-13', source: '8', target: '13', label: 'Generate', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
]

export function FullSystemDiagram() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  return (
    <div style={{ width: '100%', height: '900px' }} className="bg-slate-900/50 rounded-2xl">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        attributionPosition="bottom-left"
      >
        <Controls />
        <Background color="#444" gap={16} />
      </ReactFlow>
    </div>
  )
}
