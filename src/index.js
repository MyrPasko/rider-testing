import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Root from "./Root";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App/>
      <Route path="/" compontent={App} />
    </BrowserRouter>
  </Root>,
  document.getElementById('root'),
);
