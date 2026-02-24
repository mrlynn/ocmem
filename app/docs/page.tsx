"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ApiIcon from "@mui/icons-material/Api";
import CodeIcon from "@mui/icons-material/Code";
import WebhookIcon from "@mui/icons-material/Webhook";
import Link from "next/link";

const docCards = [
  {
    title: "Getting Started",
    description: "Install ocmem, configure MongoDB Atlas, and store your first memory in 5 minutes.",
    href: "/docs/getting-started",
    icon: <RocketLaunchIcon sx={{ fontSize: 36 }} />,
  },
  {
    title: "API Reference",
    description: "Complete reference for the ocmem daemon REST API — memories, search, and chat.",
    href: "/docs/api",
    icon: <ApiIcon sx={{ fontSize: 36 }} />,
  },
  {
    title: "Hooks",
    description: "Lifecycle hooks that make memory automatic — extract facts, save sessions, inject context.",
    href: "/docs/hooks",
    icon: <WebhookIcon sx={{ fontSize: 36 }} />,
  },
  {
    title: "Examples",
    description: "Real-world use cases: personal assistants, customer support, workflow automation.",
    href: "/docs/examples",
    icon: <CodeIcon sx={{ fontSize: 36 }} />,
  },
];

export default function DocsPage() {
  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Documentation
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
        Everything you need to add persistent semantic memory to your AI agents.
      </Typography>

      <Grid container spacing={3}>
        {docCards.map((card) => (
          <Grid key={card.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card elevation={0} sx={{ height: "100%" }}>
              <Link href={card.href} passHref style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardActionArea sx={{ height: "100%", p: 0 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ color: "primary.main", mb: 2 }}>{card.icon}</Box>
                    <Typography variant="h4" sx={{ mb: 1 }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
