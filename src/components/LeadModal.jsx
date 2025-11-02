import { useEffect, useState } from 'react';
import { Mail, Phone, X } from 'lucide-react';

export default function LeadModal({ open, onClose, onSubmit }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (open) {
      setError('');
    }
  }, [open]);

  const submit = (e) => {
    e.preventDefault();
    if (!email && !phone) {
      setError('Please provide at least an email or a phone number.');
      return;
    }
    if (!consent) {
      setError('Please consent to be contacted.');
      return;
    }
    onSubmit?.({ email, phone });
    setEmail('');
    setPhone('');
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <button onClick={onClose} className="absolute right-3 top-3 p-2 rounded-md hover:bg-slate-100" aria-label="Close">
          <X size={18} />
        </button>
        <h3 className="text-xl font-semibold text-slate-900">Get the brochure or book a demo</h3>
        <p className="mt-1 text-sm text-slate-600">Share your contact and we will send the download link instantly.</p>

        <form className="mt-4 space-y-3" onSubmit={submit}>
          <div className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2">
            <Mail className="text-slate-500" size={18} />
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email (optional)" className="w-full outline-none" />
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2">
            <Phone className="text-slate-500" size={18} />
            <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone (optional)" className="w-full outline-none" />
          </div>
          <label className="flex items-start gap-2 text-sm text-slate-600">
            <input type="checkbox" checked={consent} onChange={(e)=>setConsent(e.target.checked)} className="mt-1" />
            I agree to be contacted about products and services and to the privacy policy.
          </label>
          {error && <p className="text-sm text-rose-600">{error}</p>}
          <div className="pt-2 flex items-center gap-3">
            <button type="submit" className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2.5 text-white shadow hover:bg-blue-700">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
