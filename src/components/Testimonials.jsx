export default function Testimonials() {
  return (
    <section className="py-20 px-8 bg-stone-100">
      <h2 className="text-3xl font-bold text-center mb-10">Ulasan Pelanggan</h2>
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="text-yellow-500 mb-2">★★★★★</div>
          <p className="italic">"Tempat nongkrong paling nyaman di Jember!"</p>
          <div className="mt-4 text-xs bg-stone-100 p-2 rounded-full inline-block">
            Ramah • Kopi Enak
          </div>
        </div>
      </div>
    </section>
  );
}
