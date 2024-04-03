import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { inputGlobalStyles } from './theme/global';
import { ThemeProvider, createTheme } from '@mui/system';
import { themeColors } from './theme';

function App() {
  return (
    <ThemeProvider theme={createTheme(themeColors)}>
      {inputGlobalStyles}
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
