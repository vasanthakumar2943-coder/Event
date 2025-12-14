import React from "react";

const services = [
  {
    id: 1,
    title: "Stage Decorations",
    description:
      "Elegant stage decorations with flowers, LED backdrops and theme-based designs for weddings and events.",
    price: "Starting from ₹12,000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRut64Uhx-yGfz7UiC9RMzjdJmo5CqLGrZSUg&s",
  },
  {
    id: 2,
    title: "Teddy Costume",
    description:
      "Cute teddy mascot costume for birthday parties, kids events and surprise celebrations.",
    price: "Starting from ₹3,500",
    image:
      "https://i.pinimg.com/736x/f1/78/11/f1781129d81f070470a4e8715370cbfa.jpg",
  },
  {
    id: 3,
    title: "Lights",
    description:
      "Professional event lighting with LED lights, decorative focus lights and stage illumination.",
    price: "Starting from ₹6,000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGRVy92fqhPHeSo4LkPcWhq_JpEzJzjyi7w&s",
  },
  {
    id: 4,
    title: "Popcorn",
    description:
      "Live popcorn stall with machine, fresh popcorn and operator for parties and functions.",
    price: "Starting from ₹2,500",
    image:
      "https://tenthouz.com/wp-content/uploads/2024/07/DALL%C2%B7E-2024-07-21-19.40.16-A-classic-popcorn-machine-cart-set-up-for-a-party.-The-cart-is-bright-red-with-a-traditional-design-featuring-a-glass-enclosure-showcasing-freshly-po.webp",
  },
  {
    id: 5,
    title: "Cotton Candy",
    description:
      "Colorful cotton candy stall with multiple flavors, perfect for kids birthday events.",
    price: "Starting from ₹2,000",
    image:
      "https://www.kinghigher.com/wp-content/uploads/2025/06/cotton-candy-machine-event-pink-model.jpg",
  },
  {
    id: 6,
    title: "Catering",
    description:
      "Quality catering service with veg and non-veg menus, hygienic food preparation and staff.",
    price: "Starting from ₹180 per plate",
    image:
      "https://tiimg.tistatic.com/fp/1/791/catering-services-737.jpg",
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
              {/* Service Image */}
              <img
                src={service.image}
                alt={service.title}
                className="card-img"
              />

              {/* Service Content */}
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
