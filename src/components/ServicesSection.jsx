import {
  BriefcaseBusiness,
  CheckCircle2,
  Cpu,
  Globe,
  Layers,
  Store,
  ArrowRight,
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
    <section id="services" className="py-16 sm:py-20 border-b border-white/10 bg-[#090b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400">
              <BriefcaseBusiness className="w-3.5 h-3.5" />
              Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Business Solutions
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all self-start sm:self-auto"
          >
            Request Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {BUSINESS_SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.id] || Layers;
            return (
              <div
                key={service.id}
                className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-sky-300" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                      {service.audience}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1.5">
                      {service.summary}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-1">
                    {service.deliverables.map((item) => (
                      <li key={item} className="text-xs text-slate-200 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="pt-3 border-t border-white/10 text-xs font-semibold text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1"
                >
                  Start Project
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
