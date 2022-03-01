import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS FOR PAGE ROUTES
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";

// STYLESHEETS
import "./index.css";
import "./App.scss";
import "./components/Navbar/Navbar.scss";
import "./components/Header/Header.scss";
import "./components/Intro/intro.scss";
import "./components/Features/Features.scss";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about/" component={About} />
            <Route exact path="/services/" component={Services} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
