import React, { useState } from "react";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import Features from "./components/Features";
import NeoPopSection from "./components/NeoPopSection";
import Testimonials from "./components/Testimonials";
import SecuritySection from "./components/SecuritySection";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Cinematic entrance loader */}
      <Loader onFinished={() => setLoading(false)} />

      {/* Main page content revealed after load */}
      {!loading && (
        <div className="relative min-h-screen bg-bg-dark text-white select-none selection:bg-accent-mint selection:text-black font-plus-jakarta antialiased overflow-x-hidden">
          {/* Global layouts */}
          <CustomCursor />
          <ScrollProgress />
          <Navbar />

          {/* Page sections */}
          <main>
            <Hero />
            <TrustSection />
            <Features />
            <NeoPopSection />
            <Testimonials />
            <SecuritySection />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}
