import { Search } from "lucide-react";

import { Container } from "./Container";
import { DesktopNav } from "./DesktopNav";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <DesktopNav />

          <div className="flex items-center gap-2">
            <button
              className="hidden rounded-xl p-2 transition-colors hover:bg-zinc-800 md:block"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
