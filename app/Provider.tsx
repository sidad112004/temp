"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

interface ProviderProps {
  children: React.ReactNode; // Define the type for children
}

export default function Provider({ children }: ProviderProps) {
  return (
    <SessionProvider>
      <Toaster richColors />
      {children}
    </SessionProvider>
  );
}
