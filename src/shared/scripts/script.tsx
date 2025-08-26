"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavHighlighter() {
  const pathname = usePathname();

  useEffect(() => {
    const headerNav = document?.getElementById("header-nav");
    if (!headerNav) return;

    const aElements = headerNav?.querySelectorAll<HTMLAnchorElement>("a");
    
    aElements?.forEach((element) => {
      const href = element?.getAttribute("href");
      if (href === pathname) {
        element?.classList?.add("active");
      } else {
        element.classList.remove("active"); // optional: remove "active" from others
      }
    });

     
  }, [pathname]);
 
  return null;
}
