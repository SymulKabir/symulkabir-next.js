"use client";
import { useEffect } from "react";

const Index = () => {
  const offset = 70;
  const className = "sticky";
  useEffect(() => {
    const handleScroll = () => {
      const headerElement = document.getElementById("header");

      if (!headerElement) {
        return;
      }
      if (window.scrollY > offset) {
        if (!headerElement.classList.contains(className))
          headerElement.classList.add("sticky");
      } else {
        if (headerElement.classList.contains(className))
          headerElement.classList.remove("sticky");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default Index;
