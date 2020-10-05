import React from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import { Alert } from "./components/layout/Alert";

import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  searchUsers = async (query) => {
    this.setState({ loading: true });

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      users: response.data.items,
      loading: false,
    });
  };

  // Clear user from state
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
    });
  };

  // Set alert
  setAlert = (message, type) => {
    this.setState({
      alert: {
        message,
        type,
      },
    });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder :D" />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
