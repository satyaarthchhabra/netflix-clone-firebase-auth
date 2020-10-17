import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './index.css';
import App from './app.jsx';
import * as serviceWorker from './serviceWorker';
import { GlobalStyles } from './global-styles'
import { BrowserRouter } from 'react-router-dom'
import { firebase } from './lib/firebase.prod'
import {FirebaseContext} from './context/firebase'
ReactDOM.render(
  <>
    <BrowserRouter>
      <FirebaseContext.Provider value={{ firebase }}>
        <GlobalStyles />
        <App />
      </FirebaseContext.Provider>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
