"use client";

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const testimonials = [
  { id: 1, link: "https://www.youtube.com/watch?v=ICIDc8_pZFU", image: "https://img.youtube.com/vi/ICIDc8_pZFU/hqdefault.jpg" },
  { id: 2, link: "https://www.youtube.com/watch?v=oNkc4DAfTEI", image: "https://img.youtube.com/vi/oNkc4DAfTEI/hqdefault.jpg" },
  { id: 3, link: "https://www.youtube.com/watch?v=PdLA7KCG-XI", image: "https://img.youtube.com/vi/PdLA7KCG-XI/hqdefault.jpg" },
  { id: 4, link: "https://www.youtube.com/watch?v=jbxUmHHYgdw", image: "https://img.youtube.com/vi/jbxUmHHYgdw/hqdefault.jpg" },
  { id: 5, link: "https://www.youtube.com/watch?v=X58_ircy2UU", image: "https://img.youtube.com/vi/X58_ircy2UU/hqdefault.jpg" },
  { id: 6, link: "https://www.youtube.com/watch?v=kSuGOIhAzgA", image: "https://img.youtube.com/vi/kSuGOIhAzgA/hqdefault.jpg" },
];

export default function SuccessStoriesPage() {
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideoId(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const getVideoId = (url: string) => url.split('v=')[1];

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px]">

        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#fdf0f7]/30 overflow-hidden relative">
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#ED2793]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-[#fdf0f7] text-[#ED2793] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-wide uppercase border border-[#ED2793]/10 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#ED2793] inline-block animate-pulse shadow-[0_0_8px_rgba(237,39,147,0.8)]"></span>
                  Testimonials
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#145390] mb-4 leading-tight">
                  Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED2793] to-[#ff7eb3]">Success Stories</span>
                </h1>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Hear directly from our patients who have experienced the joy of parenthood through our dedicated care and advanced fertility treatments.
                </p>
              </div>
              <div className="shrink-0">
                <Link href="/" className="text-[#145390] text-sm font-medium hover:text-[#ED2793] transition-colors">
                  ← Back to Home
                </Link>
              </div>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveVideoId(item.id)}
                  className="relative group rounded-[2rem] overflow-hidden aspect-video bg-gray-900 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(237,39,147,0.15)] border-[6px] border-white block transform transition-all duration-500 cursor-pointer hover:-translate-y-1"
                >
                  <img
                    src={item.image}
                    alt="Patient Success Story"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:via-black/10 transition-colors duration-500"></div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-600 rounded-2xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500 transform group-hover:scale-110"></div>
                      <div className="w-[72px] h-[52px] transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl relative z-10">
                        <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                          <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#FF0000"></path>
                          <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      {/* Video Modal */}
      {activeVideoId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer transition-opacity"
            onClick={() => setActiveVideoId(null)}
          />
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl z-10">
            <button
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
              onClick={() => setActiveVideoId(null)}
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${getVideoId(testimonials.find(t => t.id === activeVideoId)?.link ?? '')}?autoplay=1`}
              title="Patient Success Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
