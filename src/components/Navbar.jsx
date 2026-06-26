import Logo from "../assets/Logo Smampir Coffee.png";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50 px-8 py-4 flex justify-between items-center shadow-sm">
      <img src={Logo} alt="Logo" className="h-10" />
      <div className="flex gap-6 font-medium">
        <a href="#menu" className="hover:text-orange-600 transition">
          Menu
        </a>
        <a href="#lokasi" className="hover:text-orange-600 transition">
          Lokasi
        </a>
      </div>
    </nav>
  );
}
