import  { useState, useEffect } from 'react';

const App = () => {
  // Step 1: Initialize state
  const [theme, setTheme] = useState('light');

  // Retrieve theme from local storage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Step 2: Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Step 3: Apply theme changes
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Step 4: Render the component
  return (
    <div>
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default App;
