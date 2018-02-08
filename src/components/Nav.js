import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar'
import List from '../views/List/List';
import Recommend from '../views/Recommend/Recommend';
import Carousel from '../views/Carousel/Carousel';
import NoMatch from '../views/NoMatch/NoMatch';

class Nav extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/recommend" component={Recommend} />
            <Route exact path="/carousel" component={Carousel} />
            <Redirect from="/redirect" to="/" />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router >
    );
  }
}

export default Nav;
