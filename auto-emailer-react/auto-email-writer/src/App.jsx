import Features from "./Components/Features";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";
import AutoEmailer from "./AutoEmailer";
import { Route, Routes } from "react-router-dom";

function Home() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-900">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/auto-emailer" element={<AutoEmailer />} />
          <Route path="*" element={<div className="p-8 text-white">404 — Page not found</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
