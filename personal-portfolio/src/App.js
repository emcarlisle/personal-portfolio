import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import More from "./components/Pages/More";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Portfolio from "./components/Pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Project from "./components/Project";

// returns the Container components that have the navbar, table components and API call
function App() {
  return (
    <Router>
      <Switch>
      <div>
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/more" component={More} />
        <Footer />
      </div>
    </Switch>
    </Router>

  )
}

export default App;