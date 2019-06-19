import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { searchPhone } from '../actions/actions'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchPhone(this.state.value)
  }

  render() {
    return (
      <div className="well blosd">
        <h3 className="lead">Quick Shop</h3>
        <div className="input-group">
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange.bind(this)}
              type="text"
              value={this.state.value}
              className="form-control"
            />
          </form>
          <span className="input-group-btn">
            <button className="btn btn-default">
              <span className="glyphicon glyphicon-search" />
            </button>
          </span>
        </div>
      </div>
    )
  }
}

const mapDispatchToProp = {
  searchPhone,
}

Search.propTypes = {
  searchPhone: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProp)(Search);
