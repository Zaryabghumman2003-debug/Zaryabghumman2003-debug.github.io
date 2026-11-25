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
      next.name = 'Enter your name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Enter a valid email address.';
    }
    if (!form.message.trim() || form.message.trim().length < 15) {
      next.message = 'Add at least 15 characters describing your inquiry.';
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
    `Name: ${form.name}\nCompany: ${form.company || 'N/A'}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`
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
    <section id="contact" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pro-card top-specular rounded-3xl p-6 sm:p-10 lg:p-12 grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Executive Contact Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-400">
                05 &bull; Contact
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-[-0.025em]">
                Start a{' '}
                <span className="font-editorial italic font-normal text-indigo-300 text-[1.12em]">
                  Conversation
                </span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Available for web platforms, startup MVPs, AI integrations, and business collaborations.
              </p>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5 flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 min-w-0 group"
                >
                  <span className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-400/25 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-indigo-300" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Direct Email
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-white truncate group-hover:text-indigo-300 transition-colors">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5 flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-sky-500/15 border border-sky-400/25 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-sky-300" />
                </span>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Location
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-white">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-2.5 pt-1">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 p-3 flex items-center justify-between text-xs font-medium text-slate-200 hover:text-white transition-colors"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <LinkedInIcon className="w-3.5 h-3.5 text-sky-400" />
                    LinkedIn
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 p-3 flex items-center justify-between text-xs font-medium text-slate-200 hover:text-white transition-colors"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <GitHubIcon className="w-3.5 h-3.5 text-indigo-300" />
                    GitHub
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href={PERSONAL_INFO.vantraosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 p-3 flex items-center justify-between text-xs font-medium text-sky-300 hover:text-white transition-colors"
                >
                  <span>VantraOS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Surface */}
          <div className="lg:col-span-7 rounded-2xl bg-[#070910]/90 border border-white/10 p-6 sm:p-7">
            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Inquiry Ready</h3>
                <p className="text-xs text-slate-300">
                  Launch your mail client to send directly to{' '}
                  <span className="text-sky-300 font-mono">{PERSONAL_INFO.email}</span>.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 text-xs font-semibold"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Send via Email
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(INITIAL_FORM);
                    }}
                    className="px-4 py-2.5 rounded-xl border border-white/15 text-xs text-slate-300 hover:text-white cursor-pointer"
                  >
                    New Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e17] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20"
                    />
                    {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Company / Venture
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Optional"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e17] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e17] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20"
                    />
                    {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Service
                    </label>
                    <select
                      id="contact-service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e17] border border-white/10 text-sm text-white focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20"
                    >
                      <option value="Custom Web / SaaS Platform">Custom Web / SaaS Platform</option>
                      <option value="Marketplace / Booking App">Marketplace / Booking App</option>
                      <option value="AI / Computer Vision">AI / Computer Vision</option>
                      <option value="Corporate Site / Dashboard">Corporate Site / Dashboard</option>
                      <option value="Startup Collaboration">Startup Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Project Brief *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Share your goals or requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e17] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 resize-y"
                  />
                  {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 text-sm font-semibold shadow-sm transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Send Inquiry
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
