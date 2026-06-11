import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function TreatmentsSection() {
  const treatments = [
    {
      title: "Diagnostics",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="6" fill="#F5F3FF" stroke="#8B5CF6" strokeWidth="1.5" />
          <path d="M14.5 14.5L20 20" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M6 10h2.5l1.5-3.5 1.5 7 1-3.5H14" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="18" cy="7" r="2.5" stroke="#F59E0B" strokeWidth="1.2" />
        </svg>
      )
    },
    {
      title: "Gynaecological Procedures",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" fill="#FCE7F3" stroke="#DB2777" strokeWidth="1.5" />
          <path d="M9 10c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1v4h4v-4h1c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H9z" fill="#FCE7F3" stroke="#DB2777" strokeWidth="1.5" />
          <path d="M13.5 13.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5" stroke="#DB2777" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Male Infertility",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
          <path d="M12 14c-2.33 0-4.5.83-5.5 2.5.83.67 2.67 1.5 5.5 1.5s4.67-.83 5.5-1.5c-1-1.67-3.17-2.5-5-2.5z" fill="#0284C7" opacity="0.8" />
          <circle cx="12" cy="8" r="2.5" fill="#0284C7" opacity="0.8" />
        </svg>
      )
    },
    {
      title: "Fertility Treatments",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FCE7F3" stroke="#EC4899" strokeWidth="1.5" />
          <path d="M12 7c-1.66 0-3 1.34-3 3 0 1.2.7 2.24 1.72 2.73C10.28 13.2 10 13.82 10 14.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5c0-.68-.28-1.3-.72-1.77C15.3 12.24 16 11.2 16 10c0-1.66-1.34-3-3-3z" fill="#D01C70" opacity="0.85" />
          <circle cx="12.5" cy="10" r="1" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      title: "Donor Services",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
          <path d="M12 7l3.54 3.54a5 5 0 0 1-7.07 0z" fill="#EF4444" opacity="0.75" />
          <path d="M12 11v4M10 13h4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 16c0 3.31 2.69 6 6 6h4c3.31 0 6-2.69 6-6" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      title: "Fertility Preservation",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 3h6v2H9V3zm1 2h4v11a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2V5z" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
          <path d="M11 9h2v6h-2V9z" fill="#0284C7" opacity="0.8" />
          <path d="M16 12h6M19 9v6M16.5 14.5l5-5M16.5 9.5l5 5" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#f8fbff] dark:bg-gray-900 relative overflow-hidden transition-colors">
      {/* Background glowing blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-pink/10 dark:bg-pink-900/20 rounded-full blur-[80px]" />
        <div className="absolute top-[40%] -left-40 w-[600px] h-[600px] bg-primary-blue/5 dark:bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#145390] dark:text-blue-100 mb-6">
            Our Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED2793] dark:from-pink-400 to-[#ff7eb3] dark:to-pink-300">Treatments</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            We provide world-class fertility treatments with advanced technology, compassionate care, and transparent pricing to help you achieve your dream of parenthood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-gray-800 rounded-[2rem] p-8 shadow-sm dark:shadow-none hover:shadow-lg hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[220px] cursor-pointer border border-gray-50 dark:border-gray-700 hover:border-[#ED2793]/20 dark:hover:border-pink-500/30"
            >
              {/* Link Wrapper */}
              <Link href={`/services/${treatment.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="absolute inset-0 z-20">
                <span className="sr-only">View {treatment.title} services</span>
              </Link>
              
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#145390]/[0.02] to-[#ED2793]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#145390] to-[#ED2793] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="relative z-10">
                {/* Icon container */}
                <div className="w-16 h-16 rounded-2xl bg-[#f8fbff] dark:bg-gray-700 flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(237,39,147,0.15)] transition-all duration-500 border border-[#e8f1fb] dark:border-gray-600">
                  {treatment.icon}
                </div>

                {/* Title & Arrow Row */}
                <div className="flex items-end justify-between w-full mt-auto">
                  <h3 className="text-xl font-bold text-[#145390] dark:text-blue-100 leading-tight group-hover:text-[#ED2793] dark:group-hover:text-pink-400 transition-colors pr-4">
                    {treatment.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-[#f8fbff] dark:bg-gray-700 group-hover:bg-[#ED2793] dark:group-hover:bg-pink-500 flex items-center justify-center text-[#145390] dark:text-blue-200 group-hover:text-white transition-all transform group-hover:translate-x-1 shrink-0 group-hover:shadow-[0_4px_12px_rgba(237,39,147,0.3)] border border-[#e8f1fb] dark:border-gray-600 group-hover:border-transparent">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
