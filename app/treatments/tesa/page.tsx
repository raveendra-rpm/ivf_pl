import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessStepsSection from '@/components/ProcessStepsSection';

export default function TESAPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">

        {/* ── HERO BANNER ── (intact) */}
        <div className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/treatments/testicular_sperm_aspiration_banner.jpeg" alt="Testicular Sperm Aspiration (TESA)" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Testicular Sperm Aspiration (TESA)</h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/90 font-medium drop-shadow-md">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span className="text-white font-bold">TESA</span>
            </div>
          </div>
        </div>

        {/* ── INTRO — two-column with accent bar ── */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

              {/* Left: Text */}
              <div className="lg:w-1/2">
                <span className="inline-block bg-pink-50 text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                  Male Infertility Treatment
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-8">
                  TESTICULAR SPERM <span className="text-primary-pink">ASPIRATION (TESA)</span>
                </h2>

                <div className="space-y-5 text-gray-600 text-[15px] md:text-base leading-relaxed">
                  <p>
                    <strong className="text-primary-pink font-bold">TESA:-</strong> Testicular Sperm Aspiration (TESA) is a minimally invasive surgical sperm retrieval technique. Along with ICSI, this sperm retrieval technique is used to support men who have extremely low sperm count or azoospermia (absence of sperm in the semen).
                  </p>
                  <p>
                    At Popular IVF, we have a team of experienced fertility specialists who work closely with specialised uro-andrologists to offer safe and effective TESA and other surgical sperm retrieval procedures.
                  </p>
                </div>

                {/* Stat pills */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {[
                    { icon: '⚕️', label: 'Minimally Invasive' },
                    { icon: '🔬', label: 'Azoospermia Treatment' },
                    { icon: '❄️', label: 'Sperm Vitrification' },
                    { icon: '🤝', label: 'Uro-Andrologist Team' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2 bg-[#f4f8fd] border border-blue-100 rounded-full px-4 py-2">
                      <span className="text-base">{item.icon}</span>
                      <span className="text-xs font-semibold text-primary-blue">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image with overlay card */}
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                  <img
                    src="/images/treatments/testicular_sperm_aspiration_img.jpeg"
                    alt="TESA Procedure"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/50 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HIGHLIGHTED INFO CARDS ── */}
        <section className="py-16 md:py-20 bg-[#f4f8fd]">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue">Important Considerations</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-[15px]">Key information about the TESA procedure and tissue management</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary-blue to-[#ED2793] rounded-l-3xl"></div>
                <div className="text-4xl mb-4">🧫</div>
                <h3 className="text-lg font-extrabold text-primary-blue mb-3 group-hover:text-primary-pink transition-colors">
                  TESE as a Diagnostic Procedure
                </h3>
                <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed">
                  In some situations, TESE (Testicular Sperm Extraction) may be recommended as a diagnostic procedure to check presence of sperm in the testicular tissue. In suchcases, subsequent surgical sperm retrieval attempts may not be successful as the testicular tissue can become fibrosed after the first procedure, complicating the retrieval.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#ED2793] to-[#ff7eb3] rounded-l-3xl"></div>
                <div className="text-4xl mb-4">❄️</div>
                <h3 className="text-lg font-extrabold text-primary-blue mb-3 group-hover:text-primary-pink transition-colors">
                  Tissue Freezing & Vitrification
                </h3>
                <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed">
                  In such situations, we freeze the biopsied tissue for future use to avoid the need for a secondary retrieval procedure. We also offer single sperm cell vitrification in case of extremely low sperm count.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE POPULAR IVF ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Image */}
              <div className="lg:w-5/12 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                  <img
                    src="/images/treatments/treatment_Intrauterine.jpg"
                    alt="Fertility specialists at Popular IVF"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-[#ED2793]/10"></div>
                </div>
              </div>

              {/* Right: Why Points */}
              <div className="lg:w-7/12">
                <span className="inline-block bg-pink-50 text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">Why Popular IVF</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-8">
                  Expert-Led Surgical Sperm Retrieval
                </h2>
                <div className="space-y-5">
                  {[
                    { icon: '👨‍⚕️', title: 'Specialist Team', desc: 'Our experienced fertility specialists work closely with specialised uro-andrologists to offer safe and effective TESA procedures.' },
                    { icon: '🔬', title: 'Advanced Techniques', desc: 'We use the latest minimally invasive surgical techniques to maximise success while minimising discomfort and recovery time.' },
                    { icon: '❄️', title: 'Tissue Banking', desc: 'We freeze biopsied tissue for future use, avoiding the need for a secondary retrieval procedure, and offer single sperm cell vitrification.' },
                    { icon: '🤝', title: 'Personalised Care', desc: 'Every patient receives a tailored treatment plan developed by our multidisciplinary team of fertility experts.' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 bg-[#f4f8fd] rounded-2xl p-5 border border-gray-100 hover:border-pink-200 hover:shadow-md transition-all duration-300 group">
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm border border-gray-100">
                        {item.icon}
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Start Your Journey?</h2>
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
