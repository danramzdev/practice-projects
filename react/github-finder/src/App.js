import React from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder :D" />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
