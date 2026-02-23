"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { useState } from "react";
import { brand } from "@/lib/theme";

const installCommands = `npm install -g @openclaw-memory/cli
ocmem init
ocmem start`;

export default function Installation() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommands);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Typography variant="h2" textAlign="center" sx={{ mb: 2 }}>
          Up and Running in 5 Minutes
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 6, maxWidth: 500, mx: "auto" }}
        >
          Install the CLI, initialize your config, and start storing memories.
        </Typography>

        <Box
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            border: 1,
            borderColor: "divider",
            maxWidth: 600,
            mx: "auto",
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
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#FF5F57" }} />
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#FEBC2E" }} />
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#28C840" }} />
            </Box>
            <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
              <IconButton size="small" onClick={handleCopy} sx={{ color: "text.secondary" }}>
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
          <Box
            sx={{
              p: 3,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? brand.darkBlue : brand.gray[50],
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.9rem",
              lineHeight: 2,
            }}
          >
            <Box component="span" sx={{ color: "text.secondary" }}>
              # Install the CLI{"\n"}
            </Box>
            <br />
            <Box component="span" sx={{ color: "text.secondary" }}>
              ${" "}
            </Box>
            <Box component="span" sx={{ color: "primary.main" }}>
              npm install -g @openclaw-memory/cli
            </Box>
            <br />
            <br />
            <Box component="span" sx={{ color: "text.secondary" }}>
              # Initialize your config{"\n"}
            </Box>
            <br />
            <Box component="span" sx={{ color: "text.secondary" }}>
              ${" "}
            </Box>
            <Box component="span" sx={{ color: "primary.main" }}>
              ocmem init
            </Box>
            <br />
            <Box component="span" sx={{ color: brand.springGreen, opacity: 0.8 }}>
              {">"} Created ~/.ocmem/config.json
            </Box>
            <br />
            <br />
            <Box component="span" sx={{ color: "text.secondary" }}>
              # Start the memory daemon{"\n"}
            </Box>
            <br />
            <Box component="span" sx={{ color: "text.secondary" }}>
              ${" "}
            </Box>
            <Box component="span" sx={{ color: "primary.main" }}>
              ocmem start
            </Box>
            <br />
            <Box component="span" sx={{ color: brand.springGreen }}>
              {">"} Memory daemon running on port 3456
            </Box>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            href="/docs/getting-started"
            endIcon={<ArrowForwardIcon />}
          >
            Full Installation Guide
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
