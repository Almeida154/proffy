import { useState } from 'react';

import { ThemeProvider } from './contexts/ThemeContext';
import AppRoutes from './routes';

import './assets/styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
