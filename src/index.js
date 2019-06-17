import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import './main.css';


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <div className="view-container">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              Sidebar
            </div>
            <div className="col-md-9">
              <Route component={App} />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);