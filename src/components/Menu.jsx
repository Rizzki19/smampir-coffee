import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Americano from "../assets/Americano.png";
import KopsusCreamy from "../assets/Kopsu Creamy.png";
import KopsusGulaAren from "../assets/Kopsu Gula Aren.png";

const menuItems = [
  { name: "Americano", price: "9K", img: Americano, tag: "Best Seller" },
  { name: "Kopsu Creamy", price: "13K", img: KopsusCreamy, tag: "Favorit" },
  { name: "Gula Aren", price: "13K", img: KopsusGulaAren, tag: "Enak" },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Menu Favorit</h2>
      <Swiper slidesPerView={1.2} spaceBetween={20} className="max-w-4xl">
        {menuItems.map((item, i) => (
          <SwiperSlide key={i} className="bg-white rounded-3xl p-4 shadow-lg">
            <img
              src={item.img}
              className="rounded-2xl w-full h-60 object-cover"
            />
            <div className="mt-4 flex justify-between items-center">
              <h3 className="font-bold text-xl">{item.name}</h3>
              <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
                {item.tag}
              </span>
            </div>
            <p className="text-orange-600 font-bold">{item.price}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
