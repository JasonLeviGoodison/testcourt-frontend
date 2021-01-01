import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import logo from './logo.svg';
import * as routes from "./routes/routes";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import NewReview from './components/NewReview';
import Login from './components/Login';
import Review from './components/Review';
import SignUp from './components/SignUp';
import withAuthentication from "./auth/withAuthentication";
export const CompanyName = "ReviewCounsel";

function App() {
  const [docUrl, setDocUrl] = useState("");
  return (
    <div>
      <Header/>
      <Router>
        <div className="App" style={{'display': 'flex', backgroundColor: "#EEEEEE"}}>
          <Switch>
              <Route exact path={routes.HOME} component={Home}/>
              <Route exact path={routes.NEW_REVIEW} component={NewReview}/>
              <Route exact path={routes.LOG_IN} component={Login}/>
              <Route path={routes.REVIEW + "/:id"} component={Review}/>
              {/* <Route exact path={routes.SIGN_UP} component={SignUp} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default withAuthentication(App);
