import { motion } from 'framer-motion';
import { ArrowRight, Download, ShieldCheck, Cog } from 'lucide-react';

const products = [
  {
    key: 'smart-chef',
    name: 'Smart Pizza Chef for Restaurants',
    tagline: 'Precision topping, vision QC, and analytics.',
  },
  {
    key: 'auto-line',
    name: 'Automated Pizza Line System',
    tagline: 'High‑throughput dough to box with modular stations.',
  },
  {
    key: 'smart-resto',
    name: 'Smart Resto (Autonomous Pizza Restaurant)',
    tagline: 'Order, assemble, bake, serve — fully autonomous.',
  },
  {
    key: 'vending-svm02',
    name: 'Pizza Street Vending Machine (S-VM02-PM-01)',
    tagline: 'Hot pies on demand, 24/7. Secure and smart.',
  },
];

export default function ProductsGrid({ onRequireLead }) {
  return (
    <section id="products" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Products</h2>
            <p className="mt-2 text-slate-600">Four solutions engineered for speed, consistency, and scale.</p>
          </div>
          <div className="hidden md:flex items-center gap-6 text-slate-600">
            <div className="flex items-center gap-2"><ShieldCheck className="text-emerald-600" size={18}/> Food‑safe</div>
            <div className="flex items-center gap-2"><Cog className="text-blue-600" size={18}/> Modular</div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-5">
                <div className="h-36 w-full rounded-xl bg-gradient-to-br from-slate-200 via-slate-100 to-blue-100 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-70" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(59,130,246,.2), transparent 40%), radial-gradient(circle at 80% 30%, rgba(16,185,129,.15), transparent 35%), radial-gradient(circle at 50% 80%, rgba(59,130,246,.15), transparent 40%)'
                  }} />
                  <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>
              </div>
              <div className="flex items-center justify-between gap-2 p-5 pt-0">
                <a href={`#/product/${p.key}`} className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-800 font-medium">
                  Learn more <ArrowRight size={16} />
                </a>
                <button onClick={onRequireLead} className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 hover:bg-slate-50">
                  <Download size={16}/> Brochure
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
