import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Phones from './Phones';
import Phone from './Phone';

const App = ({location}) => (
  <div>
    <Route path="/" location={location} exact component={Phones} />
    <Route path="/phones/:id" location={location} exact component={Phone} />
  </div>
);

Phones.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App;