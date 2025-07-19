import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  background: '#ffffff',
  text: '#333333',
  primary: '#2563eb',
  secondary: '#4f46e5',
  accent: '#7c3aed',
  cardBackground: '#f8fafc',
  border: '#e2e8f0',
  shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
};

export const darkTheme = {
  background: '#1a1a1a',
  text: '#f8fafc',
  primary: '#3b82f6',
  secondary: '#6366f1',
  accent: '#8b5cf6',
  cardBackground: '#2d2d2d',
  border: '#404040',
  shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }
`; 