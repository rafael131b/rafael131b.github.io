import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { Framework } from "./data/profile";

type Ctx = { fw: Framework; setFw: (fw: Framework) => void; toggle: () => void };

const FrameworkContext = createContext<Ctx | null>(null);

export function FrameworkProvider({ children }: { children: ReactNode }) {
  const [fw, setFw] = useState<Framework>("react");

  useEffect(() => {
    document.documentElement.dataset.fw = fw;
  }, [fw]);

  const toggle = useCallback(() => setFw((f) => (f === "react" ? "angular" : "react")), []);

  return <FrameworkContext.Provider value={{ fw, setFw, toggle }}>{children}</FrameworkContext.Provider>;
}

export function useFramework() {
  const ctx = useContext(FrameworkContext);
  if (!ctx) throw new Error("useFramework must be used inside FrameworkProvider");
  return ctx;
}
