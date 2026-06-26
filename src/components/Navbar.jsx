import Logo from "../assets/Logo Smampir Coffee.png";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-stone-950/80 backdrop-blur-md px-8 py-4 flex justify-between items-center shadow-lg">
      {/* Logo mengarah ke #home */}
      <a href="#home">
        <img
          src={Logo}
          alt="S'mampir Logo"
          className="h-10 w-auto cursor-pointer"
        />
      </a>

      <div className="flex gap-8 text-sm font-medium text-white">
        {/* Pastikan href sesuai dengan ID section */}
        <a href="#menu" className="hover:text-orange-500 transition">
          Menu
        </a>
        <a href="#ulasan" className="hover:text-orange-500 transition">
          Ulasan
        </a>
        <a href="#maps" className="hover:text-orange-500 transition">
          Maps
        </a>
        <a href="#contact" className="hover:text-orange-500 transition">
          Contact
        </a>
        <a href="#sosmed" className="hover:text-orange-500 transition">
          Sosmed
        </a>
      </div>
    </nav>
  );
}
