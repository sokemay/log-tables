import React, { Component } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';

class BSTable extends Component {
  state = {
    products: [
      {
        id: 1,
        name: 'TV',
        'price': 1000
      },
      {
        id: 2,
        name: 'Mobile',
        'price': 500
      },
      {
        id: 3,
        name: 'Book',
        'price': 20
      },
    ],
    columns: [{
      dataField: 'id',
      text: 'Product ID'
    },
    {
      dataField: 'name',
      text: 'Product Name'
    }, {
      dataField: 'price',
      text: 'Product Price',
      sort: true
    }]
  } 
  
  render() {
    return (
      <div className="container" style={{ marginTop: 50 }}>
        <BootstrapTable 
        striped
        hover
        keyField='id' 
        data={ this.state.products } 
        columns={ this.state.columns } />
      </div>
    );
  }
}

export default BSTable;