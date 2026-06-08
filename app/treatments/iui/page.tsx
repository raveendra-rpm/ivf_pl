import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessStepsSection from '@/components/ProcessStepsSection';

const icons: Record<string, string> = {
  "Donor sperm": "🧬",
  "Unexplained infertility": "❓",
  "Mild male factor infertility(subfertility)": "🔬",
  "Endometriosis-related infertility": "🫀",
  "Ovulatory factor infertility": "🔄",
  "Cervical factor infertility": "🔭",
  "Semen allergy": "⚕️",
};

const sections = [
  {
    title: "Donor sperm",
    text: "For women who need to use donor sperm to get pregnant, IUI is most commonly used to achieve pregnancy. Frozen donor sperm specimens are obtained from certified labs and thawed before the IUI procedure.",
  },
  {
    title: "Unexplained infertility",
    text: "IUI is often performed as a first treatment for unexplained infertility along with ovulation-inducing medications.",
  },
  {
    title: "Mild male factor infertility(subfertility)",
    text: "Your partner's semen analysis, one of the first steps in the medical assessment of infertility, may show below-average sperm concentration, weak movement (motility) of sperm, or abnormalities in sperm size and shape (morphology). IUI can overcome some of these problems because preparing sperm for the procedure helps separate highly motile, normal sperm from those of lower quality.",
  },
  {
    title: "Endometriosis-related infertility",
    text: "For infertility related to endometriosis, using medications to obtain a good-quality egg along with performing IUI is often the first treatment approach.",
  },
  {
    title: "Ovulatory factor infertility",
    text: "IUI may also be performed for women who have infertility caused by problems with ovulation, including an absence of ovulation or a reduced number of eggs.",
  },
  {
    title: "Cervical factor infertility",
    text: "Your cervix, at the lower end of the uterus, provides the opening between your vagina and uterus. Mucus produced by the cervix around the time of ovulation provides an ideal environment for sperm to travel from your vagina to the fallopian tubes. But, if your cervical mucus is too thick, it may impede the sperm's journey. The cervix itself may also prevent sperm from reaching the egg. Scarring, such as that caused by a biopsy or other procedures, can cause the cervix to thicken. IUI bypasses your cervix, depositing sperm directly into your uterus and increasing the number of sperm available to meet the awaiting egg.",
  },
  {
    title: "Semen allergy",
    text: "Rarely, an allergy to proteins in semen can cause infertility. Ejaculation into the vagina causes redness, burning and swelling where the semen contacts the skin. A condom can protect you from the symptoms, but it also prevents pregnancy. If your sensitivity is severe, IUI can be effective, since many of the proteins in semen are removed before the sperm is inserted.",
  },
];

export default function IUIPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">

        {/* ── HERO BANNER ── */}
        <div className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/treatments/intrauterine_insemination_banner.jpg" alt="Intrauterine Insemination (IUI)" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Intrauterine Insemination (IUI)</h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/90 font-medium drop-shadow-md">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span className="text-white font-bold">IUI</span>
            </div>
          </div>
        </div>

        {/* ── INTRO SECTION ── */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

              {/* Left: Text */}
              <div className="lg:w-1/2">
                <span className="inline-block bg-pink-50 text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">What is IUI?</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-6">
                  Intrauterine insemination <span className="text-primary-pink">(IUI)</span>
                </h2>
                <div className="space-y-4 text-gray-600 text-[15px] md:text-base leading-relaxed">
                  <p>
                    <strong className="text-primary-pink font-bold">IUI:-</strong> Intrauterine insemination (IUI) a type of artificial insemination is a procedure for treating infertility.Sperm that have been washed and concentrated are placed directly in your uterus around the time your ovary releases one or more eggs to be fertilized.
                  </p>
                  <p>
                    A couple's ability to become pregnant depends on many different factors. Intrauterine insemination is used most often in couples who have
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { value: '10–20%', label: 'Success Rate/Cycle' },
                    { value: '1–3 hrs', label: 'Procedure Time' },
                    { value: 'Non-Surgical', label: 'Pain-Free Process' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[#f4f8fd] rounded-2xl p-4 text-center">
                      <div className="text-base md:text-lg font-extrabold text-primary-blue">{stat.value}</div>
                      <div className="text-xs text-gray-500 font-medium mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image */}
              <div className="lg:w-1/2 w-full flex flex-col justify-center">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/treatments/intrauterine_insemination_first.jpg"
                    alt="IUI Treatment"
                    className="w-full h-auto object-contain bg-gray-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/30 to-transparent pointer-events-none"></div>
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue">When Is IUI Recommended?</h2>
              <p className="text-gray-500 mt-3 text-[15px] max-w-xl mx-auto">IUI is most often used in couples who have the following conditions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section) => (
                <div key={section.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
                  <div className="text-3xl mb-4">{icons[section.title]}</div>
                  <h3 className="text-[15px] md:text-base font-bold text-primary-blue mb-2 group-hover:text-primary-pink transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{section.text}</p>
                </div>
              ))}
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Start Your IUI Journey?</h2>
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
