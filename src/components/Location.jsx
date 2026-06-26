export default function Location() {
  const openMaps = () =>
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=S'mampir+Coffee+Jember",
      "_blank",
    );

  return (
    <section id="lokasi" className="py-20 px-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Kunjungi Kami</h2>
      <div
        onClick={openMaps}
        className="cursor-pointer rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
      >
        {/* Gunakan gambar lokasi atau peta statis */}
        <div className="h-64 bg-stone-200 flex items-center justify-center">
          Klik untuk Rute ke S'mampir Coffee
        </div>
      </div>
      <p className="mt-6 font-semibold">Jam Operasional: 20:00 - 01:00</p>
    </section>
  );
}
