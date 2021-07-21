import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Age from "./pages/Age";
import Gender from "./pages/Gender";
import Nation from "./pages/Nation";

function App() {
  return (
    <Router>
      <div className="uber__div">
        <main>
          <Switch>
            <Route path="/gender">
              <Gender />
            </Route>
            <Route path="/nation">
              <Nation />
            </Route>
            <Route path="/">
              <Age />
            </Route>
          </Switch>
        </main>
        <footer className="App__footer">
          <nav className="App__nav">
            <NavLink exact to="/">
              Age
            </NavLink>

            <NavLink to="/nation">Nation</NavLink>

            <NavLink to="/gender">Gender</NavLink>
          </nav>
        </footer>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      </div>
    </Router>
  );
}

export default App;
