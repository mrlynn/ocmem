<p align="center">
  <img src="public/images/ocmem-trans-1024x1024.png" alt="ocmem logo" width="180" />
</p>

<h1 align="center">ocmem</h1>

<p align="center">
  <strong>Semantic Memory for AI Agents</strong><br/>
  MongoDB-backed persistent memory with Voyage AI embeddings
</p>

<p align="center">
  <a href="https://ocmem.com">Website</a> &middot;
  <a href="https://ocmem.com/docs">Docs</a> &middot;
  <a href="https://ocmem.com/docs/getting-started">Quick Start</a> &middot;
  <a href="https://ocmem.com/dashboard">Demo</a>
</p>

---

## What is ocmem?

**ocmem** (OpenClaw Memory) gives AI agents persistent, searchable memory. Instead of losing context between sessions, your agent stores facts, decisions, and preferences in MongoDB Atlas with vector embeddings from Voyage AI — enabling instant semantic recall.

**The problem:** AI agents forget everything between conversations. They repeat questions, lose context, and rebuild state from scratch every time.

**The solution:** A memory daemon that automatically extracts, stores, and retrieves relevant context using vector search — so your AI never forgets.

### Key Features

- **Semantic Memory** — Vector search with Voyage AI embeddings. Find memories by meaning, not keywords
- **MongoDB Storage** — Production-ready storage on MongoDB Atlas with automatic TTL expiration
- **Memory Chat** — Ask natural language questions about past conversations
- **Visual Timeline** — Browse and filter your agent's memory activity over time
- **Lifecycle Hooks** — Auto-extract facts, save session summaries, and inject context automatically
- **5-Minute Setup** — Install, configure, and start storing memories immediately

---

## Quick Start

```bash
# Install the CLI
npm install -g @openclaw-memory/cli

# Initialize configuration
ocmem init

# Start the memory daemon
ocmem start
```

The daemon runs at `http://localhost:3456`. Store your first memory:

```bash
curl -X POST http://localhost:3456/api/memories \
  -H "Content-Type: application/json" \
  -d '{
    "content": "The user prefers dark mode and uses VS Code.",
    "metadata": { "source": "onboarding", "agent": "assistant" }
  }'
```

Search by meaning:

```bash
curl "http://localhost:3456/api/memories/search?q=editor+preferences&limit=5"
```

See the full [Getting Started guide](https://ocmem.com/docs/getting-started) for prerequisites and configuration.

---

## Documentation

| Page | Description |
|------|-------------|
| [Getting Started](https://ocmem.com/docs/getting-started) | Install, configure MongoDB Atlas, and store your first memory |
| [API Reference](https://ocmem.com/docs/api) | Complete REST API — memories, search, chat, and health endpoints |
| [Hooks](https://ocmem.com/docs/hooks) | Lifecycle hooks: auto-remember, session-to-memory, memory-bootstrap, memory-enriched-tools |
| [Examples](https://ocmem.com/docs/examples) | Real-world patterns: personal assistants, customer support, workflow automation |

---

## Memory Hooks

ocmem includes four lifecycle hooks that make memory **automatic**:

| Hook | Event | What Happens |
|------|-------|--------------|
| `auto-remember` | `message:sent` | Extracts facts, decisions, and preferences from agent responses |
| `session-to-memory` | `command:new` | Summarizes ending sessions and stores them as searchable memory |
| `memory-bootstrap` | `agent:bootstrap` | Injects relevant memories into agent context at startup |
| `memory-enriched-tools` | `tool_result_persist` | Appends related memories to tool results |

All hooks fail silently if the daemon is unreachable — they never break the agent.

---

## Architecture

```
Agent Lifecycle                    Memory Hooks                       Daemon
─────────────────                  ────────────                       ──────

agent:bootstrap  ───────────►  memory-bootstrap  ──── GET /recall ──► MongoDB
                               (inject context)   ◄── memories ──────

message:sent     ───────────►  auto-remember     ──── POST /remember ► MongoDB
                               (extract facts)

tool_result_     ───────────►  memory-enriched-  ──── GET /recall ──► MongoDB
  persist                        tools            ◄── memories ──────
                               (annotate results)

command:new      ───────────►  session-to-memory ──── POST /remember ► MongoDB
                               (save summary)
```

---

## This Repository

This repo contains the **marketing site and documentation** for ocmem, hosted at [ocmem.com](https://ocmem.com).

### Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI:** [Material UI 7](https://mui.com/) + [Emotion](https://emotion.sh/)
- **Typography:** Inter (body), JetBrains Mono (code)
- **Theme:** MongoDB brand colors — dark mode default with light toggle
- **Deployment:** [Vercel](https://vercel.com/)
- **Package Manager:** pnpm

### Project Structure

```
ocmem/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (theme, header, footer)
│   ├── page.tsx                # Landing page
│   ├── dashboard/page.tsx      # Demo dashboard with sample data
│   └── docs/                   # Documentation section
│       ├── layout.tsx          # Docs sidebar layout
│       ├── page.tsx            # Docs hub
│       ├── getting-started/    # Quick start guide
│       ├── api/                # REST API reference
│       ├── hooks/              # Memory hooks documentation
│       └── examples/           # Use case examples
├── components/                 # React components
│   ├── Header.tsx              # Sticky nav with mobile drawer
│   ├── Footer.tsx              # Footer with MongoDB branding
│   ├── Hero.tsx                # Landing hero section
│   ├── Features.tsx            # 6-card feature grid
│   ├── ProblemSolution.tsx     # Before/after comparison
│   ├── UseCases.tsx            # 3 use case cards
│   ├── Installation.tsx        # Terminal code block
│   └── CodeBlock.tsx           # Reusable code block with copy
├── lib/                        # Shared utilities
│   ├── theme.ts                # MongoDB brand dark/light themes
│   └── ThemeContext.tsx         # Theme toggle provider
├── content/docs/               # Markdown source content
├── public/images/              # Logo, icons, screenshots
├── next.config.ts
├── tsconfig.json
└── package.json
```

### Development

```bash
# Install dependencies
pnpm install

# Start dev server (http://localhost:3000)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start
```

### Design System

The site uses MongoDB brand colors with a dark-first theme:

| Token | Value | Usage |
|-------|-------|-------|
| Spring Green | `#00ED64` | Primary actions, accents, highlights |
| Dark Spring Green | `#00684A` | Primary hover states (light mode primary) |
| Slate Blue | `#001E2B` | Dark mode background, light mode text |
| White | `#FFFFFF` | Dark mode text, light mode background |

---

## Powered By

<p>
  <img src="public/images/mongodb-icon.svg" alt="MongoDB" height="30" style="vertical-align: middle;" />
  &nbsp;&nbsp;Built on <a href="https://www.mongodb.com/atlas">MongoDB Atlas</a> with Vector Search
</p>

---

## License

ISC

---

<p align="center">
  <a href="https://ocmem.com">ocmem.com</a>
</p>
