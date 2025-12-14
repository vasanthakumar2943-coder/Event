import React from "react";
import { useNavigate } from "react-router-dom";

/* EVENTS PREVIEW */
const eventPreview = [
  {
    id: 1,
    name: "Wedding Event",
    price: "₹50,000",
    image: "/images/meraige.jpeg",
  },
  {
    id: 2,
    name: "Birthday Party",
    price: "₹12,000",
    image: "/images/Birth_day_Boy.jpeg",
  },
  {
    id: 3,
    name: "Corporate Event",
    price: "₹30,000",
    image: "/images/Primium.jpeg",
  },
];

/* SERVICES PREVIEW */
const servicesPreview = [
  {
    id: 1,
    title: "Stage Decorations",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRut64Uhx-yGfz7UiC9RMzjdJmo5CqLGrZSUg&s",
  },
  {
    id: 2,
    title: "Teddy Costume",
    image:
      "https://i.pinimg.com/736x/f1/78/11/f1781129d81f070470a4e8715370cbfa.jpg",
  },
  {
    id: 3,
    title: "Lights",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGRVy92fqhPHeSo4LkPcWhq_JpEzJzjyi7w&s",
  },
];

/* GALLERY PREVIEW */
const galleryPreview = [
  { id: 1, src: "/images/Meraige.jpeg" },
  { id: 2, src: "/images/meraige.jpeg" },
  { id: 3, src: "/images/Curch.jpeg" },
   { id: 4, src: "/images/home.jpeg" },
    { id: 5, src: "/images/Primium.jpeg" },
     { id: 6, src: "/images/simantham.jpeg" },
      { id: 7, src: "/images/Birth_day_G.jpeg" },
];

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
              src="/images/home.jpeg"
              alt="Event decoration"
              style={{ borderRadius: 14, width: "100%", height: "500px" }}
            />
          </div>
        </div>
      </section>

      {/* ================= EVENTS PREVIEW ================= */}
      <section className="section">
        <h2 className="section-title">Upcoming Events</h2>
        <p className="section-subtitle">
          Popular events planned by Praba Events
        </p>

        <div className="grid">
          {eventPreview.map((event) => (
            <div className="card" key={event.id}>
              <img src={event.image} alt={event.name} className="card-img" />
              <h3>{event.name}</h3>
              <p style={{ color: "var(--accent)", fontWeight: 600 }}>
                {event.price}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18, textAlign: "center" }}>
          <button
            className="btn-secondary"
            onClick={() => navigate("/events")}
          >
            View All Events
          </button>
        </div>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="section">
        <h2 className="section-title">Our Services</h2>

        <div className="grid">
          {servicesPreview.map((service) => (
            <div className="card" key={service.id}>
              <img src={service.image} alt={service.title} className="card-img" />
              <h3>{service.title}</h3>
            </div>
          ))}
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

      {/* ================= GALLERY PREVIEW ================= */}
      <section className="section">
        <h2 className="section-title">Gallery Highlights</h2>

        <div className="masonry">
          {galleryPreview.map((item) => (
            <div key={item.id} className="masonry-item">
              <img
                src={item.src}
                alt="Gallery preview"
              />
            </div>
          ))}
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

      {/* ================= CTA ================= */}
      <section className="section">
        <div style={{ textAlign: "center" }}>
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
