import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EmbryoReductionPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">

        {/* ── HERO ── */}
        <div className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/treatments/embryo_reduction_banner.jpg" alt="Embryo Reduction" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              Embryo Reduction
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/90 font-medium flex-wrap drop-shadow-md">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span>Fertility Preservation</span>
              <span>›</span>
              <span className="text-white font-bold">Embryo Reduction</span>
            </div>
          </div>
        </div>

        {/* ── INTRO SECTION ── */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

              {/* Left: Text */}
              <div className="lg:w-1/2">
                <span className="inline-block bg-blue-50 text-primary-blue text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                  Fertility Preservation
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-6">
                  Embryo-<span className="text-primary-pink">Reduction</span>
                </h2>
                
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-primary-pink/30 transition-colors">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-pink"></div>
                  <p className="text-gray-700 text-[15px] md:text-[17px] leading-relaxed relative z-10">
                    To reduce the likelihood of multiple pregnancies, embryo reduction is advised. Popular IVF recognizes the risks involved in multiple fetuses for both mother and fetuses. Our facility offers selective embryo reduction, which has been proven to significantly improve the outcome of the remaining fetuses, which ensures healthy pregnancy. Combining compassion with world-class facilities, embryo reduction is administered to minimize obstetric risks.
                  </p>
                  <div className="absolute right-0 bottom-0 opacity-5 text-8xl pointer-events-none -mb-6 -mr-4 text-primary-blue font-serif group-hover:text-primary-pink transition-colors">"</div>
                </div>
                
                {/* Assurance Note */}
                <div className="mt-8 flex items-center gap-4 bg-green-50 px-5 py-4 rounded-xl border border-green-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl">
                    🩺
                  </div>
                  <p className="text-sm font-semibold text-green-800">
                    Administered with absolute compassion to minimize obstetric risks and ensure a healthy pregnancy.
                  </p>
                </div>
              </div>

              {/* Right: Image */}
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl group">
                  <img
                    src="/images/treatments/embryo_reduction_img.jpg"
                    alt="Embryo Reduction Treatment Care"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/30 to-transparent pointer-events-none"></div>
                  
                  {/* Floating Badge - Top Right */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-white/20">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Focus</p>
                    <p className="text-primary-blue font-extrabold text-[15px]">Healthy Pregnancy</p>
                  </div>

                  {/* Floating Badge - Bottom Left */}
                  <div className="absolute bottom-6 left-6 bg-gradient-to-r from-[#ED2793] to-[#d61b7f] text-white rounded-2xl px-6 py-4 shadow-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">✨</span>
                      <div>
                        <p className="text-xs font-medium opacity-90 uppercase tracking-widest">Facility</p>
                        <p className="font-extrabold text-lg">World-Class Care</p>
                      </div>
                    </div>
                  </div>
                </div>
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
              Speak to Our Specialists Today
            </h2>
            <p className="text-blue-100 text-[15px] md:text-base mb-8 max-w-xl mx-auto">
              Our compassionate team is here to help you make informed decisions for a healthy pregnancy.
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
