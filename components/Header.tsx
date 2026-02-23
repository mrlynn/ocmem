"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { useState } from "react";
import { useThemeMode } from "@/lib/ThemeContext";

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Docs", href: "/docs" },
  { label: "Demo", href: "/dashboard" },
];

export default function Header() {
  const { mode, toggleTheme } = useThemeMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "background.default",
          borderBottom: 1,
          borderColor: "divider",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto", px: { xs: 2, md: 3 } }}>
          <Box
            component={Link}
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              color: "text.primary",
              mr: 4,
            }}
          >
            <Box
              component="img"
              src="/images/ocmem-trans-1024x1024.png"
              alt="ocmem logo"
              sx={{ width: 32, height: 32 }}
            />
            <Typography variant="h6" fontWeight={700}>
              ocmem
            </Typography>
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1, flexGrow: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.href}
                  color="inherit"
                  sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: "auto" }}>
            <IconButton
              component="a"
              href="https://github.com/mrlynn/openclaw-memory"
              target="_blank"
              rel="noopener"
              sx={{ color: "text.secondary" }}
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton onClick={toggleTheme} sx={{ color: "text.secondary" }} aria-label="Toggle theme">
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            {!isMobile && (
              <Button
                variant="contained"
                color="primary"
                component={Link}
                href="/docs/getting-started"
                size="small"
              >
                Get Started
              </Button>
            )}
            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: "text.primary" }}
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { width: 260, backgroundColor: "background.default" },
        }}
      >
        <List sx={{ pt: 4 }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href="/docs/getting-started"
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText
                primary="Get Started"
                primaryTypographyProps={{ color: "primary", fontWeight: 600 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
