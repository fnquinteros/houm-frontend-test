import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./views/Home";
import PokemonCatalog from "./views/PokemonCatalog";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
 
class Main extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
            <Navbar />
          </nav>
          <div className="cards-content">
            <Switch>
              <Route path="/catalog">
                <PokemonCatalog />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
 
export default Main;