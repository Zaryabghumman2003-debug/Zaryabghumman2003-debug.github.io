import { Briefcase, Building2, ArrowUpRight, Calendar } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function ExperienceSection() {
  const featuredRole = EXPERIENCE_DATA.find((e) => e.featured);

  return (
    <section id="experience" className="py-20 sm:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400">
            <Briefcase className="w-3.5 h-3.5" />
            Professional Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Industry &amp; Startup Experience
          </h2>
          <p className="text-slate-300 text-base">
            Combining live startup product execution at VantraOS with technical and institutional internships across Karachi.
          </p>
        </div>

        {/* Featured Startup Role Highlight */}
        {featuredRole && (
          <div className="glass-card rounded-2xl p-6 sm:p-8 border-indigo-400/30 bg-gradient-to-br from-indigo-950/35 via-[#0d111d] to-[#0b0e17] relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/10">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-indigo-500/20 border border-indigo-400/35 text-indigo-200">
                    {featuredRole.type}
                  </span>
                  <span className="text-xs font-mono text-sky-300">
                    {featuredRole.context}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2 pt-1">
                  <Building2 className="w-5 h-5 text-sky-400" />
                  {featuredRole.organization} — {featuredRole.role}
                </h3>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 self-start lg:self-auto">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                {featuredRole.period}
              </div>
            </div>

            <div className="pt-5 grid lg:grid-cols-12 gap-6 items-start">
              <p className="lg:col-span-5 text-sm text-slate-300 leading-relaxed">
                {featuredRole.description}
              </p>
              <ul className="lg:col-span-7 space-y-2">
                {featuredRole.highlights.map((h) => (
                  <li key={h} className="text-sm text-slate-200 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Full Chronological Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-6">
          {EXPERIENCE_DATA.map((item) => (
            <div key={`${item.organization}-${item.role}`} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[29px] sm:-left-[37px] top-6 w-3 h-3 rounded-full border-2 ${
                  item.featured
                    ? 'bg-sky-400 border-[#07080d] ring-4 ring-sky-400/20'
                    : 'bg-indigo-500 border-[#07080d]'
                }`}
              />
              <div className="glass-card glass-card-hover rounded-2xl p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-300">
                      {item.type} &bull; {item.context}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-0.5">
                      {item.role} — <span className="text-sky-300">{item.organization}</span>
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10">
                      {item.period}
                    </span>
                    {item.repoUrl && (
                      <a
                        href={item.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-sky-300 hover:text-sky-200"
                      >
                        Repo
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <ul className="grid sm:grid-cols-2 gap-2 pt-1">
                  {item.highlights.map((h) => (
                    <li key={h} className="text-xs text-slate-300/90 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
