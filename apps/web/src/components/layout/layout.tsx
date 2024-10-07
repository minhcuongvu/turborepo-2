'use client';
import React from 'react';
import { ThemeProvider } from '../theme';

export default function LayoutComponent({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
