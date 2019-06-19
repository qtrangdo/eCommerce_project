import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTotalBasketCount, getTotalPrice } from './helpers/selectors';

const BasketCart = ({ totalBasketCount, totalPrice }) => (
  <div className="cart">
    <div className="dropdown">
      <Link to="/basket" id="dlabel" className="btn btn-inverse btn-lock btn-lg">
        <i className="fa fa-fa-shopping-cart" />
        <span>{totalBasketCount} item(s) - ${totalPrice}</span>
      </Link>
    </div>
  </div>
)

const mapStateToProp = state => {
  return {
    totalBasketCount: getTotalBasketCount(state),
    totalPrice: getTotalPrice(state)
  }
}

BasketCart.propTypes = {
  totalBasketCount: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired
}

export default connect(mapStateToProp, null)(BasketCart);