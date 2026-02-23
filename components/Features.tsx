"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StorageIcon from "@mui/icons-material/Storage";
import SearchIcon from "@mui/icons-material/Search";
import TimelineIcon from "@mui/icons-material/Timeline";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ExtensionIcon from "@mui/icons-material/Extension";

const features = [
  {
    icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
    title: "Semantic Memory",
    description:
      "Vector search with Voyage AI embeddings. Find memories by meaning, not just keywords.",
  },
  {
    icon: <StorageIcon sx={{ fontSize: 40 }} />,
    title: "MongoDB Storage",
    description:
      "Scalable, production-ready storage on MongoDB Atlas with automatic TTL expiration.",
  },
  {
    icon: <SearchIcon sx={{ fontSize: 40 }} />,
    title: "Memory Chat",
    description:
      "Ask natural language questions about past conversations and get instant answers.",
  },
  {
    icon: <TimelineIcon sx={{ fontSize: 40 }} />,
    title: "Visual Timeline",
    description:
      "See memory activity over time. Browse, filter, and explore your agent's memory.",
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
    title: "5-Minute Setup",
    description:
      "npm install, configure your MongoDB URI, and start storing memories immediately.",
  },
  {
    icon: <ExtensionIcon sx={{ fontSize: 40 }} />,
    title: "OpenClaw Integration",
    description:
      "Built-in plugin for OpenClaw agents. Drop-in memory for your existing AI workflows.",
  },
];

export default function Features() {
  return (
    <Box id="features" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" sx={{ mb: 2 }}>
          Everything Your AI Needs to Remember
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 8, maxWidth: 600, mx: "auto" }}
        >
          A complete memory system built for production AI applications.
        </Typography>

        <Grid container spacing={3}>
          {features.map((feature) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 4 }}>
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
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ color: "primary.main", mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h4" sx={{ mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
