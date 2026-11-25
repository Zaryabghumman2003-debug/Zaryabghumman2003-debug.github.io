import { Briefcase, Building2, ArrowUpRight } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400">
            <Briefcase className="w-3.5 h-3.5" />
            Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Startup &amp; Industry Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {EXPERIENCE_DATA.map((item) => (
            <div
              key={`${item.organization}-${item.role}`}
              className={`glass-card glass-card-hover rounded-2xl p-5 space-y-3 ${
                item.featured ? 'border-indigo-400/35 bg-indigo-950/20' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-300">
                    {item.type} &bull; {item.context}
                  </span>
                  <h3 className="text-base font-semibold text-white mt-0.5 flex items-center gap-2">
                    {item.featured && <Building2 className="w-4 h-4 text-sky-400 shrink-0" />}
                    <span>
                      {item.role} — <span className="text-sky-300">{item.organization}</span>
                    </span>
                  </h3>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/10">
                    {item.period}
                  </span>
                  {item.repoUrl && (
                    <a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-xs font-medium text-sky-300 hover:text-sky-200"
                    >
                      Repo
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
