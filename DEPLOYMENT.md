# 🚀 Deployment Guide

Complete guide to deploying your AI Learning Journey site to production.

## 📋 Pre-Deployment Checklist

- [ ] All dependencies installed (`npm install`)
- [ ] Build works locally (`npm run build`)
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] All pages load correctly
- [ ] Dark/Light mode works
- [ ] Interactive diagrams render properly

## 🌐 Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Automatic HTTPS
- CDN included
- Free tier available

**Steps:**

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/ai-learning-journey.git
git push -u origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"
   - Done! Your site is live 🎉

3. **Custom Domain (Optional)**
   - Go to project settings
   - Add custom domain
   - Update DNS records
   - Vercel handles SSL automatically

**Environment Variables:**
- Not needed for this project
- If you add API features, add keys in Vercel dashboard

---

### Option 2: Netlify

**Steps:**

1. **Build the project**
```bash
npm run build
```

2. **Deploy via Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

Or drag/drop the `out` folder to [netlify.com/drop](https://app.netlify.com/drop)

**Settings:**
- Build command: `npm run build`
- Publish directory: `out`

---

### Option 3: GitHub Pages

**Steps:**

1. **Update `next.config.js`**
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/ai-learning-journey', // Your repo name
  images: { unoptimized: true }
}
```

2. **Build and deploy**
```bash
npm run build
# Install gh-pages
npm install -g gh-pages
# Deploy
gh-pages -d out
```

3. **Enable GitHub Pages**
   - Go to repository settings
   - Pages section
   - Select `gh-pages` branch
   - Your site will be at: `https://USERNAME.github.io/ai-learning-journey`

---

### Option 4: AWS Amplify

**Steps:**

1. **Push to GitHub** (same as above)

2. **AWS Amplify Console**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Connect GitHub repository
   - Build settings (auto-detected):
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: out
         files:
           - '**/*'
     ```
   - Deploy

---

### Option 5: CloudFlare Pages

**Steps:**

1. **Push to GitHub**

2. **CloudFlare Dashboard**
   - Go to Pages
   - Create project
   - Connect GitHub
   - Build settings:
     - Build command: `npm run build`
     - Build output: `out`
   - Deploy

---

## 🔧 Build Configuration

### Static Export (Current Setup)

```javascript
// next.config.js
module.exports = {
  output: 'export',
  images: { unoptimized: true }
}
```

**Pros:**
- Deploy anywhere (no server needed)
- Fast CDN delivery
- Simple setup

**Cons:**
- No API routes
- No server-side rendering

### Server-Side Rendering (Optional)

If you need API routes or SSR:

```javascript
// next.config.js
module.exports = {
  // Remove 'output: export'
  reactStrictMode: true
}
```

Deploy to Vercel or any Node.js host.

---

## 🎯 Performance Optimization

### 1. Image Optimization

If adding images:
```javascript
import Image from 'next/image'

<Image
  src="/image.png"
  width={800}
  height={600}
  alt="Description"
  loading="lazy"
/>
```

### 2. Code Splitting

Already implemented with Next.js dynamic imports.

### 3. CDN Caching

Headers for Vercel:
```json
// vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## 🔒 Security

### CSP Headers

Add to `next.config.js`:
```javascript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
        }
      ]
    }
  ]
}
```

---

## 📊 Analytics (Optional)

### Google Analytics

1. Get tracking ID
2. Add to `app/layout.tsx`:
```typescript
import Script from 'next/script'

<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
```

### Vercel Analytics

Built-in, just enable in dashboard.

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next out node_modules
npm install
npm run build
```

### Diagrams Not Rendering

Ensure these packages are installed:
- `reactflow`
- `mermaid`

### Dark Mode Not Working

Check `next-themes` is installed and provider is in layout.

### 404 on Routes

For static export, ensure:
- `output: 'export'` in next.config.js
- No dynamic routes
- No API routes

---

## 🎉 Post-Deployment

### Verification Checklist

- [ ] Homepage loads
- [ ] Journey page displays all chapters
- [ ] Architecture page shows diagrams
- [ ] Dark/Light toggle works
- [ ] Mobile responsive
- [ ] Code blocks have syntax highlighting
- [ ] Interactive diagrams are draggable
- [ ] Calculator tools work
- [ ] Navigation works

### Monitoring

Set up:
- Uptime monitoring (UptimeRobot)
- Error tracking (Sentry)
- Analytics (Google Analytics)

---

## 🔄 Updates

### Push Updates

```bash
git add .
git commit -m "Update content"
git push
```

Vercel/Netlify auto-deploy on push.

### Rollback

In Vercel/Netlify dashboard:
- Go to Deployments
- Select previous version
- Click "Promote to Production"

---

## 💰 Cost Estimate

**Free Tier:**
- Vercel: Unlimited personal projects
- Netlify: 100GB bandwidth/month
- GitHub Pages: Unlimited static sites
- CloudFlare Pages: Unlimited requests

**This project:** $0/month (stays in free tier)

---

## 📞 Support

Issues? Check:
1. Build logs in deployment platform
2. Browser console for errors
3. GitHub Issues for common problems

---

**🚀 You're ready to deploy! Choose your platform and launch your AI education site.**
