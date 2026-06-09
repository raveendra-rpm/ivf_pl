'use client';

import { useState } from 'react';
import { Microscope, Stethoscope, Activity, Building, ArrowRight, X, ZoomIn, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    title: 'Advanced Embryology Lab',
    desc: 'Class 100 Clean Room for maximum success rates.',
    icon: <Microscope className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop', // placeholder
    colSpan: 'md:col-span-2 md:row-span-2',
    height: 'h-[300px] md:h-[420px]',
  },
  {
    title: 'Modular Operation Theatre',
    desc: 'State-of-the-art surgical equipment.',
    icon: <Activity className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop', // placeholder
    colSpan: 'md:col-span-1 md:row-span-1',
    height: 'h-[200px]',
  },
  {
    title: 'Private Consultation Rooms',
    desc: 'Confidential & comfortable environment.',
    icon: <Stethoscope className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop', // placeholder
    colSpan: 'md:col-span-1 md:row-span-1',
    height: 'h-[200px]',
  },
  {
    title: 'Patient Recovery Ward',
    desc: 'Premium care and nursing.',
    icon: <Building className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop', // placeholder
    colSpan: 'md:col-span-2 md:row-span-1',
    height: 'h-[200px]',
  },
];

interface FacilityTourSectionProps {
  showExploreButton?: boolean;
}

export default function FacilityTourSection({ showExploreButton = true }: FacilityTourSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#fdfafb] dark:bg-gray-900 relative overflow-hidden transition-colors">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 dark:bg-[#ED2793]/10 rounded-full blur-3xl opacity-60 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 dark:bg-[#145390]/10 rounded-full blur-3xl opacity-60 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-pink-50 dark:bg-pink-900/30 text-[#ED2793] dark:text-pink-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <Building className="w-3.5 h-3.5" />
              Infrastructure
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-50 leading-tight mb-4">
              Take a Tour of Our <br className="hidden md:block" />
              <span className="text-[#145390] dark:text-blue-400">World-Class Facility</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              We believe in complete transparency. Explore our advanced embryology labs, highly-equipped operation theatres, and comfortable consultation rooms designed for your safety and success.
            </p>
          </div>
        </div>

        {/* Top Feature: Video Tour Placeholder */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 group cursor-pointer">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />
          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop"
            alt="Clinic Overview"
            className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#ED2793] shadow-xl">
                <Play className="w-5 h-5 ml-1 fill-current" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 z-20">
            <span className="bg-[#ED2793] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-2 inline-block">
              Video Tour
            </span>
            <h3 className="text-2xl font-bold text-white drop-shadow-md">Walkthrough Popular IVF Centre</h3>
          </div>
        </div>

        {/* Gallery Grid - exact match with the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${item.colSpan} ${item.height}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                <ZoomIn className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {showExploreButton && (
          <div className="mt-12 flex justify-center">
            <a
              href="/gallery-tour"
              className="inline-flex items-center gap-3 bg-[#145390] hover:bg-[#0f4070] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(20,83,144,0.3)] hover:shadow-[0_10px_25px_rgba(20,83,144,0.4)] hover:-translate-y-0.5 group"
            >
              Explore Full Gallery
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-50"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <img
            src={galleryItems[selectedIndex].image}
            alt={galleryItems[selectedIndex].title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 select-none"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-50"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-6 left-0 right-0 text-center text-white/70 text-sm pointer-events-none">
            {selectedIndex + 1} / {galleryItems.length}
          </div>
        </div>
      )}
    </section>
  );
}
