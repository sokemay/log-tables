import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, customFilter } from 'react-bootstrap-table2-filter';
import moment from 'moment';
// import Datetime from 'react-datetime';

export default class DateRangeFilter extends React.Component {
  static propTypes = {
    column: PropTypes.object.isRequired,
    onFilter: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.getValue = this.getValue.bind(this);
    this.startDate;
    this.endDate;
  }
  getValue() {
    return this.input.value;
  }
  filter() {
    if(this.endDate && this.startDate) {
      console.log('filter now')
        // filter()
        // this.props.onFilter(this.getValue());
    }
    
  }
  handleChange(e) {
    if(e.target.name === 'start_date') {
        this.startDate=e.target.value
        console.log("start date: "+  this.startDate)
    }
    else if(e.target.name === 'end_date') {
        this.endDate=e.target.value
        console.log("end date: "+  this.endDate)
    }

  }

  render() {
    return (
        <div style={{display:"flex"}}>

        <input
            name="start_date"
            key="start_date"
            type="text"
            placeholder="From Date"
            onChange={(e) => {this.handleChange(e)}}
        />
         <input
            name="end_date"
            key="end_date"
            type="text"
            placeholder="To Date"
            onChange={(e) => {this.handleChange(e)}}
        />
        <button
        key="submit"
        className="btn btn-warning"
        onClick={ this.filter }
      >
        { `Filter` }
      </button>
      </div>
    );
  }
}
