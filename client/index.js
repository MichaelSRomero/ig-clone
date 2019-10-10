/* 
** @entry point for webpack to bundle all code
*/
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import indexStyles from './assets/styles/index.css';
import indexMedStyles from './assets/styles/index-med.css'
// ! Used for testing, remove later
import WelcomeContainer from './pages/WelcomeContainer.jsx'



render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)