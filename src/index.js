import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import theme from './theme';

// Create a root DOM node where React can attach the app
const rootElement = document.getElementById('root');

// Use React 18's new Root API for rendering the app
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* Wrapping the App component with ThemeProvider to apply Material-UI theming */}
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides a baseline for consistent styling across browsers */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);