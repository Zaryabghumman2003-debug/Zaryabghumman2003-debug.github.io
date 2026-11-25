import { SKILLS_DATA } from '../data/portfolioData';

export default function SkillsEducationSection() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-24 border-b border-white/10 bg-[#070910]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-400">
            04 &bull; Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-[-0.025em]">
            Technical{' '}
            <span className="font-editorial italic font-normal text-indigo-300 text-[1.12em]">
              Capabilities
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS_DATA.map((group, idx) => (
            <div
              key={group.category}
              className="pro-card pro-card-hover rounded-2xl p-5 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-sky-300">
                  {group.category}
                </h3>
                <span className="text-[11px] font-mono text-slate-600">
                  0{idx + 1}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-white/[0.04] hover:bg-indigo-500/15 border border-white/10 hover:border-indigo-400/35 text-xs font-medium text-slate-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
