import { useEffect, useState } from 'react';
import { Menu, X, Rocket, Languages } from 'lucide-react';

export default function Navbar({ onOpenLead }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Products', href: '#products' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'News/Blog', href: '#news' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'bg-white/80 backdrop-blur border-b border-slate-200' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white shadow-lg">
              <Rocket size={20} />
            </div>
            <span className="font-semibold text-slate-900">Stable Technology</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <button onClick={onOpenLead} className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Get a Quote
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
              <Languages size={16} /> EN ▾
            </button>
          </nav>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-md hover:bg-slate-100" aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-slate-50">
                {item.label}
              </a>
            ))}
            <button onClick={() => { setOpen(false); onOpenLead?.(); }} className="w-full inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700">
              Get a Quote
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
