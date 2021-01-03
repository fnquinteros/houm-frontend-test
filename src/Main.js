import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./views/Home";
import Stuff from "./views/Stuff";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import Pokedex from "pokedex-promise-v2";
 
class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pokedexResponse: undefined
    };
  }

  componentDidMount() {
    this.getPokemonByName('eevee');
  } 

  getPokemonByName = name => {
    var P = new Pokedex();
    P.getPokemonByName(name)
    .then(response => this.setState({ pokedexResponse: response.toString() })) 
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <Navbar />
          </nav>
          <div className="cards-content">
            <Switch>
              <Route path="/stuff">
                <Stuff />
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