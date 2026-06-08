import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessStepsSection from '@/components/ProcessStepsSection';

export default function IVFPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">
        {/* Hero Section */}
        <div className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/treatments/in_vitro_fertilization_banner.jpg" alt="In vitro fertilization (IVF)" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">In vitro fertilization (IVF)</h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/90 font-medium drop-shadow-md">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span className="text-white font-bold">IVF</span>
            </div>
          </div>
        </div>

        {/* ── INTRO SECTION ── */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

              {/* Left: Text */}
              <div className="lg:w-1/2">
                <span className="inline-block bg-pink-50 text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">What is IVF?</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-6">
                  In vitro fertilization <span className="text-primary-pink">(IVF)</span>
                </h2>
                <div className="space-y-4 text-gray-600 text-[15px] md:text-base leading-relaxed">
                  <p>
                    <strong className="text-primary-pink font-bold">IVF</strong> (in vitro fertilization) is a complex series of procedures used to help with fertility or prevent genetic problems and assist with the conception of a child.
                  </p>
                  <p>
                    During IVF, mature eggs are collected (retrieved) from ovaries and fertilized by sperm in a lab. Then the fertilized egg (embryo) or eggs (embryos) are transferred to a uterus. One full cycle of IVF takes about three weeks. Sometimes these steps are split into different parts and the process can take longer.
                  </p>
                  <p>
                    Sometimes, IVF is offered as a primary treatment for infertility in women over age 40. IVF can also be done if you have certain health conditions.
                  </p>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { value: '80%+', label: 'Success Rate' },
                    { value: '3 Weeks', label: 'Per Cycle' },
                    { value: '15,000+', label: 'Babies Born' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[#f4f8fd] rounded-2xl p-4 text-center">
                      <div className="text-xl md:text-2xl font-extrabold text-primary-blue">{stat.value}</div>
                      <div className="text-xs text-gray-500 font-medium mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image */}
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=900&q=80"
                    alt="Happy mother and baby after IVF"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/30 to-transparent"></div>
                  {/* Badge */}
                  <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                    <p className="text-xs text-gray-500 font-semibold">Trusted by</p>
                    <p className="text-primary-blue font-extrabold text-lg leading-tight">15,000+ Families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONDITIONS SECTION ── */}
        <section className="py-16 md:py-20 bg-[#f4f8fd]">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="inline-block bg-white text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 shadow-sm">IVF May Be Right For You If…</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue">Conditions We Treat</h2>
              <p className="text-gray-500 mt-3 text-[15px] max-w-xl mx-auto">IVF may be an option if you or your partner has any of the following conditions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '🔬',
                  title: 'Fallopian Tube Damage or Blockage',
                  desc: 'Damage or blockage makes it difficult for an egg to be fertilized or for an embryo to travel to the uterus.',
                },
                {
                  icon: '🔄',
                  title: 'Ovulation Disorders',
                  desc: 'If ovulation is infrequent or absent, fewer eggs are available for fertilization.',
                },
                {
                  icon: '🧬',
                  title: 'Endometriosis',
                  desc: 'Tissue similar to the uterus lining grows outside the uterus — affecting ovaries, uterus and fallopian tubes.',
                },
                {
                  icon: '🫁',
                  title: 'Uterine Fibroids',
                  desc: 'Benign tumors in the uterus, common in women in their 30s–40s, can interfere with embryo implantation.',
                },
                {
                  icon: '⚕️',
                  title: 'Previous Tubal Sterilization',
                  desc: 'IVF may be an alternative to tubal ligation reversal surgery if you wish to conceive again.',
                },
                {
                  icon: '🧪',
                  title: 'Impaired Sperm Production',
                  desc: 'Abnormalities in sperm concentration, movement, or shape can make fertilization difficult.',
                },
                {
                  icon: '❓',
                  title: 'Unexplained Infertility',
                  desc: 'No cause of infertility found despite evaluation for common causes — IVF can still help.',
                },
                {
                  icon: '🧬',
                  title: 'A Genetic Disorder',
                  desc: 'Preimplantation genetic testing via IVF screens embryos for genetic problems before transfer.',
                },
                {
                  icon: '💊',
                  title: 'Fertility Preservation',
                  desc: 'Before cancer treatment, eggs or embryos can be frozen via IVF for use in the future.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-[15px] md:text-base font-bold text-primary-blue mb-2 group-hover:text-primary-pink transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS SECTION ── */}
        <ProcessStepsSection />

        {/* ── GESTATIONAL CARRIER NOTE ── */}
        <section className="py-10 bg-[#f4f8fd]">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="bg-white border border-blue-100 rounded-2xl p-6 md:p-8 flex gap-5 items-start shadow-sm">
              <div className="shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-xl">ℹ️</div>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Women who don't have a functional uterus or for whom pregnancy poses a serious health risk might choose IVF using another person to carry the pregnancy <strong className="text-primary-blue">(gestational carrier)</strong>. In this case, the woman's eggs are fertilized with sperm, but the resulting embryos are placed in the gestational carrier's uterus.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary-blue via-[#1a6abf] to-[#0e3d6e] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#ED2793]/10 translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Start Your IVF Journey?</h2>
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
