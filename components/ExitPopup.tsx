'use client';

import { useState, useEffect } from 'react';
import { Heart, X } from 'lucide-react';
import Link from 'next/link';

export default function ExitPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeenPopup, setHasSeenPopup] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const seen = sessionStorage.getItem('hasSeenExitPopup');
    if (seen) {
      setHasSeenPopup(true);
      return;
    }

    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      if (!hasSeenPopup) {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenExitPopup', 'true');
        setHasSeenPopup(true);
      }
    }, 3000);

    // Also show on exit intent (mouse leaves the top of the viewport)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasSeenPopup) {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenExitPopup', 'true');
        setHasSeenPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasSeenPopup]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-[420px] overflow-hidden relative animate-in zoom-in-95 duration-300">
        
        {/* Top Half (Plum/Magenta) */}
        <div className="bg-[#98005A] px-8 py-10 text-center relative">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 text-white/70 hover:bg-black/20 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-7 h-7 text-white fill-white" />
          </div>
          
          <p className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Before you go...
          </p>
          
          <h2 className="text-[26px] font-bold text-white leading-tight px-2">
            Every journey to parenthood begins with one small, brave step.
          </h2>
        </div>

        {/* Bottom Half (White) */}
        <div className="bg-white px-8 py-10 text-center">
          <p className="text-gray-600 text-base mb-8 font-medium leading-relaxed">
            Take yours today. Please complete the form to schedule your professional consultation with Popular IVF Centre.
          </p>
          
          <Link href="/book-appointment" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-[#ED2793] hover:bg-[#d61e80] text-white font-bold py-4 rounded-xl transition-colors text-lg mb-5 shadow-lg shadow-[#ED2793]/30">
              Begin My Journey
            </button>
          </Link>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 font-medium transition-colors text-sm"
          >
            Not Now
          </button>
        </div>
        
      </div>
    </div>
  );
}
