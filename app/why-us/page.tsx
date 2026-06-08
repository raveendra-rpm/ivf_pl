import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function WhyUsPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-[#f8fbff]">
        
        {/* 1. HERO SECTION */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/about/why_us_banner.jpeg" alt="Why Us" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#145390]/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Why Us?</h1>
          </div>
        </section>

        {/* 2. WHY PEOPLE PREFER US */}
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#f0f6fc] to-[#fcf0f7] rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3 z-0" />
          
          <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              
              {/* Text Side */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#145390] leading-tight mb-8">
                  Why People Prefer Us?
                </h2>
                
                <div className="bg-white/60 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 shadow-sm relative">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#145390] to-[#ED2793] rounded-l-3xl" />
                  
                  <div className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-base font-medium">
                    <p>
                      We offer affordable, transparent fertility therapies that are clinically reliable, sympathetic, and trustworthy.
                    </p>
                    <p>
                      At Popular Pratap IVF, we make every effort to help you to have a healthy, adorable baby. Our team supports every couple with clear counselling, modern diagnostics, and treatment planning focused on comfort and confidence.
                    </p>
                    <p>
                      From initial assessment to advanced fertility care, patients receive guidance from experienced specialists and a clinical team that understands how personal this journey is.
                    </p>
                  </div>
                </div>
              </div>

              {/* Single Image */}
              <div className="w-full relative">
                <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white bg-gray-100 aspect-[4/3] lg:aspect-auto lg:h-[500px]">
                  <img src="/images/about/about_overview.jpeg" alt="Why People Prefer Us" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. OUR STRENGTHS */}
        <section className="py-20 md:py-32 bg-[#f8fbff]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#145390] mb-16">
              Our Strengths
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Experienced IVF Team",
                  desc: "Our fertility specialists and trained medical staff work together to provide personalised care for each patient."
                },
                {
                  num: "02",
                  title: "Advanced Clinical Setup",
                  desc: "Modern fertility treatments, diagnostics, and laboratory support help couples move forward with reliable care."
                },
                {
                  num: "03",
                  title: "Transparent Guidance",
                  desc: "We explain treatment options, costs, and next steps clearly so patients can make informed decisions."
                },
                {
                  num: "04",
                  title: "Affordable Treatment",
                  desc: "Popular IVF focuses on making quality fertility care accessible with practical and patient-friendly planning."
                },
                {
                  num: "05",
                  title: "Complete Infertility Workup",
                  desc: "Male and female fertility evaluation, hormonal profile, scans, semen analysis, and advanced tests are available."
                },
                {
                  num: "06",
                  title: "Compassionate Support",
                  desc: "We keep patient comfort, privacy, and emotional support at the centre of the fertility treatment journey."
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-[#f4cbe0] flex flex-col relative overflow-hidden text-left hover:-translate-y-2 transition-transform duration-500 hover:shadow-lg">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#145390] to-[#ED2793]" />
                  
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <span className="text-4xl font-black text-[#ED2793] drop-shadow-sm">
                      {card.num}
                    </span>
                    <div className="h-0.5 w-8 bg-[#145390] rounded-full"></div>
                    <h3 className="text-lg font-bold text-[#145390]">{card.title}</h3>
                  </div>
                  
                  <p className="text-[#5c7a99] text-[14px] md:text-[15px] leading-relaxed relative z-10">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PATIENT-FOCUSED FERTILITY CARE */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              <div className="w-full relative">
                <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white bg-gray-100 aspect-[4/3]">
                  <img src="/images/about/about_us_fertility_care.jpeg" alt="Baby on rug" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#145390]">
                  Patient-Focused Fertility Care
                </h2>
                
                <ul className="space-y-5">
                  {[
                    "Personalised treatment protocols for every couple",
                    "IVF, IUI, ICSI and fertility preservation options",
                    "Dedicated counselling before and during treatment",
                    "Clear communication from diagnosis to follow-up",
                    "Care delivered with privacy, dignity, and compassion"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#ED2793] to-[#ff7eb3] flex items-center justify-center shrink-0 shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-base md:text-[17px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
