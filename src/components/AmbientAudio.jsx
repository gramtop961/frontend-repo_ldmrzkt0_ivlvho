import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AmbientAudio() {
  const audioRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (enabled) {
      audio.volume = 0.15;
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [enabled]);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <audio ref={audioRef} loop preload="auto" src="https://cdn.pixabay.com/download/audio/2021/09/01/audio_4e75a60a1a.mp3?filename=cyber-ambient-9837.mp3" />
      <button
        onClick={() => setEnabled((v) => !v)}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black/60 border border-white/10 text-slate-200 hover:bg-black/70"
        title={enabled ? 'Couper le son' : 'Activer le son'}
      >
        {enabled ? <Volume2 size={16} /> : <VolumeX size={16} />} Ambiance
      </button>
    </div>
  );
}
