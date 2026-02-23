import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import type { Metadata } from "next";
import CodeBlock from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Memory Hooks - ocmem",
  description:
    "Lifecycle hooks that make AI memory automatic — auto-remember, session-to-memory, memory-bootstrap, and memory-enriched-tools.",
};

function HookSection({
  name,
  event,
  description,
  children,
}: {
  name: string;
  event: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ mb: 6 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
        <Typography variant="h3">{name}</Typography>
        <Chip
          label={event}
          size="small"
          variant="outlined"
          sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.75rem" }}
        />
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {description}
      </Typography>
      {children}
    </Box>
  );
}

export default function HooksPage() {
  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Memory Hooks
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Four lifecycle hooks that make memory <strong>automatic</strong>. Instead of relying on the
        agent to explicitly call <code>memory_search</code>, these hooks observe conversations,
        extract facts, save session history, and inject context — all without manual intervention.
      </Typography>

      <Alert severity="info" sx={{ mb: 4, borderRadius: 2 }}>
        All hooks fail silently if the daemon is unreachable. They never block or break the agent.
      </Alert>

      {/* Quick Reference */}
      <Card elevation={0} sx={{ mb: 4 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            At a Glance
          </Typography>
          <Box
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.8rem",
              lineHeight: 1.6,
              color: "text.secondary",
              whiteSpace: "pre",
              overflowX: "auto",
            }}
          >
{`  Session Start          Conversation            Session End
  ─────────────          ────────────            ───────────
  memory-bootstrap       auto-remember           session-to-memory
  injects context ───►   extracts facts ───►     saves summary
  into agent             from responses          to MongoDB

                         memory-enriched-tools
                         annotates tool results
                         with related memories`}
          </Box>
        </CardContent>
      </Card>

      {/* Overview Table */}
      <TableContainer component={Paper} elevation={0} sx={{ mb: 4, border: 1, borderColor: "divider" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Hook</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Event</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>What Happens</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><code>auto-remember</code></TableCell>
              <TableCell><code>message:sent</code></TableCell>
              <TableCell>Extracts facts, decisions, and preferences from agent responses</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>session-to-memory</code></TableCell>
              <TableCell><code>command:new</code></TableCell>
              <TableCell>Summarizes the ending session and stores it as searchable memory</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>memory-bootstrap</code></TableCell>
              <TableCell><code>agent:bootstrap</code></TableCell>
              <TableCell>Injects relevant memories into the agent&apos;s context at startup</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>memory-enriched-tools</code></TableCell>
              <TableCell><code>tool_result_persist</code></TableCell>
              <TableCell>Appends related memories to tool results before they are saved</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Divider sx={{ my: 5 }} />

      {/* Installation */}
      <Typography variant="h3" sx={{ mb: 2 }}>
        Installation
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Hooks are bundled with the <code>openclaw-memory</code> plugin. Install both in one step:
      </Typography>
      <CodeBlock language="bash">{`# Install the plugin (tools + RPC)
openclaw plugins install openclaw-memory

# Install the hooks
openclaw hooks install openclaw-memory

# Verify installation
openclaw hooks list`}</CodeBlock>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 2 }}>
        You should see all four memory hooks with status <code>ready</code>. For local development:
      </Typography>
      <CodeBlock language="bash">{`openclaw plugins install -l ./plugin
openclaw hooks install -l ./plugin`}</CodeBlock>

      <Divider sx={{ my: 5 }} />

      {/* Configuration */}
      <Typography variant="h3" sx={{ mb: 2 }}>
        Configuration
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Each hook reads its daemon connection from environment variables. Set these in{" "}
        <code>~/.openclaw/openclaw.json</code>:
      </Typography>
      <CodeBlock language="json">{`{
  "hooks": {
    "internal": {
      "entries": {
        "auto-remember": {
          "enabled": true,
          "env": {
            "OPENCLAW_MEMORY_DAEMON_URL": "http://localhost:7654",
            "OPENCLAW_MEMORY_AGENT_ID": "openclaw"
          }
        },
        "session-to-memory": { "enabled": true, "env": { "..." : "..." } },
        "memory-bootstrap": { "enabled": true, "env": { "..." : "..." } },
        "memory-enriched-tools": { "enabled": true, "env": { "..." : "..." } }
      }
    }
  }
}`}</CodeBlock>

      <TableContainer component={Paper} elevation={0} sx={{ mt: 3, mb: 2, border: 1, borderColor: "divider" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Variable</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Default</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><code>OPENCLAW_MEMORY_DAEMON_URL</code></TableCell>
              <TableCell><code>http://localhost:7654</code></TableCell>
              <TableCell>Memory daemon HTTP endpoint</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>OPENCLAW_MEMORY_AGENT_ID</code></TableCell>
              <TableCell><code>openclaw</code></TableCell>
              <TableCell>Agent identity for memory storage</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="body2" color="text.secondary">
        To disable a specific hook, set <code>&quot;enabled&quot;: false</code> in its entry. Restart the gateway after changing hook configuration.
      </Typography>

      <Divider sx={{ my: 5 }} />

      {/* auto-remember */}
      <HookSection
        name="auto-remember"
        event="message:sent"
        description="Fires after every agent response. Scans outbound messages for facts, decisions, and preferences using heuristic pattern matching. Extracted text is stored as a memory with Voyage AI embeddings."
      >
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Detected Patterns
        </Typography>
        <TableContainer component={Paper} elevation={0} sx={{ mb: 3, border: 1, borderColor: "divider" }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Pattern</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Trigger Phrases</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Tags</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Explicit notes</TableCell>
                <TableCell>&quot;I&apos;ll remember...&quot;, &quot;noted:...&quot;, &quot;recording:...&quot;</TableCell>
                <TableCell><code>auto-extracted, noted</code></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Preferences</TableCell>
                <TableCell>&quot;preference:...&quot;, &quot;I prefer...&quot;, &quot;user prefers...&quot;</TableCell>
                <TableCell><code>auto-extracted, preference</code></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Decisions</TableCell>
                <TableCell>&quot;decision:...&quot;, &quot;we decided...&quot;, &quot;decided to...&quot;</TableCell>
                <TableCell><code>auto-extracted, decision</code></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Save requests</TableCell>
                <TableCell>&quot;remember that...&quot;, &quot;save this...&quot;, &quot;don&apos;t forget...&quot;</TableCell>
                <TableCell><code>auto-extracted, user-requested</code></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Key-value facts</TableCell>
                <TableCell><code>Key: value</code> or <code>Key = value</code></TableCell>
                <TableCell><code>auto-extracted, fact</code></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Behavior
        </Typography>
        <Typography variant="body2" color="text.secondary" component="ul" sx={{ pl: 3, mb: 3 }}>
          <li>Messages shorter than 50 characters are skipped</li>
          <li>Each extracted fact must be at least 10 characters</li>
          <li>Maximum 5 facts extracted per message</li>
          <li>Duplicate text within the same message is deduplicated</li>
          <li>Storage is fire-and-forget (non-blocking)</li>
        </Typography>

        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Example
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          If the agent responds with:
        </Typography>
        <Alert severity="success" variant="outlined" sx={{ mb: 2, borderRadius: 2 }}>
          I&apos;ll remember that you prefer dark mode for all interfaces. We decided to use LeafyGreen UI for the component library.
        </Alert>
        <Typography variant="body2" color="text.secondary">
          Two memories are extracted: <strong>&quot;you prefer dark mode for all interfaces&quot;</strong> (tags: <code>noted</code>) and <strong>&quot;to use LeafyGreen UI for the component library&quot;</strong> (tags: <code>decision</code>).
        </Typography>
      </HookSection>

      <Divider sx={{ my: 5 }} />

      {/* session-to-memory */}
      <HookSection
        name="session-to-memory"
        event="command:new"
        description="Fires when the user starts a new session. Examines the previous session, builds a summary, and stores it in MongoDB with embeddings. Every past session becomes semantically searchable."
      >
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          How It Works
        </Typography>
        <Typography variant="body2" color="text.secondary" component="ol" sx={{ pl: 3, mb: 3 }}>
          <li>Reads <code>event.context.sessionEntry</code> from the ending session</li>
          <li>If the session has a <code>.summary</code> field, uses it directly</li>
          <li>Otherwise, constructs a summary from conversation turns (first line of user messages + last paragraph of assistant responses)</li>
          <li>Stores via <code>POST /remember</code> with tags <code>session-summary</code>, <code>auto</code></li>
        </Typography>

        <TableContainer component={Paper} elevation={0} sx={{ mb: 3, border: 1, borderColor: "divider" }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Setting</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Value</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Max summary length</TableCell>
                <TableCell>2,000 chars</TableCell>
                <TableCell>Longer summaries are truncated</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minimum turns</TableCell>
                <TableCell>2</TableCell>
                <TableCell>Sessions with fewer turns are skipped</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Min summary length</TableCell>
                <TableCell>50 chars</TableCell>
                <TableCell>Very short summaries are discarded</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Alert severity="info" variant="outlined" sx={{ borderRadius: 2 }}>
          OpenClaw ships a bundled <code>session-memory</code> hook that saves sessions to flat markdown files. This hook stores them in MongoDB with vector embeddings instead, making them <strong>semantically searchable</strong>. You can run both simultaneously.
        </Alert>
      </HookSection>

      <Divider sx={{ my: 5 }} />

      {/* memory-bootstrap */}
      <HookSection
        name="memory-bootstrap"
        event="agent:bootstrap"
        description="Fires when an agent session initializes. Queries the memory daemon for relevant context and injects it into the agent's bootstrap files. The agent starts every session pre-loaded with relevant background knowledge."
      >
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          How It Works
        </Typography>
        <Typography variant="body2" color="text.secondary" component="ol" sx={{ pl: 3, mb: 3 }}>
          <li><strong>Health check</strong> — pings the daemon (2-second timeout). If unreachable, skips silently</li>
          <li><strong>Two parallel queries:</strong> General context (limit 5) + pinned memories tagged <code>pinned,important</code> (limit 3)</li>
          <li><strong>Deduplicates</strong> results by memory ID across both queries</li>
          <li><strong>Formats</strong> as a markdown file with sections for pinned and general context</li>
          <li><strong>Injects</strong> the file path into <code>event.context.bootstrapFiles</code></li>
        </Typography>

        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Bootstrap File Format
        </Typography>
        <CodeBlock language="markdown">{`# Memory Context

The following information was recalled from long-term memory.

## Pinned / Important

- User prefers dark mode for all interfaces [preference, pinned] (2/20/2026)
- API authentication uses JWT tokens with 24h expiry [architecture, pinned] (2/18/2026)

## Recent Context

- We decided to use LeafyGreen UI for the component library [decision] (2/22/2026)
- The deployment uses Docker Compose with MongoDB 7 [infrastructure] (2/21/2026)`}</CodeBlock>

        <TableContainer component={Paper} elevation={0} sx={{ mt: 3, border: 1, borderColor: "divider" }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Setting</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Value</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Reason</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Min score</TableCell>
                <TableCell>0.3</TableCell>
                <TableCell>Lower than default (0.5) — bootstrap should be inclusive</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>General limit</TableCell>
                <TableCell>5 memories</TableCell>
                <TableCell>Enough context without bloating</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pinned limit</TableCell>
                <TableCell>3 memories</TableCell>
                <TableCell>Prioritize explicitly important items</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Alert severity="success" variant="outlined" sx={{ mt: 2, borderRadius: 2 }}>
          <strong>Tip:</strong> Tag important memories with <code>pinned</code> or <code>important</code> to ensure they always appear in the bootstrap context.
        </Alert>
      </HookSection>

      <Divider sx={{ my: 5 }} />

      {/* memory-enriched-tools */}
      <HookSection
        name="memory-enriched-tools"
        event="tool_result_persist"
        description="A synchronous transform hook that augments tool results with relevant memory context. When you read a file, search code, or run a command, the hook checks if stored memories are related and appends them as context annotations."
      >
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Supported Tools
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}>
          {["Read / read_file", "Grep / search_files", "Glob / list_files", "Bash"].map((tool) => (
            <Chip key={tool} label={tool} size="small" variant="outlined" sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.75rem" }} />
          ))}
        </Box>

        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          How It Works
        </Typography>
        <Typography variant="body2" color="text.secondary" component="ol" sx={{ pl: 3, mb: 3 }}>
          <li>Checks if the tool is in the supported list — skips if not</li>
          <li>Checks if the result text is at least 100 characters — skips short results</li>
          <li>Extracts the first 500 characters as a semantic query</li>
          <li>Calls <code>GET /recall</code> with a 3-second timeout (max 3 results, min score 0.5)</li>
          <li>Appends related memories to the result</li>
        </Typography>

        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Enrichment Format
        </Typography>
        <CodeBlock language="markdown">{`---
**Related memories:**
- Previous implementation used a connection pool of 10 [architecture]
- The user prefers async/await over callbacks [preference]`}</CodeBlock>

        <TableContainer component={Paper} elevation={0} sx={{ mt: 3, border: 1, borderColor: "divider" }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Setting</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Value</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Purpose</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Recall timeout</TableCell>
                <TableCell>3 seconds</TableCell>
                <TableCell>Keeps the transform fast</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Max query length</TableCell>
                <TableCell>500 chars</TableCell>
                <TableCell>Avoids slow embedding of large results</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Max memories appended</TableCell>
                <TableCell>3</TableCell>
                <TableCell>Keeps enrichment concise</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Min result length</TableCell>
                <TableCell>100 chars</TableCell>
                <TableCell>Skips trivial results</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Min memory score</TableCell>
                <TableCell>0.5</TableCell>
                <TableCell>Only appends genuinely relevant memories</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </HookSection>

      <Divider sx={{ my: 5 }} />

      {/* Architecture */}
      <Typography variant="h3" sx={{ mb: 2 }}>
        Architecture
      </Typography>
      <CodeBlock language="text">{`Agent Lifecycle                    Memory Hooks                       Daemon
─────────────────                  ────────────                       ──────

agent:bootstrap  ───────────►  memory-bootstrap  ──── GET /recall ──► MongoDB
                               (inject context)   ◄── memories ──────

message:sent     ───────────►  auto-remember     ──── POST /remember ► MongoDB
                               (extract facts)

tool_result_     ───────────►  memory-enriched-  ──── GET /recall ──► MongoDB
  persist                        tools            ◄── memories ──────
                               (annotate results)

command:new      ───────────►  session-to-memory ──── POST /remember ► MongoDB
                               (save summary)`}</CodeBlock>

      <Divider sx={{ my: 5 }} />

      {/* Troubleshooting */}
      <Typography variant="h3" sx={{ mb: 3 }}>
        Troubleshooting
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={0} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Hooks don&apos;t appear in <code>openclaw hooks list</code>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Check that <code>hooks.internal.load.extraDirs</code> points to the <code>hooks/</code> subdirectory inside the plugin, not the plugin root.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={0} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Hooks show &quot;ready&quot; but nothing happens
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Restart the gateway, verify the daemon is running (<code>curl http://localhost:7654/health</code>), and check that env vars match your daemon&apos;s port.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={0} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                auto-remember isn&apos;t extracting anything
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Patterns are conservative by design. The agent must use specific trigger phrases. Extend the <code>PATTERNS</code> array in <code>hooks/auto-remember/handler.ts</code> for broader extraction.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={0} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                memory-bootstrap context is empty
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The daemon needs existing memories to recall. Store a few via the dashboard or <code>POST /remember</code> API, then start a new session.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
