"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Toast = {
  id: number;
  kind: "success" | "error" | "info";
  message: string;
};

type Ctx = {
  show: (kind: Toast["kind"], message: string) => void;
};

const ToastCtx = createContext<Ctx | null>(null);

export function useToast() {
  const ctx = useContext(ToastCtx);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Toast[]>([]);
  const idRef = useRef(0);

  const show = useCallback((kind: Toast["kind"], message: string) => {
    const id = ++idRef.current;
    setItems((prev) => [...prev, { id, kind, message }]);
    setTimeout(() => {
      setItems((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  return (
    <ToastCtx.Provider value={{ show }}>
      {children}
      <div
        aria-live="polite"
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"
      >
        {items.map((t) => (
          <div
            key={t.id}
            role="status"
            className={`pointer-events-auto min-w-[260px] max-w-sm shadow-lg border bg-paper px-4 py-3 flex items-start gap-3 toast-in ${
              t.kind === "success"
                ? "border-emerald-700"
                : t.kind === "error"
                  ? "border-sienna"
                  : "border-rule"
            }`}
          >
            <span
              aria-hidden
              className={`mt-1 inline-block w-2 h-2 rounded-full ${
                t.kind === "success"
                  ? "bg-emerald-700"
                  : t.kind === "error"
                    ? "bg-sienna"
                    : "bg-ink-faint"
              }`}
            />
            <div className="flex-1 text-[0.92rem] text-ink leading-snug">
              {t.message}
            </div>
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}

export function useUnloadGuard(when: boolean, message: string) {
  useEffect(() => {
    if (!when) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = message;
      return message;
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [when, message]);
}
