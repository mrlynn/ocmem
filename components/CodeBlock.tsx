"use client";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import { brand } from "@/lib/theme";

interface CodeBlockProps {
  children: string;
  language?: string;
}

export default function CodeBlock({ children, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 2,
        overflow: "hidden",
        border: 1,
        borderColor: "divider",
        my: 2,
      }}
    >
      {language && (
        <Box
          sx={{
            px: 2,
            py: 0.5,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? brand.gray[900] : brand.gray[100],
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Box
            component="span"
            sx={{
              fontSize: "0.75rem",
              color: "text.secondary",
              textTransform: "uppercase",
              fontFamily: '"JetBrains Mono", monospace',
            }}
          >
            {language}
          </Box>
          <Tooltip title={copied ? "Copied!" : "Copy"}>
            <IconButton size="small" onClick={handleCopy} sx={{ color: "text.secondary" }}>
              <ContentCopyIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </Tooltip>
        </Box>
      )}
      <Box
        component="pre"
        sx={{
          m: 0,
          p: 2.5,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? brand.darkBlue : brand.gray[50],
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "0.85rem",
          lineHeight: 1.7,
          overflowX: "auto",
          color: "text.primary",
          "& code": {
            fontFamily: "inherit",
          },
        }}
      >
        <code>{children}</code>
      </Box>
    </Box>
  );
}
