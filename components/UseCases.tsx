"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { brand } from "@/lib/theme";

const useCases = [
  {
    icon: <SmartToyIcon sx={{ fontSize: 48 }} />,
    title: "Personal Assistants",
    description:
      "Remember user preferences, past decisions, and conversation context. Your assistant learns and improves over time.",
    examples: ["Calendar preferences", "Communication style", "Project context"],
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 48 }} />,
    title: "Customer Support",
    description:
      "Recall prior conversations and build lasting relationships. No more asking customers to repeat themselves.",
    examples: ["Ticket history", "Customer preferences", "Issue patterns"],
  },
  {
    icon: <AccountTreeIcon sx={{ fontSize: 48 }} />,
    title: "Workflow Automation",
    description:
      "Track job history, decisions, and blockers across automated workflows. Debug faster with full memory trails.",
    examples: ["Decision audit trails", "Error recovery", "Process optimization"],
  },
];

export default function UseCases() {
  return (
    <Box id="use-cases" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" sx={{ mb: 2 }}>
          Built for Real-World AI
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 8, maxWidth: 600, mx: "auto" }}
        >
          See how teams use ocmem to give their AI agents persistent, searchable memory.
        </Typography>

        <Grid container spacing={4}>
          {useCases.map((useCase) => (
            <Grid key={useCase.title} size={{ xs: 12, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "primary.main",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: "primary.main", mb: 2 }}>{useCase.icon}</Box>
                  <Typography variant="h3" sx={{ mb: 1.5, fontSize: "1.4rem" }}>
                    {useCase.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {useCase.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {useCase.examples.map((example) => (
                      <Box
                        key={example}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: brand.springGreen,
                            flexShrink: 0,
                          }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {example}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
