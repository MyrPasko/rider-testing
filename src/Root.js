import React from 'react';
import { Provider } from 'react-redux';
import { createStore, /*compose, applyMiddleware*/ } from 'redux';
import reducers from './components/reducers/index';

export default ({ children, initialState = {} }) => {

  return (
    <Provider store={createStore(
      reducers,
      initialState)}>
      {children}
    </Provider>
  )
}
