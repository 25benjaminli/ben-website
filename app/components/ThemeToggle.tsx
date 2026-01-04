'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      // Return a placeholder with the same dimensions to prevent layout shift
      <div className="p-2 w-9 h-9 rounded-lg bg-transparent" />
    );
  }

  const handleToggle = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const isDark = resolvedTheme === 'dark';
  const nextMode = isDark ? 'light' : 'dark';

  return (
    <div className="relative group">
      <button
        onClick={handleToggle}
        className="theme-toggle-btn"
        aria-label={`Toggle to ${nextMode} mode`}
      >
        {isDark ? (
          <svg className="icon-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="icon-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
      
      <div className="absolute right-0 top-full mt-2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50 dark:bg-gray-200 dark:text-gray-900">
        Toggle to {nextMode} mode
      </div>
    </div>
  );
}