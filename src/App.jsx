import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import * as routes from './routes/routes';
import Notifier from './components/Notifier';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import NewReview from './components/NewReview';
import Login from './components/Login';
import Review from './components/Review';
import Account from './components/Account';
import withAuthentication from './auth/withAuthentication';

function App() {
  return (
    <div>
      <Notifier />
      <Router>
        <Header />
        <div
          className="App"
          style={{
            display: 'flex',
            backgroundColor: '#EEEEEE',
            top: 57.5,
            bottom: 0,
            position: 'absolute',
            width: '100%',
          }}
        >
          <Switch>
            <Route exact path={routes.HOME} component={Home} />
            <Route exact path={routes.NEW_REVIEW} component={NewReview} />
            <Route exact path={routes.LOG_IN} component={Login} />
            <Route path={`${routes.REVIEW}/:id`} component={Review} />
            <Route path={routes.ACCOUNT} component={Account} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default withAuthentication(App);
