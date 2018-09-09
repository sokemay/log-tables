import React, { Component } from 'react';
import './App.css';
import BSTable from './BSTable';
import tableList from './data.json';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Log Tables</h1>
        </header>
        <div className="container-fluid">
        

          <div className="row">
            <div className="col-md-2">
              <ul className="nav flex-column">
                {tableList.map(function (table, i) {
                  return <li className="nav-item" key={i}><a href="#">{table.title}</a></li>;
                })}

              </ul>
            </div>
            <div className="col-md-10">
              {tableList.map(function (table, i) {
                  return <BSTable key={table.title} headers={table.headers} title={table.title} data={table.data} />
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
