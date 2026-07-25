import Link from "next/link";

const navigation = [
  { label: "News", href: "/news" },
  { label: "Matches", href: "/matches" },
  { label: "Series", href: "/series" },
  { label: "Players", href: "/players" },
  { label: "Stats", href: "/stats" },
];

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navigation.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
