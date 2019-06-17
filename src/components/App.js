import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './HomePage';

const App = ({location}) => (
  <div>
    <Route path="/" location={location} exact component={HomePage} />
  </div>
);


export default App;