import { Mail, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function FooterContact() {
  return (
    <footer id="contact" className="relative bg-slate-950 text-slate-200">
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'radial-gradient(600px 200px at 10% 10%, rgba(56,189,248,.15), transparent 40%), radial-gradient(600px 200px at 90% 10%, rgba(59,130,246,.2), transparent 40%)'
      }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-semibold">Stable Technology</h4>
            <p className="mt-2 text-sm text-slate-400">Robotics and automation for pizza at any scale. Built for global operations with safety, uptime, and quality at the core.</p>
          </div>
          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#products" className="hover:text-white">Products</a></li>
              <li><a href="#why-us" className="hover:text-white">Why Choose Us</a></li>
              <li><a href="#news" className="hover:text-white">News / Blog</a></li>
              <li><a href="#home" className="hover:text-white">Home</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Contact</h5>
            <div className="mt-3 space-y-2 text-sm">
              <a href="mailto:sales@stable.technology" className="flex items-center gap-2 hover:text-white"><Mail size={16}/> sales@stable.technology</a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white"><Phone size={16}/> +1 (234) 567‑890</a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white"><MessageCircle size={16}/> WhatsApp Chat</a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Stable Technology. All rights reserved.</p>
          <a href="#" className="inline-flex items-center gap-1 hover:text-white">Privacy <ArrowUpRight size={14} /></a>
        </div>
      </div>

      <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-white shadow-lg hover:bg-emerald-600">
        <MessageCircle size={18}/> Chat
      </a>
      <a href="mailto:sales@stable.technology" className="fixed bottom-5 right-28 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-white shadow-lg hover:bg-blue-700">
        <Mail size={18}/> Email
      </a>
    </footer>
  );
}
