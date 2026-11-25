import { UserCheck, GraduationCap, Compass, Cpu } from 'lucide-react';
import { ABOUT_DATA } from '../data/portfolioData';

const ICONS = [Compass, UserCheck, Cpu, GraduationCap];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">
                About
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Engineering Practical Products
              </h2>
            </div>

            <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              {ABOUT_DATA.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {ABOUT_DATA.highlights.map((item, idx) => {
              const Icon = ICONS[idx % ICONS.length];
              return (
                <div
                  key={item.label}
                  className="glass-card rounded-xl p-4 flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-400/25 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      {item.label}
                    </p>
                    <p className="text-xs font-medium text-white mt-0.5">{item.value}</p>
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
