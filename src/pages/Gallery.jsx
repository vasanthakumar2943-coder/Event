import React, { useState } from "react";

const galleryItems = [
  { id: 1, type: "image", src: "https://picsum.photos/seed/m1/800/600" },
  { id: 2, type: "image", src: "https://picsum.photos/seed/m2/600/900" },
  { id: 3, type: "image", src: "https://picsum.photos/seed/m3/800/500" },
  { id: 4, type: "image", src: "https://picsum.photos/seed/m4/500/800" },
  { id: 5, type: "image", src: "https://picsum.photos/seed/m5/900/600" },
  { id: 6, type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

export default function Gallery() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="container">

      <section className="section">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">
          Moments from our recent events
        </p>

        {/* Masonry Grid */}
        <div className="masonry">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="masonry-item"
              onClick={() => setActiveItem(item)}
            >
              {item.type === "video" ? (
                <video src={item.src} muted />
              ) : (
                <img src={item.src} alt="Event" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {activeItem && (
        <div className="lightbox" onClick={() => setActiveItem(null)}>
          <span className="lightbox-close">✕</span>

          {activeItem.type === "video" ? (
            <video src={activeItem.src} controls autoPlay />
          ) : (
            <img src={activeItem.src} alt="Fullscreen" />
          )}
        </div>
      )}

    </div>
  );
}
