import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="container">

      <section className="section">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          We usually reply within a few minutes.
        </p>

        <div className="contact-wrapper">
          {/* FORM CARD */}
          <div className="contact-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={form.name}
                required
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={form.phone}
                required
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <label>Your Message</label>
              <textarea
                placeholder="Write your message"
                value={form.message}
                required
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              ></textarea>

              <button className="btn-primary" type="submit">
                Send Message
              </button>

              <a
                className="whatsapp-btn"
                href="https://wa.me/917449292910?text=Hi%20Praba%20Events,%20I%20need%20more%20details"
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>
            </form>
          </div>

          {/* INFO CARD */}
          <div className="contact-info-card">
            <h3>Reach Us</h3>

            <p>📞 +91 74492 92910</p>
            <p>📧 prabaevents@gmail.com</p>
            <p>📍 Chennai, Tamil Nadu</p>

            <div className="contact-map">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
