import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ProductsGrid from './components/ProductsGrid';
import LeadModal from './components/LeadModal';
import FooterContact from './components/FooterContact';
import { CheckCircle2, Globe, Shield, Timer } from 'lucide-react';

export default function App() {
  const [leadOpen, setLeadOpen] = useState(false);

  const handleLeadSubmit = (payload) => {
    // In a full build, this would call the backend to store the lead and send the asset link.
    // For now we optimistically close the modal and simulate a download.
    setLeadOpen(false);
    setTimeout(() => {
      alert('Thanks! We\'ll be in touch shortly.');
    }, 250);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onOpenLead={() => setLeadOpen(true)} />
      <main>
        <Hero3D onOpenLead={() => setLeadOpen(true)} />
        <ProductsGrid onRequireLead={() => setLeadOpen(true)} />

        <section id="why-us" className="relative py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Why Choose Stable Technology</h2>
                <p className="mt-3 text-slate-600">Industrial‑grade robotics and software deliver precise topping, vision‑based QC, and dependable throughput for restaurants, ghost kitchens, and vending deployments.</p>
                <ul className="mt-6 space-y-3 text-slate-800">
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-600 mt-0.5"/> Consistent quality with computer vision and calibrated dosing</li>
                  <li className="flex items-start gap-3"><Timer className="text-blue-600 mt-0.5"/> Faster service times and reduced labor variance</li>
                  <li className="flex items-start gap-3"><Shield className="text-sky-600 mt-0.5"/> Food‑safe materials, audit logs, and remote monitoring</li>
                  <li className="flex items-start gap-3"><Globe className="text-indigo-600 mt-0.5"/> Built for global operations and multilingual UIs</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <Stat title="Throughput" value="> 300 pies/hr" />
                  <Stat title="Uptime" value="> 99.5%" />
                  <Stat title="Countries" value="20+" />
                  <Stat title="ROI" value="< 8 months" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="news" className="relative py-16 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">News & Insights</h2>
                <p className="mt-1 text-slate-600">Updates on robotics, operations, and product releases.</p>
              </div>
              <a href="#" className="text-blue-700 hover:text-blue-800">View all</a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[1,2,3].map((i)=> (
                <article key={i} className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md">
                  <div className="h-36 w-full rounded-xl bg-gradient-to-br from-slate-200 via-slate-100 to-blue-100" />
                  <h3 className="mt-4 font-semibold">How vision AI perfects topping distribution</h3>
                  <p className="mt-1 text-sm text-slate-600">A look at camera calibration, coverage metrics, and feedback loops.</p>
                  <a href="#" className="mt-3 inline-flex items-center gap-1 text-blue-700">Read more →</a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterContact />

      <LeadModal open={leadOpen} onClose={() => setLeadOpen(false)} onSubmit={handleLeadSubmit} />
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-xl bg-white p-5 border border-slate-200 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-slate-500">{title}</div>
      <div className="mt-1 text-2xl font-bold text-slate-900">{value}</div>
    </div>
  );
}
