import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar'
import NavItem1 from './NavItem1';
import NavItem2 from './NavItem2';
import NavItem3 from './NavItem3';
import NoMatch from './NoMatch';

class Nav extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={NavItem1} />
            <Route exact path="/NavItem2/:id/:name" component={NavItem2} />
            <Route exact path="/NavItem3" component={NavItem3} />
            <Redirect from="/redirect" to="/" />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router >
    );
  }
}

export default Nav;
