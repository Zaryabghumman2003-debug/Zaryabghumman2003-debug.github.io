import { Cpu } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export default function SkillsEducationSection() {
  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400">
            <Cpu className="w-3.5 h-3.5" />
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS_DATA.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-xl p-4 space-y-3"
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-sky-300 border-b border-white/10 pb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-100"
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
