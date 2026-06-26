import Americano from "../assets/Americano.png";
import KopsusCreamy from "../assets/Kopsu Creamy.png";
import KopsusGulaAren from "../assets/Kopsu Gula Aren.png";
import KopsusStrong from "../assets/Kopsu Strong.png";
import Matcha from "../assets/Matcha.png";
import Taro from "../assets/Taro.png";

const menuItems = [
  { name: "Americano", price: "9K", image: Americano, best: false },
  { name: "Kopsus Creamy", price: "13K", image: KopsusCreamy, best: true },
  { name: "Kopsus Gula Aren", price: "13K", image: KopsusGulaAren, best: true },
  { name: "Kopsus Strong", price: "16K", image: KopsusStrong, best: false },
  { name: "Matcha Latte", price: "13K", image: Matcha, best: false },
  { name: "Taro", price: "10K", image: Taro, best: false },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Menu Pilihan</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 transition-all hover:scale-105 hover:shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            {item.best && (
              <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-md text-xs font-bold">
                Best Seller
              </span>
            )}
            <h3 className="font-bold mt-2">{item.name}</h3>
            <p className="text-orange-600 font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
