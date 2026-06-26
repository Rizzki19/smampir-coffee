export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-stone-950 border-t border-stone-800 text-center">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-orange-500 mb-4">S'mampir Coffee</h3>
        <p className="text-stone-400 text-sm">Teman Ngopi, Teman S'mampir.</p>
      </div>
      
      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mb-6">
        <a href="https://www.instagram.com/smampir.coffee" target="_blank" rel="noreferrer" className="text-stone-300 hover:text-orange-500 transition">
          Instagram
        </a>
        <a href="https://www.tiktok.com/@smampir.coffee" target="_blank" rel="noreferrer" className="text-stone-300 hover:text-orange-500 transition">
          TikTok
        </a>
      </div>
      
      <p className="text-stone-600 text-xs">
        © 2026 S'mampir Coffee. All rights reserved.
      </p>
    </footer>
  );
}