import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './app';

const Root = ({ store }) => {
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
