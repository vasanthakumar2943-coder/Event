import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">

      {/* ================= HERO ================= */}
      <section className="section">
        <div className="grid" style={{ alignItems: "center" }}>
          <div>
            <h2 className="section-title">
              Making Your Events Truly Memorable
            </h2>

            <p className="section-subtitle">
              Praba Events specializes in wedding, birthday and corporate event
              decorations with premium designs and flawless execution.
            </p>

            <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
              <button
                className="btn-primary"
                onClick={() => navigate("/events")}
              >
                View Events
              </button>

              <button
                className="btn-secondary"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://picsum.photos/seed/hero/600/400"
              alt="Event decoration"
              style={{ borderRadius: 14, width: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section">
        <h2 className="section-title">Our Services</h2>

        <div className="grid">
          <div className="card">
            <h3>Wedding Decoration</h3>
            <p className="price">Premium stage & floral setup</p>
          </div>

          <div className="card">
            <h3>Birthday Parties</h3>
            <p className="price">Theme-based decorations</p>
          </div>

          <div className="card">
            <h3>Corporate Events</h3>
            <p className="price">Professional branding & setup</p>
          </div>
        </div>

        <div style={{ marginTop: 18, textAlign: "center" }}>
          <button
            className="btn-secondary"
            onClick={() => navigate("/services")}
          >
            View All Services
          </button>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="section">
        <h2 className="section-title">Why Choose Praba Events</h2>

        <div className="grid">
          <div className="card">
            <h3>Experienced Team</h3>
            <p className="price">
              Skilled designers with years of event experience.
            </p>
          </div>

          <div className="card">
            <h3>Premium Quality</h3>
            <p className="price">
              High-quality materials and elegant designs.
            </p>
          </div>

          <div className="card">
            <h3>On-Time Delivery</h3>
            <p className="price">
              We execute events perfectly, always on schedule.
            </p>
          </div>
        </div>
      </section>

      {/* ================= GALLERY PREVIEW ================= */}
      <section className="section">
        <h2 className="section-title">Gallery Highlights</h2>

        <div className="grid">
          <img
            src="https://picsum.photos/seed/gallery1/400/300"
            alt=""
            style={{ borderRadius: 12, width: "100%" }}
          />
          <img
            src="https://picsum.photos/seed/gallery2/400/300"
            alt=""
            style={{ borderRadius: 12, width: "100%" }}
          />
          <img
            src="https://picsum.photos/seed/gallery3/400/300"
            alt=""
            style={{ borderRadius: 12, width: "100%" }}
          />
        </div>

        <div style={{ marginTop: 18, textAlign: "center" }}>
          <button
            className="btn-secondary"
            onClick={() => navigate("/gallery")}
          >
            View Full Gallery
          </button>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="section">
        <h2 className="section-title">What Our Clients Say</h2>

        <div className="grid">
          <div className="card">
            <p className="price">
              “Amazing decoration and perfect execution. Our wedding was
              unforgettable!”
            </p>
            <strong>- Anitha</strong>
          </div>

          <div className="card">
            <p className="price">
              “Professional team, beautiful designs and on-time delivery.”
            </p>
            <strong>- Rajesh</strong>
          </div>

          <div className="card">
            <p className="price">
              “Best event planners in Chennai. Highly recommended.”
            </p>
            <strong>- Priya</strong>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section">
        <div className="card" style={{ textAlign: "center" }}>
          <h2>Ready to Plan Your Event?</h2>
          <p className="price">
            Let us turn your ideas into unforgettable moments.
          </p>

          <button
            className="btn-primary"
            onClick={() => navigate("/events")}
          >
            Book Your Event
          </button>
        </div>
      </section>

    </div>
  );
}
