import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessStepsSection from '@/components/ProcessStepsSection';

const procedureSteps = [
  { step: '01', icon: '🩸', title: 'Blood Test', desc: 'Initial blood test to ascertain baseline hormone levels and medication dosage.' },
  { step: '02', icon: '🔬', title: 'Ultrasound Scan', desc: 'Ultrasound scan on day 2–3 of your period to establish a baseline.' },
  { step: '03', icon: '💊', title: 'Medication', desc: 'Oral tablets or injections to promote follicular growth containing eggs.' },
  { step: '04', icon: '📊', title: 'Monitoring', desc: 'Regular ultrasound scans and blood tests to monitor follicular development.' },
  { step: '05', icon: '💉', title: 'Trigger Injection', desc: 'Trigger injection to induce ovulation for intercourse, IUI or egg retrieval.' },
];

export default function OvulationInductionPage() {
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Ovulation Induction</h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/80 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span className="text-white font-semibold">Ovulation Induction</span>
            </div>
          </div>
        </div>

        {/* ── INTRO SECTION ── */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

              {/* Left: Text */}
              <div className="lg:w-1/2">
                <span className="inline-block bg-pink-50 text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">What is Ovulation Induction?</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-6">
                  OVULATION <span className="text-primary-pink">INDUCTION</span>
                </h2>
                <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-8">
                  <strong className="text-primary-pink font-bold">OVULATION INDUCTION:-</strong> Ovulation is the release of an egg from the ovaries in the middle of a woman's menstrual cycle. It is regulated by hormones produced by the ovaries. Hormone imbalances, certain medical treatments, and menstrual disorders like PCOS can inhibit the production and release of eggs from the ovaries. It is estimated that almost 25 per cent of female infertility cases stem from problems with ovulation. Ovulation induction is a fertility treatment which uses hormone-based medications to stimulate ovulation in women with irregular or absent ovulation (anovulation). This treatment is often done in conjunction with assisted conception treatments like IUI and IVF. In some couples, ovulation induction can result in spontaneous conception as well.
                </p>

                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: '25%', label: 'Infertility from Ovulation Issues', icon: '📈' },
                    { value: 'IUI + IVF', label: 'Used Alongside', icon: '🔗' },
                    { value: 'PCOS', label: 'Commonly Treated', icon: '💊' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-gradient-to-br from-[#f4f8fd] to-[#edf3fb] rounded-2xl p-4 text-center border border-blue-50 hover:shadow-md transition-shadow">
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-sm md:text-base font-extrabold text-primary-blue">{stat.value}</div>
                      <div className="text-[11px] text-gray-500 font-medium mt-1 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image with floating card */}
              <div className="lg:w-1/2 w-full relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="/images/treatments/ovulation_induction_banner.jpg"
                    alt="Ovulation Induction Treatment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                    <p className="text-xs text-gray-500 font-semibold">Trusted by</p>
                    <p className="text-primary-blue font-extrabold text-lg leading-tight">15,000+ Families</p>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-[#ED2793] text-white rounded-2xl px-4 py-3 shadow-xl text-center hidden lg:block">
                  <div className="text-xl font-extrabold">25%</div>
                  <div className="text-[10px] font-bold leading-tight">Female Infertility<br/>from Ovulation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY SECTION — full-width illustrated ── */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#f4f8fd] via-[#edf3fb] to-[#f8f4fd] relative overflow-hidden">
          <div className="absolute -left-32 top-10 w-80 h-80 rounded-full bg-[#ED2793]/5 blur-3xl pointer-events-none"></div>
          <div className="absolute -right-32 bottom-10 w-80 h-80 rounded-full bg-primary-blue/5 blur-3xl pointer-events-none"></div>

          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 items-center">

              {/* Left Image */}
              <div className="lg:w-5/12 w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square max-w-sm mx-auto lg:max-w-none">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80"
                    alt="Why Ovulation Induction"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-[#ED2793]/10"></div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:w-7/12">
                <span className="inline-block bg-white text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 shadow-sm border border-pink-100">Who Needs It</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-6">
                  Why Ovulation Induction?
                </h2>
                <p className="text-gray-700 text-[15px] md:text-base leading-relaxed mb-8">
                  Ovulation induction is recommended to women who show signs of hormone imbalances or ovulation disorders characterised by irregular or no periods and for couples with no male factor infertility. This procedure is often administered as a component of assisted conception treatments like IUI and IVF if the female partner has low ovarian reserve or ovulation disorders.
                </p>
                {/* Highlight chips */}
                <div className="flex flex-wrap gap-3">
                  {['Irregular or No Periods', 'Hormone Imbalances', 'Low Ovarian Reserve', 'PCOS', 'Ovulation Disorders'].map((tag) => (
                    <span key={tag} className="bg-white text-primary-blue border border-blue-100 font-semibold text-xs px-4 py-2 rounded-full shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TREATMENT PROCEDURE ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">

            {/* Section Header */}
            <div className="text-center mb-14">
              <span className="inline-block bg-pink-50 text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue">Ovulation Induction – Treatment Procedure</h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-[15px] leading-relaxed">
                A blood test is necessary before starting ovulation induction. This is followed by an ultrasound scan on day 2-day 3 of your period. The reason for which these tests are conducted is that they are used to ascertain a baseline, medication start date as well as the dosage and type of medication to be used in the treatment.
              </p>
            </div>

            {/* Step Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {procedureSteps.map((item, idx) => (
                <div
                  key={item.step}
                  className={`relative bg-gradient-to-br from-[#f4f8fd] to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  {/* Step number accent */}
                  <div className="absolute top-4 right-4 text-[10px] font-extrabold text-gray-200 leading-none" style={{fontSize: '3rem', lineHeight: 1}}>
                    {item.step}
                  </div>
                  <div className="text-3xl mb-4 relative z-10">{item.icon}</div>
                  <h4 className="font-bold text-primary-blue text-base mb-2 relative z-10 group-hover:text-primary-pink transition-colors">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary-blue to-[#ED2793] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Bottom paragraph */}
            <div className="bg-[#f4f8fd] rounded-2xl p-6 md:p-8 border border-blue-50">
              <p className="text-gray-700 text-[15px] md:text-base leading-relaxed">
                The medication used in the treatment can either be oral tablets or injections which promote the growth of fluid-filled sacs (follicles) containing eggs in the ovaries. For monitoring your response to the treatment and follicular development ultrasound scans and blood tests would be administered. After the follicles achieve the desired maturity and size, you will be given a trigger injection to induce ovulation in preparation for intercourse, IUI or egg retrieval.
              </p>
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
