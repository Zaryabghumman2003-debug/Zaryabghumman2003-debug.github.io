import { UserCheck, GraduationCap, Compass, Cpu } from 'lucide-react';
import { ABOUT_DATA } from '../data/portfolioData';

const ICONS = [Compass, GraduationCap, UserCheck, Cpu];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Engineering Practical Products with an Entrepreneurial Lens
              </h2>
            </div>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              {ABOUT_DATA.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>

          {/* Structured Highlights */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {ABOUT_DATA.highlights.map((item, idx) => {
              const Icon = ICONS[idx % ICONS.length];
              return (
                <div
                  key={item.label}
                  className="glass-card glass-card-hover rounded-xl p-4 flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-400/25 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-white mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
