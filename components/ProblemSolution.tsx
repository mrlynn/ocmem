"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { brand } from "@/lib/theme";

const problems = [
  "AI agents forget context between sessions",
  "Repeated questions waste user time",
  "No persistent memory across conversations",
  "Rebuilding state from scratch every time",
];

const solutions = [
  "Persistent semantic memory with vector search",
  "Instant recall of relevant past context",
  "MongoDB Atlas for production-grade storage",
  "Automatic TTL expiration for memory hygiene",
];

export default function ProblemSolution() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" sx={{ mb: 2 }}>
          The Problem with AI Memory
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 8, maxWidth: 600, mx: "auto" }}
        >
          Most AI agents start every conversation from zero. Your users deserve better.
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                border: 1,
                borderColor: "error.main",
                borderRadius: 3,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? `${brand.gray[800]}` : brand.gray[50],
              }}
            >
              <Typography
                variant="h4"
                sx={{ mb: 3, color: "error.main", display: "flex", alignItems: "center", gap: 1 }}
              >
                <CloseIcon /> Without ocmem
              </Typography>
              {problems.map((item) => (
                <Box key={item} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 2 }}>
                  <CloseIcon sx={{ color: "error.main", fontSize: 20, mt: 0.3 }} />
                  <Typography variant="body2" color="text.secondary">
                    {item}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                border: 1,
                borderColor: "primary.main",
                borderRadius: 3,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? `${brand.gray[800]}` : brand.gray[50],
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  color: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <CheckIcon /> With ocmem
              </Typography>
              {solutions.map((item) => (
                <Box key={item} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 2 }}>
                  <CheckIcon sx={{ color: "primary.main", fontSize: 20, mt: 0.3 }} />
                  <Typography variant="body2" color="text.secondary">
                    {item}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
