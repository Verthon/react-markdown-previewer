import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';
import Output from './Output/Output';

class App extends Component {
  state = {

  };

  inputHandler = () =>{

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Markdown Previewer</h1>
        </header>
        <Input changed={inputHandler}/>
        <Output/>
      </div>
    );
  }
}

export default App;
