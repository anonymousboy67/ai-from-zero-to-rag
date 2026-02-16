# 🤝 Contributing to AI Learning Journey

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)

## 🌟 Code of Conduct

This project follows a Code of Conduct to ensure a welcoming environment for all contributors.

**Our Standards:**
- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards others

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Git installed
- Familiarity with React and Next.js
- Basic understanding of TypeScript

### Setup

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/YOUR_USERNAME/ai-learning-journey.git
cd ai-learning-journey
```

3. Install dependencies:
```bash
npm install
```

4. Create a branch:
```bash
git checkout -b feature/your-feature-name
```

5. Start development server:
```bash
npm run dev
```

## 🎯 How to Contribute

### Reporting Bugs

**Before submitting:**
- Check if the bug already exists in Issues
- Collect information: browser, OS, error messages

**Bug Report Template:**
```markdown
**Description**
Clear description of the bug

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen

**Screenshots**
If applicable

**Environment**
- Browser: [e.g., Chrome 120]
- OS: [e.g., macOS 14]
```

### Suggesting Features

**Feature Request Template:**
```markdown
**Problem Statement**
What problem does this solve?

**Proposed Solution**
How would this feature work?

**Alternatives**
Other approaches considered

**Additional Context**
Mockups, examples, etc.
```

### Contributing Code

**What to Contribute:**
- 🐛 Bug fixes
- ✨ New features
- 📚 Documentation improvements
- 🎨 UI/UX enhancements
- ♿ Accessibility improvements
- 🌐 Translations

**What NOT to Contribute:**
- Breaking changes without discussion
- Dependencies without good reason
- Code without tests/documentation

## 💻 Development Workflow

### 1. Pick an Issue

- Check "good first issue" label for beginners
- Comment on the issue to claim it
- Wait for maintainer approval

### 2. Code

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes
# ... code ...

# Test your changes
npm run dev

# Type check
npm run type-check

# Build to ensure no errors
npm run build
```

### 3. Test

**Manual Testing:**
- [ ] Feature works on desktop
- [ ] Feature works on mobile
- [ ] Dark mode works
- [ ] Light mode works
- [ ] No console errors

### 4. Commit

```bash
git add .
git commit -m "feat: add amazing feature"
```

See [Commit Messages](#commit-messages) below.

### 5. Push

```bash
git push origin feature/your-feature
```

### 6. Pull Request

Create PR with template:

```markdown
**Description**
What does this PR do?

**Type of Change**
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation
- [ ] UI/UX

**Checklist**
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added where needed
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tested on desktop
- [ ] Tested on mobile

**Screenshots**
Before/after if UI change
```

## 🎨 Style Guidelines

### TypeScript

```typescript
// ✅ Good
interface Props {
  title: string
  count: number
}

export function Component({ title, count }: Props) {
  return <div>{title}: {count}</div>
}

// ❌ Bad
export function Component(props: any) {
  return <div>{props.title}</div>
}
```

### React Components

```typescript
// ✅ Good - Functional components with TypeScript
'use client' // If client component

import { useState } from 'react'

interface ButtonProps {
  label: string
  onClick: () => void
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  )
}

// ❌ Bad - No types
export function Button(props) {
  return <button>{props.label}</button>
}
```

### CSS (Tailwind)

```typescript
// ✅ Good - Organized classes
<div className="flex items-center gap-4 rounded-lg bg-purple-500 p-4">

// ❌ Bad - Messy
<div className="flex bg-purple-500 p-4 gap-4 rounded-lg items-center">
```

### File Naming

- Components: `PascalCase.tsx` (e.g., `ChapterCard.tsx`)
- Utilities: `kebab-case.ts` (e.g., `chapters-data.ts`)
- Pages: `page.tsx` (Next.js convention)

### Folder Structure

```
components/
  ├── ui/              # Base UI components
  ├── feature-name.tsx # Feature-specific components
lib/
  ├── utils.ts         # Generic utilities
  ├── feature-data.ts  # Feature data
```

## 📝 Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

**Format:**
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting, no code change
- `refactor:` Code restructuring
- `perf:` Performance improvement
- `test:` Adding tests
- `chore:` Maintenance

**Examples:**
```bash
feat(chapters): add quantum computing chapter
fix(diagram): correct mermaid syntax error
docs(readme): update installation steps
style(button): improve hover animation
refactor(api): simplify data fetching
```

## 🔍 Code Review Process

**Maintainers will check:**
- Code quality and style
- TypeScript types
- No breaking changes
- Documentation updates
- Performance impact

**Timeline:**
- Initial review: 1-3 days
- Feedback turnaround: 1-2 days
- Merge: After approval + CI pass

## 📚 Adding New Chapters

Want to add educational content?

1. **Edit `lib/chapters-data.ts`:**

```typescript
{
  id: 14,
  title: 'Your Topic',
  subtitle: 'Short description',
  eli5: 'Explain for a 7-year-old',
  analogy: 'Real-world comparison',
  technical: 'Deep technical explanation',
  keyPoints: [
    'Key concept 1',
    'Key concept 2',
  ],
  codeExample: {
    language: 'python',
    code: 'your_code_here',
    description: 'What this code does'
  },
  diagramType: 'flow', // or 'mermaid' or 'both'
  icon: '🚀'
}
```

2. **Add diagram** (if needed) in:
- `components/flow-diagram.tsx` for React Flow
- `components/mermaid-diagram.tsx` for Mermaid

3. **Test thoroughly**

4. **Submit PR**

## 🏆 Recognition

Contributors will be:
- Listed in README
- Credited in release notes
- Thanked in community

## 💬 Questions?

- Open a Discussion on GitHub
- Tag maintainers in Issues
- Check existing Issues/PRs first

---

**Thank you for making AI education better! 🎉**
