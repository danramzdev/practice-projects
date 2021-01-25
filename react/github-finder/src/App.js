import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import { Alert } from "./components/layout/Alert";
import User from "./components/users/User";

// Pages
import About from "./components/pages/About";

// Context
import GithubState from "./context/github/GithubState";

// CSS
import "./App.css";

const App = () => {
  const [alert, setAlert] = useState(null);

  // Set alert
  const setAlertFunction = (message, type) => {
    setAlert({
      message,
      type,
    });

    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="Github Finder :D" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search setAlert={setAlertFunction} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/user/:login" component={User} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
