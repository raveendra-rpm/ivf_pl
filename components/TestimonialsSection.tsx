"use client";

import { useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    { id: 1, link: "https://www.youtube.com/watch?v=ICIDc8_pZFU", image: "https://img.youtube.com/vi/ICIDc8_pZFU/hqdefault.jpg" },
    { id: 2, link: "https://www.youtube.com/watch?v=oNkc4DAfTEI", image: "https://img.youtube.com/vi/oNkc4DAfTEI/hqdefault.jpg" },
    { id: 3, link: "https://www.youtube.com/watch?v=PdLA7KCG-XI", image: "https://img.youtube.com/vi/PdLA7KCG-XI/hqdefault.jpg" },
    { id: 4, link: "https://www.youtube.com/watch?v=jbxUmHHYgdw", image: "https://img.youtube.com/vi/jbxUmHHYgdw/hqdefault.jpg" },
    { id: 5, link: "https://www.youtube.com/watch?v=X58_ircy2UU", image: "https://img.youtube.com/vi/X58_ircy2UU/hqdefault.jpg" },
    { id: 6, link: "https://www.youtube.com/watch?v=kSuGOIhAzgA", image: "https://img.youtube.com/vi/kSuGOIhAzgA/hqdefault.jpg" }
  ];

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
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#fdf0f7]/30 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#fdf0f7] to-transparent opacity-50 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary-pink/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#fdf0f7] text-[#ED2793] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-wide uppercase border border-[#ED2793]/10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ED2793] inline-block animate-pulse shadow-[0_0_8px_rgba(237,39,147,0.8)]"></span>
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#145390] mb-4 leading-tight">
              Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED2793] to-[#ff7eb3]">Success Stories</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Hear directly from our patients who have experienced the joy of parenthood through our dedicated care and advanced fertility treatments.
            </p>
          </div>
          
          <div className="hidden md:flex gap-3 shrink-0">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 bg-white border border-gray-100 hover:border-[#ED2793]/30 text-[#145390] hover:text-[#ED2793] rounded-full transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
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
            <a 
              key={item.id} 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-[2rem] overflow-hidden aspect-video bg-gray-900 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(237,39,147,0.15)] border-[6px] border-white shrink-0 w-[300px] sm:w-[360px] md:w-[440px] snap-center block transform transition-all duration-500"
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
            </a>
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mt-2 md:hidden">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 bg-white border border-gray-100 text-[#145390] rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform"
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
      </div>
    </section>
  );
}
