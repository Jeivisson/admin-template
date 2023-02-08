import { createContext, useEffect, useState } from 'react';

// type Theme = 'dark' | '';

interface AppContextProps {
  theme: string;
  altTheme: () => void;
}
const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  const [theme, setTheme] = useState<Theme>('dark');

  function altTheme() {
    const newTheme = theme === '' ? 'dark' : '';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  useEffect(() => {
    const themeLock = localStorage.getItem('theme');
    setTheme(themeLock);
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        altTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
