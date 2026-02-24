import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import type { Metadata } from "next";
import CodeBlock from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "How It Works - ocmem",
  description: "Understanding OpenClaw Memory's 4-phase architecture and intelligent processing pipeline.",
};

export default function HowItWorksPage() {
  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 2 }}>
        How It Works
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
        OpenClaw Memory isn't just storage — it's a sophisticated intelligence system that processes,
        organizes, and understands your AI agent's memories through a 4-phase architecture.
      </Typography>

      {/* Architecture Overview */}
      <Card elevation={0} sx={{ mb: 6, border: 1, borderColor: "primary.main" }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            4-Phase Architecture
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Chip label="Phase 1" color="primary" />
              <Typography variant="body1">
                <strong>Foundation Hardening</strong> — Confidence scoring, contradiction detection, temporal decay, memory layers
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Chip label="Phase 2" color="primary" />
              <Typography variant="body1">
                <strong>Reflection Pipeline</strong> — 9-stage intelligent processing (extract, deduplicate, classify, etc.)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Chip label="Phase 3" color="primary" />
              <Typography variant="body1">
                <strong>Graph Relationships</strong> — 7 relationship types connecting memories into knowledge graphs
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Chip label="Phase 4" color="primary" />
              <Typography variant="body1">
                <strong>Semantic Clustering</strong> — Automatic topic discovery with K-Means clustering
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Divider sx={{ my: 6 }} />

      {/* Phase 1: Foundation */}
      <Typography variant="h3" sx={{ mb: 3 }}>
        Phase 1: Foundation Hardening
      </Typography>

      <Card elevation={0} sx={{ mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Memory Layers
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Memories are organized into 4 layers with different decay rates — just like human memory.
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
            <Box>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                <strong>Working</strong> (0.05/day decay)
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize="0.85rem">
                Temporary context, fast decay
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                <strong>Episodic</strong> (0.015/day decay)
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize="0.85rem">
                Session-specific memories
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                <strong>Semantic</strong> (0.003/day decay)
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize="0.85rem">
                Long-term knowledge, slow decay
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                <strong>Archival</strong> (0.001/day decay)
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize="0.85rem">
                Permanent memories, minimal decay
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card elevation={0} sx={{ mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Confidence Scoring
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Each memory has a confidence score based on type and reinforcement:
          </Typography>
          <CodeBlock language="javascript">{`// Confidence by memory type
preferences: 0.80  // "User prefers dark mode"
decisions:   0.90  // "We decided to use MongoDB"
facts:       0.60  // "The capital of France is Paris"
observations: 0.50 // "The weather seems nice today"

// Reinforcement on duplicates
+0.05 per duplicate (max +0.20)

// Contradiction penalty
-0.30 when contradicted`}</CodeBlock>
        </CardContent>
      </Card>

      <Card elevation={0} sx={{ mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Contradiction Detection
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Heuristic pattern matching detects conflicts between memories:
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Typography variant="body2" fontSize="0.9rem">
              • <strong>Negation:</strong> "User prefers X" vs "User doesn't like X"
            </Typography>
            <Typography variant="body2" fontSize="0.9rem">
              • <strong>Preference:</strong> "Prefers MongoDB" vs "Prefers PostgreSQL"
            </Typography>
            <Typography variant="body2" fontSize="0.9rem">
              • <strong>Temporal:</strong> "Started in 2020" vs "Started in 2021"
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            LLM-enhanced explanations provide severity scoring and resolution suggestions.
          </Typography>
        </CardContent>
      </Card>

      <Card elevation={0} sx={{ mb: 6 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Temporal Decay
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Memories fade over time using exponential decay — recent memories are stronger,
            old ones weaken unless reinforced:
          </Typography>
          <CodeBlock language="javascript">{`// Decay formula
strength(t) = strength₀ × e^(-λt)

// Where:
// λ = decay rate (layer-specific)
// t = time since last reinforcement

// Runs daily at 02:00 AM
// Promotes strong memories to higher layers
// Flags weak memories for expiration`}</CodeBlock>
        </CardContent>
      </Card>

      <Divider sx={{ my: 6 }} />

      {/* Phase 2: Reflection Pipeline */}
      <Typography variant="h3" sx={{ mb: 3 }}>
        Phase 2: Reflection Pipeline
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        A 9-stage asynchronous pipeline that processes memories intelligently — not just storing them,
        but understanding relationships, detecting conflicts, and organizing knowledge.
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 2, mb: 6 }}>
        {[
          { num: 1, name: "Extract", desc: "Heuristic fact extraction from sessions" },
          { num: 2, name: "Deduplicate", desc: "0.92 similarity threshold, reinforcement" },
          { num: 3, name: "Conflict-Check", desc: "Detect contradictions before storage" },
          { num: 4, name: "Classify", desc: "Assign layer, type, confidence" },
          { num: 5, name: "Confidence-Update", desc: "Apply reinforcement & penalties" },
          { num: 6, name: "Decay Pass", desc: "Apply temporal decay to all memories" },
          { num: 7, name: "Layer-Promote", desc: "Promote strong memories up layers" },
          { num: 8, name: "Graph-Link", desc: "Create relationship edges" },
          { num: 9, name: "Entity-Update", desc: "Extract entities, create hub docs" },
        ].map((stage) => (
          <Card key={stage.num} elevation={0}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Chip label={stage.num} size="small" color="primary" />
                <Typography variant="body2" fontWeight={600}>
                  {stage.name}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" fontSize="0.85rem">
                {stage.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Card elevation={0} sx={{ mb: 6 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Trigger the Pipeline
          </Typography>
          <CodeBlock language="bash">{`# Trigger reflection for an agent
curl -X POST http://localhost:7654/reflect \\
  -H "Content-Type: application/json" \\
  -d '{"agentId":"openclaw"}'

# Monitor job status
curl "http://localhost:7654/reflect/status?jobId=JOB_ID"

# List all reflection jobs
curl "http://localhost:7654/reflect/jobs?agentId=openclaw&limit=10"`}</CodeBlock>
        </CardContent>
      </Card>

      <Divider sx={{ my: 6 }} />

      {/* Phase 3: Graph Relationships */}
      <Typography variant="h3" sx={{ mb: 3 }}>
        Phase 3: Graph Relationships
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Memories aren't isolated facts — they form a knowledge graph with 7 relationship types.
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2, mb: 4 }}>
        {[
          { type: "SUPPORTS", desc: "Memory A reinforces/supports memory B", color: "#00ED64" },
          { type: "CONTRADICTS", desc: "Memory A conflicts with memory B", color: "#FF5757" },
          { type: "DERIVES_FROM", desc: "Memory A is built upon memory B", color: "#5C9EFF" },
          { type: "CO_OCCURS", desc: "Memories frequently appear together", color: "#FFC555" },
          { type: "PRECEDES", desc: "Memory A happened before memory B", color: "#A0D568" },
          { type: "CAUSES", desc: "Memory A caused memory B to happen", color: "#FF8A5C" },
          { type: "MENTIONS_ENTITY", desc: "Memory references an entity", color: "#C77DFF" },
        ].map((rel) => (
          <Card key={rel.type} elevation={0}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: rel.color,
                  }}
                />
                <Typography variant="body2" fontWeight={600}>
                  {rel.type}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" fontSize="0.85rem">
                {rel.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Card elevation={0} sx={{ mb: 6 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Graph Traversal
          </Typography>
          <CodeBlock language="bash">{`# Traverse graph from a memory node
curl "http://localhost:7654/graph/traverse/MEMORY_ID?direction=both&maxDepth=3"

# Returns:
# - centerNode: Starting memory
# - connectedMemories: Related memories
# - edges: Relationship connections

# Web dashboard at http://localhost:3002/graph
# Interactive ReactFlow visualization with pan/zoom`}</CodeBlock>
        </CardContent>
      </Card>

      <Divider sx={{ my: 6 }} />

      {/* Phase 4: Semantic Clustering */}
      <Typography variant="h3" sx={{ mb: 3 }}>
        Phase 4: Semantic Clustering
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        K-Means clustering automatically discovers topics and organizes memories — no manual tagging required.
      </Typography>

      <Card elevation={0} sx={{ mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            How Clustering Works
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Typography variant="body2">
              <strong>1. Dimension Reduction</strong> — 1024 dims → 64 dims for performance
            </Typography>
            <Typography variant="body2">
              <strong>2. K-Means (k=20)</strong> — Groups similar memories by embedding distance
            </Typography>
            <Typography variant="body2">
              <strong>3. Auto-Labeling</strong> — Top 2 words from cluster members
            </Typography>
            <Typography variant="body2">
              <strong>4. Entity Extraction</strong> — Top 5 entities per cluster
            </Typography>
            <Typography variant="body2">
              <strong>5. Cluster-Aware Recall</strong> — Routes queries to relevant clusters first
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Card elevation={0} sx={{ mb: 6 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Run Clustering
          </Typography>
          <CodeBlock language="bash">{`# Trigger clustering
curl -X POST http://localhost:7654/clusters/run \\
  -H "Content-Type: application/json" \\
  -d '{"agentId":"openclaw","k":20}'

# View cluster stats
curl "http://localhost:7654/clusters/stats?agentId=openclaw"

# Get cluster details
curl "http://localhost:7654/clusters/CLUSTER_ID"`}</CodeBlock>
        </CardContent>
      </Card>

      <Divider sx={{ my: 6 }} />

      {/* Performance */}
      <Typography variant="h3" sx={{ mb: 3 }}>
        Performance
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Built for production with benchmarked performance.
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 2 }}>
        <Card elevation={0}>
          <CardContent>
            <Typography variant="h2" color="primary.main" sx={{ mb: 1 }}>
              116ms
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Average recall latency (17x better than 2000ms target)
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={0}>
          <CardContent>
            <Typography variant="h2" color="primary.main" sx={{ mb: 1 }}>
              50
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Concurrent operations handled smoothly
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={0}>
          <CardContent>
            <Typography variant="h2" color="primary.main" sx={{ mb: 1 }}>
              &lt;10s
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Clustering time for 100 memories
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
