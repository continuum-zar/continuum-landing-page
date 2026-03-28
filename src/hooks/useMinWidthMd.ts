import { useEffect, useState } from "react";

/** Tailwind `md` breakpoint (768px). Safe for Vite client bundle. */
export function useMinWidthMd() {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(min-width: 768px)").matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => setMatches(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return matches;
}
