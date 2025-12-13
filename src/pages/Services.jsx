import React from "react";

const services = [
  {
    id: 1,
    title: "Wedding Decoration",
    description:
      "Complete wedding stage setup with premium flowers, lighting and themes.",
    price: "Starting from ₹15,000",
  },
  {
    id: 2,
    title: "Birthday Party",
    description:
      "Theme-based birthday decoration with balloons, backdrop and props.",
    price: "Starting from ₹5,000",
  },
  {
    id: 3,
    title: "Corporate Events",
    description:
      "Professional corporate event setup with branding and stage design.",
    price: "Starting from ₹20,000",
  },
  {
    id: 4,
    title: "Lighting & Sound",
    description:
      "High-quality lighting, sound systems and DJ setup for all events.",
    price: "Custom pricing",
  },
  {
    id: 5,
    title: "Stage & Backdrop",
    description:
      "Modern stage design and premium backdrops for special occasions.",
    price: "Custom pricing",
  },
];

export default function Services() {
  return (
    <div className="container">

      <section className="section">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Complete event solutions under one roof
        </p>

        <div className="grid">
          {services.map((service) => (
            <div className="card" key={service.id}>
              <h3>{service.title}</h3>

              <p style={{ opacity: 0.8, margin: "10px 0" }}>
                {service.description}
              </p>

              <p style={{ color: "var(--accent)", fontWeight: 600 }}>
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
