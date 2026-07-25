import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
    >
      Around<span className="text-green-500"></span>the
      <span className="text-green-500">Stumps</span>
    </Link>
  );
}
