import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import R from 'ramda';
import PropTypes from 'prop-types';

import { removePhoneFromBasket, cleanBasket, basketCheckOut } from '../actions/actions';
import { getBasketPhonesWithCount, getTotalBasketPrice } from './helpers/selectors';

const Basket = ({ phones, totalPrice, removePhoneFromBasket, cleanBasket, basketCheckOut }) => {
  const isBasketEmpty = R.isEmpty(phones)
  const renderContent = () => (
    <div>
      {isBasketEmpty && <div>Your shopping cart is empty</div>}
      <div className='table-responsive'>
        <table className="table-bordered table-striped table-condensed cf">
          <tbody>
            {phones.map((phone, index) => (
              <tr key={index} className="item-checkout">
                <td className="first-column-checkout">
                  <img
                    className="img-thumbnail"
                    src={phone.image}
                    alt={phone.name}
                  />
                </td>
                <td>{phone.name}</td>
                <td>${phone.price}</td>
                <td>{phone.count}</td>
                <td>
                  <span
                    onClick={() => removePhoneFromBasket(phone.id)}
                    className="delete-cart"
                  ></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!isBasketEmpty &&
        <div className="row">
          <div className="pull-right total-user-checkout">
            <b>Total: </b>
            ${totalPrice}
          </div>
        </div>
      }
    </div>
  );

  const renderSideBar = () => (
    <div>
      <Link className="btn btn-info" to='/'>
        <span className='glyphicon glyicon-info-sign' />
        <span>Continue shopping</span>
      </Link>
      {
        !isBasketEmpty &&
        <div>
          <button onClick={() => cleanBasket()} className="btn btn-danger">
            <span className="glyphicon glyphicon-trash" />
            {" "}Clean cart
          </button>
          <button onClick={() => basketCheckOut(phones)} className="btn btn-success">
            <span className="glyphicon glyphicon-envelope"/>
            {" "}Check Out
          </button>
        </div>
      }
    </div>
  )

  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            {renderContent()}
          </div>
          <div className="col-md-3 btn-user-checkout">
            {renderSideBar()}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  phones: getBasketPhonesWithCount(state),
  totalPrice: getTotalBasketPrice(state)
})

const mapDispatchToProps = {
  removePhoneFromBasket,
  cleanBasket,
  basketCheckOut
}

Basket.propTypes = {
  phones: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  removePhoneFromBasket: PropTypes.func.isRequired,
  cleanBasket: PropTypes.func.isRequired,
  basketCheckOut: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);