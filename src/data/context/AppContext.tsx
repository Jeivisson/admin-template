import { createContext, useState } from 'react';

type Theme = 'dark' | '';

interface AppContextProps {
  theme: Theme;
  altTheme: () => void;
}
const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  const [theme, setTheme] = useState<Theme>('dark');

  function altTheme() {
    setTheme(theme === '' ? 'dark' : '');
  }
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
