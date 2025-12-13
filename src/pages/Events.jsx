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
    .then(r => r.json())
    .then(d => setEvents(d || []));
}, []);

useEffect(() => {
  fetch("/bookings.json")
    .then(r => r.json())
    .then(d => setBookings(d || []));
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

  /* Confirm booking */
  const confirmBooking = async (event) => {
    const booking = {
      eventId: event.id,
      eventName: event.name,
      date: selectedDate.toISOString(),
      createdAt: new Date().toISOString(),
    };

    await fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    });

    const msg = `Hi Praba Events,%0ABooking request:%0AEvent: ${event.name}%0ADate: ${selectedDate.toDateString()}`;
    window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");

    alert("Booking confirmed!");
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
                <div ref={popupRef} className="booking-popup-float animate">
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
