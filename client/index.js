/* 
** @entry point for webpack to bundle all code
*/
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx'
import indexStyles from './assets/styles/index.css';
import indexMedStyles from './assets/styles/index-med.css'

render(
  <App />, 
  document.getElementById('root')
  )