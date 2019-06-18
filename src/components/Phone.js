import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchPhoneById} from '../actions/actions';

class Phone extends Component {
  componentDidMount() {
    this.props.fetchPhoneById(this.props.match.params.id);
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapDispatchToProp = {
  fetchPhoneById,
}

Phone.propTypes = {
  fetchPhoneById: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProp)(Phone);