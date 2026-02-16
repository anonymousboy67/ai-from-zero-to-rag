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

interface FlowDiagramProps {
  chapterId: number
}

const getFlowData = (chapterId: number): { nodes: Node[]; edges: Edge[] } => {
  const flowConfigs: Record<number, { nodes: Node[]; edges: Edge[] }> = {
    2: {
      // LLM Request Flow
      nodes: [
        {
          id: '1',
          type: 'input',
          data: { label: '👤 User Input' },
          position: { x: 250, y: 0 },
          style: { background: '#8b5cf6', color: 'white', border: '2px solid #7c3aed', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '2',
          data: { label: '🎫 Tokenization' },
          position: { x: 250, y: 100 },
          style: { background: '#ec4899', color: 'white', border: '2px solid #db2777', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '3',
          data: { label: '🧠 LLM Processing' },
          position: { x: 250, y: 200 },
          style: { background: '#3b82f6', color: 'white', border: '2px solid #2563eb', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '4',
          data: { label: '📝 Token Generation' },
          position: { x: 250, y: 300 },
          style: { background: '#10b981', color: 'white', border: '2px solid #059669', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '5',
          type: 'output',
          data: { label: '✨ Response' },
          position: { x: 250, y: 400 },
          style: { background: '#f59e0b', color: 'white', border: '2px solid #d97706', borderRadius: '10px', padding: '10px' },
        },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e2-3', source: '2', target: '3', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e3-4', source: '3', target: '4', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e4-5', source: '4', target: '5', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
      ],
    },
    4: {
      // Embeddings Process
      nodes: [
        {
          id: '1',
          type: 'input',
          data: { label: '📄 Text: "I love AI"' },
          position: { x: 50, y: 0 },
          style: { background: '#8b5cf6', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '2',
          data: { label: '🔢 Embedding Model' },
          position: { x: 200, y: 100 },
          style: { background: '#ec4899', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '3',
          type: 'output',
          data: { label: '📊 Vector [0.23, -0.15, 0.67, ...]' },
          position: { x: 100, y: 200 },
          style: { background: '#3b82f6', color: 'white', borderRadius: '10px', padding: '10px', width: '250px' },
        },
        {
          id: '4',
          data: { label: '💾 Store in Vector DB' },
          position: { x: 150, y: 300 },
          style: { background: '#10b981', color: 'white', borderRadius: '10px', padding: '10px' },
        },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e2-3', source: '2', target: '3', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e3-4', source: '3', target: '4', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
      ],
    },
    5: {
      // Vector Database Query
      nodes: [
        {
          id: '1',
          type: 'input',
          data: { label: '🔍 Query: "machine learning"' },
          position: { x: 200, y: 0 },
          style: { background: '#8b5cf6', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '2',
          data: { label: '🔢 Convert to Embedding' },
          position: { x: 200, y: 100 },
          style: { background: '#ec4899', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '3',
          data: { label: '📊 Vector Database\n(Millions of vectors)' },
          position: { x: 200, y: 200 },
          style: { background: '#3b82f6', color: 'white', borderRadius: '10px', padding: '10px', whiteSpace: 'pre-line' },
        },
        {
          id: '4',
          data: { label: '🎯 Similarity Search' },
          position: { x: 200, y: 320 },
          style: { background: '#10b981', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '5',
          type: 'output',
          data: { label: '✅ Top K Similar Results' },
          position: { x: 200, y: 420 },
          style: { background: '#f59e0b', color: 'white', borderRadius: '10px', padding: '10px' },
        },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e2-3', source: '2', target: '3', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e3-4', source: '3', target: '4', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e4-5', source: '4', target: '5', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
      ],
    },
    7: {
      // RAG Pipeline
      nodes: [
        {
          id: '1',
          type: 'input',
          data: { label: '❓ User Question' },
          position: { x: 250, y: 0 },
          style: { background: '#8b5cf6', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '2',
          data: { label: '🔍 Retrieve from Vector DB' },
          position: { x: 250, y: 100 },
          style: { background: '#ec4899', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '3',
          data: { label: '📚 Relevant Context' },
          position: { x: 250, y: 200 },
          style: { background: '#3b82f6', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '4',
          data: { label: '➕ Augment Prompt' },
          position: { x: 250, y: 300 },
          style: { background: '#10b981', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '5',
          data: { label: '🧠 LLM Generation' },
          position: { x: 250, y: 400 },
          style: { background: '#f59e0b', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '6',
          type: 'output',
          data: { label: '✅ Grounded Answer' },
          position: { x: 250, y: 500 },
          style: { background: '#ef4444', color: 'white', borderRadius: '10px', padding: '10px' },
        },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e2-3', source: '2', target: '3', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e3-4', source: '3', target: '4', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e4-5', source: '4', target: '5', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e5-6', source: '5', target: '6', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
      ],
    },
    8: {
      // LangChain Components
      nodes: [
        {
          id: '1',
          data: { label: '📝 Prompt Template' },
          position: { x: 100, y: 0 },
          style: { background: '#8b5cf6', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '2',
          data: { label: '🔗 Chain' },
          position: { x: 250, y: 100 },
          style: { background: '#ec4899', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '3',
          data: { label: '🧠 LLM' },
          position: { x: 100, y: 200 },
          style: { background: '#3b82f6', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '4',
          data: { label: '💾 Memory' },
          position: { x: 400, y: 100 },
          style: { background: '#10b981', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '5',
          data: { label: '🔍 Retriever' },
          position: { x: 400, y: 200 },
          style: { background: '#f59e0b', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '6',
          type: 'output',
          data: { label: '✨ Response' },
          position: { x: 250, y: 300 },
          style: { background: '#ef4444', color: 'white', borderRadius: '10px', padding: '10px' },
        },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e2-3', source: '2', target: '3', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e4-2', source: '4', target: '2', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e5-2', source: '5', target: '2', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e3-6', source: '3', target: '6', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
      ],
    },
    9: {
      // Agent Loop
      nodes: [
        {
          id: '1',
          type: 'input',
          data: { label: '🎯 Task' },
          position: { x: 250, y: 0 },
          style: { background: '#8b5cf6', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '2',
          data: { label: '🧠 Agent Reasoning' },
          position: { x: 250, y: 100 },
          style: { background: '#ec4899', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '3',
          data: { label: '🛠️ Tool Selection' },
          position: { x: 250, y: 200 },
          style: { background: '#3b82f6', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '4',
          data: { label: '⚡ Execute Tool' },
          position: { x: 250, y: 300 },
          style: { background: '#10b981', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '5',
          data: { label: '👀 Observe Result' },
          position: { x: 250, y: 400 },
          style: { background: '#f59e0b', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '6',
          data: { label: '✅ Done?' },
          position: { x: 250, y: 500 },
          style: { background: '#ef4444', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '7',
          type: 'output',
          data: { label: '🎉 Final Answer' },
          position: { x: 450, y: 500 },
          style: { background: '#06b6d4', color: 'white', borderRadius: '10px', padding: '10px' },
        },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e2-3', source: '2', target: '3', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e3-4', source: '3', target: '4', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e4-5', source: '4', target: '5', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e5-6', source: '5', target: '6', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e6-2', source: '6', target: '2', label: 'No', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e6-7', source: '6', target: '7', label: 'Yes', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
      ],
    },
    11: {
      // LangGraph Workflow
      nodes: [
        {
          id: '1',
          type: 'input',
          data: { label: '📥 Input' },
          position: { x: 250, y: 0 },
          style: { background: '#8b5cf6', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '2',
          data: { label: '🔵 Node 1: Research' },
          position: { x: 250, y: 100 },
          style: { background: '#ec4899', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '3',
          data: { label: '🔵 Node 2: Verify' },
          position: { x: 100, y: 200 },
          style: { background: '#3b82f6', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '4',
          data: { label: '🔵 Node 3: Write' },
          position: { x: 400, y: 200 },
          style: { background: '#10b981', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '5',
          type: 'output',
          data: { label: '📤 Output' },
          position: { x: 250, y: 300 },
          style: { background: '#f59e0b', color: 'white', borderRadius: '10px', padding: '10px' },
        },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e2-3', source: '2', target: '3', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e2-4', source: '2', target: '4', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e3-5', source: '3', target: '5', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e4-5', source: '4', target: '5', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
      ],
    },
    12: {
      // MCP Architecture
      nodes: [
        {
          id: '1',
          data: { label: '🧠 LLM Client' },
          position: { x: 250, y: 0 },
          style: { background: '#8b5cf6', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '2',
          data: { label: '🔌 MCP Protocol' },
          position: { x: 250, y: 100 },
          style: { background: '#ec4899', color: 'white', borderRadius: '10px', padding: '10px' },
        },
        {
          id: '3',
          data: { label: '🛠️ MCP Server 1\n(Files)' },
          position: { x: 50, y: 200 },
          style: { background: '#3b82f6', color: 'white', borderRadius: '10px', padding: '10px', whiteSpace: 'pre-line' },
        },
        {
          id: '4',
          data: { label: '🛠️ MCP Server 2\n(Database)' },
          position: { x: 250, y: 200 },
          style: { background: '#10b981', color: 'white', borderRadius: '10px', padding: '10px', whiteSpace: 'pre-line' },
        },
        {
          id: '5',
          data: { label: '🛠️ MCP Server 3\n(Web Search)' },
          position: { x: 450, y: 200 },
          style: { background: '#f59e0b', color: 'white', borderRadius: '10px', padding: '10px', whiteSpace: 'pre-line' },
        },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#3b82f6' }, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: '#10b981' }, markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e2-5', source: '2', target: '5', animated: true, style: { stroke: '#f59e0b' }, markerEnd: { type: MarkerType.ArrowClosed } },
      ],
    },
  }

  return (
    flowConfigs[chapterId] || {
      nodes: [
        {
          id: '1',
          data: { label: 'Diagram Coming Soon' },
          position: { x: 250, y: 0 },
          style: { background: '#8b5cf6', color: 'white', borderRadius: '10px', padding: '10px' },
        },
      ],
      edges: [],
    }
  )
}

export function FlowDiagram({ chapterId }: FlowDiagramProps) {
  const flowData = getFlowData(chapterId)
  const [nodes, , onNodesChange] = useNodesState(flowData.nodes)
  const [edges, , onEdgesChange] = useEdgesState(flowData.edges)

  return (
    <div style={{ width: '100%', height: '600px' }} className="bg-slate-900/50 rounded-lg">
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
