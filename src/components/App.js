import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Phones from './Phones';

const App = ({location}) => (
  <div>
    <Route path="/" location={location} exact component={Phones} />
  </div>
);

Phones.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App;