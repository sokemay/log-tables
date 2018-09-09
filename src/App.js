import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import BSTable from './BSTable';
import tableList from './data.json';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    function getSlug(title) {
      return title.replace(/\s+/g, '-').toLowerCase();
    }
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Log Tables</h1>
          </header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <ul className="nav flex-column nav-pills">
                  {tableList.map(function (table, i) {
                    let sanitisedURL = getSlug(table.title);
                    return <li className="nav-item" key={i}><NavLink activeStyle={{ backgroundColor: '#ccc' }} to={`/${sanitisedURL}`}>{table.title}</NavLink></li>;
                  })}
                </ul>

              </div>
              <div className="col-md-10">
                {tableList.map(function (table, i) {
                  return <Route key={table.title} path={`/${getSlug(table.title)}`} render={() => { return <BSTable key={table.title} headers={table.headers} title={table.title} data={table.data} /> }} />
                })}
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
