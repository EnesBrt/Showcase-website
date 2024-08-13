import React from 'react';
import ReactDOM from 'react-dom';
import YouTubeHero from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('react-app');
  if (rootElement) {
    ReactDOM.render(
      <React.StrictMode>
        <YouTubeHero />
      </React.StrictMode>,
      rootElement
    );
  } else {
    console.error('Root element not found');
  }
});