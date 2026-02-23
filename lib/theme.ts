"use client";

import { createTheme, type ThemeOptions } from "@mui/material/styles";

// MongoDB Brand Colors
const brand = {
  springGreen: "#00ED64",
  darkSpringGreen: "#00684A",
  forest: "#023430",
  slateBlue: "#001E2B",
  darkBlue: "#061621",
  white: "#FFFFFF",
  gray: {
    50: "#F9FBFA",
    100: "#F0F2F1",
    200: "#E8EDEB",
    300: "#C1C7C6",
    400: "#889397",
    500: "#5C6C75",
    600: "#3D4F58",
    700: "#1C2D38",
    800: "#112733",
    900: "#001E2B",
  },
};

const sharedTypography: ThemeOptions["typography"] = {
  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
  h1: {
    fontWeight: 700,
    fontSize: "3.5rem",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
  },
  h2: {
    fontWeight: 700,
    fontSize: "2.5rem",
    lineHeight: 1.2,
    letterSpacing: "-0.01em",
  },
  h3: {
    fontWeight: 600,
    fontSize: "1.75rem",
    lineHeight: 1.3,
  },
  h4: {
    fontWeight: 600,
    fontSize: "1.25rem",
    lineHeight: 1.4,
  },
  body1: {
    fontSize: "1.125rem",
    lineHeight: 1.7,
  },
  body2: {
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  button: {
    textTransform: "none",
    fontWeight: 600,
  },
};

const sharedComponents: ThemeOptions["components"] = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: "10px 24px",
        fontSize: "1rem",
      },
      containedPrimary: {
        backgroundColor: brand.springGreen,
        color: brand.slateBlue,
        "&:hover": {
          backgroundColor: brand.darkSpringGreen,
          color: brand.white,
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 6,
      },
    },
  },
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: brand.springGreen,
      dark: brand.darkSpringGreen,
    },
    secondary: {
      main: brand.gray[400],
    },
    background: {
      default: brand.slateBlue,
      paper: brand.gray[800],
    },
    text: {
      primary: brand.white,
      secondary: brand.gray[300],
    },
  },
  typography: sharedTypography,
  components: {
    ...sharedComponents,
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: brand.gray[800],
          border: `1px solid ${brand.gray[700]}`,
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: brand.darkSpringGreen,
      dark: brand.forest,
    },
    secondary: {
      main: brand.gray[600],
    },
    background: {
      default: brand.gray[50],
      paper: brand.white,
    },
    text: {
      primary: brand.slateBlue,
      secondary: brand.gray[600],
    },
  },
  typography: sharedTypography,
  components: {
    ...sharedComponents,
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: `1px solid ${brand.gray[200]}`,
        },
      },
    },
  },
});

export { brand };
