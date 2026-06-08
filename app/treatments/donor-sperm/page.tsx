import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const donorCriteria = [
  { icon: '🚭', label: 'Do not smoke' },
  { icon: '🎂', label: 'Are aged between 18 to 40' },
  { icon: '💪', label: 'Are physically healthy' },
  { icon: '🧬', label: 'Have passed extensive medical and genetic screening tests' },
];

export default function DonorSpermPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">

        {/* ── HERO ── */}
        <div className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/treatments/donor_sperm_banner.jpg" alt="Donor Sperm" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              Donor Sperm
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/90 font-medium drop-shadow-md">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span>Donor Services</span>
              <span>›</span>
              <span className="text-white font-bold">Donor Sperm</span>
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
                  What is Donor Sperm?
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-6">
                  SPERM <span className="text-primary-pink">DONOR</span>
                </h2>
                <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
                  <strong className="text-primary-pink font-bold">SPERM DONOR:-</strong> When sperm is donated for use in the process of artificial insemination during an IVF procedure, it is known as donor sperm. Donor sperm is usually obtained from a sperm bank, a storage facility of healthy sperm from various donors
                </p>
              </div>

              {/* Right: Image */}
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="/images/treatments/sperm_donor_img.jpg"
                    alt="Sperm Donor Service"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/40 to-transparent" />
                  <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                    <p className="text-xs text-gray-500 font-semibold">Trusted by</p>
                    <p className="text-primary-blue font-extrabold text-lg leading-tight">15,000+ Families</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SELECTING A SPERM DONOR ── */}
        <section className="py-16 md:py-20 bg-[#f4f8fd]">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="inline-block bg-white text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 shadow-sm">
                Eligibility
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue">
                Selecting a Sperm Donor
              </h2>
              <p className="text-[#2e5299] mt-3 text-[16px] md:text-[18px] font-medium">
                Sperm can be donated by individuals who-
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {donorCriteria.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group hover:-translate-y-1 text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <p className="text-[15px] font-semibold text-primary-blue group-hover:text-primary-pink transition-colors leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Note card */}
            <div className="mt-10 bg-white border border-blue-100 rounded-2xl p-6 md:p-8 flex gap-5 items-start shadow-sm">
              <div className="shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-xl">ℹ️</div>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Usually, sperm from anonymous donors are taken for fertility treatment. However, sometimes couples may have the option to choose a donor who may share similar genetics as that of the father among the recipient parents.
              </p>
            </div>
          </div>
        </section>

        {/* ── SCREENING SECTION ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 items-center">

              {/* Left: decorative card */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary-blue to-[#1a6abf] rounded-3xl p-10 text-white text-center shadow-2xl">
                    <div className="text-6xl mb-4">🔬</div>
                    <h3 className="text-2xl font-extrabold mb-2">Rigorous Screening</h3>
                    <p className="text-blue-100 text-sm">Every donor undergoes thorough medical & genetic evaluation</p>
                  </div>

                </div>
              </div>

              {/* Right: Text */}
              <div className="lg:w-1/2">
                <span className="inline-block bg-pink-50 text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-6">
                  Screening of <span className="text-primary-pink">Sperm Donors</span>
                </h2>
                <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
                  Usually, sperm from anonymous donors are taken for fertility treatment. However, sometimes couples may have the option to choose a donor who may share similar genetics as that of the father among the recipient parents.
                </p>
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
              Ready to Take the Next Step?
            </h2>
            <p className="text-blue-100 text-[15px] md:text-base mb-8 max-w-xl mx-auto">
              Talk to our expert fertility specialists today. We're here to guide you every step of the way — with compassion, clarity, and world-class care.
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
