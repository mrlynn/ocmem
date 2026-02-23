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
await fetch('http://localhost:3456/api/memories', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    content: 'User prefers morning standup at 9:30 AM EST',
    metadata: {
      source: 'calendar-agent',
      type: 'preference',
      category: 'scheduling'
    }
  })
});

// Later, recall scheduling preferences
const response = await fetch(
  'http://localhost:3456/api/memories/search?q=meeting+schedule+preferences&limit=5'
);
const { results } = await response.json();

// Use memories as context for the AI
const context = results.map(m => m.content).join('\\n');
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
await fetch('http://localhost:3456/api/memories', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    content: 'Customer Jane (acme-corp) reported billing discrepancy on invoice #4521. Resolved by applying 15% discount. Customer was satisfied.',
    metadata: {
      source: 'support-agent',
      customerId: 'acme-corp',
      ticketId: 'SUP-892',
      resolution: 'discount-applied'
    }
  })
});

// When a customer returns, pull their history
const response = await fetch(
  'http://localhost:3456/api/memories/search?q=acme-corp+billing+issues&limit=10'
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
  await fetch('http://localhost:3456/api/memories', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: \`Workflow "\${workflow}": \${decision}. Reasoning: \${reasoning}\`,
      metadata: {
        source: 'workflow-engine',
        workflow,
        type: 'decision',
        timestamp: new Date().toISOString()
      }
    })
  });
}

// Usage
await logDecision(
  'deploy-pipeline',
  'Skipped staging deployment',
  'All integration tests passed and change is config-only'
);

// Ask the memory chat about past workflow decisions
const chatResponse = await fetch('http://localhost:3456/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: 'Why was staging skipped in recent deployments?',
    memoryLimit: 10
  })
});
const { answer, sources } = await chatResponse.json();
console.log(answer);
// "Staging was skipped because all integration tests passed and the change was config-only..."`}</CodeBlock>
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
          <CodeBlock language="javascript">{`// Simple chat wrapper
async function askMemory(question) {
  const response = await fetch('http://localhost:3456/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: question, memoryLimit: 5 })
  });
  return response.json();
}

// Ask questions about stored knowledge
const result = await askMemory("What are the user's coding preferences?");
console.log(result.answer);
// "The user prefers VS Code with dark mode, uses TypeScript,
//  and follows the Airbnb style guide..."

console.log(\`Based on \${result.sources.length} memories\`);`}</CodeBlock>
        </CardContent>
      </Card>
    </Box>
  );
}
