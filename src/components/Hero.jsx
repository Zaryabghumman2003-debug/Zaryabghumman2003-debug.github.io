import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  FileDown,
  MapPin,
  Building2,
  BriefcaseBusiness,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

const CREDENTIAL_RIBBON = [
  'VantraOS — Core Team',
  'NASTP Ecosystem',
  'DUET RPDU Office',
  'Full-Stack SaaS & Web',
  'AI & Computer Vision',
  'Next.js • React • Python',
  'Karachi, Pakistan',
];

export default function Hero({ onOpenCV }) {
  const [focusIdx, setFocusIdx] = useState(0);
  const [photoMissing, setPhotoMissing] = useState(false);
  const focuses = PERSONAL_INFO.hero.rotatingFocus;

  useEffect(() => {
    const timer = setInterval(() => {
      setFocusIdx((prev) => (prev + 1) % focuses.length);
    }, 3400);
    return () => clearInterval(timer);
  }, [focuses.length]);

  return (
    <section
      id="top"
      className="relative pt-28 sm:pt-36 overflow-hidden bg-architectural-grid border-b border-white/10"
    >
      {/* Ambient Executive Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 w-[620px] h-[420px] rounded-full bg-indigo-600/14 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-10 w-[440px] h-[440px] rounded-full bg-sky-500/10 blur-[140px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/12 bg-white/[0.03] backdrop-blur-md text-xs font-mono text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-slate-400">Focus:</span>
              <span key={focusIdx} className="text-sky-300 font-medium">
                {focuses[focusIdx]}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-bold tracking-[-0.03em] text-white leading-[1.05]">
                Building Technology.{' '}
                <span className="font-editorial italic font-normal text-[1.12em] text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-violet-200 pr-1">
                  Leading Innovation.
                </span>{' '}
                Creating Impact.
              </h1>
              <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-xl">
                {PERSONAL_INFO.hero.subheading}
              </p>
            </div>

            {/* Identity Tags */}
            <div className="flex flex-wrap gap-2">
              {PERSONAL_INFO.hero.identityLabels.map((item) => (
                <span
                  key={item.label}
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-slate-200"
                >
                  {item.label}
                </span>
              ))}
            </div>

            {/* Executive Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 text-sm font-semibold shadow-[0_12px_32px_-10px_rgba(255,255,255,0.35)] transition-all"
              >
                Start a Business Project
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-white text-sm font-medium transition-all"
              >
                Explore Services
              </a>

              <a
                href={PERSONAL_INFO.vantraosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-sky-400/30 bg-sky-500/10 hover:bg-sky-500/20 text-sky-200 text-sm font-medium transition-all"
              >
                Visit VantraOS
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 hover:border-white/25 text-slate-300 hover:text-white text-sm font-medium transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-indigo-400" />
                CV
              </button>
            </div>

            {/* Social & Location */}
            <div className="flex flex-wrap items-center gap-5 pt-2 text-xs font-mono text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="h-3.5 w-px bg-white/10 hidden sm:inline-block" />
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-sky-400" />
                LinkedIn
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5 text-indigo-300" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Bespoke Framed Portrait Card */}
          <div className="lg:col-span-5">
            <div className="relative p-2 rounded-[26px] bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-[0_32px_80px_-24px_rgba(79,70,229,0.28)]">
              <div className="rounded-[20px] bg-[#090c14] overflow-hidden border border-white/10">
                <div className="relative h-80 sm:h-[380px] overflow-hidden bg-[#080b12]">
                  {!photoMissing ? (
                    <img
                      src={PERSONAL_INFO.photoUrl}
                      alt={`${PERSONAL_INFO.name} portrait`}
                      onError={() => setPhotoMissing(true)}
                      className="w-full h-full object-cover object-[50%_15%] scale-[1.01]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center font-display font-bold text-3xl text-white">
                        ZG
                      </div>
                    </div>
                  )}

                  {/* Subtle cinematic bottom vignette */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090c14] via-[#090c14]/20 to-transparent"
                  />

                  <span className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#06070c]/80 backdrop-blur-md border border-emerald-400/30 text-[11px] font-mono text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Available for B2B
                  </span>

                  {/* Floating Identity Overlay */}
                  <div className="absolute inset-x-4 bottom-4">
                    <p className="text-lg font-bold text-white tracking-tight">
                      {PERSONAL_INFO.name}
                    </p>
                    <p className="text-xs text-sky-300 font-mono mt-0.5">
                      Software Developer &bull; VantraOS
                    </p>
                  </div>
                </div>

                {/* Compact Executive Footer Strip */}
                <div className="p-4 grid grid-cols-2 gap-2.5 bg-[#090c14] border-t border-white/10">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-semibold text-white">VantraOS</p>
                      <p className="text-[10px] font-mono text-slate-400">NASTP / DUET RPDU</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5">
                    <BriefcaseBusiness className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-semibold text-white">Solutions</p>
                      <p className="text-[10px] font-mono text-slate-400">Web, SaaS &amp; AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Executive Credential Ribbon */}
      <div className="border-t border-white/[0.07] bg-[#070910]/80 backdrop-blur-md py-3.5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex items-center gap-10 text-xs font-mono uppercase tracking-[0.18em] text-slate-400">
          {[...CREDENTIAL_RIBBON, ...CREDENTIAL_RIBBON].map((item, i) => (
            <span key={`${item}-${i}`} className="inline-flex items-center gap-10 whitespace-nowrap">
              <span>{item}</span>
              <span className="w-1 h-1 rounded-full bg-indigo-400/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
