import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, BarChart3, Bot, Mail, MessageCircle, Linkedin, Sparkles, Building2, Briefcase } from 'lucide-react';

function Card({ title, desc, icon: Icon }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
        setTilt({ x, y });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative group p-5 rounded-xl bg-white/5 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur hover:shadow-cyan-500/20 transition-all"
      style={{ transform: `perspective(800px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}
    >
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 pointer-events-none" />
      <div className="relative flex items-start gap-4">
        <div className="p-3 rounded-lg bg-cyan-400/10 text-cyan-300 border border-cyan-500/20">
          <Icon size={22} />
        </div>
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-slate-300">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function ServicesScene() {
  const cards = useMemo(
    () => [
      {
        title: 'Automatisation de workflows',
        desc: 'Zapier, Make, APIs sur-mesure — orchestrez vos systèmes de bout en bout.',
        icon: Layers,
      },
      {
        title: 'Agents IA métiers',
        desc: 'Analyse, reporting, emails autonomes — vos coéquipiers intelligents.',
        icon: Bot,
      },
      {
        title: 'Chatbots IA intelligents',
        desc: 'Conversationnels, connectés à vos données et à vos process.',
        icon: Sparkles,
      },
      {
        title: 'Automatisation CRM & Sales',
        desc: 'Prospection, scoring, nurturing, relances — le pipeline sur pilote automatique.',
        icon: BarChart3,
      },
    ],
    []
  );
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(232,121,249,0.12),transparent_45%)]" />
      <div className="grid md:grid-cols-2 gap-5 relative">
        {cards.map((c) => (
          <Card key={c.title} {...c} />
        ))}
      </div>
    </div>
  );
}

function CasesScene() {
  const sectors = [
    { key: 'ecom', label: 'E-commerce', icon: Building2, before: 'Traitement manuel des commandes et SAV disparate.', after: 'Commandes, stocks, et SAV automatisés et centralisés.' },
    { key: 'smb', label: 'PME', icon: Briefcase, before: 'Reporting hebdomadaire chronophage.', after: 'Tableaux de bord temps réel, alertes automatiques.' },
    { key: 'agency', label: 'Agences', icon: Layers, before: 'Onboarding client hétérogène.', after: 'Workflows standards + agents de suivi client.' },
    { key: 'freelance', label: 'Freelances', icon: Sparkles, before: 'Prospection irrégulière et manuelle.', after: 'Séquences multi-canaux et scoring automatique.' },
  ];
  const [active, setActive] = useState(null);
  return (
    <div className="relative">
      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
        {sectors.map((s) => (
          <button
            key={s.key}
            onClick={() => setActive(s)}
            className="relative h-32 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-fuchsia-600/10" />
            <div className="relative z-10 h-full w-full flex flex-col items-center justify-center gap-2 text-slate-200">
              <s.icon />
              <span className="font-medium">{s.label}</span>
            </div>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-6 p-5 rounded-xl bg-black/60 border border-cyan-500/20"
          >
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                <active.icon />
              </div>
              <div className="text-slate-200">
                <h4 className="text-white font-semibold">{active.label}</h4>
                <p className="mt-2 text-sm"><span className="text-slate-400">Avant:</span> {active.before}</p>
                <p className="text-sm"><span className="text-slate-400">Après:</span> {active.after}</p>
              </div>
              <div className="ml-auto">
                <button onClick={() => setActive(null)} className="text-slate-300 hover:text-white">Fermer</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AboutScene() {
  return (
    <div className="relative grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white">Salle de contrôle — Vision & valeurs</h3>
        <p className="text-slate-300">
          Nexiom Automate conçoit des systèmes autonomes et performants. Notre philosophie: <span className="text-cyan-300">efficacité</span>,
          <span className="text-cyan-300"> autonomie</span> et <span className="text-cyan-300">innovation</span> au service de votre croissance.
        </p>
        <ul className="grid grid-cols-3 gap-3 text-sm text-slate-200">
          <li className="rounded-lg bg-white/5 p-3 border border-white/10">Efficacité</li>
          <li className="rounded-lg bg-white/5 p-3 border border-white/10">Autonomie</li>
          <li className="rounded-lg bg-white/5 p-3 border border-white/10">Innovation</li>
        </ul>
      </div>
      <div className="relative h-56 md:h-72 rounded-xl bg-gradient-to-br from-cyan-500/10 to-fuchsia-600/10 border border-white/10">
        <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-lg bg-white/5 border border-white/10" />
          ))}
        </div>
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.25),transparent_45%)]" />
      </div>
    </div>
  );
}

function ContactScene() {
  return (
    <div className="relative grid md:grid-cols-2 gap-8 items-start">
      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <h3 className="text-white text-xl font-semibold">Parle à un expert IA dès maintenant</h3>
        <p className="text-slate-300 mt-1 text-sm">Explique-nous tes besoins, on propose un plan d’automatisation sur-mesure.</p>
        <form className="mt-5 grid gap-4">
          <input required type="text" placeholder="Nom" className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400" />
        	<input required type="email" placeholder="Email" className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400" />
        	<textarea required placeholder="Décris ton projet (objectifs, outils, délais)" rows={4} className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400" />
          <button type="submit" className="inline-flex justify-center items-center gap-2 px-5 py-2 rounded-md bg-cyan-300 text-black font-semibold hover:bg-cyan-200">
            <Mail size={18} /> Envoyer ma demande
          </button>
        </form>
      </div>
      <div className="space-y-4">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-fuchsia-600/10 p-6">
          <h4 className="text-white font-semibold">Canaux rapides</h4>
          <p className="text-slate-300 text-sm">Pour une réponse immédiate, contacte-nous sur le canal de ton choix.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 text-slate-100">
              <MessageCircle size={18} /> WhatsApp Business
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 text-slate-100">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h4 className="text-white font-semibold">Pourquoi Nexiom Automate ?</h4>
          <ul className="mt-2 grid gap-2 text-sm text-slate-300 list-disc pl-5">
            <li>Automatisation IA, agents intelligents, chatbots, CRM — unifié.</li>
            <li>Implémentations rapides, maintenance proactive, résultats mesurables.</li>
            <li>Positionnement SEO: automatisation IA, agence IA, automatisation business, agents intelligents, IA entreprise.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Scenes({ route }) {
  return (
    <div className="relative mx-auto max-w-6xl px-6 py-16">
      <AnimatePresence mode="wait">
        {route === 'services' && (
          <motion.div key="services" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <h2 className="text-3xl font-bold text-white mb-6">Services</h2>
            <ServicesScene />
          </motion.div>
        )}
        {route === 'cases' && (
          <motion.div key="cases" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <h2 className="text-3xl font-bold text-white mb-6">Études de cas</h2>
            <CasesScene />
          </motion.div>
        )}
        {route === 'about' && (
          <motion.div key="about" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <h2 className="text-3xl font-bold text-white mb-6">À propos</h2>
            <AboutScene />
          </motion.div>
        )}
        {route === 'contact' && (
          <motion.div key="contact" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
            <ContactScene />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
