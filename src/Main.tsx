import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonCatalog from "./views/PokemonCatalog";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";

const Main = () => {
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
              <PokemonCatalog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Main;
