import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [date, setDate] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  
  useEffect(() => {
    setLoading(true);

    fetch("/events.json")
      .then((r) => r.json())
      .then((data) => {
        const found = data.find(
          (e) => String(e.id) === String(id)
        );
        setEvent(found || null);
        setLoading(false);
      })
      .catch(() => {
        setEvent(null);
        setLoading(false);
      });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!date) {
      alert("Please select a date");
      return;
    }
    if (!form.name || !form.phone) {
      alert("Enter name and phone");
      return;
    }

    setSending(true);

   
    alert("Demo booking submitted!");

    const msg =
      `Hi Praba Events,%0A` +
      `Demo booking request:%0A` +
      `Event: ${event.name}%0A` +
      `Date: ${date.toDateString()}%0A` +
      `Name: ${form.name}%0A` +
      `Phone: ${form.phone}`;

    window.open(
      `https://wa.me/917449292910?text=${msg}`,
      "_blank"
    );

    setSending(false);
    navigate("/events");
  }

  if (loading)
    return (
      <div className="container">
        <p>Loading...</p>
      </div>
    );

  if (!event)
    return (
      <div className="container">
        <p>Event not found</p>
      </div>
    );

  return (
    <div className="container">
      <h2 style={{ marginTop: 8 }}>
        Book: {event.name}
      </h2>

      <div className="card booking-card">
        <h3 style={{ marginBottom: 8 }}>
          Select a date
        </h3>

        <Calendar onChange={setDate} value={date} />

        <form onSubmit={handleSubmit} style={{ marginTop: 12 }}>
          <label>Your name</label>
          <input
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            placeholder="Your full name"
          />

          <label>Phone</label>
          <input
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            placeholder="Mobile number"
          />

          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <button
              type="submit"
              className="btn-primary"
              disabled={sending}
            >
              {sending ? "Sending..." : "Confirm Booking"}
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate("/events")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
