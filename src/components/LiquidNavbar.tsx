import { useState } from "react";
import { Glass } from "@samasante/liquid-glass";

export default function LiquidNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-8 z-50 flex justify-center px-4 sm:px-8">
      <div className="w-full max-w-6xl">
        <Glass
          className="flex flex-col md:flex-row md:items-center justify-between w-full px-8 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{
            background: isOpen ? "rgba(15, 23, 42, 0.7)" : "rgba(255, 255, 255, 0.03)",
            borderRadius: isOpen ? 24 : 9999,
          }}
          optics={{ frost: isOpen ? 20 : 0, glow: 0, sheen: 0.3 }}
        >
          <div className="flex items-center justify-between w-full md:w-auto">
            {/* Logo Re-creation */}
            <a href="/" className="relative flex flex-col shrink-0">
              <div
                className="flex items-center text-white font-black text-[28px] leading-none tracking-[-0.08em]"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                <span>VARN</span>
                <div className="relative flex flex-col items-center mx-px">
                  <div className="absolute -top-1.25 w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>I</span>
                </div>
                <span>ON</span>
              </div>
              <div className="absolute top-full left-0.5 text-white/70 text-[10px] font-normal tracking-[0.03em] mt-0.75 whitespace-nowrap">
                technology for everyone
              </div>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden text-white p-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center justify-end gap-8 text-white text-[15px] font-medium tracking-wide -translate-y-3.75">
            <a href="#" className="hover:text-white/60 transition-colors">
              Beranda
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Solusi Kami
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Insight
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Publikasi
            </a>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden flex flex-col gap-4 text-white text-[15px] font-medium tracking-wide overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isOpen ? "max-h-64 pt-6 pb-2 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <a
              href="#"
              className="hover:text-white/60 transition-colors block px-2"
            >
              Beranda
            </a>
            <a
              href="#"
              className="hover:text-white/60 transition-colors block px-2"
            >
              Solusi Kami
            </a>
            <a
              href="#"
              className="hover:text-white/60 transition-colors block px-2"
            >
              Insight
            </a>
            <a
              href="#"
              className="hover:text-white/60 transition-colors block px-2"
            >
              Publikasi
            </a>
          </div>
        </Glass>
      </div>
    </header>
  );
}
