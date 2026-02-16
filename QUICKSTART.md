# ⚡ Quick Start Guide

Get your AI Learning Journey site running in 5 minutes!

## 🎯 For Absolute Beginners

Never used Next.js? No problem!

### Step 1: Install Node.js

**Check if you have Node.js:**
```bash
node --version
```

If you see a version number (v18 or higher), skip to Step 2.

If not, install from [nodejs.org](https://nodejs.org/) (choose LTS version).

### Step 2: Get the Code

**Option A: Clone from GitHub**
```bash
git clone https://github.com/yourusername/ai-learning-journey.git
cd ai-learning-journey
```

**Option B: Download ZIP**
- Click green "Code" button on GitHub
- Download ZIP
- Extract and open folder in terminal

### Step 3: Install Dependencies

```bash
npm install
```

This installs all required packages (takes 1-2 minutes).

### Step 4: Run the Development Server

```bash
npm run dev
```

### Step 5: Open in Browser

Go to: [http://localhost:3000](http://localhost:3000)

🎉 **You're running!**

---

## 🚀 For Experienced Developers

```bash
# Clone and install
git clone https://github.com/yourusername/ai-learning-journey.git
cd ai-learning-journey
npm install

# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run type-check   # TypeScript check

# Open http://localhost:3000
```

---

## 📁 Project Overview

```
ai-learning-journey/
├── app/              # Next.js pages
│   ├── page.tsx      # Home
│   ├── journey/      # Learning chapters
│   └── architecture/ # System architecture
├── components/       # React components
├── lib/              # Data and utilities
└── public/           # Static files
```

---

## 🎨 Customization Quick Guide

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --primary: 262 83% 58%;  /* Purple */
  --secondary: 210 40% 96.1%;
}
```

### Add a New Chapter

Edit `lib/chapters-data.ts`:

```typescript
{
  id: 14,
  title: 'New Topic',
  subtitle: 'Description',
  eli5: 'Simple explanation',
  analogy: 'Real-world comparison',
  technical: 'Technical details',
  keyPoints: ['Point 1', 'Point 2'],
  icon: '🚀'
}
```

### Change Site Title

Edit `app/layout.tsx`:

```typescript
export const metadata = {
  title: 'Your Site Title',
  description: 'Your description',
}
```

---

## 🐛 Common Issues

### Port 3000 Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

### Module Not Found

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### React Flow Not Rendering

Make sure you have:
```bash
npm install reactflow
```

---

## 🌐 Deploy in 2 Minutes

### Vercel (Easiest)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Click Deploy
5. Done! ✅

### Netlify

```bash
npm run build
# Drag /out folder to netlify.com/drop
```

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 💡 Pro Tips

### Hot Reload

Changes auto-refresh in dev mode. No need to restart!

### TypeScript

Get IntelliSense in VS Code for better development.

### Mobile Testing

Add to dev server:
```bash
npm run dev -- -H 0.0.0.0
# Access from phone: http://YOUR_IP:3000
```

### Performance

Production build is 10x faster:
```bash
npm run build
npm run start
```

---

## 🎯 Next Steps

1. **Explore the code** - Start with `app/page.tsx`
2. **Customize content** - Edit `lib/chapters-data.ts`
3. **Add features** - Check `CONTRIBUTING.md`
4. **Deploy** - Follow `DEPLOYMENT.md`

---

## ❓ Need Help?

- 📖 Read [README.md](README.md) for full documentation
- 🚀 Check [DEPLOYMENT.md](DEPLOYMENT.md) for deployment guide
- 🤝 See [CONTRIBUTING.md](CONTRIBUTING.md) to contribute
- 🐛 Open an issue on GitHub

---

**Happy coding! 🎉**

Your AI education site is ready to teach the world!
