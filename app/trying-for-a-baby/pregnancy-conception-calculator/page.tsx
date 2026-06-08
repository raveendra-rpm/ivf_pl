import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PregnancyConceptionCalculatorPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">
        
        {/* ── HERO ── */}
        <div className="bg-gradient-to-r from-primary-blue via-[#ED2793] to-[#ff7eb3] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
              Pregnancy Conception Calculator
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/80 font-medium flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Trying for a Baby?</span>
              <span>›</span>
              <span className="text-white font-semibold">Pregnancy Conception Calculator</span>
            </div>
          </div>
        </div>

        {/* ── INTRO SECTION (PREMIUM LAYOUT) ── */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

              {/* Left: Text */}
              <div className="lg:w-1/2">
                <span className="inline-block bg-pink-50 text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                  Trying for a Baby?
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-6">
                  Understanding <span className="text-primary-pink">Conception Calculator</span>
                </h2>
                
                <div className="bg-white border border-gray-100 shadow-none rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-primary-pink/30 transition-colors">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-pink"></div>
                  <div className="space-y-4 text-gray-700 text-[15px] md:text-[17px] leading-relaxed relative z-10">
                    <p>
                      A conception calculator helps estimate possible conception dates based on pregnancy dates or menstrual cycle history.
                    </p>
                    <p>
                      It provides an approximate idea only; ultrasound and doctor consultation are needed for accurate pregnancy dating.
                    </p>
                  </div>
                  <div className="absolute right-0 bottom-0 opacity-5 text-8xl pointer-events-none -mb-6 -mr-4 text-primary-blue font-serif group-hover:text-primary-pink transition-colors">"</div>
                </div>
                
                {/* Assurance Note */}
                <div className="mt-8 flex items-center gap-4 bg-blue-50 px-5 py-4 rounded-xl border border-blue-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-blue/10 text-primary-blue rounded-full flex items-center justify-center text-xl">
                    ⏱️
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    Get an estimate of your timeline to plan your pregnancy journey effectively.
                  </p>
                </div>
              </div>

              {/* Right: Single Image with Floating Badges */}
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-sm group">
                  <img
                    src="https://images.unsplash.com/photo-1543323063-49d63c5a6109?auto=format&fit=crop&w=900&q=80"
                    alt="Conception Estimation"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/10 to-transparent pointer-events-none"></div>
                  
                  {/* Floating Badge - Top Right */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-white/20">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Estimation</p>
                    <p className="text-primary-blue font-extrabold text-[15px]">Conception Date</p>
                  </div>

                  {/* Floating Badge - Bottom Left */}
                  <div className="absolute bottom-6 left-6 bg-gradient-to-r from-[#ED2793] to-[#d61b7f] text-white rounded-2xl px-6 py-4 shadow-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">👩‍⚕️</span>
                      <div>
                        <p className="text-xs font-medium opacity-90 uppercase tracking-widest">Support</p>
                        <p className="font-extrabold text-lg">Doctor Review</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── KEY POINTS SECTION (IMAGE CARDS) ── */}
        <section className="py-16 md:py-24 bg-[#f8fbff] relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#145390]">
                Key Points
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                Important factors to keep in mind when using a conception calculator.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  num: "01",
                  title: "Conception Estimate",
                  desc: "Helps estimate when conception may have happened.",
                  img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
                },
                {
                  num: "02",
                  title: "Pregnancy Planning",
                  desc: "Supports awareness of pregnancy timeline and early milestones.",
                  img: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=600&q=80"
                },
                {
                  num: "03",
                  title: "Clinical Accuracy",
                  desc: "Dating scan and medical review provide better accuracy than calculators.",
                  img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
                }
              ].map((item, idx) => (
                <div key={idx} className="relative group rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5]">
                  {/* Background Image */}
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#145390] via-[#145390]/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content on top */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white font-black text-2xl mb-6 border border-white/30 group-hover:-translate-y-2 transition-transform duration-500">
                      {item.num}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:-translate-y-1 transition-transform duration-500 delay-75">{item.title}</h3>
                    <p className="text-blue-50 leading-relaxed font-medium group-hover:-translate-y-1 transition-transform duration-500 delay-100">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── USEFUL INFORMATION (ICON CARDS) ── */}
        <section className="py-20 md:py-28 bg-[#f8fbff] relative">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-primary-pink font-bold text-sm tracking-wide uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-primary-blue animate-pulse"></span>
                Preparation
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#145390]">
                Useful Information
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
              {[
                { text: "Last menstrual period", icon: "🗓️" },
                { text: "Cycle length", icon: "📏" },
                { text: "Expected delivery date", icon: "📅" },
                { text: "Ovulation date if known", icon: "❤️" },
                { text: "Early ultrasound report", icon: "🖥️" }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="group flex flex-col items-center text-center bg-white rounded-[2rem] p-8 md:p-10 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-primary-pink/30 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-0 w-full h-1.5 bg-gradient-to-r from-[#ED2793] to-[#145390] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-50 to-pink-50 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-inner">
                    {item.icon}
                  </div>
                  <span className="text-gray-800 font-extrabold text-[16px] md:text-[18px] leading-snug group-hover:text-[#145390] transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary-blue via-[#1a6abf] to-[#0e3d6e] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#ED2793]/10 translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Get the Right Answers for Your Journey
            </h2>
            <p className="text-blue-100 text-[15px] md:text-base mb-8 max-w-xl mx-auto">
              Calculators provide a good start, but clinical tests give you accuracy. Schedule an appointment with our experts for precise guidance.
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
