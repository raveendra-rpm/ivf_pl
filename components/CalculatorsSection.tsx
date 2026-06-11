import Link from 'next/link';

export default function CalculatorsSection() {
  const calculators = [
    {
      title: 'Ovulation Calculator',
      href: '/trying-for-a-baby/ovulation-calculator',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary-pink">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ),
    },
    {
      title: 'Period Calculator',
      href: '/trying-for-a-baby/period-calculator',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#145390]">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      title: 'Pregnancy Calculator',
      href: '/trying-for-a-baby/pregnancy-calculator',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary-pink">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Pregnancy Conception Calculator',
      href: '/trying-for-a-baby/pregnancy-conception-calculator',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#145390]">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f8fbff] to-white py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#145390] leading-tight max-w-4xl mx-auto">
            Pregnancy Calculator Tools for <br className="hidden md:block" />
            <span className="text-primary-pink">Confident and Stress-Free</span> Pregnancy Planning
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {calculators.map((calc, idx) => (
            <Link href={calc.href} key={idx} className="block group">
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-pink/30 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary-pink to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-50 to-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {calc.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#145390] transition-colors leading-snug">
                  {calc.title}
                </h3>
                
                <div className="mt-auto pt-6">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#145390] group-hover:text-white transition-colors text-gray-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}
