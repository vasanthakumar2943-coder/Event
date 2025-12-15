import React, { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const popupRef = useRef(null);

  /* Load events */
  useEffect(() => {
    fetch("/events.json")
      .then((r) => r.json())
      .then((d) => setEvents(d || []));
  }, []);

  /* Load bookings (json-server) */
  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((r) => r.json())
      .then((d) => setBookings(d || []));
  }, []);

  /* Close popup on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpenId(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Disable past + booked dates */
  const disableDates = ({ date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date < today) return true;

    return bookings.some(
      (b) =>
        b.eventId === openId &&
        new Date(b.date).toDateString() === date.toDateString()
    );
  };

  /* Check if event already booked */
  const isEventBooked = (eventId) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return bookings.some(
      (b) => b.eventId === eventId && new Date(b.date) >= today
    );
  };

  /* ✅ CONFIRM BOOKING (FINAL SAFE LOGIC) */
  const confirmBooking = (event) => {
    if (!selectedDate) {
      alert("Please select a date");
      return;
    }

    // WhatsApp message (NO %0A)
    const msg =
      `Hi Praba Events,\n` +
      `Booking request:\n` +
      `Event: ${event.name}\n` +
      `Date: ${selectedDate.toDateString()}`;

    // ✅ WhatsApp redirect (never blocked)
    window.location.href =
      `https://wa.me/917449292910?text=${encodeURIComponent(msg)}`;

    // ✅ Save booking (non-blocking)
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId: event.id,
        eventName: event.name,
        date: selectedDate.toISOString(),
        createdAt: new Date().toISOString(),
      }),
    });

    setOpenId(null);
  };

  return (
    <div className="container">
      <section className="section">
        <h2 className="section-title">All Events</h2>

        <div className="grid">
          {events.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} />

              {isEventBooked(item.id) ? (
                <span className="status booked">Booked</span>
              ) : (
                <span className="status available">Available</span>
              )}

              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>

              <button
                className="btn-primary"
                onClick={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
              >
                Book Now
              </button>

              {openId === item.id && (
                <div
                  ref={popupRef}
                  className="booking-popup-float animate"
                >
                  <button
                    className="popup-close"
                    onClick={() => setOpenId(null)}
                  >
                    ✕
                  </button>

                  <Calendar
                    value={selectedDate}
                    onChange={setSelectedDate}
                    tileDisabled={disableDates}
                  />

                  <button
                    className="btn-primary"
                    style={{ marginTop: 10, width: "100%" }}
                    onClick={() => confirmBooking(item)}
                  >
                    Confirm Booking
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
