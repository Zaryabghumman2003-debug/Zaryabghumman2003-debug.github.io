import { Award, Cpu, GraduationCap } from 'lucide-react';
import {
  SKILLS_DATA,
  EDUCATION_DATA,
  ACHIEVEMENTS_DATA,
} from '../data/portfolioData';

export default function SkillsEducationSection() {
  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="space-y-8">
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

        <div id="education" className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400">
              <GraduationCap className="w-3.5 h-3.5" />
              Education
            </div>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.institution} className="glass-card rounded-xl p-5 space-y-1">
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-indigo-300">
                    <span>{edu.period}</span>
                    <span className="text-slate-400">{edu.location}</span>
                  </div>
                  <h3 className="text-base font-semibold text-white">{edu.degree}</h3>
                  <p className="text-xs font-medium text-sky-300">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400">
              <Award className="w-3.5 h-3.5" />
              Achievements
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {ACHIEVEMENTS_DATA.map((ach) => (
                <div key={`${ach.issuer}-${ach.title}`} className="glass-card rounded-xl p-4 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-300">
                    {ach.type} &bull; {ach.year}
                  </span>
                  <h3 className="text-sm font-semibold text-white">{ach.issuer}</h3>
                  <p className="text-xs text-slate-300">{ach.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
