import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function SuccessRatePage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-[#f8fbff]">
        
        {/* 1. HERO SECTION (Unchanged) */}
        <section className="bg-gradient-to-r from-[#145390] via-[#ED2793] to-[#ff7eb3] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Success Rate</h1>
          </div>
        </section>

        {/* 2. SUCCESS RATE INTRO - REDESIGNED SPLIT LAYOUT */}
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#f8fbff] to-transparent rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Side: Large Typographic Element */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#145390] font-bold text-sm tracking-wide uppercase">
                  <Sparkles className="w-4 h-4 text-[#ED2793]" />
                  Your Journey
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#145390] leading-tight">
                  Understanding <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED2793] to-[#145390]">
                    Your Journey
                  </span>
                </h2>
              </div>

              {/* Right Side: Content Container */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ED2793] to-[#145390] rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-[2rem] p-8 md:p-12 shadow-xl ring-1 ring-gray-900/5">
                  <div className="space-y-6 text-gray-600 text-[16px] md:text-lg leading-relaxed font-medium">
                    <p>
                      IVF success rates depend on many factors including age, ovarian reserve, sperm quality, embryo quality, uterine health, and medical history.
                    </p>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>
                    <p>
                      At Popular IVF Centre, treatment is planned after proper evaluation so couples receive realistic counselling and personalised care.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. KEY POINTS - REDESIGNED INTERACTIVE CARDS */}
        <section className="py-20 md:py-32 bg-[#f8fbff] relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#145390]">
                Key Points
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Age & Ovarian Reserve",
                  desc: "Female age and egg reserve are important factors in fertility treatment outcomes."
                },
                {
                  num: "02",
                  title: "Embryo & Uterus Health",
                  desc: "Embryo development and endometrial receptivity both matter for implantation."
                },
                {
                  num: "03",
                  title: "Personalised Treatment",
                  desc: "Protocols are tailored to diagnosis, previous history, and patient response."
                }
              ].map((card, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-white rounded-[2.5rem] p-10 shadow-md border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-default"
                >
                  {/* Hover Background Expansion */}
                  <div className="absolute inset-0 bg-[#145390] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Number & Line */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#ED2793] to-[#ff7eb3] group-hover:text-white group-hover:bg-none transition-colors duration-300">
                        {card.num}
                      </span>
                      <div className="h-1 w-12 bg-gray-200 group-hover:bg-[#ED2793] transition-colors duration-500 rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-extrabold text-[#145390] group-hover:text-white transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 font-medium leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. FACTORS THAT AFFECT OUTCOME - REDESIGNED STAGGERED PILLS */}
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
          {/* Ambient Backgrounds */}
          <div className="absolute left-0 top-0 w-full h-[500px] bg-gradient-to-b from-[#f8fbff] to-transparent pointer-events-none" />
          <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#145390]">
                Factors That Affect Outcome
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
              {[
                "Age of the patient",
                "Cause and duration of infertility",
                "Egg and sperm quality",
                "Embryo quality",
                "Lifestyle and medical conditions"
              ].map((factor, idx) => (
                <div 
                  key={idx} 
                  className={`group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-xl hover:border-[#145390]/20 transition-all duration-300 hover:-translate-y-1 ${
                    idx === 4 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-50 to-blue-50 flex items-center justify-center shrink-0 border border-white shadow-inner group-hover:from-[#145390] group-hover:to-[#1a6ab8] transition-all duration-500">
                    <ChevronRight className="w-6 h-6 text-[#145390] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <span className="text-gray-700 font-bold text-lg group-hover:text-[#145390] transition-colors duration-300">
                    {factor}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
