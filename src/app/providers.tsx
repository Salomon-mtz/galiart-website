'use client';

import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme/theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}