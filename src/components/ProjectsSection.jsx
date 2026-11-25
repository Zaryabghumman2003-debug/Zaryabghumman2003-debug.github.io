import { useEffect, useState, useCallback } from 'react';
import {
  Code2,
  ExternalLink,
  X,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  FolderGit2,
  Star,
  RefreshCw,
} from 'lucide-react';
import { GitHubIcon } from './SocialIcons';
import { PROJECTS_DATA, GITHUB_CONFIG } from '../data/portfolioData';
import ProjectPreview from './ProjectPreview';

export default function ProjectsSection() {
  const [viewMode, setViewMode] = useState('featured'); // 'featured' | 'github'
  const [selectedProject, setSelectedProject] = useState(null);
  const [repos, setRepos] = useState(GITHUB_CONFIG.fallbackRepos);
  const [syncState, setSyncState] = useState('loading');

  const loadRepos = useCallback(async () => {
    try {
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_CONFIG.username}/repos?sort=updated&per_page=100`,
        { headers: { Accept: 'application/vnd.github+json' } }
      );
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      const data = await res.json();
      if (!Array.isArray(data) || data.length === 0) throw new Error('Empty');

      const fallbackMap = new Map(
        GITHUB_CONFIG.fallbackRepos.map((r) => [r.name.toLowerCase(), r])
      );

      const formatted = data
        .filter((r) => !r.fork && r.name !== GITHUB_CONFIG.username)
        .map((r) => {
          const fallback = fallbackMap.get(r.name.toLowerCase());
          return {
            name: r.name,
            html_url: r.html_url,
            description: r.description || fallback?.description || 'GitHub repository.',
            language: r.language || fallback?.language || 'Code',
            stargazers_count: r.stargazers_count ?? 0,
          };
        });

      return { ok: true, repos: formatted };
    } catch {
      return { ok: false, repos: GITHUB_CONFIG.fallbackRepos };
    }
  }, []);

  useEffect(() => {
    let active = true;
    loadRepos().then((result) => {
      if (!active) return;
      setRepos(result.repos);
      setSyncState(result.ok ? 'live' : 'fallback');
    });
    return () => {
      active = false;
    };
  }, [loadRepos]);

  const handleRefresh = async () => {
    setSyncState('loading');
    const result = await loadRepos();
    setRepos(result.repos);
    setSyncState(result.ok ? 'live' : 'fallback');
  };

  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-white/10 bg-[#090b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400">
              <Code2 className="w-3.5 h-3.5" />
              Projects &amp; GitHub
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Products &amp; Connected Repos
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex rounded-xl bg-white/[0.03] border border-white/10 p-1">
              <button
                type="button"
                onClick={() => setViewMode('featured')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  viewMode === 'featured'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Featured ({PROJECTS_DATA.length})
              </button>
              <button
                type="button"
                onClick={() => setViewMode('github')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer inline-flex items-center gap-1.5 ${
                  viewMode === 'github'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                GitHub ({repos.length})
              </button>
            </div>

            {viewMode === 'github' && (
              <button
                type="button"
                onClick={handleRefresh}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-slate-200 cursor-pointer"
                title={syncState === 'live' ? 'Live synced from GitHub' : 'Refresh repositories'}
              >
                <RefreshCw className={`w-3.5 h-3.5 ${syncState === 'loading' ? 'animate-spin' : ''}`} />
                {syncState === 'live' ? 'Live' : 'Sync'}
              </button>
            )}

            <a
              href={GITHUB_CONFIG.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-slate-200"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              Profile
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {viewMode === 'featured' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS_DATA.map((project) => (
              <article
                key={project.id}
                className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3.5">
                  <ProjectPreview projectId={project.id} />

                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-300">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">{project.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1.5">
                      {project.businessValue || project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-indigo-300 transition-colors cursor-pointer"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-medium text-slate-200 transition-colors"
                    >
                      <GitHubIcon className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500">Private</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div id="github" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-xl p-4 flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <FolderGit2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <h3 className="text-sm font-semibold text-white truncate group-hover:text-indigo-300 transition-colors">
                        {repo.name}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-300 shrink-0" />
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-2">{repo.description}</p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-indigo-300">{repo.language || 'Code'}</span>
                  {typeof repo.stargazers_count === 'number' && (
                    <span className="inline-flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stargazers_count}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-card rounded-2xl max-w-xl w-full p-6 space-y-4 border-white/15 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-indigo-300">
                  {selectedProject.category}
                </span>
                <h3 id="project-modal-title" className="text-xl font-bold text-white mt-0.5">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-400">{selectedProject.subtitle}</p>
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

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedProject.description}
            </p>

            <ul className="space-y-1.5">
              {selectedProject.highlights.map((item) => (
                <li key={item} className="text-xs text-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {selectedProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              {selectedProject.githubUrl ? (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  Open GitHub Repo
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-400">Private Repository</span>
              )}
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl border border-white/15 text-xs font-medium text-slate-200 hover:text-white"
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
