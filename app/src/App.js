import React, { Component } from "react";
import "./App.css";
import Upload from "./upload/Upload";
import FileUpload from './upload/FileUpload'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Card">
          <Upload />

          <FileUpload />
        </div>
      </div>
    );
  }
}

export default App;
