import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchPhones, loadMorePhones, addPhoneToBasket } from '../actions/actions';
import { getPhones } from './helpers/selectors';
import SideBar from './SideBar';

class Phones extends Component {
    componentDidMount() {
        // fetch phone data
        this.props.fetchPhones();
    }

    renderPhone(phone, index) {
        const { addPhoneToBasket } = this.props;
        const shortDesc = phone.desscription;
        return (
            <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={index}>
                <div className="thumbnail">
                    <img
                        className="img-thumbnail"
                        src={phone.image}
                        alt={phone.name}
                    />
                </div>
                <div className="caption">
                    <h4 className="pull-right">{phone.price}</h4>
                    <h4>
                        <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
                    </h4>
                    <p>{shortDesc}</p>
                    <p className="itemButton">
                        <button className="btn btn-primary" onClick={() => addPhoneToBasket(phone.id)}>Buy Now!</button>
                        <Link to={`/phone/${phone.id}`} className="btn btn-default">More info</Link>
                    </p>
                </div>
            </div>
        )
    }

    render() {
        const { phones, loadMorePhones } = this.props;
        return (
            <div className="view-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <SideBar />
                        </div>
                        <div className="col-md-9">
                            <div className="books row">
                                {phones.map((phone, index) => this.renderPhone(phone, index))}
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button
                                        onClick={loadMorePhones}
                                        className="pull-right btn btn-primary"
                                    >Load More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = {
    fetchPhones,
    loadMorePhones,
    addPhoneToBasket
}

const mapStateToProps = (state) => ({
    phones: getPhones(state)
})

Phones.propTypes = {
    fetchPhones: PropTypes.func.isRequired,
    phones: PropTypes.array.isRequired,
    loadMorePhones: PropTypes.func.isRequired,
    addPhoneToBasket: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(Phones);