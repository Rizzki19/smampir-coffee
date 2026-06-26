export default function Menu() {
  const items = [
    { name: "Kopi Susu Ori", price: "12K" },
    { name: "Americano", price: "9K" },
  ];

  return (
    <section id="menu" className="py-16 bg-stone-50">
      <h2 className="text-3xl font-bold text-stone-800 mb-8">Menu Pilihan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-orange-600 font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
