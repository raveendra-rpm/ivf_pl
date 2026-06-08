import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessStepsSection from '@/components/ProcessStepsSection';

export default function BlastocystCulturePage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">

        {/* ── HERO BANNER ── */}
        <div className="bg-gradient-to-r from-primary-blue via-[#ED2793] to-[#ff7eb3] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5 pointer-events-none"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Blastocyst Culture</h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/80 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span className="text-white font-semibold">Blastocyst Culture</span>
            </div>
          </div>
        </div>

        {/* ── INTRO SECTION ── */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

              {/* Left: Text */}
              <div className="lg:w-1/2">
                <span className="inline-block bg-pink-50 text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">What is Blastocyst Culture?</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-6">
                  BLASTOCYST <span className="text-primary-pink">CULTURE</span>
                </h2>
                <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-8">
                  <strong className="text-primary-pink font-bold">BLASTOCYST CULTURE:-</strong> Blastocyst culture is when embryos are grown in a laboratory for a few days. At this point, they are referred to as blastocyst embryos. With advancements in the field of Assisted Reproductive Technology ART, we can culture the embryos for five to six days till they start to form two distinct layers. Allowing the embryos to grow to this blastocyst stage allows us to select and use embryos with the highest developmental potential.
                </p>

                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: '5-6 Days', label: 'Culture Duration', icon: '⏳' },
                    { value: 'High Potential', label: 'Embryo Selection', icon: '⭐' },
                    { value: 'ART', label: 'Advanced Tech', icon: '🔬' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-gradient-to-br from-[#f4f8fd] to-[#edf3fb] rounded-2xl p-4 text-center border border-blue-50 hover:shadow-md transition-shadow">
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-sm md:text-base font-extrabold text-primary-blue">{stat.value}</div>
                      <div className="text-[11px] text-gray-500 font-medium mt-1 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image */}
              <div className="lg:w-1/2 w-full relative">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                  <img
                    src="/images/treatments/blastocyst_culture_first.jpeg"
                    alt="Blastocyst Culture in Laboratory"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY SECTION ── */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#f4f8fd] via-[#edf3fb] to-[#f8f4fd] relative overflow-hidden">
          <div className="absolute -left-32 top-10 w-80 h-80 rounded-full bg-[#ED2793]/5 blur-3xl pointer-events-none"></div>
          <div className="absolute -right-32 bottom-10 w-80 h-80 rounded-full bg-primary-blue/5 blur-3xl pointer-events-none"></div>

          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 items-center">

              {/* Left Image */}
              <div className="lg:w-5/12 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-square max-w-sm mx-auto lg:max-w-none">
                  <img
                    src="/images/treatments/why_blastocyst_culture_img.jpeg"
                    alt="Why Blastocyst Culture"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-[#ED2793]/10"></div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:w-7/12">
                <span className="inline-block bg-white text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 shadow-sm border border-pink-100">Indications</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-6">
                  Why Blastocyst Culture
                </h2>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <p className="text-gray-700 text-[15px] md:text-base leading-relaxed">
                    Blastocyst culture is recommended in an IVF cycle if there is a need to perform a single embryo transfer to avoid multiple pregnancies. The most visible embryo for transfer can be chosen if the duration of embryo culture is extended. Moreover, Blastocyst Culture also facilitates the storage of excess healthy embryos by freezing them for later use (Egg Freezing)
                  </p>
                </div>
                
                {/* Highlight chips */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {['Single Embryo Transfer', 'Avoid Multiple Pregnancies', 'Better Selection', 'Egg Freezing'].map((tag) => (
                    <span key={tag} className="bg-white text-primary-blue border border-blue-100 font-semibold text-xs px-4 py-2 rounded-full shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRANSFER PROCEDURE ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">

            {/* Section Header */}
            <div className="text-center mb-14">
              <span className="inline-block bg-pink-50 text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue">Blastocyst Culture and Transfer</h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left: Procedure text */}
              <div className="lg:w-1/2 w-full">
                 <div className="space-y-6 text-gray-600 text-[15px] md:text-base leading-relaxed">
                    <p>
                      In this procedure, embryos from an IVF treatment are cultured in the laboratory till they form two distinct layers – an outer layer of trophectoderm/trophoblastic cells and the inner cell mass (ICM). This stage is known as the blastocyst stage. Not all embryos grow to the blastocyst stage and surviving blastocysts are graded based on the number of cells in the layers as well as growth rate.
                    </p>
                    <p>
                      The doctor will select the best embryo for transfer and/or freezing. The selected blastocyst is transferred into the uterus with a thin catheter under ultrasound guidance.
                    </p>
                    <p>
                      You will be asked to take a pregnancy test approximately 12 days after the transfer. During this time, it is recommended that you avoid physical exertion and heavy lifting. Excess blastocysts can be frozen and transferred later.
                    </p>
                 </div>
              </div>
              
              {/* Right: Timeline cards */}
              <div className="lg:w-1/2 w-full">
                 <div className="space-y-4">
                  {[
                    { step: '01', title: 'Culture to Blastocyst Stage', desc: 'Embryos cultured in the lab till they form two distinct layers (trophectoderm and ICM).' },
                    { step: '02', title: 'Grading and Selection', desc: 'Surviving blastocysts are graded, and the best embryo is selected for transfer.' },
                    { step: '03', title: 'Embryo Transfer', desc: 'The selected blastocyst is transferred into the uterus with a thin catheter under ultrasound guidance.' },
                    { step: '04', title: 'Post-Transfer Care', desc: 'Avoid physical exertion and heavy lifting. Take a pregnancy test approx 12 days later.' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-5 bg-[#f4f8fd] rounded-2xl p-5 border border-gray-100 hover:border-pink-200 hover:shadow-md transition-all duration-300 group">
                      <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-blue to-[#ED2793] flex items-center justify-center shadow-md">
                        <span className="text-white font-extrabold text-sm">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-blue text-[15px] mb-1 group-hover:text-primary-pink transition-colors">{item.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Start Your Treatment?</h2>
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
