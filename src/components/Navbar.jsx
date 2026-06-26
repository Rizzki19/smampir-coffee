export default function Navbar() {
  return (
    <nav className="p-6 bg-stone-900 text-white flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold tracking-tight">S'mampir Coffee</h1>
      <ul className="flex gap-6">
        <li>
          <a href="#menu" className="hover:text-orange-400">
            Menu
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-orange-400">
            Kontak
          </a>
        </li>
      </ul>
    </nav>
  );
}
