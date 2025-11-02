import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Scenes from './components/Scenes';
import AmbientAudio from './components/AmbientAudio';

// Simple hash-based router to keep pages navigable separately without external deps
const validRoutes = ['home', 'services', 'cases', 'about', 'contact'];

export default function App() {
  const [route, setRoute] = useState('home');

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setRoute(validRoutes.includes(hash) ? hash : 'home');
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const navigate = (key) => {
    const target = key || 'contact';
    window.location.hash = target;
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0b0f] text-white">
      <NavBar current={route} onNavigate={navigate} />

      {route === 'home' ? (
        <Hero onCTA={(target = 'contact') => navigate(target)} />
      ) : (
        <div className="pt-24">
          <Scenes route={route} />
        </div>
      )}

      <footer className="relative mt-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-400">
          © {new Date().getFullYear()} Nexiom Automate — Agence d’automatisation IA. Tous droits réservés.
        </div>
      </footer>

      <AmbientAudio />
    </div>
  );
}
