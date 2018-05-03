import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';


function render(){ //redux
ReactDOM.render(
<div>
  <App />
</div>
, document.getElementById('root'));
 } //redux

store.subscribe(render);//redux
render();//redux

// First we’re making sure that store is imported, which we remember that it is created by calling createStore and passing over the Reducer as a parameter (in store.js).
//
//  Finally we need to call store.subscribe(render). This makes sure that the render function is called whenever the state of the application changes.
