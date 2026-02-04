"use client";

import { useState, useEffect } from "react";

export default function FontSizeToolbar() {
  // Initialize state from localStorage to avoid synchronous setState in useEffect
  const [fontSize, setFontSize] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("fontSize");
      return saved ? parseInt(saved) : 16;
    }
    return 16; // default font size for SSR
  });

  // Apply font size only to #main-content
  useEffect(() => {
    const main = document.getElementById("main-content");
    if (main) {
      main.style.fontSize = fontSize + "px";
    }
    localStorage.setItem("fontSize", fontSize.toString());
  }, [fontSize]);

  const increase = () => setFontSize((prev) => Math.min(prev + 2, 24));
  const decrease = () => setFontSize((prev) => Math.max(prev - 2, 12));
  const reset = () => setFontSize(16);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 z-50">
      <button
        onClick={increase}
        aria-label="Increase font size"
        className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        A+
      </button>
      <button
        onClick={reset}
        aria-label="Reset font size"
        className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        A
      </button>
      <button
        onClick={decrease}
        aria-label="Decrease font size"
        className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        A-
      </button>
      <span className="text-center text-sm text-gray-500 dark:text-gray-300">{fontSize}px</span>
    </div>
  );
}
