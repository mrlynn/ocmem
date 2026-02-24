import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import type { Metadata } from "next";
import Link from "next/link";
import LaunchIcon from "@mui/icons-material/Launch";

export const metadata: Metadata = {
  title: "Web Dashboard - ocmem",
  description: "Visual management interface for OpenClaw Memory with 6 pages of powerful tools.",
};

export default function DashboardPage() {
  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Web Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Complete visual management interface for your memory system. Monitor health, explore graphs,
        resolve conflicts, and manage operations — all in your browser.
      </Typography>

      <Alert severity="info" sx={{ mb: 6, borderRadius: 2 }}>
        <Typography variant="body2">
          <strong>Local Demo:</strong> The dashboard runs at{" "}
          <code>http://localhost:3002</code> when you start the memory daemon.
        </Typography>
      </Alert>

      {/* Dashboard Overview */}
      <Card elevation={0} sx={{ mb: 6, border: 1, borderColor: "primary.main" }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            6 Pages of Visual Tools
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
            <Box>
              <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>
                📊 Dashboard
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize="0.9rem">
                Overview stats, memory layers, recent activity
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>
                🔍 Memory Browser
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize="0.9rem">
                Search, filter, and explore all stored memories
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>
                🕸️ Graph Visualizer
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize="0.9rem">
                Interactive relationship graph with ReactFlow
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>
                ⚠️ Conflicts
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize="0.9rem">
                Review and resolve contradicting memories
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>
                🗑️ Expiration Queue
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize="0.9rem">
                Manage low-strength memories before deletion
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>
                ⚙️ Operations
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize="0.9rem">
                System health, reflection pipeline, decay scheduler
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Divider sx={{ my: 6 }} />

      {/* Page 1: Dashboard */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
          <Chip label="Page 1" color="primary" size="small" />
          <Typography variant="h3">Dashboard Overview</Typography>
        </Box>

        <Card elevation={0} sx={{ mb: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              At-a-Glance Stats
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              See your memory system's health in one view:
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography variant="body2">
                • <strong>Total Memories</strong> — Count across all layers
              </Typography>
              <Typography variant="body2">
                • <strong>Memory Layers</strong> — Bar chart showing distribution (Working, Episodic, Semantic, Archival)
              </Typography>
              <Typography variant="body2">
                • <strong>Recent Activity</strong> — Timeline of memories created today/this week
              </Typography>
              <Typography variant="body2">
                • <strong>Top Tags</strong> — Word cloud of most-used tags
              </Typography>
              <Typography variant="body2">
                • <strong>System Health</strong> — MongoDB connection, Voyage AI status, daemon uptime
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Box
          component="img"
          src="/screenshots/dashboard-overview.png"
          alt="Dashboard Overview"
          sx={{
            width: "100%",
            border: 1,
            borderColor: "divider",
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Page 2: Memory Browser */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
          <Chip label="Page 2" color="primary" size="small" />
          <Typography variant="h3">Memory Browser</Typography>
        </Box>

        <Card elevation={0} sx={{ mb: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Search & Explore Memories
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Powerful semantic search with filters:
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography variant="body2">
                • <strong>Semantic Search</strong> — Natural language queries with similarity scores (0-1)
              </Typography>
              <Typography variant="body2">
                • <strong>Tag Filters</strong> — Multi-select tag filtering
              </Typography>
              <Typography variant="body2">
                • <strong>Layer Filter</strong> — Filter by Working/Episodic/Semantic/Archival
              </Typography>
              <Typography variant="body2">
                • <strong>Sort Options</strong> — By date, confidence, or relevance
              </Typography>
              <Typography variant="body2">
                • <strong>Memory Cards</strong> — Full text, tags, confidence, timestamps
              </Typography>
              <Typography variant="body2">
                • <strong>Actions</strong> — View details, delete, see graph connections
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Box
          component="img"
          src="/screenshots/memory-browser.png"
          alt="Memory Browser with Search"
          sx={{
            width: "100%",
            border: 1,
            borderColor: "divider",
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Page 3: Graph Visualizer */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
          <Chip label="Page 3" color="primary" size="small" />
          <Typography variant="h3">Graph Visualizer</Typography>
        </Box>

        <Card elevation={0} sx={{ mb: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Interactive Knowledge Graph
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Explore memory relationships with ReactFlow:
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography variant="body2">
                • <strong>7 Relationship Types</strong> — Color-coded edges (SUPPORTS, CONTRADICTS, DERIVES_FROM, etc.)
              </Typography>
              <Typography variant="body2">
                • <strong>Browse Feature</strong> — Select memories visually (no manual ID copying)
              </Typography>
              <Typography variant="body2">
                • <strong>Direction Control</strong> — Outbound, inbound, or both directions
              </Typography>
              <Typography variant="body2">
                • <strong>Depth Control</strong> — Traverse 1-5 levels deep
              </Typography>
              <Typography variant="body2">
                • <strong>Interactive Controls</strong> — Pan, zoom, minimap, fit view
              </Typography>
              <Typography variant="body2">
                • <strong>Dark Theme</strong> — Fully styled for dark mode
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
          <Typography variant="body2">
            <strong>80% workflow reduction:</strong> The browse feature eliminates manual memory ID lookup.
            Just click a memory to instantly explore its graph.
          </Typography>
        </Alert>

        <Box
          component="img"
          src="/screenshots/graph-visualizer.png"
          alt="Graph Visualizer"
          sx={{
            width: "100%",
            border: 1,
            borderColor: "divider",
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Page 4: Conflicts */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
          <Chip label="Page 4" color="primary" size="small" />
          <Typography variant="h3">Conflict Resolution</Typography>
        </Box>

        <Card elevation={0} sx={{ mb: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Review Contradicting Memories
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Intelligent contradiction detection with LLM explanations:
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography variant="body2">
                • <strong>Side-by-Side View</strong> — See conflicting memories together
              </Typography>
              <Typography variant="body2">
                • <strong>LLM Explanations</strong> — Why they conflict, severity (high/medium/low)
              </Typography>
              <Typography variant="body2">
                • <strong>Resolution Suggestions</strong> — AI-generated guidance
              </Typography>
              <Typography variant="body2">
                • <strong>Actions</strong> — Keep both, delete one, mark reviewed
              </Typography>
              <Typography variant="body2">
                • <strong>Confidence Impact</strong> — See how resolution affects memory strength
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Box
          component="img"
          src="/screenshots/conflicts.png"
          alt="Conflict Resolution"
          sx={{
            width: "100%",
            border: 1,
            borderColor: "divider",
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Page 5: Expiration Queue */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
          <Chip label="Page 5" color="primary" size="small" />
          <Typography variant="h3">Expiration Queue</Typography>
        </Box>

        <Card elevation={0} sx={{ mb: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Manage Low-Strength Memories
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Review memories before automatic deletion:
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography variant="body2">
                • <strong>Expiration Candidates</strong> — Memories with strength {"<"} 0.3
              </Typography>
              <Typography variant="body2">
                • <strong>Days Until Deletion</strong> — Countdown based on decay rate
              </Typography>
              <Typography variant="body2">
                • <strong>Rescue Option</strong> — Promote to archival layer (prevents deletion)
              </Typography>
              <Typography variant="body2">
                • <strong>Batch Actions</strong> — Delete multiple at once
              </Typography>
              <Typography variant="body2">
                • <strong>Filter by Layer</strong> — Focus on specific memory types
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Box
          component="img"
          src="/screenshots/expiration-queue.png"
          alt="Expiration Queue"
          sx={{
            width: "100%",
            border: 1,
            borderColor: "divider",
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Page 6: Operations */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
          <Chip label="Page 6" color="primary" size="small" />
          <Typography variant="h3">Operations & Health</Typography>
        </Box>

        <Card elevation={0} sx={{ mb: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              System Management
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Monitor and control your memory system:
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography variant="body2">
                • <strong>System Health</strong> — MongoDB connection, Voyage AI status, daemon uptime
              </Typography>
              <Typography variant="body2">
                • <strong>Reflection Pipeline</strong> — Trigger 9-stage processing, monitor jobs
              </Typography>
              <Typography variant="body2">
                • <strong>Decay Scheduler</strong> — Manual trigger, view last run stats
              </Typography>
              <Typography variant="body2">
                • <strong>Database Stats</strong> — Collection sizes, index usage, storage
              </Typography>
              <Typography variant="body2">
                • <strong>Backup/Restore</strong> — Export memories, import from backup
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Box
          component="img"
          src="/screenshots/operations.png"
          alt="Operations Dashboard"
          sx={{
            width: "100%",
            border: 1,
            borderColor: "divider",
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Features */}
      <Typography variant="h3" sx={{ mb: 3 }}>
        Dashboard Features
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 6 }}>
        <Card elevation={0}>
          <CardContent>
            <Typography variant="h4" sx={{ mb: 2 }}>
              🎨 Full Dark Theme
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Consistent dark mode throughout all pages — MongoDB teal accents, translucent overlays,
              and LeafyGreen UI components styled for dark backgrounds.
            </Typography>
          </CardContent>
        </Card>

        <Card elevation={0}>
          <CardContent>
            <Typography variant="h4" sx={{ mb: 2 }}>
              🔄 Real-Time Updates
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stats refresh automatically. Watch memory counts change, see new memories appear,
              monitor reflection pipeline progress in real-time.
            </Typography>
          </CardContent>
        </Card>

        <Card elevation={0}>
          <CardContent>
            <Typography variant="h4" sx={{ mb: 2 }}>
              🎯 Agent Selector
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Switch between agents instantly. Every page has agent selection — filter memories,
              stats, and operations by agent. Persists in localStorage.
            </Typography>
          </CardContent>
        </Card>

        <Card elevation={0}>
          <CardContent>
            <Typography variant="h4" sx={{ mb: 2 }}>
              📱 Responsive Design
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Works on desktop, tablet, and mobile. Responsive grids, collapsible sidebars, and
              touch-friendly controls throughout.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Try It */}
      <Card elevation={0} sx={{ border: 2, borderColor: "primary.main" }}>
        <CardContent sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Try the Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Start the memory daemon and explore all 6 pages at localhost:3002
          </Typography>
          <Link href="/docs/getting-started" passHref style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<LaunchIcon />}
            >
              Get Started
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
}
