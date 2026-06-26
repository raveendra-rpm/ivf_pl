'use client';

import { CheckCircle2, IndianRupee, BadgePercent, Clock, ShieldCheck, Sparkles } from 'lucide-react';

const pricingData = [
  {
    tag: 'Entry Level',
    name: 'IUI Treatment',
    price: '₹10,000',
    priceNote: 'Starting from',
    description: 'Intrauterine Insemination — ideal for mild fertility issues.',
    features: [
      'Follicular Monitoring',
      'Sperm Wash & Preparation',
      'IUI Procedure',
      'Expert Consultation',
    ],
    accentColor: 'from-[#0ea5e9] to-[#145390]',
    badgeBg: 'bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300',
    highlight: false,
  },
  {
    tag: 'Most Popular',
    name: 'IVF Treatment',
    price: '₹1,10,000',
    priceNote: 'Starting from',
    description: 'In Vitro Fertilization — our most chosen path to parenthood.',
    features: [
      'Ovarian Stimulation',
      'Egg Retrieval',
      'Embryo Culture & Grading',
      'Embryo Transfer',
    ],
    accentColor: 'from-[#145390] to-[#ED2793]',
    badgeBg: 'bg-white/20 text-white',
    highlight: true,
  },
  {
    tag: 'Advanced',
    name: 'ICSI Treatment',
    price: '₹1,30,000',
    priceNote: 'Starting from',
    description: 'Intracytoplasmic Sperm Injection — for severe male infertility.',
    features: [
      'Advanced Sperm Selection',
      'Direct Sperm Injection',
      'High Fertilization Rate',
      'Includes All IVF Steps',
    ],
    accentColor: 'from-[#ED2793] to-[#9333ea]',
    badgeBg: 'bg-pink-50 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
    highlight: false,
  },
];

const emiPerks = [
  { icon: <BadgePercent className="w-5 h-5" />, label: '0% Interest EMI' },
  { icon: <Clock className="w-5 h-5" />, label: 'Instant Approval' },
  { icon: <ShieldCheck className="w-5 h-5" />, label: 'Minimal Documentation' },
  { icon: <IndianRupee className="w-5 h-5" />, label: 'Flexible Tenure' },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative py-20 md:py-28 bg-[#f4f8fd] dark:bg-gray-900 overflow-hidden transition-colors"
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#dbeafe] dark:bg-blue-900/20 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#fce7f3] dark:bg-pink-900/20 rounded-full blur-3xl opacity-40 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-[#145390] dark:text-blue-300 text-xs font-semibold px-4 py-2 rounded-full shadow-sm border border-[#145390]/10 dark:border-blue-800 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#ED2793]" />
            Our Fertility Treatments & Financing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 leading-tight mb-4">
            Choose the Right{' '}
            <span className="text-[#145390] dark:text-blue-300">Treatment Plan</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-2xl mx-auto">
            Varanasi's most trusted fertility clinic offering tailored treatments and flexible financing options to help make your dream of parenthood a reality.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {pricingData.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${plan.highlight
                ? 'shadow-2xl shadow-[#145390]/20 dark:shadow-[#ED2793]/10 scale-[1.03] md:scale-[1.05]'
                : 'shadow-md dark:shadow-black/30 bg-white dark:bg-gray-800'
                }`}
            >
              {/* Gradient top bar / full card for highlight */}
              {plan.highlight ? (
                <div className={`bg-gradient-to-br ${plan.accentColor} p-[2px] rounded-3xl h-full`}>
                  <div className="bg-[#0d2d52] dark:bg-[#0a1f38] rounded-3xl h-full flex flex-col">
                    {/* Card inner — highlighted */}
                    <div className="p-7 flex-grow flex flex-col">
                      {/* Badge */}
                      <span className={`self-start text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 ${plan.badgeBg}`}>
                        {plan.tag}
                      </span>

                      {/* Gradient accent line */}
                      <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${plan.accentColor} mb-5`} />

                      <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-6">{plan.description}</p>

                      {/* Price removed as requested */}

                      {/* Features */}
                      <ul className="space-y-3 flex-grow">
                        {plan.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                            <span className="text-white/80 text-sm">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="px-7 pb-7">
                      <a
                        href="/book-appointment"
                        className={`w-full block text-center py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r ${plan.accentColor} text-white hover:opacity-90 transition-opacity shadow-lg`}
                      >
                        Book Free Consultation
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                // Non-highlighted card
                <div className="bg-white dark:bg-gray-800 rounded-3xl flex flex-col h-full">
                  {/* Gradient accent bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${plan.accentColor} rounded-t-3xl`} />

                  <div className="p-7 flex-grow flex flex-col">
                    {/* Badge */}
                    <span className={`self-start text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 ${plan.badgeBg}`}>
                      {plan.tag}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-1">{plan.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">{plan.description}</p>

                    {/* Price removed as requested */}

                    {/* Features */}
                    <ul className="space-y-3 flex-grow">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#ED2793] shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="px-7 pb-7">
                    <a
                      href="/book-appointment"
                      className="w-full block text-center py-3.5 px-6 rounded-xl font-bold text-sm bg-[#f0f6ff] dark:bg-[#145390]/20 text-[#145390] dark:text-blue-300 hover:bg-[#145390] hover:text-white dark:hover:bg-[#145390] dark:hover:text-white transition-all duration-200 border border-[#145390]/20 dark:border-[#145390]/30"
                    >
                      Book Consultation
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>



        {/* EMI Banner */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-gradient-to-br from-[#145390] via-[#1a6abf] to-[#0e3d6e] p-8 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-10 -left-6 w-52 h-52 rounded-full bg-white/5 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Left text */}
              <div className="flex-1 text-center md:text-left">
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">
                  <IndianRupee className="w-3.5 h-3.5" />
                  Easy Financing Options
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Flexible EMI Available
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed max-w-md mb-6">
                  Start your treatment today without financial stress. We offer 0% interest EMI plans so you can focus entirely on your dream of parenthood.
                </p>
                <a
                  href="tel:+919151000135"
                  className="inline-flex items-center gap-2 bg-[#ED2793] hover:bg-[#d41c7b] text-white font-semibold py-2.5 px-6 rounded-full transition-colors shadow-lg"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +91 9151000135 - Call to know more
                </a>
              </div>

              {/* Perks grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
                {emiPerks.map((perk, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1.5 sm:gap-2.5 bg-white/10 backdrop-blur-sm rounded-xl px-2 sm:px-4 py-2.5 sm:py-3">
                    <span className="text-[#ED2793] shrink-0">{perk.icon}</span>
                    <span className="text-white text-[11px] sm:text-sm font-medium leading-tight">{perk.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-gray-400 dark:text-gray-500 text-xs mt-5">
          * Treatment recommendations and customized plans will be discussed in detail during your personalized consultation.
        </p>

      </div>
    </section>
  );
}
