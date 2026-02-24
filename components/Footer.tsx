"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Use Cases", href: "/#use-cases" },
      { label: "Demo", href: "/dashboard" },
    ],
  },
  {
    title: "Documentation",
    links: [
      { label: "Getting Started", href: "/docs/getting-started" },
      { label: "API Reference", href: "/docs/api" },
      { label: "Examples", href: "/docs/examples" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: "https://github.com/mrlynn/openclaw-memory" },
      { label: "Issues", href: "https://github.com/mrlynn/openclaw-memory/issues" },
      { label: "Discussions", href: "https://github.com/mrlynn/openclaw-memory/discussions" },
    ],
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        pt: 6,
        pb: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Box
                component="img"
                src="/images/ocmem-trans-1024x1024.png"
                alt="ocmem logo"
                sx={{ width: 28, height: 28 }}
              />
              <Typography variant="h6" fontWeight={700}>
                ocmem
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 300 }}>
              MongoDB-backed semantic memory for AI agents and workflows. Built on MongoDB Atlas with Voyage AI embeddings.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, opacity: 0.7 }}>
              <Box
                component="img"
                src="/images/mongodb-icon.svg"
                alt="MongoDB"
                sx={{ height: 24 }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.8rem" }}>
                Built on MongoDB Atlas
              </Typography>
            </Box>
          </Grid>
          {footerSections.map((section) => (
            <Grid key={section.title} size={{ xs: 6, sm: 4, md: 2 }}>
              <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1.5 }}>
                {section.title}
              </Typography>
              {section.links.map((link) => (
                <MuiLink
                  key={link.label}
                  component={link.href.startsWith("http") ? "a" : Link}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener" : undefined}
                  underline="none"
                  color="text.secondary"
                  sx={{
                    display: "block",
                    mb: 1,
                    fontSize: "0.875rem",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          &copy; {new Date().getFullYear()} OpenClaw Memory. Built with MongoDB Atlas.
        </Typography>
      </Container>
    </Box>
  );
}
