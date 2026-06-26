import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroImg from "../assets/hero-2.png";

export default function Hero() {
  const descriptions = [
    "S'mampir Coffee menghadirkan racikan kopi terbaik dengan harga yang bersahabat, tempat yang tepat untuk berbagi cerita dan kehangatan di tengah kota Jember.",
    "Nikmati perpaduan biji kopi pilihan yang diolah dengan hati, menciptakan aroma dan rasa yang pas untuk menemani setiap momen santai Anda bersama teman atau keluarga.",
    "Dari kopi susu yang creamy hingga segarnya menu non-coffee, kami berkomitmen menyajikan kualitas rasa terbaik dalam setiap cangkir yang Anda nikmati di suasana yang tenang.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % descriptions.length),
      4000,
    ); // Durasi slide diperpanjang
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-12 pt-32 pb-20 bg-stone-50"
    >
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-7xl font-bold text-stone-950">S'mampir Coffee</h1>

        <div className="h-32">
          {" "}
          {/* Tinggi kontainer disesuaikan dengan deskripsi panjang */}
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
              className="text-xl text-stone-600 font-medium leading-relaxed"
            >
              {descriptions[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <a
          href="#menu"
          className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-700 transition"
        >
          Lihat Menu
        </a>
      </div>

      <div className="md:w-5/12">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={HeroImg}
          className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition duration-500"
        />
      </div>
    </section>
  );
}
