import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ onCTA }) {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for cyberpunk glow (pointer-events none so Spline stays interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
      <div className="pointer-events-none absolute -inset-x-20 -top-40 h-80 bg-gradient-to-r from-fuchsia-600/20 via-cyan-500/20 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-36 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Automatise aujourd’hui. <span className="text-cyan-300">Domine demain.</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-300">
            L’agence IA qui construit tes systèmes pendant que tu construis ton empire.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onCTA}
              className="relative inline-flex items-center gap-3 px-6 py-3 rounded-md bg-cyan-300 text-black font-semibold hover:bg-cyan-200 transition-colors"
            >
              <span className="absolute inset-0 rounded-md bg-cyan-500/30 blur-md pointer-events-none" />
              Démarrer mon audit IA gratuit
            </button>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); onCTA('services'); }}
              className="text-slate-200 hover:text-white underline/50 underline-offset-4"
            >
              Découvrir nos services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
