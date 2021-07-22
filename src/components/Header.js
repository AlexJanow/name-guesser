import { Switch, Route } from "react-router";

export default function Header() {
  return (
    <header className="Header">
      <Switch>
        <Route exact path="/">
          <h1>AGE</h1>
        </Route>
        <Route exact path="/nation">
          <h1>NATION</h1>
        </Route>
        <Route exact path="/gender">
          <h1>GENDER</h1>
        </Route>
      </Switch>
    </header>
  );
}
