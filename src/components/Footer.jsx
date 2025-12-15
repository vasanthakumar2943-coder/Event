import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        {/* ===== BRAND ===== */}
        <div className="footer-section">
          <h3>Praba Events</h3>
          <p>
            Modern, stylish event planning for weddings, birthdays and corporate
            events with premium designs and professional execution.
          </p>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/designers">Designers</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* ===== CONTACT ===== */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📞 +91 74492 92910</p>
          <p>📧 prabaevents@gmail.com</p>
          <p>📍 Chennai, Tamil Nadu</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Praba Events — All Rights Reserved
      </div>
    </footer>
  );
}
