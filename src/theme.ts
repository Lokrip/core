'use client';

import { createTheme } from "@mui/material/styles";

// Создаем тему
export const theme = createTheme({
  palette: {
    mode: "light", // Используйте "dark" для темной темы
    primary: {
      main: "#1976d2", // Основной цвет (например, для кнопок)
    },
    secondary: {
      main: "#9c27b0", // Вторичный цвет
    },
    background: {
      default: "#f5f5f5", // Цвет фона
      paper: "#ffffff", // Цвет карточек
    },
    text: {
      primary: "#000000", // Основной цвет текста
      secondary: "#757575", // Вторичный цвет текста
    },
  }
});