import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';
import Output from './Output/Output';
import marked from 'marked';

class App extends Component {
  state = {
    value: 'test',
    markdown: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n', 
  };

  inputHandler = (e) =>{
    this.setState({markdown: e.target.value});
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Markdown Previewer</h1>
        </header>
        <Input changed={this.inputHandler} value={this.state.markdown}/>
        <Output data={this.state.markdown}/>
      </div>
    );
  }
}

export default App;
