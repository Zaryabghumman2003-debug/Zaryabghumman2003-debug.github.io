import { Building2, ArrowUpRight } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function ExperienceSection() {
  const featured = EXPERIENCE_DATA.find((e) => e.featured);
  const others = EXPERIENCE_DATA.filter((e) => !e.featured);

  return (
    <section id="experience" className="py-20 sm:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-400">
            03 &bull; Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-[-0.025em]">
            Startup &amp;{' '}
            <span className="font-editorial italic font-normal text-sky-300 text-[1.12em]">
              Industry
            </span>{' '}
            Experience
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 items-stretch">
          {/* Featured Startup Role */}
          {featured && (
            <div className="lg:col-span-5 pro-card pro-card-hover top-specular rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 bg-gradient-to-b from-indigo-950/35 to-[#090c14]">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-indigo-500/20 border border-indigo-400/35 text-indigo-200">
                    {featured.type}
                  </span>
                  <span className="text-xs font-mono text-emerald-300">
                    {featured.period}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sky-300">
                    <Building2 className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase tracking-wider">
                      {featured.context}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {featured.organization}
                  </h3>
                  <p className="text-sm font-medium text-indigo-200">{featured.role}</p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {featured.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
                Production SaaS Execution
              </div>
            </div>
          )}

          {/* Clean Executive Dossier Rows */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {others.map((item) => (
              <div
                key={`${item.organization}-${item.role}`}
                className="pro-card pro-card-hover rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-300">
                      {item.context}
                    </span>
                    <span className="text-slate-600">&bull;</span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {item.role} — <span className="text-sky-300">{item.organization}</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>

                {item.repoUrl && (
                  <a
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-xs font-medium text-sky-300 transition-colors self-start sm:self-center"
                  >
                    Repo
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
