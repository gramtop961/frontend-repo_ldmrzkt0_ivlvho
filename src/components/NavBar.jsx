import React from 'react';
import { Rocket, Home, Wrench, FolderOpen, User2, Phone } from 'lucide-react';

const items = [
  { key: 'home', label: 'Accueil', icon: Home },
  { key: 'services', label: 'Services', icon: Wrench },
  { key: 'cases', label: 'Études de cas', icon: FolderOpen },
  { key: 'about', label: 'À propos', icon: User2 },
  { key: 'contact', label: 'Contact', icon: Phone },
];

export default function NavBar({ current, onNavigate }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-lg bg-cyan-500/40" />
            <Rocket className="relative text-cyan-300" size={22} />
          </div>
          <span className="font-semibold tracking-wide text-cyan-200">Nexiom Automate</span>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {items.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => onNavigate(key)}
              className={
                'px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ' +
                (current === key
                  ? 'text-white bg-white/10 shadow-inner shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/10')
              }
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('contact')}
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-black bg-cyan-300 hover:bg-cyan-200 transition-colors"
          >
            <span className="absolute inset-0 -z-[0] rounded-md bg-cyan-400/40 blur-md pointer-events-none" />
            <Rocket size={16} /> Démarrer mon audit IA
          </button>
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden border-t border-white/10">
        <nav className="flex overflow-x-auto no-scrollbar">
          {items.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => onNavigate(key)}
              className={
                'flex-1 px-3 py-3 text-xs font-medium tracking-wide ' +
                (current === key ? 'text-cyan-300' : 'text-slate-300')
              }
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
