import Link from "next/link";

export function BackLink({
  href = "/",
  label = "All posts",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-sienna transition-colors"
    >
      <span aria-hidden>←</span> {label}
    </Link>
  );
}
