import { MastheadClient } from "./MastheadClient";

export function Masthead({ compact = false }: { compact?: boolean }) {
  return <MastheadClient compact={compact} />;
}
