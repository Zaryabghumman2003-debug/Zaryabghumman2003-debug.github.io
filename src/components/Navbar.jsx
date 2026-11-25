import { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
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
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <nav
        className={`pointer-events-auto max-w-6xl mx-auto px-4 sm:px-5 h-14 flex items-center justify-between rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-[#0b0e18]/85 backdrop-blur-2xl border border-white/12 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8)]'
            : 'bg-[#0a0c14]/55 backdrop-blur-md border border-white/[0.06]'
        }`}
        aria-label="Primary Navigation"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/30 via-sky-500/20 to-transparent border border-white/15 flex items-center justify-center font-display font-bold text-xs tracking-wider text-white group-hover:border-indigo-400/60 transition-colors">
            ZG
          </span>
          <span className="hidden sm:inline text-sm font-semibold text-white tracking-tight">
            {PERSONAL_INFO.shortName}
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-1.5 text-[13px] font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCV}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-white/[0.04] border border-white/10 rounded-lg hover:bg-white/[0.08] transition-all cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5 text-sky-300" />
            CV
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-all"
          >
            Start Project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="pointer-events-auto lg:hidden max-w-6xl mx-auto mt-2 rounded-2xl bg-[#0b0e18]/95 backdrop-blur-2xl border border-white/12 p-4 space-y-1 shadow-2xl">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-white/10 flex flex-col sm:flex-row gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenCV();
              }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium text-slate-200 bg-white/[0.05] border border-white/10 rounded-xl cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-sky-300" />
              Download CV
            </button>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-slate-950 bg-white rounded-xl"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
