import { useEffect, useState, useCallback } from 'react';
import { ArrowUpRight, RefreshCw, Search, Star, GitFork, FolderGit2 } from 'lucide-react';
import { GITHUB_CONFIG } from '../data/portfolioData';
import { GitHubIcon } from './SocialIcons';

const CATEGORY_TABS = ['All', 'Business & SaaS', 'Web & UI', 'AI & Systems'];

function inferCategory(repo) {
  const text = `${repo.name} ${repo.description || ''} ${repo.language || ''}`.toLowerCase();
  if (
    text.includes('kaamify') ||
    text.includes('brand') ||
    text.includes('data-visualizer') ||
    text.includes('task-flow') ||
    text.includes('business')
  ) {
    return 'Business & SaaS';
  }
  if (
    text.includes('object') ||
    text.includes('yolo') ||
    text.includes('simulator') ||
    text.includes('python')
  ) {
    return 'AI & Systems';
  }
  return 'Web & UI';
}

export default function GitHubReposSection() {
  const [repos, setRepos] = useState(GITHUB_CONFIG.fallbackRepos);
  const [syncState, setSyncState] = useState('loading'); // 'loading' | 'live' | 'fallback'
  const [activeTab, setActiveTab] = useState('All');
  const [query, setQuery] = useState('');

  const loadReposFromGitHub = useCallback(async () => {
    try {
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_CONFIG.username}/repos?sort=updated&per_page=100`,
        { headers: { Accept: 'application/vnd.github+json' } }
      );
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      const data = await res.json();
      if (!Array.isArray(data) || data.length === 0) throw new Error('Empty repo list');

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
            description:
              r.description ||
              fallback?.description ||
              'Software engineering repository on GitHub.',
            language: r.language || fallback?.language || 'Code',
            stargazers_count: r.stargazers_count ?? 0,
            forks_count: r.forks_count ?? 0,
            updated_at: r.updated_at,
            category: fallback?.category || inferCategory(r),
          };
        });

      return { ok: true, repos: formatted };
    } catch {
      return { ok: false, repos: GITHUB_CONFIG.fallbackRepos };
    }
  }, []);

  useEffect(() => {
    let active = true;
    loadReposFromGitHub().then((result) => {
      if (!active) return;
      setRepos(result.repos);
      setSyncState(result.ok ? 'live' : 'fallback');
    });
    return () => {
      active = false;
    };
  }, [loadReposFromGitHub]);

  const handleRefresh = async () => {
    setSyncState('loading');
    const result = await loadReposFromGitHub();
    setRepos(result.repos);
    setSyncState(result.ok ? 'live' : 'fallback');
  };

  const filtered = repos.filter((repo) => {
    const matchesTab = activeTab === 'All' || repo.category === activeTab;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      repo.name.toLowerCase().includes(q) ||
      (repo.description || '').toLowerCase().includes(q) ||
      (repo.language || '').toLowerCase().includes(q);
    return matchesTab && matchesQuery;
  });

  return (
    <section id="github" className="py-20 sm:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400">
              <GitHubIcon className="w-3.5 h-3.5" />
              Connected GitHub Repositories
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Open Source &amp; Product Codebase
            </h2>
            <p className="text-slate-300 text-base">
              Connected directly to{' '}
              <a
                href={GITHUB_CONFIG.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 hover:underline font-mono text-sm"
              >
                github.com/{GITHUB_CONFIG.username}
              </a>{' '}
              so business partners and technical reviewers can inspect live repositories.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
              <span
                className={`w-2 h-2 rounded-full ${
                  syncState === 'live'
                    ? 'bg-emerald-400'
                    : syncState === 'loading'
                    ? 'bg-amber-400 animate-pulse'
                    : 'bg-sky-400'
                }`}
              />
              {syncState === 'live'
                ? `Live Synced (${repos.length} Repos)`
                : syncState === 'loading'
                ? 'Syncing GitHub...'
                : `Verified Snapshot (${repos.length} Repos)`}
            </span>

            <button
              type="button"
              onClick={handleRefresh}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-slate-200 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${syncState === 'loading' ? 'animate-spin' : ''}`} />
              Refresh
            </button>

            <a
              href={GITHUB_CONFIG.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
            >
              GitHub Profile
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  activeTab === tab
                    ? 'bg-indigo-600/25 border-indigo-400/50 text-white'
                    : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter repositories..."
              aria-label="Filter GitHub repositories"
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#0d1017] border border-white/15 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400"
            />
          </div>
        </div>

        {/* Repository Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((repo) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2.5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <FolderGit2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <h3 className="text-sm font-semibold text-white truncate group-hover:text-indigo-300 transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-300 shrink-0 transition-colors" />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {repo.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="text-indigo-300">{repo.language || 'Code'}</span>
                  {typeof repo.stargazers_count === 'number' && (
                    <span className="inline-flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stargazers_count}
                    </span>
                  )}
                  {typeof repo.forks_count === 'number' && (
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {repo.forks_count}
                    </span>
                  )}
                </div>
                <span className="text-slate-500">{repo.category}</span>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-10 text-sm text-slate-400 glass-card rounded-2xl">
            No repositories match your current filter.
          </div>
        )}
      </div>
    </section>
  );
}
