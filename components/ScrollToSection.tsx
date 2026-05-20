"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToSection() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const target = searchParams.get("scrollTo");

    if (!target) return;

    const element = document.getElementById(target);

    if (!element) return;

    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, [searchParams]);

  return null;
}