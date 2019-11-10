import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <ul className="router-nav">
        <NavLink to="/">One</NavLink>
        <NavLink to="/two">Two</NavLink>
        <NavLink to="/three">Three</NavLink>
      </ul>

      <div>
        <Switch>
          <Route exact path="/" component={One} />
          <Route exact path="/two" component={Two} />
          <Route exact path="/three" component={Three} />
        </Switch>
      </div>
    </Router>
  );
};

function NavLink(props) {
  return (
    <li>
      <Link {...props} />
    </li>
  );
}

const One = () => {
  return (
    <div className="page-route">
      <h1>One</h1>
    </div>
  );
};
const Two = () => {
  return (
    <div className="page-route two">
      <h1>Two</h1>
    </div>
  );
};
const Three = () => {
  return (
    <div className="page-route three">
      <h1>Three</h1>
    </div>
  );
};

export default Routes;
