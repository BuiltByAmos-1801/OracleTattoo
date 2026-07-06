import React from "react";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Artists from "./pages/Artists.jsx";
import JennyDetail from "./pages/JennyDetail.jsx";
import Booking from "./pages/Booking.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Gallery from "./pages/Gallery.jsx";
import GalleryCategoryDetail from "./pages/GalleryCategoryDetail.jsx";
import ReligiousTattooDetail from "./pages/ReligiousTattooDetail.jsx";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-ink text-bone selection:bg-bone selection:text-ink">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/religious-tattoos/:tattooId" element={<ReligiousTattooDetail />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/jenny" element={<JennyDetail />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:categoryId" element={<GalleryCategoryDetail />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
