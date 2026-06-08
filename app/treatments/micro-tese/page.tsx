import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessStepsSection from '@/components/ProcessStepsSection';

export default function MicroTESEPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">

        {/* ── HERO BANNER ── */}
        <div className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/treatments/micro-tese_banner.jpeg" alt="Micro-TESE" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Micro-TESE</h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/90 font-medium drop-shadow-md">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span className="text-white font-bold">Micro-TESE</span>
            </div>
          </div>
        </div>

        {/* ── INTRO SECTION ── */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

              {/* Left: Text */}
              <div className="lg:w-1/2">
                <span className="inline-block bg-pink-50 text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">Male Infertility Treatment</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-8">
                  Micro-<span className="text-primary-pink">TESE</span>
                </h2>

                <div className="space-y-5 text-gray-600 text-[15px] md:text-base leading-relaxed">
                  <p>
                    <strong className="text-primary-pink font-bold">Micro-TESE:-</strong> Microsurgical testicular sperm extraction commonly known as Micro TESE or mTESE is an advanced surgical sperm retrieval procedure. In this procedure, sperm is retrieved directly from testicular tissue. Studies have shown that this procedure yields the highest sperm retrieval rate with minimal damage to the testicles.
                  </p>
                  <p>
                    At Popular IVF, our team of fertility specialists and uroandrologists specialise in performing a wide range of surgical sperm retrieval procedures including Micro TESE. We also offer the facility for single sperm vitrification in case of extremely low sperm count.
                  </p>
                </div>

                {/* Pill tags */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {[
                    { icon: '🔬', label: 'Microsurgical Technique' },
                    { icon: '📈', label: 'Highest Retrieval Rate' },
                    { icon: '🛡️', label: 'Minimal Tissue Damage' },
                    { icon: '❄️', label: 'Sperm Vitrification' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2 bg-[#f4f8fd] border border-blue-100 rounded-full px-4 py-2">
                      <span className="text-base">{item.icon}</span>
                      <span className="text-xs font-semibold text-primary-blue">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image */}
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                  <img
                    src="/images/treatments/microsurgical_testicular_sperm.jpg"
                    alt="Micro-TESE Procedure"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                    <p className="text-xs text-gray-500 font-semibold">Trusted by</p>
                    <p className="text-primary-blue font-extrabold text-lg leading-tight">15,000+ Families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── KEY ADVANTAGES ── */}
        <section className="py-16 md:py-20 bg-[#f4f8fd]">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue">Why Micro-TESE?</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-[15px]">An advanced microsurgical approach offering superior outcomes for non-obstructive azoospermia</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '📈', accent: 'from-primary-blue to-[#ED2793]', title: 'Highest Sperm Retrieval Rate', desc: 'Studies have shown that Micro TESE yields the highest sperm retrieval rate compared to other surgical sperm retrieval techniques, offering the best chance for men with severe azoospermia.' },
                { icon: '🛡️', accent: 'from-[#ED2793] to-[#ff7eb3]', title: 'Minimal Damage to Testicles', desc: 'The microsurgical approach allows precise identification of sperm-producing areas under high magnification, minimising unnecessary damage to the testicular tissue.' },
                { icon: '👨‍⚕️', accent: 'from-primary-blue to-[#1a6abf]', title: 'Expert Uro-Andrologist Team', desc: 'At Popular IVF, our team of fertility specialists and uroandrologists specialise in performing a wide range of surgical sperm retrieval procedures including Micro TESE.' },
                { icon: '❄️', accent: 'from-[#1a6abf] to-[#ED2793]', title: 'Single Sperm Vitrification', desc: 'We also offer the facility for single sperm cell vitrification in case of extremely low sperm count, preserving every chance of future conception.' },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${card.accent} rounded-l-3xl`}></div>
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-base font-extrabold text-primary-blue mb-3 group-hover:text-primary-pink transition-colors">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY POPULAR IVF ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Image */}
              <div className="lg:w-5/12 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80"
                    alt="Popular IVF Specialists"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-[#ED2793]/10"></div>
                </div>
              </div>

              {/* Right: Features */}
              <div className="lg:w-7/12">
                <span className="inline-block bg-pink-50 text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">Our Approach</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-8">
                  Specialised Care at Popular IVF
                </h2>
                <div className="space-y-5">
                  {[
                    { icon: '🔭', title: 'High-Magnification Microsurgery', desc: 'We use advanced surgical microscopes for high magnification, enabling targeted sperm extraction with maximum precision.' },
                    { icon: '👥', title: 'Multidisciplinary Expert Team', desc: 'Our fertility specialists and uroandrologists collaborate to deliver the safest and most effective outcomes for each patient.' },
                    { icon: '💉', title: 'Tailored Treatment Plans', desc: 'Every patient receives a personalised treatment plan based on their specific diagnosis, medical history and fertility goals.' },
                    { icon: '🏥', title: 'End-to-End Support', desc: 'From diagnosis through procedure to post-treatment care, we are with you at every step of your fertility journey.' },
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
              <Link href="/book-appointment" className="bg-[#ED2793] hover:bg-[#d61b7f] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-[15px]">
                Book a Free Consultation
              </Link>
              <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-all text-[15px] backdrop-blur-sm">
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
