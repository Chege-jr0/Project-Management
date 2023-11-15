import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore ,applyMiddleware, compose} from 'redux'
import rootReducer from './components/store/reducers/rootReducer,'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore'
import {reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import  fbConfig from './config/fbConfig.js'

const store = createStore(rootReducer,
  compose( 
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {attachAuthIsReady:true, useFirestoreProfile:true,userProfile: 'users'})

  )
);
 store.firebaseAuthIsReady.then(() =>{
  ReactDOM.createRoot(<Provider store={store}>
    <App />
  </Provider>,document.getElementById('root'));
  root
   registerServiceWorker();
  
 })
reportWebVitals();
