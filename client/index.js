/* 
** @entry point for webpack to bundle all code
*/
import React from 'react';
import { render } from 'react-dom';
// import App from './components/App.jsx'
import indexStyles from './assets/styles/index.css';
import indexMedStyles from './assets/styles/index-med.css'
// ! Used for testing, remove later
import WelcomeContainer from './containers/WelcomeContainer.jsx'
import feedStyles from './assets/styles/feed.css'
import feedStylesMed from './assets/styles/feed-med.css'
import feedStylesLg from './assets/styles/feed-lg.css'



render(
  <WelcomeContainer />, 
  document.getElementById('root')
  )
// render(
//   <App />, 
//   document.getElementById('root')
//   )