import { useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Lock,
  Receipt,
  ShieldCheck,
  UtensilsCrossed,
  Wallet,
} from 'lucide-react';
import { VANTRAOS_DATA } from '../data/portfolioData';

const MODULE_ICONS = {
  pipeline: Receipt,
  costing: UtensilsCrossed,
  multitenant: Layers,
  wallets: Wallet,
};

export default function VantraOSSection() {
  const [activeModuleId, setActiveModuleId] = useState(VANTRAOS_DATA.verifiedModules[0].id);
  const activeModule =
    VANTRAOS_DATA.verifiedModules.find((m) => m.id === activeModuleId) ||
    VANTRAOS_DATA.verifiedModules[0];

  return (
    <section
      id="vantraos"
      className="py-20 sm:py-24 relative border-b border-white/10 bg-[#070910]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 left-1/3 w-[520px] h-[360px] rounded-full bg-indigo-600/10 blur-[140px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-300">
              02 &bull; Flagship Startup
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-[-0.025em]">
              Building{' '}
              <span className="font-editorial italic font-normal text-sky-300 text-[1.12em]">
                VantraOS
              </span>{' '}
              — From Product to Growth
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {VANTRAOS_DATA.overview}
            </p>
          </div>

          <a
            href={VANTRAOS_DATA.website}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 text-sm font-semibold shadow-[0_10px_28px_-10px_rgba(255,255,255,0.35)] transition-all self-start lg:self-auto"
          >
            Visit VantraOS
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Startup Dossier */}
          <div className="lg:col-span-5 pro-card top-specular rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/30 to-sky-500/20 border border-indigo-400/40 flex items-center justify-center font-display font-bold text-lg text-white">
                    V
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{VANTRAOS_DATA.name}</h3>
                    <p className="text-xs font-mono text-sky-300">vantraos.com</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/25 text-[11px] font-mono text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Live Product
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Position
                </span>
                <p className="text-sm font-semibold text-white mt-1">
                  {VANTRAOS_DATA.role}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {VANTRAOS_DATA.ecosystems.map((eco) => (
                  <span
                    key={eco}
                    className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-200"
                  >
                    {eco}
                  </span>
                ))}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {VANTRAOS_DATA.personalJourney}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 font-mono">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                Argon2id &bull; 256-bit SSL
              </span>
              <a
                href={VANTRAOS_DATA.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-indigo-300 hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                vantraos.com
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Product Architecture Cockpit */}
          <div className="lg:col-span-7 pro-card top-specular rounded-2xl p-5 sm:p-7 flex flex-col justify-between space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {VANTRAOS_DATA.verifiedModules.map((mod) => {
                const Icon = MODULE_ICONS[mod.id] || Layers;
                const active = mod.id === activeModule.id;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setActiveModuleId(mod.id)}
                    className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      active
                        ? 'bg-gradient-to-br from-indigo-500/20 to-sky-500/10 border-indigo-400/50 text-white shadow-inner'
                        : 'bg-white/[0.02] border-white/[0.07] text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 mb-2 ${
                        active ? 'text-sky-300' : 'text-slate-500'
                      }`}
                    />
                    <p className="text-xs font-semibold leading-snug line-clamp-2">
                      {mod.name}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="rounded-xl border border-white/10 bg-[#06080f] p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/15" />
                    <span className="w-2 h-2 rounded-full bg-white/15" />
                    <span className="w-2 h-2 rounded-full bg-white/15" />
                  </span>
                  <span className="ml-1 flex items-center gap-1.5 text-slate-300">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    vantraos.com/{activeModule.id}
                  </span>
                </div>
                <span className="text-sky-300">Multi-Tenant</span>
              </div>

              <div className="space-y-2">
                <h4 className="text-base font-bold text-white">{activeModule.name}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeModule.summary}
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-2.5 pt-1">
                {activeModule.highlights.map((item) => (
                  <div
                    key={item}
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.07] flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
