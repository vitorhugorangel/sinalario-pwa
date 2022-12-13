/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { appConfig } from './config/app';
import { badgindControls } from './services/badging-api-utils';
import { notificarUsuario } from './services/notification-api';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js', {
        type: 'module',
        scope: appConfig.baseURL,
      })
      .then(() => {
        console.log('Service Worker registrado.');
      })
      .catch((registrationError) => {
        console.log('Falha ao registrar Service Worker:', registrationError);
      });
  });
}
badgindControls.start();

const eventSource = new EventSource('http://localhost:3002');

eventSource.onmessage = (event) => {
  notificarUsuario(event.data);
  badgindControls.increaseBadgeCount();
};

eventSource.addEventListener('open', () => console.log('abriu'));
