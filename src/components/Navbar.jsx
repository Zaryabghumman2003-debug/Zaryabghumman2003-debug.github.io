import { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'VantraOS', href: '#vantraos' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenCV }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07080d]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/25'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Primary Navigation"
      >
        <a
          href="#top"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
        >
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500/20 to-sky-500/20 border border-indigo-400/35 flex items-center justify-center font-display font-bold text-sm tracking-wider text-white group-hover:border-indigo-400 transition-colors">
            ZG
          </span>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              Tech Solutions &bull; VantraOS
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenCV}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-200 bg-white/[0.04] border border-white/10 rounded-lg hover:bg-white/[0.09] transition-all cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5 text-sky-300" />
            CV
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm shadow-indigo-500/20 transition-all"
          >
            Start a Project
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-[#0b0e17]/95 backdrop-blur-xl border-b border-white/10 px-4 py-4 space-y-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 mt-3 border-t border-white/10 flex flex-col sm:flex-row gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenCV();
              }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium text-slate-200 bg-white/[0.05] border border-white/10 rounded-lg cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-sky-300" />
              Download CV
            </button>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-lg"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
