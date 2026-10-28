import { useEffect } from "react";

export default function AnimatedCursor() {
  useEffect(() => {
    document.body.classList.remove("custom-cursor-enabled");
  }, []);

  return null;
}
