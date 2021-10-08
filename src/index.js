import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.css';
import { HomePage } from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

