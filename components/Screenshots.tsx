"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { brand } from "@/lib/theme";

const screenshots = [
  {
    id: "dashboard",
    label: "Dashboard",
    src: "/screenshots/dashboard.png",
    caption: "Real-time dashboard with word cloud, memory layers, activity timeline, and service health monitoring.",
  },
  {
    id: "search",
    label: "Semantic Search",
    src: "/screenshots/search.png",
    caption: "Search by meaning, not keywords. Results ranked by semantic similarity with confidence scores.",
  },
  {
    id: "usage",
    label: "Usage & Cost",
    src: "/screenshots/usage.png",
    caption: "Full observability into embedding costs, token usage, and operation breakdowns.",
  },
  {
    id: "graph",
    label: "Knowledge Graph",
    src: "/screenshots/graph.png",
    caption: "Explore relationships between memories with an interactive graph visualization.",
  },
];

function BrowserFrame({
  src,
  label,
  isActive,
}: {
  src: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        border: 1,
        borderColor: (theme) =>
          isActive
            ? theme.palette.mode === "dark"
              ? `${brand.springGreen}40`
              : `${brand.darkSpringGreen}30`
            : "divider",
        transition: "border-color 0.3s, box-shadow 0.3s",
        boxShadow: isActive
          ? (theme) =>
              theme.palette.mode === "dark"
                ? `0 20px 60px rgba(0, 237, 100, 0.08), 0 0 0 1px ${brand.springGreen}20`
                : `0 20px 60px rgba(0, 104, 74, 0.06), 0 0 0 1px ${brand.darkSpringGreen}15`
          : "0 8px 32px rgba(0,0,0,0.12)",
      }}
    >
      {/* Browser chrome title bar */}
      <Box
        sx={{
          px: 2,
          py: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? brand.gray[900] : brand.gray[100],
          display: "flex",
          alignItems: "center",
          gap: 0.75,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#FF5F57" }} />
        <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#FEBC2E" }} />
        <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#28C840" }} />
        <Box
          sx={{
            ml: 1.5,
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              px: 3,
              py: 0.25,
              borderRadius: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(0,0,0,0.03)",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: brand.springGreen,
                opacity: 0.6,
              }}
            />
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                fontSize: "0.7rem",
                fontFamily: '"JetBrains Mono", monospace',
                opacity: 0.5,
              }}
            >
              localhost:3000 — {label}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Screenshot content */}
      <Box
        component="img"
        src={src}
        alt={`ocmem ${label} screenshot`}
        loading="lazy"
        sx={{
          width: "100%",
          display: "block",
          backgroundColor: brand.slateBlue,
        }}
      />
    </Box>
  );
}

export default function Screenshots() {
  const [active, setActive] = useState(0);

  return (
    <Box
      id="screenshots"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background glow */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${brand.springGreen}06, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Typography variant="h2" textAlign="center" sx={{ mb: 2 }}>
          See It In Action
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 5, maxWidth: 600, mx: "auto" }}
        >
          A full-featured dashboard to visualize, search, and manage your AI&apos;s memory.
        </Typography>

        {/* Tab pills */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          sx={{ mb: 4, flexWrap: "wrap", gap: 1 }}
        >
          {screenshots.map((ss, i) => (
            <Chip
              key={ss.id}
              label={ss.label}
              variant={i === active ? "filled" : "outlined"}
              onClick={() => setActive(i)}
              sx={{
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.85rem",
                px: 1,
                transition: "all 0.2s",
                ...(i === active
                  ? {
                      backgroundColor: "primary.main",
                      color: (theme) =>
                        theme.palette.mode === "dark" ? brand.slateBlue : brand.white,
                      "&:hover": {
                        backgroundColor: "primary.dark",
                      },
                    }
                  : {
                      borderColor: "divider",
                      color: "text.secondary",
                      "&:hover": {
                        borderColor: "primary.main",
                        color: "primary.main",
                      },
                    }),
              }}
            />
          ))}
        </Stack>

        {/* Active screenshot in browser frame */}
        <Box
          sx={{
            maxWidth: 1100,
            mx: "auto",
            mb: 3,
          }}
        >
          <BrowserFrame
            src={screenshots[active].src}
            label={screenshots[active].label}
            isActive={true}
          />
        </Box>

        {/* Caption */}
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          sx={{
            maxWidth: 500,
            mx: "auto",
            fontSize: "0.9rem",
            lineHeight: 1.6,
          }}
        >
          {screenshots[active].caption}
        </Typography>
      </Container>
    </Box>
  );
}
