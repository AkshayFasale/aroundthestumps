import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-10 md:py-14 lg:py-16",
        className
      )}
    >
      {children}
    </section>
  );
}