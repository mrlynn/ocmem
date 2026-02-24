import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Alert from "@mui/material/Alert";
import type { Metadata } from "next";
import CodeBlock from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Architecture - ocmem",
  description: "Complete system architecture and data flow diagrams for OpenClaw Memory.",
};

export default function ArchitecturePage() {
  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 2 }}>
        System Architecture
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
        Visual overview of OpenClaw Memory's multi-phase architecture, data flow, and technology stack.
      </Typography>

      {/* High-Level Overview */}
      <Card elevation={0} sx={{ mb: 6 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            High-Level Architecture
          </Typography>
          <CodeBlock language="text">{`┌─────────────────────────────────────────────────────────────┐
│                      AI AGENT INPUT                         │
│  Conversations, API Calls, Lifecycle Hooks                  │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              PHASE 1: FOUNDATION HARDENING                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ Confidence   │  │Contradiction │  │   Temporal   │     │
│  │  Scoring     │  │  Detection   │  │    Decay     │     │
│  │  (0.5-0.9)   │  │  (Heuristic) │  │ (4 Layers)   │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│            PHASE 2: REFLECTION PIPELINE                     │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ │
│  │ 1  │→│ 2  │→│ 3  │→│ 4  │→│ 5  │→│ 6  │→│ 7  │→│ 8  │ │
│  │Extr│ │Dedu│ │Conf│ │Clas│ │Conf│ │Deca│ │Laye│ │Grap│ │
│  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ │
│                              ┌────┐                         │
│                              │ 9  │                         │
│                              │Enti│                         │
│                              └────┘                         │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   MONGODB ATLAS STORAGE                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │ memories │ │ episodes │ │  jobs    │ │  edges   │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│  ┌──────────┐ ┌──────────┐                                 │
│  │ entities │ │ clusters │                                 │
│  └──────────┘ └──────────┘                                 │
└────────────────────────┬────────────────────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
         ▼               ▼               ▼
┌────────────────┐ ┌────────────┐ ┌────────────┐
│   PHASE 3:     │ │  PHASE 4:  │ │ RETRIEVAL  │
│     GRAPH      │ │ CLUSTERING │ │   LAYER    │
│ 7 Edge Types   │ │  K-Means   │ │  Voyage    │
│ BFS Traversal  │ │  k=20      │ │ Embeddings │
└────────────────┘ └────────────┘ └────────────┘
         │               │               │
         └───────────────┴───────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                  WEB DASHBOARD (6 Pages)                    │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                      AI AGENT OUTPUT                        │
│     Enhanced Context, Ranked Memories, Graph Insights       │
└─────────────────────────────────────────────────────────────┘`}</CodeBlock>
        </CardContent>
      </Card>

      <Divider sx={{ my: 6 }} />

      {/* Technology Stack */}
      <Typography variant="h3" sx={{ mb: 3 }}>
        Technology Stack
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 6 }}>
        <Card elevation={0}>
          <CardContent>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Frontend
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              <li>
                <Typography variant="body2">Next.js 15.5.12</Typography>
              </li>
              <li>
                <Typography variant="body2">React 19</Typography>
              </li>
              <li>
                <Typography variant="body2">Material UI (LeafyGreen)</Typography>
              </li>
              <li>
                <Typography variant="body2">ReactFlow (graphs)</Typography>
              </li>
            </Box>
          </CardContent>
        </Card>

        <Card elevation={0}>
          <CardContent>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Backend
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              <li>
                <Typography variant="body2">Node.js 18+</Typography>
              </li>
              <li>
                <Typography variant="body2">Express.js</Typography>
              </li>
              <li>
                <Typography variant="body2">TypeScript</Typography>
              </li>
              <li>
                <Typography variant="body2">35+ REST endpoints</Typography>
              </li>
            </Box>
          </CardContent>
        </Card>

        <Card elevation={0}>
          <CardContent>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Database
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              <li>
                <Typography variant="body2">MongoDB 8.2.5</Typography>
              </li>
              <li>
                <Typography variant="body2">6 Collections</Typography>
              </li>
              <li>
                <Typography variant="body2">Vector Search Indexes</Typography>
              </li>
              <li>
                <Typography variant="body2">TTL Indexes</Typography>
              </li>
            </Box>
          </CardContent>
        </Card>

        <Card elevation={0}>
          <CardContent>
            <Typography variant="h4" sx={{ mb: 2 }}>
              AI/ML
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              <li>
                <Typography variant="body2">Voyage AI (voyage-3, 1024 dims)</Typography>
              </li>
              <li>
                <Typography variant="body2">K-Means clustering (k=20)</Typography>
              </li>
              <li>
                <Typography variant="body2">Cosine similarity search</Typography>
              </li>
              <li>
                <Typography variant="body2">Optional: Ollama (LLM)</Typography>
              </li>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Data Flow */}
      <Typography variant="h3" sx={{ mb: 3 }}>
        Memory Data Flow
      </Typography>

      <Card elevation={0} sx={{ mb: 6 }}>
        <CardContent sx={{ p: 4 }}>
          <CodeBlock language="text">{`Agent Conversation
         │
         ▼
  [auto-remember hook]
         │
         ▼
  Extract Facts
  (Heuristics)
         │
         ▼
  /remember API
         │
         ▼
  ┌─────────────┐
  │ Memory Doc  │  ◄────── Voyage AI
  │   {         │          (voyage-3)
  │  agentId    │          1024 dims
  │  text       │
  │  embedding  │
  │  confidence │
  │  }          │
  └──────┬──────┘
         │
         ▼
  Contradiction Check
         │
         ▼
  Layer Assignment
  (Working → Episodic
   → Semantic → Archival)
         │
         ▼
  ┌─────────────────┐
  │ Reflection Job  │ (Async)
  │  9 Stages       │
  └────────┬────────┘
           │
           ▼
   Graph Relationships
           │
           ▼
   K-Means Clustering
           │
           ▼
   Search Query
           │
           ▼
   Vector Similarity
           │
           ▼
   Ranked Results (0-1)
           │
           ▼
   Agent Context`}</CodeBlock>
        </CardContent>
      </Card>

      <Divider sx={{ my: 6 }} />

      {/* Memory Lifecycle */}
      <Typography variant="h3" sx={{ mb: 3 }}>
        Memory Lifecycle
      </Typography>

      <Card elevation={0} sx={{ mb: 6 }}>
        <CardContent sx={{ p: 4 }}>
          <CodeBlock language="text">{`CREATION
    │
    ▼
┌───────────────┐
│   Working     │  Confidence: 0.50-0.70
│  Decay: 0.05  │  TTL: 7 days
└───────┬───────┘
        │ Reinforcement (3+ mentions)
        ▼
┌───────────────┐
│  Episodic     │  Confidence: 0.70-0.80
│  Decay: 0.015 │  TTL: 30 days
└───────┬───────┘
        │ Reinforcement (5+ mentions)
        ▼
┌───────────────┐
│  Semantic     │  Confidence: 0.80-0.90
│ Decay: 0.003  │  TTL: 90 days
└───────┬───────┘
        │ Reinforcement (10+ mentions)
        ▼
┌───────────────┐
│  Archival     │  Confidence: 0.90+
│ Decay: 0.001  │  TTL: 365 days
└───────┬───────┘
        │ Time + No Use
        ▼
┌───────────────┐
│  Expiration   │  Strength < 0.3
│   Candidate   │
└───────────────┘
    │       │
 Rescue   Delete`}</CodeBlock>
        </CardContent>
      </Card>

      <Divider sx={{ my: 6 }} />

      {/* Deployment */}
      <Typography variant="h3" sx={{ mb: 3 }}>
        Deployment Architecture
      </Typography>

      <Card elevation={0} sx={{ mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <CodeBlock language="text">{`┌─────────────────────────────────────────┐
│         OpenClaw Gateway                │
│      (localhost:7751 or configured)     │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│      Memory Daemon (Port 7654)          │
│  ┌───────────────────────────────┐     │
│  │  HTTP API (Express.js)        │     │
│  │  35+ Endpoints                │     │
│  └──────────┬────────────────────┘     │
│             │                           │
│  ┌──────────┴────────────────────┐     │
│  │  Reflection Pipeline          │     │
│  │  (Async Job Queue)            │     │
│  └──────────┬────────────────────┘     │
│             │                           │
│  ┌──────────┴────────────────────┐     │
│  │  Graph Service                │     │
│  │  (BFS Traversal)              │     │
│  └──────────┬────────────────────┘     │
│             │                           │
│  ┌──────────┴────────────────────┐     │
│  │  Clustering Service           │     │
│  │  (K-Means)                    │     │
│  └───────────────────────────────┘     │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│    MongoDB Atlas (Cloud or Local)       │
│  ┌───────────────────────────────┐     │
│  │  6 Collections:               │     │
│  │  - memories                   │     │
│  │  - episodes                   │     │
│  │  - reflection_jobs            │     │
│  │  - pending_edges              │     │
│  │  - entities                   │     │
│  │  - clusters                   │     │
│  └───────────────────────────────┘     │
└─────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│      Voyage AI API (Embeddings)         │
│  voyage-3 model, 1024 dimensions       │
│  ~$0.02 per 1M tokens                  │
└─────────────────────────────────────────┘`}</CodeBlock>
        </CardContent>
      </Card>

      <Alert severity="info" sx={{ mb: 6 }}>
        <Typography variant="body2">
          <strong>Web Dashboard:</strong> Optionally runs on port 3002 for visual management
          (6 pages: Dashboard, Browser, Graph, Conflicts, Expiration, Operations).
        </Typography>
      </Alert>

      <Divider sx={{ my: 6 }} />

      {/* Performance */}
      <Typography variant="h3" sx={{ mb: 3 }}>
        Performance Characteristics
      </Typography>

      <Card elevation={0}>
        <CardContent sx={{ p: 4 }}>
          <Box component="table" sx={{ width: "100%", "& td, & th": { py: 1, px: 2 } }}>
            <thead>
              <tr>
                <th>
                  <Typography variant="body2" fontWeight={600}>
                    Operation
                  </Typography>
                </th>
                <th>
                  <Typography variant="body2" fontWeight={600}>
                    Target
                  </Typography>
                </th>
                <th>
                  <Typography variant="body2" fontWeight={600}>
                    Actual
                  </Typography>
                </th>
                <th>
                  <Typography variant="body2" fontWeight={600}>
                    Status
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Typography variant="body2">Recall Latency (p95)</Typography>
                </td>
                <td>
                  <Typography variant="body2">{"<"}2000ms</Typography>
                </td>
                <td>
                  <Typography variant="body2" color="success.main" fontWeight={600}>
                    116ms
                  </Typography>
                </td>
                <td>
                  <Typography variant="body2">✅ 17x better</Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body2">Sequential Insert</Typography>
                </td>
                <td>
                  <Typography variant="body2">{">"}5 ops/s</Typography>
                </td>
                <td>
                  <Typography variant="body2" color="success.main" fontWeight={600}>
                    6.6/s
                  </Typography>
                </td>
                <td>
                  <Typography variant="body2">✅ 32% better</Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body2">Concurrent (50 ops)</Typography>
                </td>
                <td>
                  <Typography variant="body2">{"<"}20s</Typography>
                </td>
                <td>
                  <Typography variant="body2" color="success.main" fontWeight={600}>
                    3.6s
                  </Typography>
                </td>
                <td>
                  <Typography variant="body2">✅ 5.6x better</Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body2">Clustering (100 mem)</Typography>
                </td>
                <td>
                  <Typography variant="body2">{"<"}30s</Typography>
                </td>
                <td>
                  <Typography variant="body2" color="success.main" fontWeight={600}>
                    {"<"}10s
                  </Typography>
                </td>
                <td>
                  <Typography variant="body2">✅ 3x better</Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body2">Graph Traversal (d=5)</Typography>
                </td>
                <td>
                  <Typography variant="body2">{"<"}1000ms</Typography>
                </td>
                <td>
                  <Typography variant="body2" color="success.main" fontWeight={600}>
                    {"<"}500ms
                  </Typography>
                </td>
                <td>
                  <Typography variant="body2">✅ 2x better</Typography>
                </td>
              </tr>
            </tbody>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
