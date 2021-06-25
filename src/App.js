import React, { Component } from "react";
import "./App.css";
import MainContent from "./containers/MainContent/MainContent";

class App extends Component {
  state = { selectedElement: null };

  render() {
    return (
      <div className="App">
        <MainContent />
      </div>
    );
  }
}

export default App;
