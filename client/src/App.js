import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";

import Jokes from "./jokes/Jokes";
import Signin from "./auth/Signin";

import "./App.css";

const Home = props => {
  return (
    <div>
      <h1>This is my Joke Website!</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink to="/" exact>
              Home
            </NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/jokes">Jokes</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/signin">Signin</NavLink>
            &nbsp;|&nbsp;
            <button onClick={this.signout}>Signout</button>
          </nav>
          <main>
            <Route path="/" component={Home} exact />
            <Route path="/jokes" component={Jokes} />
            <Route path="/signin" component={Signin} />
          </main>
        </header>
      </div>
    );
  }

  signout = () => {
    localStorage.removeItem("jwt");
  };
}

export default App;

// white-list: keep a list of valid tokens on the db

// black-list: keep a list of blaclisted tokens on the db

// on every request you have to check your list

// access token (short lived) + refresh token (long lived)
