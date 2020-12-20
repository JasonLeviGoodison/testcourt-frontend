import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import logo from './logo.svg';
import * as routes from "./routes/routes";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import NewReview from './components/NewReview';

export const CompanyName = "TestCourt";

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
              {/*<Route path={routes.CHAT} component={ChatInformation} />*/}
            </Switch>
            {/*<Footer/>*/}
        </div>
      </Router>
    </div>
  );
}

export default App;
