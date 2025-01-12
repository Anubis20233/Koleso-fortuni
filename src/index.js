// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // якщо є стилі
import App from './App'; // Ваш компонент додатку

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Виводить в div з id="root"
);
