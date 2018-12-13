import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import InputReducer from './reducers/Reducers.js';
import Header from './containers/Header/Header.jsx';
import Products from './containers/Products/Products.jsx';
import Footer from './containers/Footer/Footer.jsx';

import './public/css/base/base.scss'

const reducers = combineReducers({
  input: InputReducer
})
const store = applyMiddleware(thunk)(createStore)(reducers)
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Header />
      <Products />
      <Footer />
    </div>
  </Provider>
, document.getElementById('app'));