import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <div className="container">
      <nav className="navbar">
        {/* Brand */}
        <div className="brand">Praba Events</div>

        {/* Desktop Menu */}
        <div className="nav-links">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/events" className={linkClass}>Events</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/designers" className={linkClass}>Designers</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/events" className={linkClass} onClick={() => setOpen(false)}>
            Events
          </NavLink>
          <NavLink to="/gallery" className={linkClass} onClick={() => setOpen(false)}>
            Gallery
          </NavLink>
          <NavLink to="/services" className={linkClass} onClick={() => setOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/designers" className={linkClass} onClick={() => setOpen(false)}>
            Designers
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
}
