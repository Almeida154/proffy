import React, { useEffect, useState } from 'react';

import {
  themes as variables,
  ThemesType as VariablesType,
  ThemeType as VariableType,
} from '../assets/styles/themes';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const useTheme = () => React.useContext(ThemeContext);

interface IThemeProvider {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<IThemeProvider> = ({
  children,
}) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('@themeSettings') ?? 'dark'
  );

  useEffect(() => {
    // @ts-ignore
    handleCSSVariables(variables[theme]);
    handleKeepThemeSettings();
  }, [theme]);

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  const handleKeepThemeSettings = () => {
    localStorage.setItem('@themeSettings', theme);
  };

  const handleCSSVariables = (theme: VariableType) => {
    for (const variable in theme) {
      document.documentElement.style.setProperty(
        `--${variable}`,
        // @ts-ignore
        theme[variable]
      );
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
