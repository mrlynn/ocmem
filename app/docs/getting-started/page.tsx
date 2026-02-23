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
        2. Install the CLI
      </Typography>
      <CodeBlock language="bash">{`npm install -g @openclaw-memory/cli`}</CodeBlock>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" sx={{ mb: 2 }}>
        3. Initialize Configuration
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Run the init command to create your configuration file:
      </Typography>
      <CodeBlock language="bash">{`ocmem init`}</CodeBlock>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 2 }}>
        This creates <code>~/.ocmem/config.json</code>. Edit it with your credentials:
      </Typography>
      <CodeBlock language="json">{`{
  "mongodb": {
    "uri": "mongodb+srv://<user>:<pass>@cluster.mongodb.net/ocmem",
    "database": "ocmem",
    "collection": "memories"
  },
  "voyage": {
    "apiKey": "your-voyage-api-key",
    "model": "voyage-3"
  },
  "daemon": {
    "port": 3456,
    "host": "localhost"
  }
}`}</CodeBlock>

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
      <CodeBlock language="bash">{`ocmem start`}</CodeBlock>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        The memory daemon is now running at{" "}
        <code>http://localhost:3456</code>. You can start storing and searching memories via the
        REST API.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" sx={{ mb: 2 }}>
        6. Store Your First Memory
      </Typography>
      <CodeBlock language="bash">{`curl -X POST http://localhost:3456/api/memories \\
  -H "Content-Type: application/json" \\
  -d '{
    "content": "The user prefers dark mode and uses VS Code.",
    "metadata": { "source": "onboarding", "agent": "assistant" }
  }'`}</CodeBlock>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" sx={{ mb: 2 }}>
        7. Search Memories
      </Typography>
      <CodeBlock language="bash">{`curl "http://localhost:3456/api/memories/search?q=editor+preferences&limit=5"`}</CodeBlock>
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
