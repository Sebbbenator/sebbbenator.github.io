import { NavLink } from "react-router";
import "../css/components/navbar.css";

function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/">
        Sebastian
      </NavLink>

      <nav className="site-nav" aria-label="Primær navigation">
        <NavLink to="/" end>
          Forside
        </NavLink>
        <NavLink to="/#om-mig">Om mig</NavLink>
        <NavLink to="/#projekter">Projekter</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
