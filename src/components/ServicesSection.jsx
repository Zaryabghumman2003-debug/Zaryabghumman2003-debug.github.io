import {
  CheckCircle2,
  Cpu,
  Globe,
  Layers,
  Store,
  ArrowUpRight,
} from 'lucide-react';
import { BUSINESS_SERVICES } from '../data/portfolioData';

const SERVICE_ICONS = {
  'saas-web': Layers,
  marketplaces: Store,
  'ai-cv': Cpu,
  'digital-presence': Globe,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-400">
              01 &bull; Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-[-0.025em]">
              Business{' '}
              <span className="font-editorial italic font-normal text-indigo-300 text-[1.12em]">
                Solutions
              </span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white text-xs font-semibold transition-all self-start sm:self-auto"
          >
            Request Consultation
            <ArrowUpRight className="w-3.5 h-3.5 text-sky-300" />
          </a>
        </div>

        {/* Asymmetric 12-Column Executive Bento */}
        <div className="grid md:grid-cols-12 gap-5">
          {BUSINESS_SERVICES.map((service, idx) => {
            const Icon = SERVICE_ICONS[service.id] || Layers;
            const spanClass =
              idx === 0 || idx === 3 ? 'md:col-span-7' : 'md:col-span-5';
            return (
              <div
                key={service.id}
                className={`${spanClass} pro-card pro-card-hover top-specular rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-sky-500/15 border border-indigo-400/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-sky-300" />
                      </div>
                      <span className="text-xs font-mono text-slate-500">
                        0{idx + 1}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                      {service.audience}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mt-2">
                      {service.summary}
                    </p>
                  </div>

                  <ul className="grid sm:grid-cols-2 gap-2.5 pt-1">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-slate-200 flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.025] border border-white/[0.06]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-indigo-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  >
                    Start Project
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
