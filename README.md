# 🚀 AI Learning Journey

> From Zero to RAG: An Interactive AI Education Platform

A complete, production-ready Next.js application that teaches modern AI concepts through interactive visualizations, real code examples, and beautiful animations.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)
![React Flow](https://img.shields.io/badge/React%20Flow-11.11-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)

## ✨ Features

- 📚 **13 Comprehensive Chapters** covering AI fundamentals to advanced RAG systems
- 🎨 **Interactive Diagrams** using React Flow and Mermaid.js
- 🌈 **Beautiful Animations** with Framer Motion
- 🎯 **Learn by Doing** with real code examples
- 💰 **Cost Calculator** for token pricing
- 📊 **Model Comparison** tool
- ✂️ **Chunk Size Simulator** for RAG optimization
- 🌓 **Dark/Light Mode** support
- 📱 **Fully Responsive** design
- ⚡ **Static Site Generation** for blazing-fast performance

## 📋 What You'll Learn

1. **AI Fundamentals** - What is AI and how does it work?
2. **Large Language Models (LLMs)** - GPT, Claude, Gemini explained
3. **Context Windows & Tokens** - Understanding LLM memory limits
4. **Embeddings** - Converting meaning into numbers
5. **Vector Databases** - Chroma, Pinecone, semantic search
6. **Semantic Search** - Finding meaning, not just keywords
7. **RAG** - Retrieval Augmented Generation
8. **LangChain** - Framework for LLM applications
9. **Agents** - Dynamic tool use and reasoning
10. **Prompt Engineering** - Zero-shot, few-shot, chain-of-thought
11. **LangGraph** - Workflow orchestration with nodes and edges
12. **MCP** - Model Context Protocol for tool integration
13. **Full Architecture** - Production system design

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Diagrams:** React Flow, Mermaid.js
- **UI Components:** Custom ShadCN-style components
- **Code Highlighting:** React Syntax Highlighter
- **Theme:** next-themes

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. **Clone the repository**

```bash
cd ai-learning-journey
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ai-learning-journey/
├── app/
│   ├── layout.tsx              # Root layout with theme provider
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles and animations
│   ├── journey/
│   │   └── page.tsx            # Learning journey with all chapters
│   └── architecture/
│       └── page.tsx            # System architecture page
├── components/
│   ├── ui/                     # Base UI components (Button, Card, etc.)
│   ├── navbar.tsx              # Navigation bar
│   ├── theme-provider.tsx      # Dark/light mode provider
│   ├── chapter-card.tsx        # Chapter display component
│   ├── code-block.tsx          # Syntax highlighted code
│   ├── flow-diagram.tsx        # React Flow diagrams
│   ├── mermaid-diagram.tsx     # Mermaid diagrams
│   ├── progress-sidebar.tsx    # Chapter navigation
│   ├── scroll-progress.tsx     # Progress indicator
│   ├── architecture-preview.tsx # Landing page preview
│   ├── full-system-diagram.tsx # Complete architecture
│   ├── model-comparison.tsx    # LLM comparison tool
│   ├── token-cost-calculator.tsx # Cost calculator
│   └── chunk-size-simulator.tsx # Chunking simulator
├── lib/
│   ├── utils.ts                # Utility functions
│   └── chapters-data.ts        # All chapter content
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies
```

## 🎨 Customization

### Modify Chapter Content

Edit `lib/chapters-data.ts` to add, remove, or modify chapters:

```typescript
export const chapters: Chapter[] = [
  {
    id: 1,
    title: 'Your Chapter Title',
    subtitle: 'Subtitle',
    eli5: 'Simple explanation for kids',
    analogy: 'Real-world analogy',
    technical: 'Technical deep dive',
    keyPoints: ['Point 1', 'Point 2'],
    codeExample: {
      language: 'python',
      code: 'print("Hello")',
      description: 'Code description'
    },
    diagramType: 'flow',
    icon: '🚀'
  }
]
```

### Customize Theme Colors

Edit `tailwind.config.ts` to change colors:

```typescript
theme: {
  extend: {
    colors: {
      primary: 'hsl(var(--primary))',
      // Add your colors
    }
  }
}
```

### Add Custom Diagrams

Edit `components/flow-diagram.tsx` or `components/mermaid-diagram.tsx` to add new diagrams for chapters.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/ai-learning-journey.git
git push -u origin main
```

2. **Deploy to Vercel**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

- Click the button above
- Import your GitHub repository
- Vercel will auto-detect Next.js and deploy
- Your site will be live in minutes!

### Build for Production

```bash
npm run build
npm run start
```

### Static Export

The project is configured for static export. Build files will be in the `out` directory:

```bash
npm run build
# Files in /out can be deployed to any static host
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the /out folder to Netlify
```

### Deploy to GitHub Pages

1. Update `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',
  images: { unoptimized: true }
}
```

2. Build and deploy:

```bash
npm run build
# Push /out directory to gh-pages branch
```

## 🎯 Interactive Features

### Chapter Cards
- Expandable sections (ELI5, Technical, Code)
- Animated reveals
- Copy code functionality

### Diagrams
- **React Flow**: Draggable, zoomable interactive diagrams
- **Mermaid**: Static flowcharts and graphs
- Visual representation of AI concepts

### Tools
- **Model Comparison**: Compare GPT, Claude, Gemini
- **Cost Calculator**: Estimate API costs
- **Chunk Simulator**: Visualize RAG chunking

## 📚 Learning Path

### Recommended Order

1. Start with the **Landing Page** for an overview
2. Go through **Learning Journey** chapters sequentially
3. Explore the **Architecture Page** to see how everything connects
4. Experiment with interactive tools

### For Beginners
- Focus on "Explain Like I'm 7" sections
- Use analogies to build intuition
- Try code examples hands-on

### For Experienced Developers
- Skip to technical explanations
- Review architecture diagrams
- Study production system design

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI inspired by [Tailwind CSS](https://tailwindcss.com/)
- Diagrams powered by [React Flow](https://reactflow.dev/)
- Charts with [Mermaid](https://mermaid.js.org/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Made with ❤️ for AI learners everywhere**

Start your AI learning journey today! 🚀
