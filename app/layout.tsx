import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Learning Journey - From Zero to RAG',
  description: 'Learn AI, LLMs, RAG, Vector Databases, LangChain, LangGraph, and MCP through interactive visual explanations',
  keywords: ['AI', 'LLM', 'RAG', 'Vector Database', 'LangChain', 'LangGraph', 'MCP', 'Machine Learning'],
  authors: [{ name: 'AI Learning Journey' }],
  openGraph: {
    title: 'AI Learning Journey - From Zero to RAG',
    description: 'Master modern AI concepts through interactive visual learning',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
