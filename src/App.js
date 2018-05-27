import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';
import Output from './Output/Output';
import marked from 'marked';

class App extends Component {
  state = {
    markdown: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n', 
  };

  inputHandler = (e) =>{
    this.setState({markdown: e.target.value});
  };

  rawMarkUp = (markup) =>{
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });

    let rawhtml = marked(this.state.markdown, {sanitize: true});
    return {
      __html: rawhtml
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">React Markdown Previewer</h1>
        </header>
        <main className="App-content">
          <Input changed={this.inputHandler} markdown={this.state.markdown}/>
          <Output></Output>
          <div dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
        </main>
      </div>
    );
  }
}

export default App;
