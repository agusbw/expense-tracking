"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/theme-provider";

type Props = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      {" "}
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        {children}{" "}
      </ThemeProvider>
    </SessionProvider>
  );
};
