"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StorageIcon from "@mui/icons-material/Storage";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import TimelineIcon from "@mui/icons-material/Timeline";
import Link from "next/link";

const sampleMemories = [
  {
    content: "User prefers TypeScript with strict mode enabled",
    source: "coding-agent",
    time: "2 hours ago",
    score: 0.95,
  },
  {
    content: "Team standup is at 9:30 AM EST on weekdays",
    source: "calendar-agent",
    time: "1 day ago",
    score: 0.88,
  },
  {
    content: "Deployed v2.3.1 to production with zero downtime",
    source: "deploy-agent",
    time: "3 days ago",
    score: 0.82,
  },
  {
    content: "Customer prefers email communication over Slack",
    source: "support-agent",
    time: "1 week ago",
    score: 0.76,
  },
];

const stats = [
  { label: "Total Memories", value: "1,247", icon: <StorageIcon /> },
  { label: "Searches Today", value: "89", icon: <SearchIcon /> },
  { label: "Chat Queries", value: "34", icon: <ChatIcon /> },
  { label: "Avg Response", value: "45ms", icon: <TimelineIcon /> },
];

export default function DashboardPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 4, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Typography variant="h2">Demo Dashboard</Typography>
            <Chip label="Read-only" size="small" color="warning" variant="outlined" />
          </Box>
          <Typography variant="body1" color="text.secondary">
            A preview of the ocmem memory browser with sample data.
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="/docs/getting-started"
          endIcon={<ArrowForwardIcon />}
        >
          Set Up Your Own
        </Button>
      </Box>

      {/* Stats row */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {stats.map((stat) => (
          <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
            <Card elevation={0}>
              <CardContent sx={{ p: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ color: "primary.main" }}>{stat.icon}</Box>
                <Box>
                  <Typography variant="h4" sx={{ fontSize: "1.5rem" }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.8rem" }}>
                    {stat.label}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Memory browser */}
      <Typography variant="h3" sx={{ mb: 2 }}>
        Recent Memories
      </Typography>
      <Grid container spacing={2}>
        {sampleMemories.map((memory, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <Card elevation={0}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1, alignItems: "flex-start" }}>
                  <Chip
                    label={memory.source}
                    size="small"
                    variant="outlined"
                    sx={{ fontSize: "0.75rem" }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    {memory.time}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                  {memory.content}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      height: 4,
                      flexGrow: 1,
                      borderRadius: 2,
                      backgroundColor: "divider",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        width: `${memory.score * 100}%`,
                        backgroundColor: "primary.main",
                        borderRadius: 2,
                      }}
                    />
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    {(memory.score * 100).toFixed(0)}%
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
