import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessStepsSection from '@/components/ProcessStepsSection';

const advantages = [
  "Minimal handling of the embryo",
  "Fast and exact control over drilling of the shell opening",
  "It is gentle and safe, with no negative effects on the embryo",
  "Wide availability to patients, and offered under clinical guidance depending on your particular circumstances",
];

export default function LAHPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">

        {/* ── HERO BANNER ── */}
        <div className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/treatments/laser_assisted_hatching_banner.jpg" alt="LAH | Laser Assisted Hatching" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">LAH | Laser Assisted Hatching</h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/90 font-medium drop-shadow-md">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span className="text-white font-bold">LAH</span>
            </div>
          </div>
        </div>

        {/* ── INTRO SECTION ── */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

              {/* Left: Text */}
              <div className="lg:w-1/2">
                <span className="inline-block bg-pink-50 text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">What is LAH?</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-6">
                  Laser-assisted <span className="text-primary-pink">hatching</span>
                </h2>
                <div className="space-y-4 text-gray-600 text-[15px] md:text-base leading-relaxed">
                  <p>
                    <strong className="text-primary-pink font-bold">LAH:-</strong> Laser-assisted hatching is a scientific IVF technique that can make it easier for the embryo to "hatch" or breakthrough its outer layer or "shell" (a membrane also known as the zona pellucida) by creating an opening. In some situations, this layer is abnormally thick and/or hardened with the freezing and thawing process among the contributing factors. The less difficulty the embryo has in hatching, the better its chance of attaching or implanting into the wall of the uterus.
                  </p>
                  <p>
                    Pregnancy cannot occur unless the embryo hatches and implants, and laser-assisted hatching can play a key role in achieving these crucial steps.
                  </p>
                  <p>
                    Sometimes, IVF is offered as a primary treatment for infertility in women over age 40. IVF can also be done if you have certain health conditions. For example, IVF may be an option if you or your partner has:
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { value: 'Laser', label: 'Technology Used' },
                    { value: 'Non-Invasive', label: 'Safe Procedure' },
                    { value: 'IVF+LAH', label: 'Combined Treatment' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[#f4f8fd] rounded-2xl p-4 text-center">
                      <div className="text-sm md:text-base font-extrabold text-primary-blue">{stat.value}</div>
                      <div className="text-xs text-gray-500 font-medium mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image */}
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="/images/treatments/laser_assisted_first_img.jpg"
                    alt="Laser Assisted Hatching"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/30 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                    <p className="text-xs text-gray-500 font-semibold">Trusted by</p>
                    <p className="text-primary-blue font-extrabold text-lg leading-tight">15,000+ Families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ADVANTAGES SECTION ── */}
        <section className="py-16 md:py-20 bg-[#f4f8fd]">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 items-center">

              {/* Left: Content */}
              <div className="lg:w-1/2">
                <span className="inline-block bg-white text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 shadow-sm">Why Choose LAH</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-4">
                  Advantages of laser-assisted hatching
                </h2>
                <p className="text-gray-600 text-[15px] mb-8 leading-relaxed">
                  A laser has been shown to be superior to other forms of assisted hatching (chemical and manual) thanks to several advantages
                </p>
                <div className="space-y-4">
                  {advantages.map((advantage, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 group hover:border-pink-200 hover:shadow-md transition-all duration-300">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-blue to-[#ED2793] flex items-center justify-center">
                        <span className="text-white font-bold text-xs">{idx + 1}</span>
                      </div>
                      <p className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed pt-1 group-hover:text-gray-900 transition-colors">
                        {advantage}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image */}
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="/images/treatments/laser_assisted_hatching_second.jpg"
                    alt="Baby feet - LAH success"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS SECTION ── */}
        <ProcessStepsSection />

        {/* ── CTA SECTION ── */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary-blue via-[#1a6abf] to-[#0e3d6e] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#ED2793]/10 translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Start Your LAH Journey?</h2>
            <p className="text-blue-100 text-[15px] md:text-base mb-8 max-w-xl mx-auto">Talk to our expert fertility specialists today. We're here to guide you every step of the way — with compassion, clarity, and world-class care.</p>
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
