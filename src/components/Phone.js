import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import R from 'ramda';

import { fetchPhoneById, addPhoneToBasket } from '../actions/actions';
import { getPhoneById } from './helpers/selectors'
import BasketCart from './BasketCart';

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
    const {phone, addPhoneToBasket} = this.props
    return (
      <div>
        <p className="lead">Quick Shop</p>
        <BasketCart />
        <div className="form-group">
          <h1>{phone.name}</h1>
          <h2>${phone.price}</h2>
        </div>
        <Link to='/' className="btn btn-info btn-block">
          Back to Store
        </Link>
        <button 
          type="button" 
          className="btn btn-success btn-block"
          onClick={() => addPhoneToBasket(phone.id)}
        >
          Add to Cart
        </button>
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
  addPhoneToBasket
}

const mapStateToProp = state => {
  return {
    phone: getPhoneById(state, state.phonePage.id)
  }
}

Phone.propTypes = {
  fetchPhoneById: PropTypes.func.isRequired,
  addPhoneToBasket: PropTypes.func.isRequired,
  phone: PropTypes.object
}

export default connect(mapStateToProp, mapDispatchToProp)(Phone);