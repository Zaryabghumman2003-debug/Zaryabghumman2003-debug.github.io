import { useState } from 'react';
import {
  ArrowUpRight,
  Building2,
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
    <section id="vantraos" className="py-16 sm:py-20 relative border-b border-white/10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-300">
              <Building2 className="w-3.5 h-3.5" />
              Featured Startup
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Building VantraOS — From Product to Growth
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {VANTRAOS_DATA.overview}
            </p>
          </div>

          <a
            href={VANTRAOS_DATA.website}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white text-sm font-semibold transition-all self-start lg:self-auto"
          >
            Visit VantraOS
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Overview Card + Interactive Module Showcase */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/25 to-sky-500/25 border border-indigo-400/40 flex items-center justify-center font-display font-bold text-base text-white">
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
                  Role
                </span>
                <p className="text-sm font-semibold text-white mt-0.5">
                  {VANTRAOS_DATA.role}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {VANTRAOS_DATA.ecosystems.map((eco) => (
                  <span
                    key={eco}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-slate-200"
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
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                Argon2id &bull; 256-bit SSL
              </span>
              <a
                href={VANTRAOS_DATA.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1"
              >
                vantraos.com
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4">
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
                        ? 'bg-indigo-600/20 border-indigo-400/50 text-white'
                        : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 mb-1.5 ${
                        active ? 'text-sky-300' : 'text-slate-400'
                      }`}
                    />
                    <p className="text-xs font-semibold leading-snug line-clamp-2">
                      {mod.name}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="rounded-xl border border-white/10 bg-[#090c14] p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  vantraos.com/{activeModule.id}
                </span>
                <span className="text-indigo-300">Multi-Tenant</span>
              </div>

              <h4 className="text-base font-semibold text-white">{activeModule.name}</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{activeModule.summary}</p>

              <div className="grid sm:grid-cols-3 gap-2 pt-1">
                {activeModule.highlights.map((item) => (
                  <div
                    key={item}
                    className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compact 3 Perspectives */}
        <div className="grid md:grid-cols-3 gap-5">
          {VANTRAOS_DATA.perspectives.map((item) => (
            <div key={item.title} className="glass-card rounded-xl p-5 space-y-1.5">
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
