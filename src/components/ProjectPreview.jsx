export default function ProjectPreview({ projectId }) {
  switch (projectId) {
    case 'kaamify':
      return (
        <div className="h-44 rounded-xl bg-[#08121b] border border-white/10 p-4 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-sky-300">Kaamify // Karachi Marketplace</span>
            <span className="px-2 py-0.5 rounded bg-sky-500/15 text-sky-200">
              Next.js + Supabase
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {['Naya Nazimabad', 'DHA Karachi', 'Gulshan-e-Iqbal', 'Arabian Villas'].map((zone) => (
              <div
                key={zone}
                className="px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] text-slate-200 truncate"
              >
                {zone}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>/services &bull; /societies &bull; /providers</span>
            <span className="text-emerald-300">Verified Directory</span>
          </div>
        </div>
      );

    case 'regulariq':
      return (
        <div className="h-44 rounded-xl bg-[#0a0f1d] border border-white/10 p-4 flex flex-col justify-between overflow-hidden relative">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="text-indigo-300">RegularIQ // Audit</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300">
              Active Checklists
            </span>
          </div>
          <div className="space-y-2">
            {[
              { label: 'Policy Control Review', pct: '92%' },
              { label: 'Documentation Verification', pct: '84%' },
              { label: 'Operational Audit Log', pct: '100%' },
            ].map((row) => (
              <div key={row.label} className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-300">
                  <span>{row.label}</span>
                  <span className="font-mono text-indigo-300">{row.pct}</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-sky-400"
                    style={{ width: row.pct }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'object-detection':
      return (
        <div className="h-44 rounded-xl bg-[#080d18] border border-white/10 p-4 relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="text-sky-300">YOLO + OpenCV Stream</span>
            <span>Frame Inference</span>
          </div>
          <div className="relative flex-1 my-2 rounded-lg border border-sky-500/20 bg-slate-900/70 overflow-hidden">
            <div className="absolute left-4 top-3 w-24 h-16 border-2 border-sky-400 rounded-sm">
              <span className="absolute -top-4 left-0 px-1.5 py-0.5 text-[9px] font-mono bg-sky-500 text-slate-950 font-semibold">
                Object A
              </span>
            </div>
            <div className="absolute right-5 bottom-3 w-20 h-14 border-2 border-indigo-400 rounded-sm">
              <span className="absolute -top-4 left-0 px-1.5 py-0.5 text-[9px] font-mono bg-indigo-500 text-white font-semibold">
                Object B
              </span>
            </div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-slate-400">
            <span>cv2.VideoCapture()</span>
            <span className="text-sky-300">Bounding Box Overlay</span>
          </div>
        </div>
      );

    case 'taskflow':
      return (
        <div className="h-44 rounded-xl bg-[#0c0e1c] border border-white/10 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-violet-300">TaskFlow Workspace</span>
            <span className="text-slate-400">Ctrl+N &bull; JSON Sync</span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-1">
            {[
              { label: 'Completed', color: 'text-emerald-300 border-emerald-400/25' },
              { label: 'In Progress', color: 'text-amber-300 border-amber-400/25' },
              { label: 'Priority', color: 'text-violet-300 border-violet-400/25' },
            ].map((card) => (
              <div
                key={card.label}
                className={`p-2 rounded-lg bg-white/[0.03] border ${card.color} text-center`}
              >
                <div className="h-1.5 w-8 mx-auto rounded-full bg-current opacity-60 mb-1.5" />
                <span className="text-[10px] font-medium">{card.label}</span>
              </div>
            ))}
          </div>
          <div className="space-y-1.5">
            <div className="h-2.5 w-full rounded bg-white/10 flex items-center px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mr-2" />
              <span className="h-1 w-24 rounded bg-white/30" />
            </div>
            <div className="h-2.5 w-4/5 rounded bg-white/5 flex items-center px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-2" />
              <span className="h-1 w-20 rounded bg-white/25" />
            </div>
          </div>
        </div>
      );

    case 'nexus':
      return (
        <div className="h-44 rounded-xl bg-[#08101a] border border-white/10 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-cyan-300">Sonic Nexus // Feed</span>
            <span className="text-slate-400">React + Context</span>
          </div>
          <div className="flex gap-2">
            {['Stories', 'Polls', 'AI Bot', 'Chat'].map((pill) => (
              <span
                key={pill}
                className="px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-400/25 text-[10px] text-cyan-200"
              >
                {pill}
              </span>
            ))}
          </div>
          <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500" />
              <span className="h-2 w-24 rounded bg-white/30" />
            </div>
            <span className="block h-1.5 w-full rounded bg-white/10" />
            <span className="block h-1.5 w-3/4 rounded bg-white/10" />
          </div>
        </div>
      );

    default:
      return (
        <div className="h-44 rounded-xl bg-[#081214] border border-white/10 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-emerald-300">Smart Study Planner</span>
            <span className="text-slate-400">AI Assisted</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {['Morning Focus', 'Algorithm Prep', 'Revision Block', 'Mock Review'].map((slot) => (
              <div
                key={slot}
                className="px-2.5 py-2 rounded-lg bg-emerald-500/10 border border-emerald-400/20 text-[11px] text-emerald-100"
              >
                {slot}
              </div>
            ))}
          </div>
          <div className="text-[10px] font-mono text-slate-400 flex justify-between">
            <span>Adaptive Schedule</span>
            <span className="text-emerald-300">Priority Balanced</span>
          </div>
        </div>
      );
  }
}
