# ocmem.com - Marketing Site Plan

Landing page and marketing site for OpenClaw Memory (ocmem).

---

## 🎯 Goals

1. **Explain the value** - What is OpenClaw Memory and why use it?
2. **Show, don't tell** - Live demos, screenshots, use cases
3. **Easy onboarding** - Clear installation path (5-minute quick start)
4. **Developer-focused** - Technical but approachable
5. **MongoDB-branded** - Showcase MongoDB integration

---

## 📐 Site Structure

### Pages

```
/                       Landing page (hero, features, CTA)
/docs                   Documentation hub
/docs/getting-started   Quick start guide
/docs/api               API reference
/docs/examples          Use cases and examples
/dashboard              Live demo (read-only or sandbox)
/pricing                Free + Enterprise (future)
/blog                   Updates and tutorials (future)
```

### Landing Page Sections

1. **Hero**
   - "Give Your AI Agent a Memory That Actually Remembers"
   - Subhead: "MongoDB-backed semantic memory for AI agents and workflows"
   - CTA: "Get Started" → `/docs/getting-started`
   - Secondary CTA: "View Demo" → `/dashboard`
   - Visual: Animated memory timeline or chat interface

2. **Problem/Solution**
   - **Problem**: AI agents forget context, repeat questions, rebuild state
   - **Solution**: Persistent semantic memory with vector search
   - Visual: Before/after comparison

3. **Features** (3-column grid)
   - 🧠 **Semantic Memory** - Vector search with Voyage AI embeddings
   - 💾 **MongoDB Storage** - Scalable, production-ready, TTL auto-expiration
   - 🔍 **Memory Chat** - Ask questions about past conversations
   - 📊 **Visual Timeline** - See memory activity over time
   - 🚀 **5-Minute Setup** - npm install, configure, run
   - 🔌 **OpenClaw Integration** - Built-in plugin for OpenClaw agents

4. **Use Cases** (3 cards)
   - **Personal Assistants** - Remember preferences, decisions, context
   - **Customer Support** - Recall prior conversations, build relationship
   - **Workflow Automation** - Track job history, decisions, blockers

5. **Demo/Showcase**
   - Live embedded dashboard (read-only sandbox)
   - Or: Video walkthrough
   - Or: Interactive code playground

6. **Installation** (copy-paste friendly)

   ```bash
   npm install -g @openclaw-memory/cli
   ocmem init
   ocmem start
   ```

7. **Testimonials/Stats** (once you have users)
   - "Reduced API costs by 40% with prompt caching"
   - "5,000+ memories stored, < 100ms search"

8. **Powered by MongoDB** (footer/badge)
   - MongoDB leaf logo
   - "Built on MongoDB Atlas"
   - Link to MongoDB docs

---

## 🎨 Design Direction

**Visual Style:**

- MongoDB brand colors (Spring Green #00ED64, Slate Blue #001E2B)
- Material Design (consistent with dashboard)
- Dark mode support (match MongoDB docs)
- Clean, technical, approachable

**Typography:**

- Headings: Euclid Circular (MongoDB brand font)
- Body: Inter or system fonts
- Code: JetBrains Mono or Monaco

**Components:**

- LeafyGreen UI (MongoDB's design system)
- Syntax highlighting for code blocks (Prism.js or Shiki)
- Animated demos (Lottie or CSS animations)

---

## 🛠️ Tech Stack

**Framework:** Next.js 15 (App Router)

- Static export for fast hosting
- Server components for docs
- Incremental Static Regeneration for blog

**Styling:** Material UI + MongoDB brand theme

- Reuse styles from `/packages/web`
- Add marketing-specific components (Hero, Feature cards)

**Deployment:** Vercel

- Custom domain: ocmem.com
- Automatic deploys from main branch
- Edge caching for docs

**Analytics:** Plausible or Simple Analytics

- Privacy-friendly
- Track: page views, install button clicks, demo interactions

---

## 📦 Project Setup

### Directory Structure

```
openclaw-memory-marketing/
├── app/
│   ├── layout.tsx           # Root layout (MongoDB theme)
│   ├── page.tsx             # Landing page
│   ├── docs/
│   │   ├── layout.tsx       # Docs layout (sidebar)
│   │   ├── page.tsx         # Docs hub
│   │   ├── getting-started/
│   │   ├── api/
│   │   └── examples/
│   ├── dashboard/
│   │   └── page.tsx         # Embedded demo dashboard
│   └── blog/
│       └── [slug]/
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── UseCases.tsx
│   ├── Installation.tsx
│   └── Footer.tsx
├── content/
│   ├── docs/
│   │   ├── getting-started.md
│   │   ├── api-reference.md
│   │   └── examples.md
│   └── blog/
├── public/
│   ├── images/
│   ├── videos/
│   └── screenshots/
└── lib/
    ├── mongodb-theme.ts     # Brand colors, typography
    └── analytics.ts
```

### Create New Project

```bash
cd ~/code
npx create-next-app@latest openclaw-memory-marketing --typescript --app --use-pnpm

cd openclaw-memory-marketing

# Install Material UI + LeafyGreen
pnpm add @mui/material @emotion/react @emotion/styled
pnpm add @leafygreen-ui/typography @leafygreen-ui/button @leafygreen-ui/card

# Install markdown support
pnpm add next-mdx-remote gray-matter
pnpm add -D @types/mdx
```

---

## 🚀 Phase 1: MVP (Week 2)

**Goal:** Launch ocmem.com with core pages and working demo.

### Week 2 Day 1-2: Landing Page

- [x] Hero section (headline, CTA, visual)
- [x] Features grid (6 cards)
- [x] Installation code block
- [x] Footer (MongoDB branding, links)

### Week 2 Day 3-4: Documentation

- [x] Docs layout (sidebar navigation)
- [x] Getting Started page (from INSTALL.md)
- [x] API Reference (from daemon routes)
- [x] Examples page (3 use cases)

### Week 2 Day 5: Demo

- [x] Embed dashboard in iframe or standalone page
- [x] Read-only sandbox mode
- [x] Sample memories pre-loaded

### Week 2 Day 6-7: Polish & Deploy

- [x] MongoDB theme refinement
- [x] Mobile responsive
- [x] SEO metadata
- [x] Deploy to Vercel
- [x] Point ocmem.com to Vercel

---

## 📊 Success Metrics

**Acquisition:**

- Unique visitors to ocmem.com
- "Get Started" button clicks
- NPM download count (from npmjs.com)

**Activation:**

- CLI installs (`npm install -g @openclaw-memory/cli`)
- Daemon starts (track via telemetry opt-in)
- First memory saved

**Retention:**

- Weekly active users (daemon running)
- Returning visitors to docs
- GitHub stars

**Revenue (Future):**

- Enterprise inquiries
- MongoDB Atlas referrals

---

## 🎯 Content Strategy

### Blog Topics (Future)

1. **"Why Your AI Agent Needs a Better Memory"**
   - Problem: Context loss, repetitive conversations
   - Solution: Semantic memory with MongoDB + Voyage

2. **"Building a Personal Assistant That Remembers"**
   - Tutorial: Set up OpenClaw Memory for daily use
   - Use cases: Calendar, email, notes

3. **"Vector Search vs. Full-Text Search for Memory"**
   - Technical deep-dive: Why embeddings > keywords
   - Benchmarks: Voyage vs. OpenAI embeddings

4. **"Reducing AI Costs with Prompt Caching"**
   - Case study: 40% cost reduction with persistent memory
   - MongoDB TTL for automatic cleanup

5. **"Memory Hydration: File-Based Backups for AI"**
   - Two-tier strategy: MongoDB (hot) + Files (cold)
   - Recovery from production incidents

---

## 🔧 Implementation Checklist

### Domain Setup

- [x] Register ocmem.com
- [ ] Add to Vercel
- [ ] Configure DNS (CNAME to Vercel)
- [ ] SSL certificate (automatic with Vercel)

### Landing Page

- [ ] Hero component
- [ ] Features grid
- [ ] Use cases section
- [ ] Installation code block
- [ ] Footer with MongoDB branding

### Documentation

- [ ] Docs layout + sidebar
- [ ] Getting Started (INSTALL.md → markdown)
- [ ] API Reference (generate from OpenAPI spec)
- [ ] Examples page (3 use cases)

### Demo Dashboard

- [ ] Clone `/packages/web` components
- [ ] Add read-only mode
- [ ] Pre-load sample memories
- [ ] Embed in `/dashboard` route

### SEO & Analytics

- [ ] Meta tags (title, description, OG image)
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Plausible Analytics setup

### Deployment

- [ ] Connect GitHub repo to Vercel
- [ ] Configure build settings
- [ ] Set environment variables
- [ ] Test deployment
- [ ] Point ocmem.com to Vercel

---

## 🎨 Visual Assets Needed

1. **Hero Visual**
   - Option A: Animated memory timeline
   - Option B: Chat interface showing memory recall
   - Option C: MongoDB + Voyage logos + code

2. **Feature Icons**
   - Brain (semantic memory)
   - Database (MongoDB)
   - Search (vector search)
   - Timeline (activity)
   - Rocket (setup)
   - Plug (integration)

3. **Screenshots**
   - Dashboard home (memory browser)
   - Timeline view
   - Memory Chat interface
   - CLI commands in terminal

4. **OG Image** (1200x630)
   - "OpenClaw Memory" headline
   - MongoDB + Voyage logos
   - "Semantic Memory for AI Agents"

---

## 💰 Monetization (Future)

**Free Tier:**

- Unlimited memories
- MongoDB Atlas (user-provided)
- Community support (GitHub Issues)

**Pro Tier ($29/month):**

- Hosted daemon (no self-hosting)
- Atlas database included (5GB)
- Priority support
- Advanced analytics

**Enterprise:**

- On-premise deployment
- Custom integrations
- SLA + dedicated support
- Training & onboarding

---

## 📞 Next Steps

1. **Create marketing repo**

   ```bash
   cd ~/code
   npx create-next-app openclaw-memory-marketing
   ```

2. **Set up MongoDB theme**
   - Import LeafyGreen components
   - Define brand colors (BRAND.md)
   - Create layout components

3. **Build landing page**
   - Hero, Features, Installation
   - Reuse existing screenshots

4. **Deploy to Vercel**
   - Connect repo
   - Configure custom domain

5. **Point ocmem.com**
   - Add CNAME to Vercel
   - Test SSL

**Want me to start building the marketing site?** 🚀

