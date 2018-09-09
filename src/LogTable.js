import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

export default class LogTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
    
  }

  
  render() {
    let nameFilter;
  let priceFilter;

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name',
  filter: textFilter({
    getFilter: (filter) => {
      nameFilter = filter;
    }
  })
}, {
  dataField: 'price',
  text: 'Product Price',
  filter: textFilter({
    getFilter: (filter) => {
      priceFilter = filter;
    }
  })
}];

const handleClick = () => {
  nameFilter('');
  priceFilter('');
};
    const { data } = this.state;
    console.log(data);
    return (
      <div>
      <button className="btn btn-lg btn-primary" onClick={ handleClick }> Clear all filters </button>
      <BootstrapTable
        keyField="id"
        data={ products }
        columns={ columns }
        filter={ filterFactory() }
      />
    </div>
       
    );
  }
}
