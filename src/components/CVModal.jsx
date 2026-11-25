import { Download, Printer, X } from 'lucide-react';
import {
  PERSONAL_INFO,
  EXPERIENCE_DATA,
  PROJECTS_DATA,
  SKILLS_DATA,
  EDUCATION_DATA,
  ACHIEVEMENTS_DATA,
} from '../data/portfolioData';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownloadHTML = () => {
    if (PERSONAL_INFO.cvPdfUrl) {
      const link = document.createElement('a');
      link.href = PERSONAL_INFO.cvPdfUrl;
      link.download = 'Zaryab-Naveed-Ghuman-CV.pdf';
      link.click();
      return;
    }

    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${PERSONAL_INFO.name} — CV</title>
<style>
  body { font-family: Arial, Helvetica, sans-serif; color: #0f172a; max-width: 820px; margin: 32px auto; padding: 0 20px; line-height: 1.5; }
  h1 { margin: 0 0 4px; font-size: 26px; }
  h2 { font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin: 22px 0 10px; color: #1e293b; }
  .meta { color: #475569; font-size: 13px; margin-bottom: 12px; }
  .item { margin-bottom: 12px; }
  .row { display: flex; justify-content: space-between; font-weight: 600; font-size: 14px; }
  .sub { color: #475569; font-size: 13px; }
  ul { margin: 4px 0 0 18px; padding: 0; font-size: 13px; }
</style>
</head>
<body>
  <h1>${PERSONAL_INFO.name}</h1>
  <div class="meta">${PERSONAL_INFO.title}<br/>${PERSONAL_INFO.location} | ${PERSONAL_INFO.email} | ${PERSONAL_INFO.linkedin} | ${PERSONAL_INFO.github}</div>
  <p style="font-size:13.5px;">${PERSONAL_INFO.positioning}</p>

  <h2>Experience</h2>
  ${EXPERIENCE_DATA.map(
    (e) => `<div class="item"><div class="row"><span>${e.role} — ${e.organization} (${e.context})</span><span>${e.period}</span></div><ul>${e.highlights.map((h) => `<li>${h}</li>`).join('')}</ul></div>`
  ).join('')}

  <h2>Featured Projects</h2>
  ${PROJECTS_DATA.map(
    (p) => `<div class="item"><div class="row"><span>${p.title} — ${p.subtitle}</span><span>${p.stack.join(', ')}</span></div><div class="sub">${p.description}</div></div>`
  ).join('')}

  <h2>Technical Skills</h2>
  ${SKILLS_DATA.map((s) => `<div style="font-size:13px;margin-bottom:4px;"><strong>${s.category}:</strong> ${s.items.join(', ')}</div>`).join('')}

  <h2>Education</h2>
  ${EDUCATION_DATA.map((ed) => `<div class="item"><div class="row"><span>${ed.degree} — ${ed.institution}</span><span>${ed.period}</span></div></div>`).join('')}

  <h2>Achievements & Certifications</h2>
  <ul>${ACHIEVEMENTS_DATA.map((a) => `<li><strong>${a.issuer}</strong> — ${a.title} (${a.year})</li>`).join('')}</ul>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Zaryab-Naveed-Ghuman-CV.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-[#0d1017] border border-white/15 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-[#090b12]">
          <div>
            <h2 id="cv-modal-title" className="text-base font-semibold text-white">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </h2>
            <p className="text-xs text-slate-400">
              Print / Save as PDF or download an offline HTML copy
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-medium text-white cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-sky-300" />
              Print / Save PDF
            </button>
            <button
              type="button"
              onClick={handleDownloadHTML}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
              aria-label="Close CV preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Area */}
        <div className="overflow-y-auto p-6 sm:p-8 bg-white text-slate-900" id="cv-printable-area">
          <div className="border-b border-slate-300 pb-4 mb-5">
            <h3 className="text-2xl font-bold text-slate-950">{PERSONAL_INFO.name}</h3>
            <p className="text-sm font-medium text-indigo-700 mt-0.5">{PERSONAL_INFO.title}</p>
            <p className="text-xs text-slate-600 mt-2">
              {PERSONAL_INFO.location} &bull; {PERSONAL_INFO.email} &bull; vantraos.com &bull;{' '}
              linkedin.com/in/zaryab-ghumman &bull; github.com/Zaryabghumman2003-debug
            </p>
            <p className="text-xs text-slate-700 mt-3 leading-relaxed">
              {PERSONAL_INFO.positioning}
            </p>
          </div>

          <div className="space-y-5 text-xs">
            <section>
              <h4 className="font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1 mb-2.5">
                Experience
              </h4>
              <div className="space-y-3">
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={`${exp.organization}-${exp.role}`}>
                    <div className="flex justify-between font-semibold text-slate-900">
                      <span>
                        {exp.role} — {exp.organization} ({exp.context})
                      </span>
                      <span className="text-slate-600">{exp.period}</span>
                    </div>
                    <ul className="list-disc ml-4 mt-1 space-y-0.5 text-slate-700">
                      {exp.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1 mb-2.5">
                Featured Projects
              </h4>
              <div className="space-y-2">
                {PROJECTS_DATA.map((proj) => (
                  <div key={proj.id}>
                    <div className="flex justify-between font-semibold text-slate-900">
                      <span>
                        {proj.title} — {proj.subtitle}
                      </span>
                      <span className="text-slate-600">{proj.stack.join(', ')}</span>
                    </div>
                    <p className="text-slate-700 mt-0.5">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1 mb-2">
                Technical Skills
              </h4>
              <div className="grid sm:grid-cols-2 gap-1.5 text-slate-700">
                {SKILLS_DATA.map((group) => (
                  <p key={group.category}>
                    <strong className="text-slate-900">{group.category}:</strong>{' '}
                    {group.items.join(', ')}
                  </p>
                ))}
              </div>
            </section>

            <section className="grid sm:grid-cols-2 gap-5">
              <div>
                <h4 className="font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1 mb-2">
                  Education
                </h4>
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.institution} className="mb-2">
                    <p className="font-semibold text-slate-900">{edu.degree}</p>
                    <p className="text-slate-700">{edu.institution}</p>
                    <p className="text-slate-500">{edu.period}</p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1 mb-2">
                  Achievements
                </h4>
                <ul className="list-disc ml-4 space-y-1 text-slate-700">
                  {ACHIEVEMENTS_DATA.map((ach) => (
                    <li key={`${ach.issuer}-${ach.title}`}>
                      <strong className="text-slate-900">{ach.issuer}:</strong> {ach.title} ({ach.year})
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
