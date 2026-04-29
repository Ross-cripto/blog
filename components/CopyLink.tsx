"use client";

import { useState } from "react";
import { useToast } from "./Toast";

export function CopyLink({ slug }: { slug: string }) {
  const { show } = useToast();
  const [copied, setCopied] = useState(false);

  async function copy() {
    const url = `${window.location.origin}/posts/${slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      show("success", "Link copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      show("error", "Could not copy link");
    }
  }

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-sienna transition-colors"
      aria-label="Copy link to this post"
    >
      <span aria-hidden>{copied ? "✓" : "⎘"}</span>
      {copied ? "Copied" : "Copy link"}
    </button>
  );
}
