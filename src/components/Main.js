require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import List from '../views/List/List';
import Recommend from '../views/Recommend/Recommend';
import Carousel from '../views/Carousel/Carousel';
import NoMatch from '../views/NoMatch/NoMatch';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Router>
          <div>
            <div>
              <NavLink exact className="green" activeClassName="act" to="/">List | </NavLink>
              <NavLink to="/list" activeClassName="act">Recommend  |</NavLink>
              <NavLink to="/recommend" activeClassName="act">Carousel  |</NavLink>
              <NavLink to="/redirect" activeClassName="act">redirect  |</NavLink>
            </div>
            <Switch>
              <Route exact path="/" component={List} />
              <Route exact path="/recommend" component={Recommend} />
              <Route exact path="/carousel" component={Carousel} />
              <Redirect from="/list" to="/" />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router >
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
