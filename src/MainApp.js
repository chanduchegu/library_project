import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Login />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
