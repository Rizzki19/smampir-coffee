import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

export default function Testimonials() {
  const [list, setList] = useState([]);
  const [nama, setNama] = useState("");
  const [ulasan, setUlasan] = useState("");
  const [rating, setRating] = useState(0);

  const defaultUlasan = [
    {
      id: "1",
      nama: "Moch. Rizki Romadhoni",
      ulasan: "Tempat ngopi paling nyaman di Jember!",
      rating: 5,
    },
    {
      id: "2",
      nama: "Bella",
      ulasan: "Kopinya juara banget, suka sama suasananya.",
      rating: 5,
    },
    {
      id: "3",
      nama: "Ammar",
      ulasan: "Suasananya sangat estetik untuk santai.",
      rating: 4,
    },
    {
      id: "4",
      nama: "Jenni",
      ulasan: "Harga bersahabat, rasa kopi bintang lima.",
      rating: 5,
    },
    {
      id: "5",
      nama: "Sofi",
      ulasan: "Pelayanan ramah dan kopi cepat saji.",
      rating: 4,
    },
    {
      id: "6",
      nama: "Difqi",
      ulasan: "Wajib mampir kalau ke daerah sini!",
      rating: 5,
    },
  ];

  useEffect(() => {
    const q = query(collection(db, "ulasan"), orderBy("createdAt", "asc"));
    return onSnapshot(q, (snapshot) => {
      const dbData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setList([...defaultUlasan, ...dbData]);
    });
  }, []);

  const handleKirim = async () => {
    if (nama && ulasan && rating > 0) {
      await addDoc(collection(db, "ulasan"), {
        nama,
        ulasan,
        rating,
        createdAt: serverTimestamp(),
      });
      setNama("");
      setUlasan("");
      setRating(0);
    } else {
      alert("Lengkapi nama, ulasan, dan rating!");
    }
  };

  const avgRating =
    list.length > 0
      ? (
          list.reduce((acc, curr) => acc + (curr.rating || 0), 0) / list.length
        ).toFixed(1)
      : 0;

  return (
    <section id="ulasan" className="py-20 px-4 md:px-8 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Ulasan Pelanggan
        </h2>
        <div className="text-center mb-10">
          <span className="text-5xl font-bold text-orange-600">
            {avgRating}
          </span>
          <p className="text-stone-500">Rata-rata dari {list.length} ulasan</p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-stone-200 mb-16 max-w-2xl mx-auto">
          <input
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
            placeholder="Nama Anda..."
          />
          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={24}
                className={`cursor-pointer ${star <= rating ? "text-yellow-500" : "text-stone-300"}`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
          <textarea
            value={ulasan}
            onChange={(e) => setUlasan(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
            placeholder="Tulis ulasan tentang S'mampir Coffee..."
          />
          <button
            onClick={handleKirim}
            className="w-full bg-stone-950 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition"
          >
            Kirim Ulasan
          </button>
        </div>

        <Swiper
          modules={[Autoplay, Grid, Pagination]}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          grid={{ rows: 3, fill: "row" }}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="max-w-6xl h-[650px]"
        >
          {list.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-stone-200 h-[180px] flex flex-col justify-center">
                <div className="font-bold text-lg text-stone-900 mb-1">
                  {item.nama}
                </div>
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(item.rating || 0)].map((_, idx) => (
                    <FaStar key={idx} size={16} />
                  ))}
                </div>
                <p className="text-stone-700 italic text-sm leading-relaxed">
                  "{item.ulasan}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
