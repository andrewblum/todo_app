import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import AppContainer from './app_container';

const Root = ({ store }) => (
  <div className="root">
    <Provider store={store}>
      <HashRouter>
        <AppContainer/>
      </HashRouter>
    </Provider>
  </div>
);

export default Root;
