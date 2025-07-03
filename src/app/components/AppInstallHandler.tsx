"use client";
import { useEffect } from "react";

export default function AppInstallHandler() {
  useEffect(() => {
    const handler = (e: Event) => {
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        e.preventDefault();
      }
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);
  return null;
} 