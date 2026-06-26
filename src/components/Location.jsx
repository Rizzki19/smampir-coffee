export default function Location() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Lokasi Kami</h2>
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-md">
        {/* Ganti src dengan link embed Google Maps Anda */}
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          className="w-full h-80"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="p-6 bg-white text-center">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=S'mampir+Coffee+Jember"
            target="_blank"
            className="block w-full bg-stone-900 text-white py-4 rounded-xl hover:bg-orange-600 transition"
          >
            Buka Rute di Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
