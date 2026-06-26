import { motion } from "framer-motion";

// Impor aset menu
import Americano from "../assets/Americano.png";
import KopsusCreamy from "../assets/Kopsu Creamy.png";
import KopsusGulaAren from "../assets/Kopsu Gula Aren.png";
import KopsusStrong from "../assets/Kopsu Strong.png";
import Matcha from "../assets/Matcha.png";
import Taro from "../assets/Taro.png";
import Coklat from "../assets/Coklat.png";
import IceTea from "../assets/Ice Tea.png";
import Redvelvet from "../assets/Redvelvet.png";
import MilkTea from "../assets/Milk Tea.png";

const menuItems = [
  {
    name: "Kopi Susu Ori",
    hot: "12K",
    ice: "13K",
    img: KopsusCreamy,
    isBest: true,
  },
  {
    name: "Kopi Susu Strong",
    hot: "15K",
    ice: "16K",
    img: KopsusStrong,
    isBest: false,
  },
  { name: "Americano", hot: "9K", ice: "10K", img: Americano, isBest: false },
  {
    name: "Gula Aren",
    hot: "13K",
    ice: "14K",
    img: KopsusGulaAren,
    isBest: false,
  },
  { name: "Matcha", hot: "12K", ice: "13K", img: Matcha, isBest: true },
  { name: "Coklat", hot: "9K", ice: "10K", img: Coklat, isBest: true },
  { name: "Red Velvet", hot: "9K", ice: "10K", img: Redvelvet, isBest: false },
  { name: "Taro", hot: "9K", ice: "10K", img: Taro, isBest: false },
  { name: "Teh Ori", hot: "5K", ice: "6K", img: IceTea, isBest: false },
  { name: "Milk Tea", hot: "7K", ice: "8K", img: MilkTea, isBest: false },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 px-8 bg-stone-50">
      {/* Title yang Elegan */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-stone-950 uppercase tracking-widest mb-2">
          Daftar Menu
        </h2>
        <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {menuItems.map((item, i) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={i}
            className="bg-white p-4 rounded-2xl shadow-lg border border-stone-100 relative flex flex-col justify-between"
          >
            {item.isBest && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                BEST SELLER
              </span>
            )}
            <img
              src={item.img}
              alt={item.name}
              className="w-full aspect-square object-cover rounded-xl mb-4"
            />
            <div className="text-center">
              <h3 className="font-bold text-sm text-stone-900 mb-3 truncate">
                {item.name}
              </h3>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold">
                <div className="bg-stone-100 py-1 rounded border border-stone-200">
                  <span className="block text-stone-500 uppercase">Hot</span>
                  <span className="text-orange-600">{item.hot}</span>
                </div>
                <div className="bg-stone-100 py-1 rounded border border-stone-200">
                  <span className="block text-stone-500 uppercase">Ice</span>
                  <span className="text-orange-600">{item.ice}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
