import { Fragment, type ReactNode } from "react";
import { marked } from "marked";

marked.setOptions({ gfm: true, breaks: false });

export async function renderMarkdown(content: string): Promise<string> {
  return marked.parse(content);
}

export function renderInlineBold(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
