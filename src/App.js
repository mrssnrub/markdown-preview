import React from 'react';
import {UserInput} from "./UserInput";
import {MarkdownPreview} from "./MarkdownPreview";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="App-main">
          <h1 className="text-center" id="heading">Markdown Preview</h1>
          <UserInput />
            </div>
    );
  }
}

export default App;
