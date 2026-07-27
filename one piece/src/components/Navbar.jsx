import { Menu, Search, Settings, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 flex items-center justify-between px-5 py-5 sm:px-8">
      {/* Logo and home button */}
      <div className="flex items-center gap-3">
        <img
          src="/images/luffy-avatar.png"
          alt="Luffy logo"
          className="h-10 w-10 rounded-full border border-white/30 object-cover"
        />

        <a
          href="#home"
          className="rounded-full border border-white/30 bg-white px-4 py-2 text-xs font-bold text-red-900 shadow-md transition hover:scale-105"
        >
          Home
        </a>
      </div>

      {/* Desktop menu */}
      <div className="hidden items-center gap-7 lg:flex">
        <label className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-md">
          <Search size={14} />

          <input
            type="text"
            placeholder="Search"
            className="w-28 bg-transparent text-xs text-white outline-none placeholder:text-white/50"
          />
        </label>

        <a
          href="#movies"
          className="text-sm text-white/70 transition hover:text-white"
        >
          Movies
        </a>

        <a
          href="#settings"
          className="text-sm text-white/70 transition hover:text-white"
        >
          Settings
        </a>

        <a
          href="#about"
          className="text-sm text-white/70 transition hover:text-white"
        >
          About
        </a>

        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 transition hover:rotate-90 hover:bg-white/20"
          aria-label="Open settings"
        >
          <Settings size={16} />
        </button>
      </div>

      {/* Mobile menu button */}
      <button
        type="button"
        className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 lg:hidden"
        onClick={() => setMenuOpen((current) => !current)}
        aria-label="Toggle mobile menu"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute left-5 right-5 top-20 rounded-3xl border border-white/20 bg-red-950/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden">
          <label className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3">
            <Search size={15} />

            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/50"
            />
          </label>

          <div className="mt-5 flex flex-col gap-4">
            <a
              href="#movies"
              onClick={() => setMenuOpen(false)}
              className="text-white/80"
            >
              Movies
            </a>

            <a
              href="#settings"
              onClick={() => setMenuOpen(false)}
              className="text-white/80"
            >
              Settings
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-white/80"
            >
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;