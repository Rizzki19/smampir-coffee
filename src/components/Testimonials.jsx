import { useState } from "react";

export default function Testimonials() {
  const [reviews, setReviews] = useState([
    { name: "Andi", text: "Kopi Gula Aren-nya mantap sekali!" },
  ]);
  const [input, setInput] = useState("");

  const addReview = () => {
    if (input) {
      setReviews([...reviews, { name: "Pengunjung", text: input }]);
      setInput("");
    }
  };

  return (
    <section className="py-20 px-6 bg-stone-50">
      <h2 className="text-3xl font-bold text-center mb-12">Ulasan Pelanggan</h2>
      {/* Form Tambah Ulasan */}
      <div className="max-w-xl mx-auto mb-10 flex gap-2">
        <input
          className="flex-1 p-3 rounded-xl border"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis ulasan Anda..."
        />
        <button
          onClick={addReview}
          className="bg-stone-900 text-white px-6 py-3 rounded-xl"
        >
          Kirim
        </button>
      </div>
      {/* Daftar Komentar */}
      <div className="max-w-xl mx-auto space-y-4">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="p-4 bg-white rounded-xl shadow-sm animate-fade-in-up"
          >
            <p className="font-bold">{r.name}</p>
            <p className="text-stone-600">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
