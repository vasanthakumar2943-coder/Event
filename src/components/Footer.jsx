import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        
        <div className="footer-section">
          <h3>Praba Events</h3>
          <p>
            Modern, stylish event planning for weddings, birthdays & corporate events.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📞 +91 98765 43210</p>
          <p>📧 prabaevents@gmail.com</p>
          <p>📍 Chennai, Tamil Nadu</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Praba Events — All Rights Reserved
      </div>
    </footer>
  );
}
