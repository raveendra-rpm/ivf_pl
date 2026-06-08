import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const treatments = [
  {
    title: 'Egg Freezing (Oocyte Cryopreservation)',
    desc: 'Freezing unfertilized eggs to preserve a woman’s fertility for future use.',
    link: '/treatments/egg-freezing',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Sperm Freezing',
    desc: 'Cryopreserving sperm for future use, often recommended before cancer treatments or for convenience during IVF.',
    link: '/treatments/sperm-freezing',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Embryo Freezing (Cryopreservation)',
    desc: 'Freezing excess embryos created during an IVF cycle for future transfers.',
    link: '/treatments/fet',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Ovarian Cortex Freezing',
    desc: 'Freezing ovarian tissue containing thousands of immature eggs; primarily for prepubertal girls facing cancer treatment.',
    link: '/treatments/ovarian-cortex-freezing',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Testicular Tissue Freezing',
    desc: 'Preserving testicular tissue containing sperm or sperm-producing cells.',
    link: '/treatments/testicular-tissue-freezing',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Cancer Fertility Preservation',
    desc: 'Specialized rapid preservation protocols for patients recently diagnosed with cancer.',
    link: '/treatments/cancer-fertility-preservation',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
  },
];

const otherServices = [
  { title: 'Fertility Treatments', link: '/services/fertility-treatments', icon: '✨', color: 'from-pink-50 to-pink-100 border-pink-200' },
  { title: 'Male Infertility', link: '/services/male-infertility', icon: '👨', color: 'from-blue-50 to-blue-100 border-blue-200' },
  { title: 'Donor Services', link: '/services/donor-services', icon: '🧬', color: 'from-emerald-50 to-emerald-100 border-emerald-200' },
  { title: 'Gynaecological Procedures', link: '/services/gynaecological-procedures', icon: '🩺', color: 'from-violet-50 to-violet-100 border-violet-200' },
  { title: 'Diagnostics', link: '/services/diagnostics', icon: '🔬', color: 'from-amber-50 to-amber-100 border-amber-200' },
];

export default function FertilityPreservationPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px]">

        {/* ── HERO ── */}
        <div className="relative bg-[#060f24] overflow-hidden min-h-[420px] md:min-h-[500px] flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80"
              alt="Fertility Preservation"
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
              <span className="text-white font-semibold">Fertility Preservation</span>
            </div>
            <span className="inline-flex items-center gap-2 bg-[#ED2793]/20 border border-[#ED2793]/40 text-[#ED2793] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED2793] inline-block animate-pulse" />
              Future Planning
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-2xl">
              Protect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED2793] to-[#ff7eb3]">Fertility Options</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-10">
              Whether you are delaying parenthood or facing medical treatments, Popular IVF offers advanced preservation techniques to safeguard your future family-building options.
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
                <h2 className="text-xl md:text-2xl font-extrabold text-[#145390] mb-2">State-of-the-Art Cryopreservation</h2>
                <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed">
                  Our advanced facility uses vitrification (ultra-rapid freezing) to safely store eggs, sperm, embryos, and reproductive tissue, ensuring maximum viability when you are ready to conceive.
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#145390]">Preservation Options</h2>
              <p className="text-gray-500 text-sm md:text-base mt-3 max-w-xl mx-auto">Advanced freezing techniques for comprehensive fertility preservation.</p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* Card 1 — Big (spans 2 cols) */}
              <Link href={treatments[0].link} className="group md:col-span-2 relative rounded-3xl overflow-hidden h-[340px] cursor-pointer">
                <img src={treatments[0].image} alt={treatments[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060f24] via-[#060f24]/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="bg-[#ED2793] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-3">Most Requested</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2 group-hover:text-[#ff7eb3] transition-colors">{treatments[0].title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-md">{treatments[0].desc}</p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ED2793]/40 rounded-3xl transition-all duration-500" />
              </Link>

              {/* Card 2 — Tall (1 col) */}
              <Link href={treatments[1].link} className="group relative rounded-3xl overflow-hidden h-[340px] cursor-pointer">
                <img src={treatments[1].image} alt={treatments[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060f24] via-[#060f24]/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-[#ED2793] text-[10px] font-bold uppercase tracking-widest mb-2">For Men</span>
                  <h3 className="text-xl font-extrabold text-white leading-tight mb-1 group-hover:text-[#ff7eb3] transition-colors">{treatments[1].title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{treatments[1].desc}</p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ED2793]/40 rounded-3xl transition-all duration-500" />
              </Link>

              {/* Card 3 — Medium */}
              <Link href={treatments[2].link} className="group relative rounded-3xl overflow-hidden h-[260px] cursor-pointer">
                <img src={treatments[2].image} alt={treatments[2].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060f24] via-[#060f24]/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-[#ED2793] text-[10px] font-bold uppercase tracking-widest mb-2">For Couples</span>
                  <h3 className="text-xl font-extrabold text-white leading-tight mb-1 group-hover:text-[#ff7eb3] transition-colors">{treatments[2].title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{treatments[2].desc}</p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ED2793]/40 rounded-3xl transition-all duration-500" />
              </Link>

              {/* Card 4 — Medium */}
              <Link href={treatments[3].link} className="group relative rounded-3xl overflow-hidden h-[260px] cursor-pointer">
                <img src={treatments[3].image} alt={treatments[3].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060f24] via-[#060f24]/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-[#ED2793] text-[10px] font-bold uppercase tracking-widest mb-2">Specialized</span>
                  <h3 className="text-xl font-extrabold text-white leading-tight mb-1 group-hover:text-[#ff7eb3] transition-colors">{treatments[3].title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{treatments[3].desc}</p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ED2793]/40 rounded-3xl transition-all duration-500" />
              </Link>

              {/* Card 5 — Big (spans 2 cols) */}
              <Link href={treatments[4].link} className="group md:col-span-1 relative rounded-3xl overflow-hidden h-[260px] cursor-pointer">
                <img src={treatments[4].image} alt={treatments[4].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060f24] via-[#060f24]/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-[#ED2793] text-[10px] font-bold uppercase tracking-widest mb-2">For Men</span>
                  <h3 className="text-xl font-extrabold text-white leading-tight mb-1 group-hover:text-[#ff7eb3] transition-colors">{treatments[4].title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{treatments[4].desc}</p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ED2793]/40 rounded-3xl transition-all duration-500" />
              </Link>

            </div>

            {/* Last card — full width */}
            <div className="mt-4">
              <Link href={treatments[5].link} className="group relative rounded-3xl overflow-hidden h-[280px] md:h-[320px] flex cursor-pointer">
                <img src={treatments[5].image} alt={treatments[5].title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#060f24] via-[#060f24]/80 to-transparent" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-2xl">
                  <span className="bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-3">Oncofertility</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2 group-hover:text-[#ff7eb3] transition-colors">{treatments[5].title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{treatments[5].desc}</p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ED2793]/40 rounded-3xl transition-all duration-500" />
              </Link>
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
              Talk to our expert fertility specialists at Popular IVF, Varanasi. We&apos;re here to guide you with compassion, clarity, and world-class care.
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
