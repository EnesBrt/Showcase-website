import React from 'react';
import { createRoot } from 'react-dom/client';
import YouTubeHero from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('react-app');
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <YouTubeHero />
      </React.StrictMode>
    );
  } else {
    console.error('Root element not found');
  }
});