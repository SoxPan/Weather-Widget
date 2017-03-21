import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'views/App';
import Weather from 'views/Weather';
import City from 'views/City';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  WEATHER: `${ publicPath }weather`,
};

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={ publicPath } component={ App }>
          <IndexRoute component={ City } />
          <Route path={ routeCodes.DASHBOARD } component={ City } />
          <Route path={ routeCodes.WEATHER } component={ Weather } />
        </Route>
      </Router>
    );
  }
}
