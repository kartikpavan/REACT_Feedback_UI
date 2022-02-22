import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FeedbackProvider } from './context/FeedbackContext';
import './index.css';

ReactDOM.render(
  <FeedbackProvider>
    <App />
  </FeedbackProvider>,
  document.getElementById('root')
);
