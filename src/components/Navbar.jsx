import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import "../css/components/navbar.css";

const SCROLL_THRESHOLD = 8;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    function handleScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > SCROLL_THRESHOLD);
        ticking = false;
      });
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <NavLink className="brand" to="/">
        <img
          alt="Sebastian"
          className="brand-logo"
          src={`${import.meta.env.BASE_URL}logo.svg`}
        />
      </NavLink>

      <nav className="site-nav" aria-label="Primær navigation">
        <NavLink to="/" end>
          Mit arbejde
        </NavLink>
        <NavLink to="/about">Om mig</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
