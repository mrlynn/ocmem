"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";
import { brand } from "@/lib/theme";

export default function Hero() {
  return (
    <Box
      sx={{
        pt: { xs: 8, md: 14 },
        pb: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient background accent */}
      <Box
        sx={{
          position: "absolute",
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${brand.springGreen}15, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${brand.springGreen}08, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center" }}>
          <Box
            component="img"
            src="/images/ocmem-trans-1024x1024.png"
            alt="ocmem"
            sx={{
              display: "block",
              mx: "auto",
              width: { xs: 120, sm: 150, md: 180 },
              height: { xs: 120, sm: 150, md: 180 },
              mb: 3,
              filter: (theme) =>
                theme.palette.mode === "dark"
                  ? "drop-shadow(0 0 40px rgba(0, 237, 100, 0.15))"
                  : "drop-shadow(0 0 40px rgba(0, 104, 74, 0.1))",
            }}
          />

          <Chip
            label="Open Source &middot; MongoDB Atlas &middot; Voyage AI"
            variant="outlined"
            sx={{
              mb: 3,
              borderColor: "primary.main",
              color: "primary.main",
              fontSize: "0.8rem",
            }}
          />

          <Typography
            variant="h1"
            sx={{
              mb: 3,
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.75rem" },
              background: (theme) =>
                theme.palette.mode === "dark"
                  ? `linear-gradient(135deg, ${brand.white} 0%, ${brand.springGreen} 100%)`
                  : `linear-gradient(135deg, ${brand.slateBlue} 0%, ${brand.darkSpringGreen} 100%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Give Your AI Agent a Memory That Actually Remembers
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 5,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              maxWidth: 600,
              mx: "auto",
            }}
          >
            MongoDB-backed semantic memory for AI agents and workflows. Store, search, and recall
            context with vector embeddings — so your AI never forgets.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              href="/docs/getting-started"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/dashboard"
              startIcon={<PlayArrowIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                borderColor: "divider",
                color: "text.primary",
                "&:hover": { borderColor: "primary.main" },
              }}
            >
              View Demo
            </Button>
          </Stack>

          {/* Terminal preview */}
          <Box
            sx={{
              mt: 8,
              mx: "auto",
              maxWidth: 550,
              borderRadius: 2,
              overflow: "hidden",
              border: 1,
              borderColor: "divider",
              textAlign: "left",
            }}
          >
            <Box
              sx={{
                px: 2,
                py: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? brand.gray[900] : brand.gray[100],
                display: "flex",
                alignItems: "center",
                gap: 0.75,
              }}
            >
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#FF5F57" }} />
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#FEBC2E" }} />
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#28C840" }} />
              <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                Terminal
              </Typography>
            </Box>
            <Box
              sx={{
                p: 2.5,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? brand.darkBlue : brand.gray[50],
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "0.85rem",
                lineHeight: 1.8,
              }}
            >
              <Box component="span" sx={{ color: "text.secondary" }}>
                ${" "}
              </Box>
              <Box component="span" sx={{ color: "primary.main" }}>
                openclaw plugins install openclaw-memory
              </Box>
              <br />
              <Box component="span" sx={{ color: "text.secondary" }}>
                ${" "}
              </Box>
              <Box component="span" sx={{ color: "primary.main" }}>
                openclaw gateway start
              </Box>
              <br />
              <Box component="span" sx={{ color: "text.secondary" }}>
                ${" "}
              </Box>
              <Box component="span" sx={{ color: brand.springGreen, opacity: 0.7 }}>
                # Daemon auto-starts with gateway
              </Box>
              <br />
              <Box component="span" sx={{ color: brand.springGreen }}>
                {">"} Memory daemon running on port 7654
              </Box>
              <br />
              <Box component="span" sx={{ color: brand.springGreen }}>
                {">"} Connected to MongoDB Atlas
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
