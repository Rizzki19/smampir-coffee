export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-serif text-orange-500 mb-6">Hubungi Kami</h2>
      <p className="text-stone-300 mb-8">
        Punya pertanyaan atau ingin pesan kopi? S'mampir saja!
      </p>
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noreferrer"
        className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition"
      >
        Chat via WhatsApp
      </a>
    </section>
  );
}
