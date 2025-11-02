import Spline from '@splinetool/react-spline';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero3D({ onOpenLead }) {
  return (
    <section id="home" className="relative h-[85vh] md:h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Industry 4.0 Pizza Automation
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Robotic Pizza Assembly. Seamless Automation.
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Stable Technology builds end‑to‑end pizza automation: from smart chefs to autonomous restaurants and vending machines. Faster service, consistent quality, and lower costs.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={onOpenLead} className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Request Demo <ArrowRight size={18} />
            </button>
            <a href="#products" className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-slate-800 hover:bg-slate-50">
              <PlayCircle size={18} /> Explore Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
