import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';
import Output from './Output/Output';

class App extends Component {
  state = {

  };

  inputHandler = (e) =>{
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Markdown Previewer</h1>
        </header>
        <Input changed={this.inputHandler}/>
        <Output/>
      </div>
    );
  }
}

export default App;
