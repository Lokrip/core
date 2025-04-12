'use client';

import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  cssVariables: true
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: "#f5f5f5", 
      paper: "#ffffff", 
    },
    text: {
      primary: "#000000", // Основной цвет текста
      secondary: "#757575", // Вторичный цвет текста
    },
  },
  cssVariables: true
});