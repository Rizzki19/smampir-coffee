import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-900">
      <Navbar />
      <Hero />
      <Menu />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}
