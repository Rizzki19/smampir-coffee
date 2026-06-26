import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="sosmed"
      className="bg-stone-950 text-stone-300 py-16 px-12 grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <div>
        <h2 className="text-white text-2xl font-bold mb-2">S'mampir Coffee</h2>
        <p className="text-sm">Jember, Jawa Timur</p>
      </div>
      <div className="flex gap-6 justify-end items-center">
        <a
          href="https://www.instagram.com/smampir.coffee/"
          className="flex items-center gap-2 hover:text-white"
        >
          <FaInstagram /> @smampir.coffee
        </a>
        <a
          href="https://www.tiktok.com/@smampir.coffee"
          className="flex items-center gap-2 hover:text-white"
        >
          <FaTiktok /> @smampir.coffee
        </a>
      </div>
    </footer>
  );
}
