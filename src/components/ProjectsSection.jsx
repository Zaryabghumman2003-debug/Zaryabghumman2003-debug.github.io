import { useState } from 'react';
import { Code2, ExternalLink, X, CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';
import { PROJECTS_DATA } from '../data/portfolioData';
import ProjectPreview from './ProjectPreview';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 sm:py-24 border-b border-white/10 bg-[#090b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400">
              <Code2 className="w-3.5 h-3.5" />
              Business Case Studies &amp; Technical Builds
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Solutions Built for Real-World Use Cases
            </h2>
            <p className="text-slate-300 text-base">
              Case studies spanning local marketplaces, compliance operations, workflow tools, social infrastructure, and AI computer vision—connected to live GitHub source code.
            </p>
          </div>
          <a
            href="#github"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-indigo-200 self-start sm:self-auto"
          >
            <GitHubIcon className="w-4 h-4" />
            Explore All Connected Repos
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <ProjectPreview projectId={project.id} />

                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-300">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-xs text-slate-400">{project.subtitle}</p>
                </div>

                {project.businessValue && (
                  <div className="p-3 rounded-xl bg-sky-500/[0.06] border border-sky-400/20 flex items-start gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-sky-300 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {project.businessValue}
                    </p>
                  </div>
                )}

                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-medium text-slate-200 transition-colors"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-500">
                    Private / Pending URL
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-card rounded-2xl max-w-xl w-full p-6 sm:p-7 space-y-5 border-white/15 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-indigo-300">
                  {selectedProject.category}
                </span>
                <h3 id="project-modal-title" className="text-2xl font-bold text-white mt-0.5">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-400">{selectedProject.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
                aria-label="Close case study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <ProjectPreview projectId={selectedProject.id} />

            {selectedProject.businessValue && (
              <div className="p-3.5 rounded-xl bg-sky-500/10 border border-sky-400/25">
                <p className="text-[11px] font-mono uppercase tracking-wider text-sky-300 mb-1">
                  Business Impact
                </p>
                <p className="text-sm text-slate-100">{selectedProject.businessValue}</p>
              </div>
            )}

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Key Architecture &amp; Deliverables
              </h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((item) => (
                  <li key={item} className="text-sm text-slate-200 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              {selectedProject.githubUrl ? (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  Open GitHub Repository
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-400">
                  {selectedProject.repoStatus}
                </span>
              )}
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2.5 rounded-xl border border-white/15 text-sm text-slate-200 hover:text-white"
              >
                Request Similar Build
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
