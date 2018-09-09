import React, { Component } from 'react';
import './App.css';
import BSTable from './BSTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Log Tables</h1>
        </header>
        <BSTable/>
      </div>
    );
  }
}

export default App;
