const menuData = [
  { category: "Coffee Series", items: [
      { name: "Kopi Susu Ori", price: "12K / 13K" },
      { name: "Kopi Susu Strong", price: "15K / 16K" },
      { name: "Americano", price: "9K / 10K" },
      { name: "Kopi Susu Gula Aren", price: "13K / 14K" },
  ]},
  { category: "Non Coffee Series", items: [
      { name: "Teh Ori", price: "5K / 6K" },
      { name: "Milk Tea", price: "7K / 8K" },
      { name: "Taro", price: "9K / 10K" },
      { name: "Red Velvet", price: "9K / 10K" },
      { name: "Coklat", price: "9K / 10K" },
      { name: "Green Tea (Matcha)", price: "12K / 13K" },
  ]},
  { category: "Snacks & Bakaran", items: [
      { name: "Kentang", price: "10K" },
      { name: "Bakaran", price: "Mulai 2K/tusuk" },
  ]}
];

export default function Menu() {
  return (
    <section id="menu" className="py-16 px-6 bg-stone-950 text-stone-100">
      <h2 className="text-4xl font-serif font-bold text-center mb-12">Menu Kami</h2>
      <div className="max-w-4xl mx-auto space-y-12">
        {menuData.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-6 border-b border-stone-800 pb-2 text-orange-500">{section.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-stone-900 p-4 rounded-xl border border-stone-800 hover:border-orange-900 transition">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-orange-400 font-bold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}