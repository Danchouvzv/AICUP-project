"use client";
import * as React from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Can be expanded to use next-themes later. Currently enforcing dark mode.
  return <>{children}</>;
}
