import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


/* Components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


/* Pages */
import Home from "./pages/Home";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Designers from "./pages/Designers";

/* Booking */
import BookingForm from "./components/BookingForm";

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      
      <Navbar />
      

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/designers" element={<Designers />} />

        {/* Booking */}
        <Route path="/book/:id" element={<BookingForm />} />
      </Routes>

      <Footer />
    </Router>
  );
}
