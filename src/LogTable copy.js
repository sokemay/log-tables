import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import matchSorter from 'match-sorter'

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";


export default class LogTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
    
  }
  // handleChange(date) {
  //   console.log(date);
  // }
  handleFilterChange = (column, value) => {
    console.log(column)
    // console.log(value)
    // this.setState({
    //   pageSize: 10
    // })
  }
  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <ReactTable
          data={data}
          filterable
          onFilteredChange={this.handleFilterChange}
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "First Name",
              accessor: "firstName",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "Last Name",
              id: "lastName",
              accessor: d => d.lastName,
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["lastName"] }),
              filterAll: true
            },
            {
              Header: "Date",
              accessor: "date",
              filterMethod: (filter, row) => {
                let formattedTime = moment(row[filter.id], 'DD-MM-YYYY')
                console.log(formattedTime);
                let now = moment('01-01-1980', 'DD-MM-YYYY')
               
                 return formattedTime.isBefore(now)
               
              },
              Filter: ({ filter, onChange }) =>
              <div className="datepickers">
              <DatePicker
                  selected={moment()}
                  onChange={this.handleChange}
              /> -
              <DatePicker
                  selected={moment()}
                  onChange={this.handleChange}
              />
              </div>
                
            },
            {
              Header: "Over 21",
              accessor: "age",
              id: "over",
              Cell: ({ value }) => (value >= 21 ? "Yes" : "No"),
              filterMethod: (filter, row) => {
                if (filter.value === "all") {
                  return true;
                }
                if (filter.value === "true") {
                  return row[filter.id] >= 21;
                }
                return row[filter.id] < 21;
              },
              Filter: ({ filter, onChange }) =>
              <div>
                  <input onChange={event => onChange(event.target.value)} type="checkbox" name="over21" value="true" />Can Drink
                  <input onChange={event => onChange(event.target.value)} type="checkbox" name="over21" value="false" />Cannot Drink
                  </div>
                    
                    // <select
                    //   onChange={event => onChange(event.target.value)}
                    //   style={{ width: "100%" }}
                    //   value={filter ? filter.value : "all"}
                    // >
                    //   <option value="all">Show All</option>
                    //   <option value="true">Can Drink</option>
                    //   <option value="false">Can't Drink</option>
                    // </select>
                }
          ]}
         
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <DatePicker
       selected={moment()}
      />
      </div>
       
    );
  }
}
