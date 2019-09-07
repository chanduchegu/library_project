import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar branding={"Library Project"} />
        <div className="container">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
