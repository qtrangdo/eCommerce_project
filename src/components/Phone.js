import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import R from 'ramda';

import { fetchPhoneById } from '../actions/actions';
import { getPhoneById } from './helpers/selectors'

class Phone extends Component {
  componentDidMount() {
    this.props.fetchPhoneById(this.props.match.params.id);
  }

  renderFields() {
    const { phone } = this.props;
    const columnFields = R.compose(
      R.toPairs,
      R.pick([
        'cpu',
        'camera',
        'size',
        'weight',
        'display',
        'battery',
        'memory'
      ])
    )(phone);
    return columnFields.map(([key, value]) => (
      <div className="column" key={key}>
        <div className="ab-details-title">
          <p>{key}</p>
        </div>
        <div className="ab-details-info">
          <p>{value}</p>
        </div>
      </div>
    ))
  }

  renderContent() {
    const { phone } = this.props;
    return (
      <div className="thumbnail">
        <div className="row">
          <div className="col-md-6">
            <img className="img-thumbnail" src={phone.image} alt={phone.name} />
          </div>
          <div className="col-md-6">
            {this.renderFields()}
          </div>
        </div>
        <div className="caption-full">
          <h4 className="pull-right">${phone.price}</h4>
          <h4>{phone.name}</h4>
          <p>{phone.description}</p>
        </div>
      </div>
    )
  }

  renderSideBar() {
    return (
      <div>
        sideBar
      </div>
    )
  }

  render() {
    const { phone } = this.props;
    return (
      <div className="view-container">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {phone && this.renderContent()}
            </div>
            <div className="col-md-3">
              {phone && this.renderSideBar()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProp = {
  fetchPhoneById,
}

const mapStateToProp = state => {
  return {
    phone: getPhoneById(state, state.phonePage.id)
  }
}

Phone.propTypes = {
  fetchPhoneById: PropTypes.func.isRequired,
  phone: PropTypes.object
}

export default connect(mapStateToProp, mapDispatchToProp)(Phone);