"use client";

import { Menu } from "lucide-react";

export function MobileNav() {
  return (
    <button
      className="rounded-xl p-2 transition-colors hover:bg-zinc-800 md:hidden"
      aria-label="Open navigation menu"
    >
      <Menu className="h-5 w-5" />
    </button>
  );
}
