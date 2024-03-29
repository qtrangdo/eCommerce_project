import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Phones from './Phones';
import Phone from './Phone';
import Basket from './Basket';

const App = ({ location }) => (
  <div>
    <Route path="/" location={location} exact component={Phones} />
    <Route path="/categories/:id" location={location} exact component={Phones} />
    <Route path="/phone/:id" location={location} exact component={Phone} />
    <Route path="/basket" location={location} exact component={Basket} />
  </div>
);

Phones.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App;

