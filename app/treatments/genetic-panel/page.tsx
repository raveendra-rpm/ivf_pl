import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GeneticPanelPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">

        {/* ── HERO ── */}
        <div className="bg-gradient-to-r from-primary-blue via-[#ED2793] to-[#ff7eb3] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
              Genetic Panel
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/80 font-medium flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span>Genetics & Diagnostics</span>
              <span>›</span>
              <span className="text-white font-semibold">Genetic Panel</span>
            </div>
          </div>
        </div>

        {/* ── INTRO SECTION ── */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

              {/* Left: Text */}
              <div className="lg:w-1/2">
                <span className="inline-block bg-pink-50 text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                  Genetics & Diagnostics
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-6">
                  Genetic <span className="text-primary-pink">Panel</span>
                </h2>
                
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-primary-pink/30 transition-colors">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-pink"></div>
                  <p className="text-gray-700 text-[15px] md:text-[17px] leading-relaxed relative z-10">
                    Popular IVF is a dedicated IVF facility which aims to offer solutions regarding infertility. The facility is equipped with a dedicated in-house genetic panel that offers comprehensive genomic testing and resources. Our clinical services is a blend of dynamic scientific advances with emotional support so the patients are at ease during the course of treatment. We distinguish our facility as top-notch since we employ highly qualified fertility experts and clinical technicians at our genetic panel. Since the process of achieving pregnancy can be challenging and depressing for many couples, we provide routine pre-pregnancy counselling, options for carrier screening and customized fertility treatments. Furthermore, Popular IVF extends its personalized support with regard to reproductive genes and integrates necessary information to enhance your chances of a healthy pregnancy.
                  </p>
                  <div className="absolute right-0 bottom-0 opacity-5 text-8xl pointer-events-none -mb-6 -mr-4 text-primary-blue font-serif group-hover:text-primary-pink transition-colors">"</div>
                </div>
                
                {/* Assurance Note */}
                <div className="mt-8 flex items-center gap-4 bg-blue-50 px-5 py-4 rounded-xl border border-blue-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-blue/10 text-primary-blue rounded-full flex items-center justify-center text-xl">
                    🤝
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    A blend of dynamic scientific advances with emotional support to ensure you're at ease.
                  </p>
                </div>
              </div>

              {/* Right: Image */}
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80"
                    alt="Genetic Panel and Counselling"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/30 to-transparent pointer-events-none"></div>
                  
                  {/* Floating Badge - Top Right */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-white/20">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Testing</p>
                    <p className="text-primary-blue font-extrabold text-[15px]">Genomic Resources</p>
                  </div>

                  {/* Floating Badge - Bottom Left */}
                  <div className="absolute bottom-6 left-6 bg-gradient-to-r from-[#ED2793] to-[#d61b7f] text-white rounded-2xl px-6 py-4 shadow-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">👩‍⚕️</span>
                      <div>
                        <p className="text-xs font-medium opacity-90 uppercase tracking-widest">Support</p>
                        <p className="font-extrabold text-lg">Pre-Pregnancy Counselling</p>
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
              Comprehensive Genomic Support
            </h2>
            <p className="text-blue-100 text-[15px] md:text-base mb-8 max-w-xl mx-auto">
              Our dedicated in-house genetic panel is here to provide the insights and emotional support you need to enhance your chances of a healthy pregnancy.
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
