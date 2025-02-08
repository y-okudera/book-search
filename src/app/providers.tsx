"use client";

import { theme } from "@/styles/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
