import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">{children}</main>
  );
}
