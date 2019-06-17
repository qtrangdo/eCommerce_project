import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchPhones} from '../actions/actions';

class Phones extends Component {
    componentDidMount() {
        // fetch phone data
        this.props.fetchPhones();
    }

    render() {
        return (
            <div>
                Phones
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchPhones
}

Phones.propTypes = {
    fetchPhones: PropTypes.func.isRequired,
}
export default connect(null, mapDispatchToProps)(Phones);