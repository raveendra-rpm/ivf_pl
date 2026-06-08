import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';

export default function RepeatedIVFFailurePage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">
        
        {/* ── HERO ── */}
        <div className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/treatments/repeated_ivf_failure_banner.jpg" alt="Repeated IVF Failure" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              Repeated IVF Failure
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/90 font-medium flex-wrap drop-shadow-md">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Second Opinion</span>
              <span>›</span>
              <span className="text-white font-bold">Repeated IVF Failure</span>
            </div>
          </div>
        </div>

        {/* ── INTRO SECTION (PREMIUM LAYOUT) ── */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

              {/* Left: Text */}
              <div className="lg:w-1/2">
                <span className="inline-block bg-pink-50 text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                  Second Opinion
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-6">
                  Understanding <span className="text-primary-pink">Repeated IVF Failure</span>
                </h2>
                
                <div className="bg-white border border-gray-100 shadow-none rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-primary-pink/30 transition-colors">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-pink"></div>
                  <div className="space-y-4 text-gray-700 text-[15px] md:text-[17px] leading-relaxed relative z-10">
                    <p>
                      Repeated IVF failure can be emotionally difficult and needs a careful review of previous cycles before planning another attempt.
                    </p>
                    <p>
                      Popular IVF Centre evaluates embryo, uterus, ovarian reserve, sperm factors, lab details, and transfer history to guide the next step.
                    </p>
                  </div>
                  <div className="absolute right-0 bottom-0 opacity-5 text-8xl pointer-events-none -mb-6 -mr-4 text-primary-blue font-serif group-hover:text-primary-pink transition-colors">"</div>
                </div>
                
                {/* Assurance Note */}
                <div className="mt-8 flex items-center gap-4 bg-blue-50 px-5 py-4 rounded-xl border border-blue-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-blue/10 text-primary-blue rounded-full flex items-center justify-center text-xl">
                    🔬
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    Careful review of previous cycles for targeted treatment planning.
                  </p>
                </div>
              </div>

              {/* Right: Single Image with Floating Badges */}
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-sm group">
                  <img
                    src="/images/treatments/ivf_failure_img.jpg"
                    alt="Repeated IVF Failure Review"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/10 to-transparent pointer-events-none"></div>
                  
                  {/* Floating Badge - Top Right */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-white/20">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Evaluation</p>
                    <p className="text-primary-blue font-extrabold text-[15px]">Root-Cause Analysis</p>
                  </div>

                  {/* Floating Badge - Bottom Left */}
                  <div className="absolute bottom-6 left-6 bg-gradient-to-r from-[#ED2793] to-[#d61b7f] text-white rounded-2xl px-6 py-4 shadow-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">👩‍⚕️</span>
                      <div>
                        <p className="text-xs font-medium opacity-90 uppercase tracking-widest">Support</p>
                        <p className="font-extrabold text-lg">Next-Step Planning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── KEY POINTS SECTION ── */}
        <section className="py-16 md:py-24 bg-[#f8fbff] relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#145390]">
                Key Points
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                A structured approach to evaluating past cycles and improving future outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="group bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ED2793] transition-colors duration-300 text-primary-pink group-hover:text-white font-black text-2xl">
                  01
                </div>
                <h3 className="text-xl font-bold text-primary-blue mb-4">Cycle Review</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Previous stimulation, egg quality, embryo development, and transfer reports are assessed.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ED2793] transition-colors duration-300 text-primary-pink group-hover:text-white font-black text-2xl">
                  02
                </div>
                <h3 className="text-xl font-bold text-primary-blue mb-4">Root-Cause Evaluation</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Uterine, hormonal, genetic, sperm, and lifestyle factors may be investigated.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ED2793] transition-colors duration-300 text-primary-pink group-hover:text-white font-black text-2xl">
                  03
                </div>
                <h3 className="text-xl font-bold text-primary-blue mb-4">Next-Step Planning</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  A revised protocol is prepared based on findings and patient history.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── EVALUATION LIST SECTION ── */}
        <section className="py-20 md:py-28 bg-white relative">
          <div className="absolute left-0 top-0 w-full h-1/2 bg-gradient-to-b from-[#f8fbff] to-transparent pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl ring-1 ring-gray-900/5 max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary-blue font-bold text-sm tracking-wide uppercase mb-4">
                  Investigations
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#145390]">
                  Possible Areas To Review
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl mx-auto">
                {[
                  "Ovarian reserve and egg quality",
                  "Semen parameters",
                  "Embryo quality",
                  "Endometrial lining",
                  "Transfer technique and timing"
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="group flex items-center gap-4 bg-gray-50 rounded-2xl p-4 hover:bg-blue-50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary-blue transition-colors duration-300">
                      <ChevronRight className="w-5 h-5 text-primary-pink group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700 font-semibold group-hover:text-primary-blue transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary-blue via-[#1a6abf] to-[#0e3d6e] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#ED2793]/10 translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Get the Right Answers for Your Journey
            </h2>
            <p className="text-blue-100 text-[15px] md:text-base mb-8 max-w-xl mx-auto">
              Our experts provide a detailed structured medical evaluation to understand possible causes of IVF failure. Let us help you plan for a healthy pregnancy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-appointment"
                className="bg-[#ED2793] hover:bg-[#d61b7f] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-[15px]"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-all text-[15px] backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
