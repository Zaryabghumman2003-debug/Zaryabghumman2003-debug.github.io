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
    <section id="vantraos" className="py-20 sm:py-28 relative border-b border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-1/4 w-[500px] h-[420px] rounded-full bg-indigo-600/10 blur-[130px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/25 text-xs font-mono text-indigo-300">
              <Building2 className="w-3.5 h-3.5" />
              Featured Startup &amp; Production Product
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-white tracking-tight">
              Building VantraOS — From Product to Growth
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {VANTRAOS_DATA.overview}
            </p>
          </div>

          <a
            href={VANTRAOS_DATA.website}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/20 transition-all self-start lg:self-auto"
          >
            Visit VantraOS
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Dedicated Startup Overview Card + Interactive Architecture Preview */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Startup Overview Card */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* VantraOS Brand Header */}
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/25 to-sky-500/25 border border-indigo-400/40 flex items-center justify-center font-display font-bold text-lg text-white">
                    V
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{VANTRAOS_DATA.name}</h3>
                    <p className="text-xs font-mono text-sky-300">vantraos.com</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/25 text-[11px] font-mono text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Live Product
                </span>
              </div>

              {/* Role & Ecosystem Badges */}
              <div className="space-y-3">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    My Role
                  </span>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {VANTRAOS_DATA.role}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Startup Ecosystem Associations
                  </span>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {VANTRAOS_DATA.ecosystems.map((eco) => (
                      <span
                        key={eco}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-slate-200"
                      >
                        {eco}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal Journey */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {VANTRAOS_DATA.personalJourney}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                Argon2id &bull; 256-bit SSL &bull; Multi-Tenant
              </div>
              <a
                href={VANTRAOS_DATA.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1"
              >
                vantraos.com
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Interactive Product Architecture Showcase */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-5 sm:p-7 flex flex-col justify-between space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-sky-400">
                  Verified Platform Architecture
                </p>
                <h3 className="text-lg font-semibold text-white mt-0.5">
                  Hospitality Operational Supply Chain Modules
                </h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10">
                Explore Modules
              </span>
            </div>

            {/* Module Tabs */}
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
                      className={`w-4 h-4 mb-2 ${
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

            {/* Simulated Clean SaaS Console Frame for Active Module */}
            <div className="rounded-xl border border-white/10 bg-[#090c14] p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    vantraos.com / {activeModule.id}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-indigo-300">
                  Tenant-Isolated
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">
                  {activeModule.name}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeModule.summary}
                </p>
                <div className="grid sm:grid-cols-3 gap-2.5 pt-2">
                  {activeModule.highlights.map((item) => (
                    <div
                      key={item}
                      className="p-3 rounded-lg bg-white/[0.03] border border-white/10 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[11px] font-mono text-slate-500">
              {VANTRAOS_DATA.screenshotNote}
            </p>
          </div>
        </div>

        {/* Entrepreneurial Perspective Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {VANTRAOS_DATA.perspectives.map((item, idx) => (
            <div
              key={item.title}
              className="glass-card glass-card-hover rounded-2xl p-6 space-y-3"
            >
              <span className="text-xs font-mono text-indigo-400">
                0{idx + 1} &bull; Perspective
              </span>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
