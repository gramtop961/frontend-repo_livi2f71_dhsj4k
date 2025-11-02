import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Play, RotateCcw } from 'lucide-react';

// A lightweight 3D-styled pizza "cooking" scene using layered elements, perspective and motion.
// Sequence: dough -> sauce -> cheese -> toppings -> baking glow + steam.
export default function PizzaCooker3D() {
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(true);

  const steps = useMemo(() => [
    { key: 'dough', label: 'Preparing dough' },
    { key: 'sauce', label: 'Spreading sauce' },
    { key: 'cheese', label: 'Adding cheese' },
    { key: 'toppings', label: 'Adding toppings' },
    { key: 'bake', label: 'Baking to perfection' },
  ], []);

  useEffect(() => {
    if (!running) return;
    if (step >= steps.length - 1) return;
    const t = setTimeout(() => setStep((s) => Math.min(s + 1, steps.length - 1)), 1500);
    return () => clearTimeout(t);
  }, [step, running, steps.length]);

  const reset = () => {
    setStep(0);
    setRunning(true);
  };

  return (
    <section id="pizza" className="relative py-20 bg-gradient-to-b from-white to-orange-50/50">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,200,150,0.12),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Watch the pizza form in 3D</h2>
            <p className="mt-3 text-slate-600">A playful preview of our automated process: from dough to bake. Optimized for performance and works on any device.</p>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => setRunning((r) => !r)}
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-800 hover:bg-slate-50"
              >
                <Play size={16} /> {running ? 'Pause' : 'Play'}
              </button>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-md bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
              >
                <RotateCcw size={16} /> Restart
              </button>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between text-sm font-medium text-slate-700">
                <span>{steps[step].label}</span>
                <span>{Math.round(((step + 1) / steps.length) * 100)}%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                  transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            {/* 3D Pizza Stage */}
            <div className="relative mx-auto h-[360px] w-[360px] md:h-[420px] md:w-[420px]">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-b from-orange-200/40 to-amber-100/0 blur-2xl pointer-events-none" />

              {/* Stage plate with perspective */}
              <div className="absolute inset-0 [perspective:800px]">
                <motion.div
                  className="absolute left-1/2 top-1/2 h-[260px] w-[260px] md:h-[320px] md:w-[320px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
                  animate={{ rotateX: 55, rotateZ: 0, rotateY: 0 }}
                  transition={{ type: 'spring', stiffness: 60, damping: 12 }}
                >
                  {/* Shadow */}
                  <motion.div
                    className="absolute left-1/2 top-full h-20 w-48 -translate-x-1/2 rounded-full bg-black/10 blur-xl"
                    animate={{ opacity: 0.3, scale: step >= 3 ? 1.1 : 1 }}
                  />

                  {/* Wooden board */}
                  <div className="absolute inset-0 translate-z-[-30px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#b4845a,transparent_60%),_radial-gradient(circle_at_70%_70%,#d0a079,transparent_55%)] shadow-inner" />

                  {/* Dough */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(246,210,160,1),rgba(246,210,160,0.95),rgba(230,195,145,1))] shadow-lg"
                    initial={{ scale: 0.1, opacity: 0 }}
                    animate={{ scale: step >= 0 ? 1 : 0.1, opacity: step >= 0 ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />

                  {/* Sauce spreading */}
                  <AnimatePresence>
                    {step >= 1 && (
                      <motion.div
                        key="sauce"
                        className="absolute inset-[14%] rounded-full bg-[radial-gradient(circle_at_40%_40%,#b91c1c,transparent_60%),_radial-gradient(circle_at_60%_60%,#dc2626,transparent_60%)]"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.95 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Cheese melt */}
                  <AnimatePresence>
                    {step >= 2 && (
                      <motion.div
                        key="cheese"
                        className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,#fde68a_0%,#f59e0b_70%,transparent_72%)]"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 16, delay: 0.05 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Toppings fall in */}
                  <AnimatePresence>
                    {step >= 3 && (
                      <>
                        {Array.from({ length: 9 }).map((_, i) => (
                          <motion.div
                            key={`pep-${i}`}
                            className="absolute h-8 w-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,#7f1d1d,#ef4444)] shadow"
                            initial={{ y: -180 - i * 5, x: (i % 3) * 60 - 60, opacity: 0, rotateZ: -20 }}
                            animate={{ y: [-180 - i * 5, 0], opacity: [0, 1], rotateZ: 0 }}
                            transition={{ duration: 0.7, delay: 0.05 * i, ease: 'easeOut' }}
                            style={{ top: `${30 + (i % 3) * 20}%`, left: `${30 + Math.floor(i / 3) * 20}%` }}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>

                  {/* Oven baking glow */}
                  <AnimatePresence>
                    {step >= 4 && (
                      <motion.div
                        key="glow"
                        className="absolute inset-0 rounded-full"
                        initial={{ boxShadow: '0 0 0px rgba(255,140,0,0)' }}
                        animate={{ boxShadow: ['0 0 0px rgba(255,140,0,0)', '0 0 80px rgba(255,140,0,0.4)', '0 0 30px rgba(255,140,0,0.15)'] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Steam */}
              <AnimatePresence>
                {step >= 4 && (
                  <>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div
                        key={`steam-${i}`}
                        className="pointer-events-none absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-xl"
                        initial={{ opacity: 0, y: 0, x: (i - 3) * 6, scale: 0.8 }}
                        animate={{ opacity: [0, 0.8, 0], y: [-10, -70 - i * 10], scale: [0.8, 1.4] }}
                        transition={{ duration: 2 + i * 0.2, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>

              {/* Temperature badge */}
              <div className="absolute right-2 top-2 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 backdrop-blur">
                <Flame className="text-orange-600" size={14} /> 450°F Oven
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
