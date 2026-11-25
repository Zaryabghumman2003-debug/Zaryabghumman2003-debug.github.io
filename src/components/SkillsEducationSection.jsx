import { Award, Cpu, GraduationCap } from 'lucide-react';
import {
  SKILLS_DATA,
  EDUCATION_DATA,
  ACHIEVEMENTS_DATA,
} from '../data/portfolioData';

export default function SkillsEducationSection() {
  return (
    <section id="skills" className="py-20 sm:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Technical Skills */}
        <div className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400">
              <Cpu className="w-3.5 h-3.5" />
              Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Technical Skills &amp; Stack
            </h2>
            <p className="text-slate-300 text-base">
              Verified tools, languages, databases, and AI libraries used across coursework, internships, and production projects.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SKILLS_DATA.map((group) => (
              <div
                key={group.category}
                className="glass-card glass-card-hover rounded-2xl p-5 space-y-4"
              >
                <h3 className="text-sm font-mono uppercase tracking-wider text-sky-300 border-b border-white/10 pb-2.5">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-sm font-medium text-slate-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Achievements */}
        <div id="education" className="grid lg:grid-cols-12 gap-10">
          {/* Education */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400">
                <GraduationCap className="w-3.5 h-3.5" />
                Academic Foundation
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Education
              </h2>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.institution}
                  className="glass-card glass-card-hover rounded-2xl p-6 space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono text-indigo-300">
                      {edu.period}
                    </span>
                    <span className="text-xs text-slate-400">{edu.location}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-sky-300">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400">
                <Award className="w-3.5 h-3.5" />
                Certifications &amp; Events
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Achievements &amp; Recognition
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {ACHIEVEMENTS_DATA.map((ach) => (
                <div
                  key={`${ach.issuer}-${ach.title}`}
                  className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <span className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-400/25 text-indigo-200">
                      {ach.type}
                    </span>
                    <h3 className="text-base font-semibold text-white pt-1">
                      {ach.issuer}
                    </h3>
                    <p className="text-sm text-slate-300">{ach.title}</p>
                  </div>
                  <p className="text-xs font-mono text-slate-400">{ach.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
