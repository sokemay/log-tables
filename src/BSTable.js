import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { customFilter, multiSelectFilter, numberFilter, dateFilter, textFilter } from 'react-bootstrap-table2-filter';
import moment from 'moment';
import DateRangeFilter from "./DateRangeFilter";


class BSTable extends Component {
  constructor(props) {
    super(props);

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
              // first format value is read from json, second format value is displayed on frontend
              return moment(cell, "YYYY/MM/DD HH:mm").format("DD/MM/YYYY HH:mm");
            }
            col['filter'] = dateFilter()
            // col['filter'] = customFilter()
            // col['filterRenderer'] = (onFilter, column) =>
            // <DateRangeFilter filterHandler={filterHandler} onFilter={ onFilter } column={ column } />
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
      name: this.props.title,
      data: this.props.data,
      columns: setColumnSettings(this.props.headers)
    };
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
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