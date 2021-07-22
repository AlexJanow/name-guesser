import { Switch, Route, NavLink } from "react-router";
import Age from "../pages/Age";
import Gender from "../pages/Gender";
import Nation from "../pages/Nation";

export default function Main() {
  return (
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
  );
}
