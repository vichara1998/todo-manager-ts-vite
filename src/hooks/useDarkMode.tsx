import { useState } from 'react';

const useDarkMode = () => {
  const mode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isDarkMode, setIsDarkMode] = useState(mode);

  return { isDarkMode, setIsDarkMode };
};

export default useDarkMode;
