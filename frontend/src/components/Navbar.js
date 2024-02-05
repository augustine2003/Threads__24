import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <img src={logo} alt="" className="logo" />
        <p>Threads'24</p>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/events">EVENTS</NavLink>
        </li>
        <li>
          <NavLink to="/workshops">WORKSHOPS</NavLink>
        </li>
        <li>
          <NavLink to="/register">REGISTER</NavLink>
        </li>
        <li>
          <NavLink to="/download">DOWNLOAD ID</NavLink>
        </li>
      </ul>
    </nav>
  );
};
