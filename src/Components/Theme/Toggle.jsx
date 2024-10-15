import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  // Apply saved theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    // Apply theme to body
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);

    // Store the theme in localStorage
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
}

export default ThemeToggle;
