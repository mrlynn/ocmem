"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ApiIcon from "@mui/icons-material/Api";
import CodeIcon from "@mui/icons-material/Code";
import WebhookIcon from "@mui/icons-material/Webhook";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const sidebarItems = [
  { label: "Overview", href: "/docs", icon: <MenuBookIcon /> },
  { label: "Getting Started", href: "/docs/getting-started", icon: <RocketLaunchIcon /> },
  { label: "How It Works", href: "/docs/how-it-works", icon: <AccountTreeIcon /> },
  { label: "Architecture", href: "/docs/architecture", icon: <ArchitectureIcon /> },
  { label: "Web Dashboard", href: "/docs/dashboard", icon: <DashboardIcon /> },
  { label: "API Reference", href: "/docs/api", icon: <ApiIcon /> },
  { label: "Hooks", href: "/docs/hooks", icon: <WebhookIcon /> },
  { label: "Examples", href: "/docs/examples", icon: <CodeIcon /> },
];

const SIDEBAR_WIDTH = 260;

function Sidebar({ onItemClick }: { onItemClick?: () => void }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(href);
    onItemClick?.();
  };

  return (
    <Box sx={{ py: 3 }}>
      <Typography
        variant="overline"
        sx={{ px: 2, mb: 1, display: "block", color: "text.secondary", fontWeight: 600 }}
      >
        Documentation
      </Typography>
      <List disablePadding>
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <ListItem key={item.href} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(item.href)}
                selected={isActive}
                sx={{
                  mx: 1,
                  borderRadius: 1,
                  "&.Mui-selected": {
                    backgroundColor: "primary.main",
                    color: "primary.contrastText",
                    "&:hover": { backgroundColor: "primary.dark" },
                    "& .MuiListItemIcon-root": { color: "inherit" },
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 36, color: isActive ? "inherit" : "text.secondary" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: isActive ? 600 : 400 }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ display: "flex", minHeight: "calc(100vh - 130px)" }}>
      {/* Desktop sidebar */}
      {!isMobile && (
        <Box
          sx={{
            width: SIDEBAR_WIDTH,
            flexShrink: 0,
            borderRight: 1,
            borderColor: "divider",
          }}
        >
          <Box sx={{ position: "sticky", top: 80 }}>
            <Sidebar />
          </Box>
        </Box>
      )}

      {/* Mobile sidebar drawer */}
      {isMobile && (
        <>
          <IconButton
            onClick={() => setMobileOpen(true)}
            sx={{
              position: "fixed",
              bottom: 20,
              right: 20,
              zIndex: 1000,
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              "&:hover": { backgroundColor: "primary.dark" },
              boxShadow: 3,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            PaperProps={{
              sx: { width: SIDEBAR_WIDTH, backgroundColor: "background.default" },
            }}
          >
            <Sidebar onItemClick={() => setMobileOpen(false)} />
          </Drawer>
        </>
      )}

      {/* Content area */}
      <Box
        sx={{
          flexGrow: 1,
          py: 4,
          px: { xs: 0, md: 4 },
          maxWidth: { md: `calc(100% - ${SIDEBAR_WIDTH}px)` },
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
