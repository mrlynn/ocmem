import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Box from "@mui/material/Box";

export const metadata: Metadata = {
  title: "ocmem - Semantic Memory for AI Agents",
  description:
    "MongoDB-backed semantic memory for AI agents and workflows. Give your AI agent a memory that actually remembers.",
  keywords: ["AI memory", "MongoDB", "semantic search", "vector search", "AI agents", "OpenClaw"],
  openGraph: {
    title: "ocmem - Semantic Memory for AI Agents",
    description: "MongoDB-backed semantic memory for AI agents and workflows.",
    url: "https://ocmem.com",
    siteName: "ocmem",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0 }}>
        <ThemeProvider>
          <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
