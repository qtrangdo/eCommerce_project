import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {fetchPhones} from '../actions/actions';
import {getPhones} from './helpers/selectors';

class Phones extends Component {
    componentDidMount() {
        // fetch phone data
        this.props.fetchPhones();
    }

    renderPhone (phone, index) {
        const shortDesc = phone.desscription;
        return  (
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
                        <button className="btn btn-primary">Buy Now!</button>
                        <Link to={`/phone/${phone.id}`} className="btn btn-default">More info</Link>
                    </p>
                </div>
            </div>
        )
    }

    render() {
        const {phones} = this.props;
        return (
            <div className="books row">
                {phones.map((phone, index) => this.renderPhone(phone, index))}
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchPhones
}

const mapStateToProps = (state) => ({
    phones: getPhones(state)
})

Phones.propTypes = {
    fetchPhones: PropTypes.func.isRequired,
    phones: PropTypes.array.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(Phones);