import { Rocket } from 'lucide-react';
import { STARTUP_JOURNEY } from '../data/portfolioData';

export default function StartupJourneySection() {
  return (
    <section id="journey" className="py-20 sm:py-24 border-b border-white/10 bg-[#090b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400">
            <Rocket className="w-3.5 h-3.5" />
            Startup &amp; Entrepreneurship
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Entrepreneurship &amp; Startup Journey
          </h2>
          <p className="text-slate-300 text-base">
            From ecosystem exposure at NASTP and DUET RPDU to contributing directly to a deployed software product at VantraOS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STARTUP_JOURNEY.map((item) => (
            <div
              key={item.step}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between space-y-5 relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-300">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-slate-300">
                    {item.status}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-xs font-mono text-indigo-300 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-indigo-500/40 via-sky-500/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
