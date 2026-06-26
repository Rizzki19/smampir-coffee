export default function Hero() {
  const hours = new Date().getHours();
  const isOpen = hours >= 10 && hours < 23;

  return (
    <section className="py-20 px-6 text-center animate-fade-in-up">
      <div
        className={`mb-4 px-4 py-1 rounded-full inline-block font-semibold ${isOpen ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
      >
        {isOpen ? "● Sedang Buka" : "○ Sedang Tutup"}
      </div>
      <h1 className="text-5xl font-bold mb-4">S'mampir Coffee</h1>
      <p className="text-lg text-stone-600 mb-8">
        Tempat terbaik untuk menikmati kopi dan suasana santai di Jember.
      </p>
      <a
        href="#menu"
        className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition"
      >
        Lihat Menu
      </a>
    </section>
  );
}
