import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import type { Metadata } from "next";
import CodeBlock from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "API Reference - ocmem",
  description: "Complete REST API reference for the OpenClaw Memory daemon.",
};

function Endpoint({
  method,
  path,
  description,
  body,
  response,
}: {
  method: string;
  path: string;
  description: string;
  body?: string;
  response: string;
}) {
  const methodColor =
    method === "GET"
      ? "info"
      : method === "POST"
        ? "success"
        : method === "DELETE"
          ? "error"
          : ("default" as const);

  return (
    <Box sx={{ mb: 5 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
        <Chip label={method} color={methodColor} size="small" sx={{ fontWeight: 700, fontFamily: "monospace" }} />
        <Typography
          variant="h4"
          sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "1rem" }}
        >
          {path}
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {description}
      </Typography>
      {body && (
        <>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Request Body
          </Typography>
          <CodeBlock language="json">{body}</CodeBlock>
        </>
      )}
      <Typography variant="subtitle2" sx={{ mb: 1, mt: body ? 2 : 0 }}>
        Response
      </Typography>
      <CodeBlock language="json">{response}</CodeBlock>
    </Box>
  );
}

export default function ApiReferencePage() {
  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 2 }}>
        API Reference
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        The ocmem daemon exposes a REST API on <code>http://localhost:7654</code> by default
        (configurable via <code>MEMORY_DAEMON_PORT</code>).
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        All endpoints accept and return JSON. Memory content is automatically embedded using Voyage
        AI.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" sx={{ mb: 3 }}>
        Memories
      </Typography>

      <Endpoint
        method="POST"
        path="/remember"
        description="Store a new memory. The text is automatically embedded for vector search using Voyage AI."
        body={`{
  "agentId": "openclaw",
  "text": "The user prefers dark mode and uses VS Code.",
  "tags": ["preference", "editor"],
  "ttl": 2592000
}`}
        response={`{
  "success": true,
  "id": "65f1a2b3c4d5e6f7a8b9c0d1",
  "text": "The user prefers dark mode and uses VS Code.",
  "tags": ["preference", "editor"],
  "createdAt": "2024-03-13T10:30:00.000Z"
}`}
      />

      <Endpoint
        method="GET"
        path="/recall?agentId=:agentId&query=:query&limit=:limit"
        description="Search memories using semantic vector search. Returns results ranked by cosine similarity."
        response={`{
  "success": true,
  "results": [
    {
      "id": "65f1a2b3c4d5e6f7a8b9c0d1",
      "text": "The user prefers dark mode and uses VS Code.",
      "score": 0.92,
      "tags": ["preference", "editor"],
      "createdAt": "2024-03-13T10:30:00.000Z"
    }
  ],
  "query": "editor preferences",
  "count": 5
}`}
      />

      <Endpoint
        method="GET"
        path="/memories?agentId=:agentId&limit=:limit"
        description="List all memories for an agent, sorted by creation date (newest first)."
        response={`{
  "success": true,
  "memories": [
    {
      "id": "65f1a2b3c4d5e6f7a8b9c0d1",
      "text": "The user prefers dark mode...",
      "tags": ["preference"],
      "createdAt": "2024-03-13T10:30:00.000Z"
    }
  ],
  "total": 142,
  "agentId": "openclaw"
}`}
      />

      <Endpoint
        method="DELETE"
        path="/forget/:id"
        description="Delete a memory by its ID."
        response={`{
  "success": true,
  "id": "65f1a2b3c4d5e6f7a8b9c0d1"
}`}
      />

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" sx={{ mb: 3 }}>
        Chat
      </Typography>

      <Endpoint
        method="POST"
        path="/api/chat"
        description="Ask a natural language question about your stored memories. Uses RAG (Retrieval-Augmented Generation) to search relevant memories and generate an answer."
        body={`{
  "message": "What editor does the user prefer?",
  "memoryLimit": 5
}`}
        response={`{
  "answer": "Based on stored memories, the user prefers VS Code with dark mode enabled.",
  "sources": [
    {
      "id": "65f1a2b3c4d5e6f7a8b9c0d1",
      "content": "The user prefers dark mode and uses VS Code.",
      "score": 0.92
    }
  ]
}`}
      />

      <Divider sx={{ my: 4 }} />

      <Typography variant="h3" sx={{ mb: 3 }}>
        Health
      </Typography>

      <Endpoint
        method="GET"
        path="/health"
        description="Check daemon health and connection status."
        response={`{
  "status": "ok",
  "timestamp": "2024-03-13T10:30:00.000Z",
  "daemon": {
    "uptime": 3600,
    "version": "0.2.1"
  },
  "mongodb": {
    "status": "connected",
    "memoryCount": 142
  }
}`}
      />
    </Box>
  );
}
