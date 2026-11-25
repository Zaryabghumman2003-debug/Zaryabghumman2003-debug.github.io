import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  FileDown,
  MapPin,
  Sparkles,
  BriefcaseBusiness,
  Building2,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

const BADGE_STYLES = {
  indigo: 'border-indigo-400/30 bg-indigo-500/10 text-indigo-200',
  sky: 'border-sky-400/30 bg-sky-500/10 text-sky-200',
  violet: 'border-violet-400/30 bg-violet-500/10 text-violet-200',
};

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
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-grid-pattern border-b border-white/10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full bg-indigo-600/15 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-0 w-[420px] h-[420px] rounded-full bg-sky-500/10 blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Business Positioning */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-slate-400">Solutions Focus:</span>
              <span
                key={focusIdx}
                className="text-sky-300 font-medium transition-opacity duration-500"
              >
                {focuses[focusIdx]}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.08]">
                Building Technology.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-violet-300">
                  Leading Innovation.
                </span>{' '}
                Creating Impact.
              </h1>
              <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl">
                {PERSONAL_INFO.hero.subheading}
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {PERSONAL_INFO.hero.identityLabels.map((item) => (
                <span
                  key={item.label}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium ${BADGE_STYLES[item.accent]}`}
                >
                  <Sparkles className="w-3.5 h-3.5 opacity-80" />
                  {item.label}
                </span>
              ))}
            </div>

            {/* Business-First CTA Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/25 transition-all"
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
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 hover:border-white/25 text-slate-200 hover:text-white text-sm font-medium transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-indigo-400" />
                Download CV
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="h-4 w-px bg-white/10 hidden sm:inline-block" />
              <div className="flex items-center gap-4">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4 text-sky-400" />
                  LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <GitHubIcon className="w-4 h-4 text-indigo-300" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Business Portrait & Profile Card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-5 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-indigo-500/15 blur-2xl"
              />

              {/* Portrait Frame */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#090c14] aspect-[4/3] flex items-center justify-center">
                {!photoMissing ? (
                  <img
                    src={PERSONAL_INFO.photoUrl}
                    alt={`${PERSONAL_INFO.name} portrait`}
                    onError={() => setPhotoMissing(true)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-6 space-y-2">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/25 to-sky-500/25 border border-indigo-400/40 flex items-center justify-center font-display font-bold text-2xl text-white">
                      ZG
                    </div>
                    <p className="text-xs font-medium text-slate-300">
                      Add your portrait at <code className="text-sky-300 font-mono">public/profile.jpg</code>
                    </p>
                  </div>
                )}
                <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#07080d]/85 backdrop-blur-md border border-emerald-400/30 text-[11px] font-mono text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Open for B2B
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {PERSONAL_INFO.name}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    {PERSONAL_INFO.title}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <Building2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-white">
                      VantraOS — Software Developer &amp; Core Team Member
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      NASTP / DUET RPDU
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <BriefcaseBusiness className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Custom Web, Marketplaces &amp; AI Delivery
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Next.js, React, Python, PHP, MySQL &amp; MongoDB
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-white/10">
                <span>Karachi, Pakistan</span>
                <a
                  href="#services"
                  className="text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1"
                >
                  View Services
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
