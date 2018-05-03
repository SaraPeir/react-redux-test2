import React, { Component } from 'react';
import './App.css';
import Input from './Components/Input';
import store from './store';
import Sentence from './Components/Sentence';

class App extends Component {

  constructor(props) {
  super(props);
  }

  render() {
    return (
      <div className="App">
        <Input store={store}/>
        <Sentence store={store}/>
      </div>
    );
  }
}

export default App;
