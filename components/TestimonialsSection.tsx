"use client";

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react';

type Testimonial = {
  id: number;
  link?: string;
  image: string;
  localVideo?: string;
};

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideoId(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const testimonials: Testimonial[] = [
    { id: 1, link: "https://www.youtube.com/watch?v=ICIDc8_pZFU", image: "https://img.youtube.com/vi/ICIDc8_pZFU/hqdefault.jpg" },
    {
      id: 2,
      localVideo: "/videos/patient_testimonial_video.mp4",
      image: "/videos/patient_testimonial_video.mp4#t=0.5",
    },
    { id: 3, link: "https://www.youtube.com/watch?v=PdLA7KCG-XI", image: "https://img.youtube.com/vi/PdLA7KCG-XI/hqdefault.jpg" },
    { id: 4, link: "https://www.youtube.com/watch?v=jbxUmHHYgdw", image: "https://img.youtube.com/vi/jbxUmHHYgdw/hqdefault.jpg" },
    { id: 5, link: "https://www.youtube.com/watch?v=X58_ircy2UU", image: "https://img.youtube.com/vi/X58_ircy2UU/hqdefault.jpg" },
    { id: 6, link: "https://www.youtube.com/watch?v=kSuGOIhAzgA", image: "https://img.youtube.com/vi/kSuGOIhAzgA/hqdefault.jpg" }
  ];

  const activeItem = testimonials.find(t => t.id === activeVideoId);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white dark:from-gray-900 to-[#fdf0f7]/30 dark:to-pink-900/10 overflow-hidden relative transition-colors">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#fdf0f7] dark:from-pink-900/10 to-transparent opacity-50 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary-pink/5 dark:bg-pink-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#fdf0f7] dark:bg-pink-900/30 text-[#ED2793] dark:text-pink-400 text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-wide uppercase border border-[#ED2793]/10 dark:border-pink-500/20 shadow-sm dark:shadow-none">
              <span className="w-2 h-2 rounded-full bg-[#ED2793] dark:bg-pink-400 inline-block animate-pulse shadow-[0_0_8px_rgba(237,39,147,0.8)]"></span>
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#145390] dark:text-blue-100 mb-4 leading-tight">
              Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED2793] dark:from-pink-400 to-[#ff7eb3] dark:to-pink-300">Success Stories</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              Hear directly from our patients who have experienced the joy of parenthood through our dedicated care and advanced fertility treatments.
            </p>
          </div>
          
          <div className="hidden md:flex gap-3 shrink-0">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-[#ED2793]/30 dark:hover:border-pink-500/50 text-[#145390] dark:text-blue-300 hover:text-[#ED2793] dark:hover:text-pink-400 rounded-full transition-all duration-300 flex items-center justify-center shadow-md dark:shadow-none hover:shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 bg-[#145390] hover:bg-[#0e3d6e] text-white rounded-full transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-[0_8px_20px_rgba(20,83,144,0.3)]"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* CSS to hide scrollbar but keep functionality */}
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />

        <div 
          ref={scrollContainerRef}
          className="flex gap-5 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth pb-12 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setActiveVideoId(item.id)}
              className="relative group rounded-[2rem] overflow-hidden aspect-video bg-gray-900 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(237,39,147,0.15)] border-[6px] border-white dark:border-gray-800 shrink-0 w-[300px] sm:w-[360px] md:w-[440px] snap-center block transform transition-all duration-500 cursor-pointer"
            >
              {item.localVideo ? (
                /* Local video — use video element as thumbnail */
                <video
                  src={item.localVideo}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out"
                  muted
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img 
                  src={item.image} 
                  alt="Patient Success Story" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out" 
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:via-black/10 transition-colors duration-500"></div>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#ED2793] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(237,39,147,0.6)] transform group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mt-2 md:hidden">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-[#145390] dark:text-blue-300 rounded-full flex items-center justify-center shadow-md dark:shadow-none active:scale-95 transition-transform"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 bg-[#145390] text-white rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <Link href="/success-stories" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#ED2793] to-[#ff7eb3] rounded-full shadow-[0_8px_20px_rgba(237,39,147,0.3)] hover:shadow-[0_12px_25px_rgba(237,39,147,0.4)] hover:-translate-y-1">
            View All Success Stories
          </Link>
        </div>
      </div>

      {/* Video Modal Overlay */}
      {activeVideoId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer transition-opacity"
            onClick={() => setActiveVideoId(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
              onClick={() => setActiveVideoId(null)}
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            
            {activeItem?.localVideo ? (
              /* Native HTML5 player for local video */
              <video
                className="w-full h-full"
                src={activeItem.localVideo}
                controls
                autoPlay
                playsInline
                title="Patient Testimonial"
              />
            ) : (
              /* YouTube embed for remote videos */
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeItem?.link?.split('v=')[1]}?autoplay=1`}
                title="Patient Success Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
