import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import type { Metadata } from "next";
import CodeBlock from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Examples - ocmem",
  description: "Real-world examples of using OpenClaw Memory with AI agents.",
};

export default function ExamplesPage() {
  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Examples
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
        Real-world patterns for integrating ocmem into your AI applications.
      </Typography>

      {/* Example 1: Personal Assistant */}
      <Card elevation={0} sx={{ mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Personal Assistant Memory
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Store user preferences, decisions, and context so your assistant learns over time.
          </Typography>
          <CodeBlock language="javascript">{`// Store a preference
await fetch('http://localhost:7654/remember', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    agentId: 'calendar-agent',
    text: 'User prefers morning standup at 9:30 AM EST',
    tags: ['preference', 'scheduling', 'calendar']
  })
});

// Later, recall scheduling preferences
const response = await fetch(
  'http://localhost:7654/recall?agentId=calendar-agent&query=meeting+schedule+preferences&limit=5'
);
const { results } = await response.json();

// Use memories as context for the AI
const context = results.map(m => m.text).join('\\n');
const prompt = \`Given these user preferences:\\n\${context}\\n\\nSchedule the team meeting.\`;`}</CodeBlock>
        </CardContent>
      </Card>

      <Divider sx={{ my: 4 }} />

      {/* Example 2: Customer Support */}
      <Card elevation={0} sx={{ mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Customer Support Agent
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Build a support agent that remembers past interactions and resolves issues faster.
          </Typography>
          <CodeBlock language="javascript">{`// After each support interaction, store a summary
await fetch('http://localhost:7654/remember', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    agentId: 'support-agent',
    text: 'Customer Jane (acme-corp) reported billing discrepancy on invoice #4521. Resolved by applying 15% discount. Customer was satisfied.',
    tags: ['support', 'acme-corp', 'billing', 'resolved', 'SUP-892']
  })
});

// When a customer returns, pull their history
const response = await fetch(
  'http://localhost:7654/recall?agentId=support-agent&query=acme-corp+billing+issues&limit=10'
);
const { results } = await response.json();

// The agent now has full context on the customer's history
console.log(\`Found \${results.length} relevant memories for this customer\`);`}</CodeBlock>
        </CardContent>
      </Card>

      <Divider sx={{ my: 4 }} />

      {/* Example 3: Workflow Automation */}
      <Card elevation={0} sx={{ mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Workflow Automation
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Track decisions, blockers, and outcomes across automated workflows for debugging and
            optimization.
          </Typography>
          <CodeBlock language="javascript">{`// Log workflow decisions
async function logDecision(workflow, decision, reasoning) {
  await fetch('http://localhost:7654/remember', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      agentId: 'workflow-engine',
      text: \`Workflow "\${workflow}": \${decision}. Reasoning: \${reasoning}\`,
      tags: ['decision', 'workflow', workflow, new Date().toISOString().split('T')[0]]
    })
  });
}

// Usage
await logDecision(
  'deploy-pipeline',
  'Skipped staging deployment',
  'All integration tests passed and change is config-only'
);

// Search past workflow decisions
const searchResponse = await fetch(
  'http://localhost:7654/recall?agentId=workflow-engine&query=staging+deployment+decisions&limit=10'
);
const { results } = await searchResponse.json();

// Analyze patterns in past decisions
results.forEach(memory => {
  console.log(\`\${memory.text} (score: \${memory.score})\`);
});`}</CodeBlock>
        </CardContent>
      </Card>

      <Divider sx={{ my: 4 }} />

      {/* Example 4: Memory Chat */}
      <Card elevation={0}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Memory Chat Integration
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Use the chat endpoint to ask natural language questions about your agent&apos;s memory
            store.
          </Typography>
          <CodeBlock language="javascript">{`// Simple memory recall helper
async function askMemory(agentId, question, limit = 5) {
  const response = await fetch(
    \`http://localhost:7654/recall?agentId=\${agentId}&query=\${encodeURIComponent(question)}&limit=\${limit}\`
  );
  const { results } = await response.json();
  return results;
}

// Ask questions about stored knowledge
const memories = await askMemory("assistant", "coding preferences");

// Use memories as context for your LLM
const context = memories.map(m => m.text).join('\\n\\n');
console.log(\`Found \${memories.length} relevant memories:\`);
console.log(context);

// Pass to your LLM for a natural answer
// "The user prefers VS Code with dark mode, uses TypeScript,
//  and follows the Airbnb style guide..."`}</CodeBlock>
        </CardContent>
      </Card>
    </Box>
  );
}
