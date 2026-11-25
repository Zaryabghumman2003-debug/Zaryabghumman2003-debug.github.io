import {
  BriefcaseBusiness,
  CheckCircle2,
  Cpu,
  Globe,
  Layers,
  Store,
  ArrowRight,
} from 'lucide-react';
import { BUSINESS_SERVICES, ENGAGEMENT_MODEL } from '../data/portfolioData';

const SERVICE_ICONS = {
  'saas-web': Layers,
  marketplaces: Store,
  'ai-cv': Cpu,
  'digital-presence': Globe,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24 border-b border-white/10 bg-[#090b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Services Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400">
              <BriefcaseBusiness className="w-3.5 h-3.5" />
              Business Solutions &amp; Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Technology Built for Business Execution
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Practical software engineering and product delivery for founders, SMEs, and growing operations teams—focused on clarity, reliability, and real-world usability.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/20 transition-all self-start lg:self-auto"
          >
            Request a Project Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 B2B Service Pillars */}
        <div className="grid md:grid-cols-2 gap-6">
          {BUSINESS_SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.id] || Layers;
            return (
              <div
                key={service.id}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-sky-300" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                      {service.audience}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed mt-2">
                      {service.summary}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-1">
                    {service.deliverables.map((item) => (
                      <li key={item} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1"
                  >
                    Discuss this solution
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engagement Process & Partnership Formats */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                Delivery Workflow
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                How I Partner With Businesses
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Transparent Scope &bull; GitHub-Tracked Delivery
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ENGAGEMENT_MODEL.steps.map((s) => (
              <div
                key={s.step}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2"
              >
                <span className="text-lg font-display font-bold text-sky-300">
                  {s.step}
                </span>
                <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            {ENGAGEMENT_MODEL.models.map((m) => (
              <div
                key={m.name}
                className="p-4 rounded-xl bg-indigo-500/[0.06] border border-indigo-400/20 space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-semibold text-white">{m.name}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-200">
                    {m.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
