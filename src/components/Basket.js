import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import R from 'ramda';
import PropTypes from 'prop-types';

import { getBasketPhonesWithCount, getTotalBasketPrice } from './helpers/selectors';

const Basket = ({ phones, totalPrice }) => {
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
                  <span className="delete-cart"></span>
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
      SideBar
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

Basket.propTypes = {
  phones: PropTypes.array.isRequired,
  totalPrice: PropTypes.string.isRequired
}

export default connect(mapStateToProps, null)(Basket);