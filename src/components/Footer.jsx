export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4">S'mampir Coffee</h3>
          <p>Tempat terbaik untuk menikmati kopi di Jember.</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Jam Operasional</h3>
          <p>Senin - Minggu: 10:00 - 23:00</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Lokasi</h3>
          <p>Jember, Jawa Timur, Indonesia</p>
        </div>
      </div>
      <div className="text-center mt-12 border-t border-stone-800 pt-6">
        <p>&copy; 2026 S'mampir Coffee. All rights reserved.</p>
      </div>
    </footer>
  );
}
