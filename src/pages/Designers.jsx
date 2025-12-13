import React from "react";

const designers = [
  {
    id: 1,
    name: "Praba Kumar",
    role: "Creative Director",
    image: "https://picsum.photos/seed/designer1/400/400",
    skills: ["Wedding Design", "Stage Decoration", "Premium Themes"],
  },
  {
    id: 2,
    name: "Anitha Raj",
    role: "Event Stylist",
    image: "https://picsum.photos/seed/designer2/400/400",
    skills: ["Birthday Themes", "Floral Decor", "Lighting Concepts"],
  },
  {
    id: 3,
    name: "Karthik V",
    role: "Corporate Designer",
    image: "https://picsum.photos/seed/designer3/400/400",
    skills: ["Corporate Events", "Branding Setup", "Stage Layouts"],
  },
];

export default function Designers() {
  return (
    <div className="container">

      <section className="section">
        <h2 className="section-title">Our Designers</h2>

        <p className="section-subtitle">
          Creative professionals behind Praba Events
        </p>

        <div className="grid">
          {designers.map((d) => (
            <div className="card" key={d.id} style={{ textAlign: "center" }}>
              <img
                src={d.image}
                alt={d.name}
                style={{
                  borderRadius: "50%",
                  width: 120,
                  height: 120,
                  margin: "10px auto",
                }}
              />

              <h3>{d.name}</h3>

              <p style={{ color: "var(--accent)", marginBottom: 10 }}>
                {d.role}
              </p>

              <ul style={{ listStyle: "none", padding: 0, opacity: 0.85 }}>
                {d.skills.map((s, i) => (
                  <li key={i}>• {s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
