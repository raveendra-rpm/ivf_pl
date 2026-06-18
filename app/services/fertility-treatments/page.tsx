import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const treatments = [
  {
    title: 'In Vitro Fertilization (IVF)',
    desc: 'Our gold-standard IVF program combines the latest laboratory techniques with personalized stimulation protocols, giving you the best possible chance of success.',
    link: '/treatments/ivf',
    image: '/images/in_vitro_fertilization.jpg',
    tag: 'Most Popular',
    tagColor: 'bg-[#ED2793] text-white',
  },
  {
    title: 'Intracytoplasmic Sperm Injection (ICSI)',
    desc: 'A single healthy sperm is injected directly into an egg — ideal for male factor infertility. Performed with precision in our advanced embryology lab.',
    link: '/treatments/icsi',
    image: '/images/intracytoplasmic_sperm_injection.jpg',
    tag: 'Advanced',
    tagColor: 'bg-[#145390] text-white',
  },
  {
    title: 'Intrauterine Insemination (IUI)',
    desc: 'A minimally invasive first-line fertility treatment — carefully prepared sperm is placed directly into the uterus at peak ovulation timing.',
    link: '/treatments/iui',
    image: '/images/intrauterine_insemination.jpg',
    tag: 'Minimally Invasive',
    tagColor: 'bg-emerald-500 text-white',
  },
  {
    title: 'Ovulation Induction',
    desc: 'Targeted hormonal medications stimulate the ovaries to produce one or more mature eggs, significantly improving chances of natural conception or IUI.',
    link: '/treatments/ovulation-induction',
    image: '/images/ovulation_induction_img.jpg',
    tag: 'First Step',
    tagColor: 'bg-violet-500 text-white',
  },
  {
    title: 'Blastocyst Culture & Transfer',
    desc: 'Embryos are cultured for 5–6 days to the blastocyst stage before transfer, resulting in significantly higher implantation and pregnancy rates.',
    link: '/treatments/blastocyst-culture',
    image: '/images/blastocyst_culture_&_transfer.jpg',
    tag: 'High Success Rate',
    tagColor: 'bg-amber-500 text-white',
  },
  {
    title: 'Laser Assisted Hatching (LAH)',
    desc: 'A precise laser creates a small opening in the embryo shell, facilitating easier implantation — especially beneficial for patients with repeated IVF failures.',
    link: '/treatments/lah',
    image: '/images/laser_assisted_hatching.jpg',
    tag: 'Precision Tech',
    tagColor: 'bg-sky-500 text-white',
  },
];

const otherServices = [
  { title: 'Male Infertility', link: '/services/male-infertility', icon: '👨', color: 'from-blue-50 to-blue-100 border-blue-200' },
  { title: 'Donor Services', link: '/services/donor-services', icon: '🧬', color: 'from-pink-50 to-pink-100 border-pink-200' },
  { title: 'Fertility Preservation', link: '/services/fertility-preservation', icon: '❄️', color: 'from-sky-50 to-sky-100 border-sky-200' },
  { title: 'Gynaecological Procedures', link: '/services/gynaecological-procedures', icon: '🩺', color: 'from-violet-50 to-violet-100 border-violet-200' },
  { title: 'Diagnostics', link: '/services/diagnostics', icon: '🔬', color: 'from-amber-50 to-amber-100 border-amber-200' },
];

export default function FertilityTreatmentsPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px]">

        {/* ── HERO ── */}
        <div className="relative bg-[#060f24] overflow-hidden min-h-[420px] md:min-h-[500px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1400&q=80"
              alt="Fertility Treatments"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060f24] via-[#060f24]/80 to-[#145390]/40" />
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ED2793]/10 blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] rounded-full bg-[#145390]/20 blur-[100px] translate-y-1/2" />

          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 py-20">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-sm text-white/50 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span className="text-white/70">Services</span>
              <span>›</span>
              <span className="text-white font-semibold">Fertility Treatments</span>
            </div>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-[#ED2793]/20 border border-[#ED2793]/40 text-[#ED2793] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED2793] inline-block animate-pulse" />
              Comprehensive Fertility Care
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-2xl">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED2793] to-[#ff7eb3]">Fertility</span> Treatments
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-10">
              From first steps to advanced procedures — Popular IVF offers a complete range of fertility treatments, each personalized for your unique journey to parenthood.
            </p>
            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: '86%+', label: 'Success Rate' },
                { value: '15,000+', label: 'Happy Families' },
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
                <h2 className="text-xl md:text-2xl font-extrabold text-[#145390] mb-2">Why Choose Popular IVF for Fertility Treatment?</h2>
                <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed">
                  At Popular IVF, Varanasi, we combine state-of-the-art technology with compassionate, personalized care. Every treatment plan is tailored to your unique medical profile, ensuring the highest possible success rates with transparent, affordable pricing.
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#145390]">Treatments We Offer</h2>
              <p className="text-gray-500 text-sm md:text-base mt-3 max-w-xl mx-auto">Clinically proven procedures — from foundational to highly advanced — all available under one roof.</p>
            </div>

            {/* Featured first treatment — wide horizontal card */}
            <div className="mb-7">
              <Link href={treatments[0].link} className="group flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#ED2793]/20 hover:-translate-y-1">
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                  <img src={treatments[0].image} alt={treatments[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ED2793] text-white text-[11px] font-bold px-3 py-1.5 rounded-full">Featured</span>
                  </div>
                </div>
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-[#ED2793] text-xs font-bold uppercase tracking-widest mb-3">Gold Standard Treatment</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#145390] mb-4 group-hover:text-[#ED2793] transition-colors leading-tight">{treatments[0].title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{treatments[0].desc}</p>
                  <div className="flex items-center gap-2 text-[#145390] font-bold text-sm">
                    <span className="w-8 h-8 rounded-full bg-[#f4f8fd] flex items-center justify-center text-lg">✨</span>
                    <span>Available at Popular IVF, Varanasi</span>
                  </div>
                </div>
                <div className="h-1 md:w-1 md:h-auto w-full bg-gradient-to-r md:bg-gradient-to-b from-[#145390] to-[#ED2793] scale-x-0 md:scale-x-100 md:scale-y-0 group-hover:scale-x-100 group-hover:md:scale-y-100 transition-transform duration-500 origin-left md:origin-top" />
              </Link>
            </div>

            {/* 2-column row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              {treatments.slice(1, 3).map((item, index) => (
                <Link
                  href={item.link}
                  key={item.title}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#ED2793]/20 flex flex-col hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white/90 text-[11px] font-semibold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                        {index === 0 ? 'Advanced Procedure' : 'Minimally Invasive'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-extrabold text-[#145390] mb-2 group-hover:text-[#ED2793] transition-colors leading-snug">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-grow">{item.desc}</p>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-[#145390] to-[#ED2793] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              ))}
            </div>

            {/* 3-column row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {treatments.slice(3).map((item) => (
                <Link
                  href={item.link}
                  key={item.title}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#ED2793]/20 flex flex-col hover:-translate-y-1"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-[16px] font-extrabold text-[#145390] mb-2 group-hover:text-[#ED2793] transition-colors leading-snug">{item.title}</h3>
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
