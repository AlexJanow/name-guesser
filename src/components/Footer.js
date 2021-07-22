import { Router, NavLink } from "react-router-dom";
import Age from "../pages/Age";
import Gender from "../pages/Gender";
import Nation from "../pages/Nation";

export default function Footer() {
  return (
    <footer className="App__footer">
      <nav className="App__nav">
        <NavLink exact to="/">
          Age
        </NavLink>

        <NavLink to="/nation">Nation</NavLink>

        <NavLink to="/gender">Gender</NavLink>
      </nav>
    </footer>
  );
}
