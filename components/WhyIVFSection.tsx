export default function WhyIVFSection() {
  const features = [
    {
      image: "/cordial-staff.webp",
      title: "Cordial Staff",
      desc: "Our compassionate team ensures you feel comfortable and cared for at every step.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
    {
      image: "/clinically-reliable.webp",
      title: "Clinically Reliable",
      desc: "Evidence-based treatments backed by the latest advancements in reproductive medicine.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
    },
    {
      image: "/advance-technology.webp",
      title: "Advance Technology & Treatment",
      desc: "Cutting-edge labs and equipment for the highest success rates in IVF procedures.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        </svg>
      ),
    },
    {
      image: "/transparent-pricing.webp",
      title: "Affordable & Transparent Pricing",
      desc: "No hidden charges — clear, honest pricing for all our fertility care packages.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
    },
  ];

  const stats = [
    { value: "10,000+", label: "Happy Families" },
    { value: "15+", label: "Years of Experience" },
    { value: "70%+", label: "IVF Success Rate" },
    { value: "50+", label: "Expert Specialists" },
  ];

  return (
    <section className="relative bg-white overflow-hidden pt-24 pb-0">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#eef4fb] blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#fdf0f7] blur-3xl opacity-50 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">

        {/* ── TOP: Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Left: Text Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8f1fb] text-[#145390] text-xs font-semibold px-4 py-2 rounded-full mb-5 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#145390] inline-block"></span>
              Trusted Fertility Center — Varanasi
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#145390] leading-tight mb-6">
              Best Hospital for<br />
              <span className="text-[#ED2793]">IVF Treatment</span>
            </h2>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-5 font-medium">
              The Popular Hospital is the best Hospital for IVF Treatment in Varanasi. We offer <span className="text-[#145390] font-semibold">affordable, transparent fertility therapies</span> that are clinically reliable, sympathetic, and trustworthy.
            </p>

            <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-8">
              At Popular IVF, we make every effort to help you to have a healthy, adorable baby. Your desire to become a parent can come true with the help of our skilled medical staff. We can address all of your fertility issues and assist you in moving forward on your journey towards parenting thanks to our cutting-edge clinical setup, established medical tools &amp; equipment, and facilities.
            </p>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#145390] hover:bg-[#0e3d6e] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            >
              Book a Free Consultation
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#145390" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
            {/* Decorative background glow for the grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-tr from-[#145390]/15 to-[#ED2793]/15 blur-[60px] -z-10 rounded-full" />
            
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(20,83,144,0.08)] transition-all duration-500 overflow-hidden flex flex-col justify-center"
              >
                {/* Subtle gradient hover reveal */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#145390]/[0.03] to-[#ED2793]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Accent line on top */}
                <div className={`absolute top-0 left-0 w-full h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${i % 2 === 0 ? 'bg-gradient-to-r from-[#145390] to-[#1a6ab8]' : 'bg-gradient-to-r from-[#ED2793] to-[#ff47a9]'}`} />

                <div className="relative z-10 flex flex-col gap-1">
                  <div className={`text-4xl md:text-[42px] font-extrabold tracking-tight mb-1 group-hover:scale-[1.03] transition-transform duration-500 origin-left ${i % 2 === 0 ? 'text-[#145390]' : 'text-[#ED2793]'}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-gray-600 flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-[#ED2793] shadow-[0_0_8px_rgba(237,39,147,0.5)]' : 'bg-[#145390] shadow-[0_0_8px_rgba(20,83,144,0.5)]'}`} />
                    {stat.label}
                  </div>
                </div>
                
                {/* Decorative background element on hover */}
                <div className={`absolute -bottom-8 -right-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl ${i % 2 === 0 ? 'bg-[#145390]/10' : 'bg-[#ED2793]/10'}`} />
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM: Feature Cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pb-20">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-44 md:h-56">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

              </div>

              {/* Content */}
              <div className="p-4 flex-grow flex flex-col gap-2">
                {/* Icon pill */}
                <div className="w-9 h-9 rounded-xl bg-[#e8f1fb] text-[#145390] flex items-center justify-center mb-1">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm md:text-[15px] leading-snug">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed hidden md:block">
                  {feature.desc}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#145390] to-[#ED2793] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
