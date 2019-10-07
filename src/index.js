import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, compose, /*applyMiddleware*/ } from 'redux';
// import reducers from './components/reducers/index';
// import thunk from 'redux-thunk';
import App from './components/App';
import Root from "./Root";

// const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

// <Provider store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}>
ReactDOM.render(
  <Root>
    <App/>
  </Root>,
  document.getElementById('root'),
);
