# OpenClaw Memory Architecture

## System Flow Diagram (Mermaid)

```mermaid
graph TB
    subgraph "Input Layer"
        A[AI Agent Conversations] --> B[Memory Hooks]
        C[Direct API Calls] --> D[HTTP Endpoints]
    end

    subgraph "Processing Layer - Phase 1: Foundation"
        B --> E[Auto-Remember Hook]
        D --> F[/remember Endpoint]
        E --> G[Memory Storage]
        F --> G
        G --> H[Confidence Scoring]
        H --> I[Contradiction Detection]
        I --> J[Temporal Decay]
        J --> K[Layer Assignment]
    end

    subgraph "Processing Layer - Phase 2: Reflection Pipeline"
        K --> L[Trigger Reflection]
        L --> M[Stage 1: Extract Facts]
        M --> N[Stage 2: Deduplicate]
        N --> O[Stage 3: Conflict Check]
        O --> P[Stage 4: Classify]
        P --> Q[Stage 5: Confidence Update]
        Q --> R[Stage 6: Decay Pass]
        R --> S[Stage 7: Layer Promote]
        S --> T[Stage 8: Graph Link]
        T --> U[Stage 9: Entity Update]
    end

    subgraph "Storage Layer"
        K --> V[(MongoDB Atlas)]
        U --> V
        V --> W[memories collection]
        V --> X[episodes collection]
        V --> Y[reflection_jobs collection]
        V --> Z[pending_edges collection]
        V --> AA[entities collection]
        V --> AB[clusters collection]
    end

    subgraph "Processing Layer - Phase 3: Graph Relationships"
        T --> AC[Graph Service]
        AC --> AD[Edge Types]
        AD --> AE[SUPPORTS]
        AD --> AF[CONTRADICTS]
        AD --> AG[DERIVES_FROM]
        AD --> AH[CO_OCCURS]
        AD --> AI[PRECEDES]
        AD --> AJ[CAUSES]
        AD --> AK[MENTIONS_ENTITY]
        AC --> AL[BFS Traversal]
    end

    subgraph "Processing Layer - Phase 4: Semantic Clustering"
        V --> AM[Clustering Service]
        AM --> AN[K-Means k=20]
        AN --> AO[Dimension Reduction]
        AO --> AP[Auto-Labeling]
        AP --> AQ[Entity Extraction]
    end

    subgraph "Retrieval Layer"
        V --> AR[/recall Endpoint]
        AR --> AS[Voyage AI Embeddings]
        AS --> AT[Vector Similarity Search]
        AT --> AU[Cluster Routing]
        AU --> AV[Ranked Results]
    end

    subgraph "Visualization Layer"
        V --> AW[Web Dashboard localhost:3002]
        AW --> AX[Dashboard Overview]
        AW --> AY[Memory Browser]
        AW --> AZ[Graph Visualizer]
        AW --> BA[Conflict Resolution]
        AW --> BB[Expiration Queue]
        AW --> BC[Operations]
    end

    subgraph "Output Layer"
        AV --> BD[AI Agent Context]
        AL --> BD
        AQ --> BD
        BD --> BE[Enhanced Responses]
    end

    style V fill:#00684A
    style AS fill:#00ED64
    style L fill:#5C9EFF
    style AC fill:#FFC555
    style AM fill:#C77DFF
    style AW fill:#001E2B
```

## Simplified Architecture View

```
┌─────────────────────────────────────────────────────────────┐
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
│  │  (300)   │ │   (42)   │ │   (15)   │ │   (89)   │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│  ┌──────────┐ ┌──────────┐                                 │
│  │ entities │ │ clusters │                                 │
│  │   (67)   │ │   (20)   │                                 │
│  └──────────┘ └──────────┘                                 │
└────────────────────────┬────────────────────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
         ▼               ▼               ▼
┌────────────────┐ ┌────────────┐ ┌────────────┐
│   PHASE 3:     │ │  PHASE 4:  │ │ RETRIEVAL  │
│     GRAPH      │ │ CLUSTERING │ │   LAYER    │
│                │ │            │ │            │
│ 7 Edge Types   │ │  K-Means   │ │  Voyage    │
│ BFS Traversal  │ │  k=20      │ │ Embeddings │
│ ReactFlow UI   │ │ Auto-Label │ │ 116ms avg  │
└────────────────┘ └────────────┘ └────────────┘
         │               │               │
         └───────────────┴───────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                  WEB DASHBOARD (6 Pages)                    │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐                │
│  │Dashboard  │ │  Browser  │ │   Graph   │                │
│  │ Overview  │ │  Search   │ │Visualizer │                │
│  └───────────┘ └───────────┘ └───────────┘                │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐                │
│  │ Conflicts │ │Expiration │ │Operations │                │
│  │Resolution │ │   Queue   │ │  Health   │                │
│  └───────────┘ └───────────┘ └───────────┘                │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                      AI AGENT OUTPUT                        │
│     Enhanced Context, Ranked Memories, Graph Insights       │
└─────────────────────────────────────────────────────────────┘
```

## Technology Stack

```
┌─────────────────────────────────────────────────────────────┐
│ Frontend                                                    │
│  - Next.js 15.5.12                                         │
│  - React 19                                                │
│  - Material UI (LeafyGreen components)                     │
│  - ReactFlow (graph visualization)                         │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│ Backend                                                     │
│  - Node.js 18+                                             │
│  - Express.js (HTTP API)                                   │
│  - TypeScript                                              │
│  - 35+ REST endpoints                                      │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│ Database                                                    │
│  - MongoDB 8.2.5                                           │
│  - 6 Collections                                           │
│  - Vector Search Indexes                                   │
│  - TTL Indexes (auto-expiration)                           │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│ AI/ML                                                       │
│  - Voyage AI (voyage-3 embeddings, 1024 dims)              │
│  - K-Means clustering (k=20)                               │
│  - Cosine similarity search                                │
│  - Optional: LLM (Ollama) for explanations                 │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow Diagram

```
 Agent Conversation
         │
         ▼
  [auto-remember hook]
         │
         ▼
  Extract Facts ──────────────┐
  (Heuristics)                │
         │                    │
         ▼                    │
  /remember API               │
         │                    │
         ▼                    │
  ┌─────────────┐             │
  │ Memory Doc  │             │
  │   {         │             │
  │  agentId    │             │
  │  text       │             │
  │  tags[]     │             │
  │  embedding  │◄────────────┘ Voyage AI
  │  confidence │               (voyage-3)
  │  strength   │               1024 dims
  │  layer      │
  │  }          │
  └──────┬──────┘
         │
         ▼
  Contradiction Check
         │
         ├─── No Conflict ────────┐
         │                        │
         ├─── Conflict Found ────►│ Bidirectional Marking
         │                        │ Confidence Penalty (-0.30)
         │                        │
         ▼                        ▼
  Layer Assignment          MongoDB Storage
  (Working/Episodic/           memories
   Semantic/Archival)          collection
         │
         ▼
  ┌─────────────────┐
  │ Reflection Job  │ (Async, Non-blocking)
  │  9 Stages:      │
  │  1. Extract     │
  │  2. Dedupe      │
  │  3. Conflict    │
  │  4. Classify    │
  │  5. Confidence  │
  │  6. Decay       │
  │  7. Layer       │
  │  8. Graph       │
  │  9. Entity      │
  └────────┬────────┘
           │
           ▼
   Graph Relationships
   (SUPPORTS, CONTRADICTS,
    DERIVES_FROM, etc.)
           │
           ▼
   Pending Edges Queue
   (Human approval)
           │
           ▼
   Applied Edges
           │
           ▼
   Knowledge Graph ◄──────┐
           │              │
           ▼              │
   K-Means Clustering     │
   (Semantic grouping)    │
           │              │
           ▼              │
   Search Query           │
           │              │
           ▼              │
   Cluster Routing        │
   (Fast filtering)       │
           │              │
           ▼              │
   Vector Similarity ─────┘
   (Cosine distance)
           │
           ▼
   Ranked Results
   (score 0-1)
           │
           ▼
   Agent Context
   (Enhanced with
    graph + clusters)
```

## Memory Lifecycle

```
┌──────────────────────────────────────────────────────────┐
│                    MEMORY CREATION                       │
└────────────────┬─────────────────────────────────────────┘
                 │
                 ▼
         ┌───────────────┐
         │   Working     │  Confidence: 0.50-0.70
         │  Decay: 0.05  │  TTL: 7 days
         └───────┬───────┘  Fast decay, temporary
                 │
   Reinforcement │ (3+ mentions)
                 ▼
         ┌───────────────┐
         │  Episodic     │  Confidence: 0.70-0.80
         │  Decay: 0.015 │  TTL: 30 days
         └───────┬───────┘  Medium decay, session-specific
                 │
   Reinforcement │ (5+ mentions, high confidence)
                 ▼
         ┌───────────────┐
         │  Semantic     │  Confidence: 0.80-0.90
         │ Decay: 0.003  │  TTL: 90 days
         └───────┬───────┘  Slow decay, long-term knowledge
                 │
   Reinforcement │ (10+ mentions, very high confidence)
                 ▼
         ┌───────────────┐
         │  Archival     │  Confidence: 0.90+
         │ Decay: 0.001  │  TTL: 365 days
         └───────┬───────┘  Minimal decay, permanent
                 │
  Time + No Use  │
                 ▼
         ┌───────────────┐
         │  Expiration   │  Strength < 0.3
         │   Candidate   │  Flagged for deletion
         └───────┬───────┘
                 │
   Rescue        │  Auto-delete
   (Manual)      │  (After grace period)
         │       │
         ▼       ▼
   Promote   Deleted
   Archival
```

## Performance Characteristics

```
Operation              | Target    | Actual  | Status
-----------------------|-----------|---------|--------
Recall Latency (p95)   | <2000ms   | 116ms   | ✅ 17x better
Sequential Insert      | >5 ops/s  | 6.6/s   | ✅ 32% better
Concurrent (50 ops)    | <20s      | 3.6s    | ✅ 5.6x better
Clustering (100 mem)   | <30s      | <10s    | ✅ 3x better
Graph Traversal (d=5)  | <1000ms   | <500ms  | ✅ 2x better
```

## Deployment Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    OpenClaw Gateway                     │
│  (localhost:7751 or configured port)                   │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│               Memory Daemon (Port 7654)                 │
│  ┌────────────────────────────────────────────────┐    │
│  │  HTTP API (Express.js)                         │    │
│  │  35+ Endpoints                                 │    │
│  └───────────────────┬────────────────────────────┘    │
│                      │                                  │
│  ┌───────────────────┴────────────────────────────┐    │
│  │  Reflection Pipeline (Async Job Queue)        │    │
│  └───────────────────┬────────────────────────────┘    │
│                      │                                  │
│  ┌───────────────────┴────────────────────────────┐    │
│  │  Graph Service (BFS Traversal)                 │    │
│  └───────────────────┬────────────────────────────┘    │
│                      │                                  │
│  ┌───────────────────┴────────────────────────────┐    │
│  │  Clustering Service (K-Means)                  │    │
│  └────────────────────────────────────────────────┘    │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│            MongoDB Atlas (Cloud or Local)               │
│  ┌────────────────────────────────────────────────┐    │
│  │  6 Collections:                                │    │
│  │  - memories (primary)                          │    │
│  │  - episodes (narratives)                       │    │
│  │  - reflection_jobs (pipeline)                  │    │
│  │  - pending_edges (graph queue)                 │    │
│  │  - entities (hubs)                             │    │
│  │  - clusters (topics)                           │    │
│  └────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│              Voyage AI API (Embeddings)                 │
│  voyage-3 model, 1024 dimensions                       │
│  ~$0.02 per 1M tokens                                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│           Web Dashboard (Port 3002, Optional)           │
│  Next.js app serving 6 pages                           │
│  ReactFlow for graph visualization                     │
│  Material UI components                                │
└─────────────────────────────────────────────────────────┘
```
