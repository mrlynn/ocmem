import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Divider from "@mui/material/Divider";
import type { Metadata } from "next";
import CodeBlock from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Getting Started - ocmem",
  description: "Install and configure OpenClaw Memory in 5 minutes.",
};

export default function GettingStartedPage() {
  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Getting Started
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Get ocmem running in 5 minutes. You&apos;ll need Node.js 18+ and a MongoDB Atlas account.
      </Typography>

      <Alert severity="info" sx={{ mb: 4, borderRadius: 2 }}>
        ocmem uses MongoDB Atlas Vector Search and Voyage AI for embeddings. You&apos;ll need API
        keys for both services.
      </Alert>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" sx={{ mb: 2 }}>
        1. Prerequisites
      </Typography>
      <Typography variant="body2" color="text.secondary" component="ul" sx={{ mb: 4, pl: 3 }}>
        <li>Node.js 18 or later</li>
        <li>
          MongoDB Atlas cluster (
          <Box
            component="a"
            href="https://www.mongodb.com/cloud/atlas/register"
            target="_blank"
            rel="noopener"
            sx={{ color: "primary.main" }}
          >
            free tier available
          </Box>
          )
        </li>
        <li>
          Voyage AI API key (
          <Box
            component="a"
            href="https://www.voyageai.com"
            target="_blank"
            rel="noopener"
            sx={{ color: "primary.main" }}
          >
            get one free
          </Box>
          )
        </li>
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" sx={{ mb: 2 }}>
        2. Installation Options
      </Typography>
      
      <Typography variant="h4" sx={{ mb: 1, fontSize: "1.1rem" }}>
        Option A: OpenClaw Plugin (Recommended)
      </Typography>
      <CodeBlock language="bash">{`openclaw plugins install openclaw-memory`}</CodeBlock>
      
      <Typography variant="h4" sx={{ mt: 3, mb: 1, fontSize: "1.1rem" }}>
        Option B: Docker
      </Typography>
      <CodeBlock language="bash">{`git clone https://github.com/mrlynn/openclaw-mongodb-memory.git
cd openclaw-mongodb-memory
docker compose up -d`}</CodeBlock>
      
      <Typography variant="h4" sx={{ mt: 3, mb: 1, fontSize: "1.1rem" }}>
        Option C: Local Development
      </Typography>
      <CodeBlock language="bash">{`git clone https://github.com/mrlynn/openclaw-mongodb-memory.git
cd openclaw-mongodb-memory
pnpm install && pnpm build
pnpm dev:daemon`}</CodeBlock>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" sx={{ mb: 2 }}>
        3. Configure Environment
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Create <code>.env.local</code> in the daemon directory (or set environment variables):
      </Typography>
      <CodeBlock language="bash">{`# MongoDB Connection
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/ocmem

# Voyage AI Embeddings
VOYAGE_API_KEY=your-voyage-api-key
VOYAGE_MODEL=voyage-3

# Daemon Configuration
MEMORY_DAEMON_PORT=7654

# Optional: Enable mock embeddings (for testing)
# VOYAGE_MOCK=true`}</CodeBlock>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" sx={{ mb: 2 }}>
        4. Create the Vector Search Index
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        In your MongoDB Atlas console, create a Vector Search index on the{" "}
        <code>memories</code> collection:
      </Typography>
      <CodeBlock language="json">{`{
  "fields": [
    {
      "type": "vector",
      "path": "embedding",
      "numDimensions": 1024,
      "similarity": "cosine"
    }
  ]
}`}</CodeBlock>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" sx={{ mb: 2 }}>
        5. Start the Daemon
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        If using OpenClaw plugin:
      </Typography>
      <CodeBlock language="bash">{`openclaw gateway start`}</CodeBlock>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 2 }}>
        If using Docker or local development, the daemon auto-starts. Default port is <code>7654</code>.
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        The memory daemon is now running at{" "}
        <code>http://localhost:7654</code>. You can start storing and searching memories via the
        REST API.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" sx={{ mb: 2 }}>
        6. Store Your First Memory
      </Typography>
      <CodeBlock language="bash">{`curl -X POST http://localhost:7654/remember \\
  -H "Content-Type: application/json" \\
  -d '{
    "agentId": "openclaw",
    "text": "The user prefers dark mode and uses VS Code.",
    "tags": ["preference", "editor"]
  }'`}</CodeBlock>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" sx={{ mb: 2 }}>
        7. Search Memories
      </Typography>
      <CodeBlock language="bash">{`curl "http://localhost:7654/recall?agentId=openclaw&query=editor+preferences&limit=5"`}</CodeBlock>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        The search uses vector embeddings to find semantically relevant memories, not just keyword
        matches.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" sx={{ mb: 2 }}>
        Next Steps
      </Typography>
      <Typography variant="body2" color="text.secondary" component="ul" sx={{ pl: 3 }}>
        <li>
          Explore the{" "}
          <Box component="a" href="/docs/api" sx={{ color: "primary.main" }}>
            API Reference
          </Box>{" "}
          for all available endpoints
        </li>
        <li>
          See{" "}
          <Box component="a" href="/docs/examples" sx={{ color: "primary.main" }}>
            Examples
          </Box>{" "}
          for real-world use cases
        </li>
        <li>
          Open the{" "}
          <Box component="a" href="/dashboard" sx={{ color: "primary.main" }}>
            Dashboard
          </Box>{" "}
          to visually browse your memories
        </li>
      </Typography>
    </Box>
  );
}
