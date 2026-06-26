export default function Hero() {
  return (
    <section className="py-20 px-10 text-center bg-stone-900 text-white">
      <h1 className="text-5xl font-bold mb-6">Selamat Datang di S'mampir Coffee</h1>
      <p className="text-lg mb-8 text-stone-300">Tempat terbaik untuk menikmati kopi dan suasana santai di Jember.</p>
      <a 
        href="https://wa.me/6285791644358" 
        className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition"
      >
        Pesan Sekarang via WhatsApp
      </a>
    </section>
  )
}