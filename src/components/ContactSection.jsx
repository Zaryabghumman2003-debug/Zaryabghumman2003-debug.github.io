import { useState } from 'react';
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

const INITIAL_FORM = {
  name: '',
  company: '',
  email: '',
  service: 'Custom Web / SaaS Platform',
  timeline: '1–3 Months',
  message: '',
};

export default function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const next = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = 'Please enter your name (at least 2 characters).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid business or personal email.';
    }
    if (!form.message.trim() || form.message.trim().length < 15) {
      next.message = 'Please outline your business goals or project scope (at least 15 characters).';
    }
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `[Business Inquiry] ${form.service} — ${form.company || form.name || 'Client'}`
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nCompany / Organization: ${form.company || 'N/A'}\nEmail: ${form.email}\nService Needed: ${form.service}\nTarget Timeline: ${form.timeline}\n\nProject Brief:\n${form.message}`
  )}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard fallback ignored if blocked
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#090b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Business Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-sky-400">
                Business &amp; Project Inquiry Desk
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Start a Business Conversation
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Looking to launch a web platform, build an MVP, integrate AI workflows, or partner on startup product engineering? Share your requirements below.
              </p>
            </div>

            <div className="space-y-3">
              <div className="glass-card rounded-xl p-4 flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 min-w-0 group"
                >
                  <span className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-400/25 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-indigo-300" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono text-slate-400">Business Email</p>
                    <p className="text-sm font-medium text-white truncate group-hover:text-indigo-300 transition-colors">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 shrink-0 cursor-pointer"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-sky-500/15 border border-sky-400/25 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-sky-300" />
                </span>
                <div>
                  <p className="text-[11px] font-mono text-slate-400">Base &amp; Availability</p>
                  <p className="text-sm font-medium text-white">
                    {PERSONAL_INFO.location} &bull; Remote &amp; On-Site
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 pt-1">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card glass-card-hover rounded-xl p-3.5 flex items-center justify-between text-sm font-medium text-slate-200 hover:text-white"
                >
                  <span className="inline-flex items-center gap-2">
                    <LinkedInIcon className="w-4 h-4 text-sky-400" />
                    LinkedIn
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card glass-card-hover rounded-xl p-3.5 flex items-center justify-between text-sm font-medium text-slate-200 hover:text-white"
                >
                  <span className="inline-flex items-center gap-2">
                    <GitHubIcon className="w-4 h-4 text-indigo-300" />
                    GitHub
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href={PERSONAL_INFO.vantraosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card glass-card-hover rounded-xl p-3.5 flex items-center justify-between text-sm font-medium text-slate-200 hover:text-white"
                >
                  <span className="inline-flex items-center gap-2 text-sky-300">
                    VantraOS
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Validated B2B Project Brief Form */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Project Brief Ready for {PERSONAL_INFO.shortName}
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your consultation brief passed validation. Click below to dispatch it directly to{' '}
                  <span className="text-sky-300 font-mono">{PERSONAL_INFO.email}</span>.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Send Project Brief via Email
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(INITIAL_FORM);
                    }}
                    className="px-4 py-2.5 rounded-xl border border-white/15 text-sm text-slate-300 hover:text-white cursor-pointer"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Hamza Siddiqui"
                      className="w-full px-4 py-3 rounded-xl bg-[#07080d] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400"
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1.5">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Company / Venture (Optional)
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="e.g. Horizon Logistics / Startup"
                      className="w-full px-4 py-3 rounded-xl bg-[#07080d] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#07080d] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1.5">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-timeline"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Target Timeline
                    </label>
                    <select
                      id="contact-timeline"
                      value={form.timeline}
                      onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#07080d] border border-white/15 text-sm text-white focus:outline-none focus:border-indigo-400"
                    >
                      <option value="Immediate (2–4 Weeks)">Immediate (2–4 Weeks)</option>
                      <option value="1–3 Months">1–3 Months</option>
                      <option value="3+ Months / Ongoing Partnership">
                        3+ Months / Ongoing Partnership
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Solution Needed
                  </label>
                  <select
                    id="contact-service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#07080d] border border-white/15 text-sm text-white focus:outline-none focus:border-indigo-400"
                  >
                    <option value="Custom Web / SaaS Platform">
                      Custom Web / SaaS Platform
                    </option>
                    <option value="Marketplace / Service Booking App">
                      Marketplace / Service Booking App
                    </option>
                    <option value="AI / Computer Vision Integration">
                      AI / Computer Vision Integration
                    </option>
                    <option value="Corporate Website / Operations Dashboard">
                      Corporate Website / Operations Dashboard
                    </option>
                    <option value="Startup Collaboration / VantraOS">
                      Startup Collaboration / VantraOS
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Project Brief / Business Requirements *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Briefly describe the business problem, required features, or partnership idea..."
                    className="w-full px-4 py-3 rounded-xl bg-[#07080d] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 resize-y"
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1.5">{errors.message}</p>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <p className="text-xs text-slate-400">
                    Direct inbox: <span className="text-slate-200">{PERSONAL_INFO.email}</span>
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Request Consultation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
