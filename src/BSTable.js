import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { customFilter, multiSelectFilter, numberFilter, dateFilter, textFilter } from 'react-bootstrap-table2-filter';
import { makeData } from "./Utils";
import moment from 'moment';
import DateRangeFilter from "./DateRangeFilter";

import myData from './data.json';

class BSTable extends Component {
  constructor() {
    super();
   
    function setColumnSettings(headers) {
      let columns = [];
      for (let i = 0; i < headers.length; i++) {
        let col = {};
        col['dataField'] = headers[i]['accessor']
        col['text'] = headers[i]['name']

        switch (headers[i]['filterType']) {
          case 'text':
            col['filter'] = textFilter()
            col['sort'] = true
            break;

          case 'datetime':
            col['formatter'] = (cell) => {
              return moment(cell,"YYYY/MM/DD HH:mm").format("DD/MM/YYYY HH:mm");
            }
            col['filter'] = dateFilter()
            break;

          case 'number':
            col['filter'] = numberFilter()
            col['sort'] = true
            break;

          case 'multiselect':
            let selectOptions = headers[i]['filterOptions']
            col['formatter'] = cell => selectOptions[cell]
            col['filter'] = multiSelectFilter({
              options: selectOptions
            })
            col['sort'] = true
            break;

          default:
            console.log('Not a valid filter')
        }
        columns.push(col)
      }
      
      return columns
    }

    this.state = {
      name: myData[0].title,
      data: myData[0].data,
      columns: setColumnSettings(myData[0].headers)
    };

  }

  render() {
    return (
      <div className="container" style={{ marginTop: 50 }}>
        <h2 style={{ marginBottom: 30 }}>{this.state.name}</h2>

        <BootstrapTable
          striped
          hover
          keyField='id'
          data={this.state.data}
          columns={this.state.columns}
          pagination={paginationFactory()}
          filter={filterFactory()} />
      </div>
    );
  }
}

export default BSTable;