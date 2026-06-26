import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#FAFAFA] text-stone-900 min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
}
