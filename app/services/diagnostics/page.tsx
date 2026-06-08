import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const treatments = [
  {
    title: 'Infertility Assessment Panel',
    desc: 'Comprehensive initial testing for both partners to understand fertility status.',
    link: '/treatments/infertility-assessment-panel',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Hormone Assay & Ovarian Reserve',
    desc: 'Blood tests to check hormone levels and the quantity/quality of remaining eggs.',
    link: '/treatments/hormone-assay-ovarian-reserve',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Ultrasound (3D & Doppler)',
    desc: 'Advanced imaging to examine the uterus, ovaries, and blood flow.',
    link: '/treatments/ultrasound-3d-doppler',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Tubal Patency Tests (SSG)',
    desc: 'Evaluating whether the fallopian tubes are open and healthy.',
    link: '/treatments/tubal-patency-tests',
    image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Genetic Panel',
    desc: 'Testing to identify potential genetic disorders that could affect fertility or offspring.',
    link: '/treatments/genetic-panel',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'PGS/PGD Screening',
    desc: 'Preimplantation genetic screening/diagnosis of embryos before transfer during IVF.',
    link: '/treatments/pgs-screening',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
  },
];

const otherServices = [
  { title: 'Fertility Treatments', link: '/services/fertility-treatments', icon: '✨', color: 'from-pink-50 to-pink-100 border-pink-200' },
  { title: 'Male Infertility', link: '/services/male-infertility', icon: '👨', color: 'from-blue-50 to-blue-100 border-blue-200' },
  { title: 'Donor Services', link: '/services/donor-services', icon: '🧬', color: 'from-emerald-50 to-emerald-100 border-emerald-200' },
  { title: 'Fertility Preservation', link: '/services/fertility-preservation', icon: '❄️', color: 'from-sky-50 to-sky-100 border-sky-200' },
  { title: 'Gynaecological Procedures', link: '/services/gynaecological-procedures', icon: '🩺', color: 'from-violet-50 to-violet-100 border-violet-200' },
];

export default function DiagnosticsPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px]">

        {/* ── HERO ── */}
        <div className="relative bg-[#060f24] overflow-hidden min-h-[420px] md:min-h-[500px] flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1400&q=80"
              alt="Diagnostics"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060f24] via-[#060f24]/80 to-[#145390]/40" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ED2793]/10 blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] rounded-full bg-[#145390]/20 blur-[100px] translate-y-1/2" />

          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 py-20">
            <div className="flex items-center gap-2 mb-6 text-sm text-white/50 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span className="text-white/70">Services</span>
              <span>›</span>
              <span className="text-white font-semibold">Diagnostics</span>
            </div>
            <span className="inline-flex items-center gap-2 bg-[#ED2793]/20 border border-[#ED2793]/40 text-[#ED2793] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED2793] inline-block animate-pulse" />
              Accurate Evaluation
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-2xl">
              Finding the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED2793] to-[#ff7eb3]">Root Cause</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-10">
              A successful fertility treatment begins with an accurate diagnosis. At Popular IVF, we utilize advanced diagnostic tools to thoroughly evaluate both partners.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { value: '90%+', label: 'Success Rate' },
                { value: '10,000+', label: 'Happy Families' },
                { value: '5+', label: 'Years Experience' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-extrabold text-white">{s.value}</span>
                  <span className="text-white/50 text-xs font-medium mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── INTRO STRIP ── */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl py-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-extrabold text-[#145390] mb-2">Comprehensive Diagnostic Panels</h2>
                <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed">
                  Our comprehensive diagnostic panels include hormonal assays, advanced ultrasound imaging, genetic testing, and structural evaluations. This detailed approach allows us to create a highly personalized and effective treatment plan for you.
                </p>
              </div>
              <div className="flex gap-4 shrink-0">
                <Link href="/book-appointment" className="bg-[#ED2793] hover:bg-[#d61b7f] text-white font-bold px-6 py-3 rounded-full text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Book Consultation
                </Link>
                <Link href="/contact" className="border border-[#145390] text-[#145390] hover:bg-[#145390] hover:text-white font-bold px-6 py-3 rounded-full text-sm transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── TREATMENTS GRID ── */}
        <section className="py-20 md:py-28 bg-[#f4f8fd]">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="text-center mb-14">
              <span className="inline-block bg-white text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 shadow-sm border border-pink-100">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#145390]">Diagnostic Services</h2>
              <p className="text-gray-500 text-sm md:text-base mt-3 max-w-xl mx-auto">High-precision testing to identify the core factors of infertility.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {treatments.map((item) => (
                <Link
                  href={item.link}
                  key={item.title}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#ED2793]/20 flex flex-col hover:-translate-y-1.5"
                >
                  <div className="h-52 overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-[17px] font-extrabold text-[#145390] mb-2 group-hover:text-[#ED2793] transition-colors leading-snug">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-grow">{item.desc}</p>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-[#145390] to-[#ED2793] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY US STRIP ── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '🏆', title: 'Clinically Reliable', desc: 'Evidence-based, proven protocols' },
                { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges, ever' },
                { icon: '🤝', title: 'Compassionate Care', desc: 'Supportive team at every step' },
                { icon: '🔬', title: 'Advanced Technology', desc: 'State-of-the-art IVF lab' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#f4f8fd] border border-blue-50 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#145390] text-sm md:text-base mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OTHER SERVICES ── */}
        <section className="py-16 bg-[#f4f8fd] border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary-blue">Explore Other Services</h2>
              <p className="text-gray-500 text-sm mt-2">Navigate seamlessly across all our specialized care offerings</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {otherServices.map((item) => (
                <Link href={item.link} key={item.title} className={`bg-gradient-to-br ${item.color} rounded-2xl p-5 text-center border hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-center items-center gap-3`}>
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="text-sm font-bold text-primary-blue leading-tight">{item.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="py-20 relative overflow-hidden bg-[#060f24]">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1400&q=80" alt="CTA background" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ED2793]/10 rounded-full blur-[100px]" />
          <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center relative z-10">
            <span className="inline-block bg-[#ED2793]/20 border border-[#ED2793]/30 text-[#ED2793] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Take the First Step</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED2793] to-[#ff7eb3]">Journey?</span>
            </h2>
            <p className="text-white/60 text-[15px] md:text-base mb-10 max-w-lg mx-auto">
              Talk to our expert fertility specialists at Popular IVF, Varanasi. We're here to guide you with compassion, clarity, and world-class care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-appointment" className="bg-[#ED2793] hover:bg-[#d61b7f] text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-[#ED2793]/30 hover:shadow-xl hover:-translate-y-0.5 text-[15px]">
                Book a Free Consultation
              </Link>
              <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-10 py-4 rounded-full transition-all text-[15px] backdrop-blur-sm">
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
