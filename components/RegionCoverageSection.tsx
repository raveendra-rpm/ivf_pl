'use client';

import { MapPin, Users, ArrowRight } from 'lucide-react';

const cities = [
  { name: 'Varanasi', isHub: true },
  { name: 'Prayagraj', isHub: false },
  { name: 'Gorakhpur', isHub: false },
  { name: 'Mirzapur', isHub: false },
  { name: 'Jaunpur', isHub: false },
  { name: 'Azamgarh', isHub: false },
  { name: 'Ghazipur', isHub: false },
  { name: 'All Over UP & Nearby States', isHub: false },
];
export default function RegionCoverageSection() {
  return (
    <section
      id="coverage"
      className="relative py-0 bg-white dark:bg-gray-900 overflow-hidden transition-colors"
    >
      {/* Full-bleed gradient banner */}
      <div className="bg-gradient-to-br from-[#0d2d52] via-[#145390] to-[#1a6abf] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ED2793]/10 blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        {/* Watermark text */}
        <div className="absolute bottom-4 right-8 text-white/5 text-[120px] font-black leading-none select-none hidden lg:block">UP</div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── LEFT: Content ── */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full mb-7 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-[#ED2793] inline-block animate-pulse" />
                Poorvanchal Region Coverage
              </div>

              {/* Redesigned Professional Heading */}
              <div className="mb-8">
                {/* Eyebrow line */}
                <p className="text-blue-300 text-xs font-semibold uppercase tracking-[0.25em] mb-3 flex items-center gap-2">
                  <span className="w-5 h-px bg-blue-300/60 inline-block" />
                  Serving Thousands of Families
                  <span className="w-5 h-px bg-blue-300/60 inline-block" />
                </p>

                {/* Main heading */}
                <h2 className="text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-white leading-[1.15] tracking-tight">
                  Patients Travel From Across
                  <br />
                  {/* Highlighted region with gradient underline */}
                  <span className="relative inline-block mt-1">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#f9a8d4] via-[#ED2793] to-[#f9a8d4]">
                      Eastern UP &amp; Poorvanchal
                    </span>
                    {/* Decorative underline */}
                    <span
                      className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #ED2793 0%, #f9a8d4 50%, transparent 100%)' }}
                    />
                  </span>
                  <br />
                  <span className="text-white/80 text-2xl md:text-3xl lg:text-[2rem] font-medium tracking-normal">
                    — To Seek World-Class IVF Care
                  </span>
                </h2>
              </div>

              <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                Beyond Varanasi, we proudly welcome patients from Prayagraj, Gorakhpur, Mirzapur, Jaunpur, Azamgarh, Ghazipur, and all surrounding districts. World-class IVF care is now closer to you than ever.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/book-appointment"
                  className="inline-flex items-center justify-center gap-3 bg-[#ED2793] hover:bg-[#c71f7e] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#ED2793]/30 hover:-translate-y-0.5 group"
                >
                  Book Consultation
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
                <a
                  href="tel:9151000135"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300"
                >
                  Call Helpdesk
                </a>
              </div>
            </div>

            {/* ── RIGHT: Cities Grid ── */}
            <div className="relative">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-white/5 rounded-3xl blur-xl scale-110 pointer-events-none" />

              <div className="relative bg-white/8 backdrop-blur-md rounded-3xl border border-white/15 p-7 md:p-8 shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-7 pb-5 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#ED2793]/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#f9a8d4]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base">Patients Come From These Cities</p>
                    <p className="text-blue-200 text-xs">Cities our patients travel from to reach us</p>
                  </div>
                </div>

                {/* City chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cities.map((city, i) => (
                    <div
                      key={i}
                      className={`group flex items-center justify-between gap-3 rounded-2xl px-4 py-3.5 transition-all duration-200 cursor-default ${
                        city.isHub
                          ? 'bg-[#ED2793]/20 border border-[#ED2793]/40'
                          : 'bg-white/8 border border-white/10 hover:bg-white/15 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          city.isHub ? 'bg-[#ED2793] shadow-lg shadow-[#ED2793]/40' : 'bg-white/10'
                        }`}>
                          <MapPin className={`w-4 h-4 ${city.isHub ? 'text-white' : 'text-blue-200'}`} />
                        </div>
                        <div>
                          <p className={`font-semibold text-sm ${city.isHub ? 'text-white' : 'text-white/90'}`}>
                            {city.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer note */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-blue-300 shrink-0" />
                  <p className="text-blue-200 text-xs leading-relaxed">
                    Patients from <span className="text-white font-semibold">Uttar Pradesh, Bihar & Jharkhand</span> regularly visit our centre for advanced fertility treatment.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
