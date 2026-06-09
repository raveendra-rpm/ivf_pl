import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight, Mail, PhoneCall } from 'lucide-react';

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-[#f8fbff]">
        
        {/* 1. HERO SECTION */}
        <section className="relative h-[280px] md:h-[360px] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/about/career_banner.jpg" alt="Careers Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#145390]/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">Careers</h1>
          </div>
        </section>

        {/* 2. BUILD YOUR CAREER */}
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#145390] mb-8 md:mb-10">
              Build Your Career With Popular IVF
            </h2>
            
            <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Popular IVF Centre welcomes committed healthcare professionals who want to work in a patient-focused fertility care environment.
              </p>
              <p>
                Our team values clinical skill, compassion, clear communication, and the ability to support couples throughout their fertility journey.
              </p>
              <p>
                If you are passionate about reproductive healthcare, patient counselling, diagnostics, nursing, administration, or clinical support, we would be happy to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* 3. WHY WORK WITH US */}
        <section className="py-20 md:py-28 bg-[#f8fbff]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#145390] mb-12 md:mb-16">
              Why Work With Us
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Learning Environment",
                  desc: "Work with experienced doctors and trained fertility care teams in a modern clinical setup."
                },
                {
                  num: "02",
                  title: "Patient-Focused Culture",
                  desc: "Be part of a team that treats patients with privacy, empathy, and respectful communication."
                },
                {
                  num: "03",
                  title: "Growth Opportunities",
                  desc: "Build practical experience across fertility treatment support, diagnostics, counselling, and care coordination."
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col relative overflow-hidden text-left hover:-translate-y-2 transition-transform duration-500 hover:shadow-lg group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#145390] to-[#ED2793]" />
                  
                  <div className="flex items-center gap-4 mb-5 relative z-10">
                    <span className="text-3xl font-black text-[#ED2793] group-hover:scale-110 transition-transform">
                      {card.num}
                    </span>
                    <div className="h-0.5 w-6 bg-[#145390] rounded-full"></div>
                    <h3 className="text-[17px] font-bold text-[#145390]">{card.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 text-[14.5px] leading-relaxed relative z-10">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. APPLY FOR OPEN ROLES */}
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#f8fbff] rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ED2793]/10 to-transparent rounded-full blur-3xl" />
              
              <div className="flex-1 w-full space-y-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#145390]">
                  Apply For Open Roles
                </h2>
                <p className="text-gray-600 text-lg font-medium leading-relaxed">
                  Share your profile with our team for suitable openings at Popular IVF Centre.
                </p>
                
                <ul className="space-y-4 pt-4">
                  {[
                    "Doctors and fertility specialists",
                    "Nursing and clinical assistants",
                    "Embryology and laboratory support",
                    "Patient counselling and coordination",
                    "Front office and administration"
                  ].map((role, idx) => (
                    <li key={idx} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#145390] to-[#1a6ab8] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                        <ChevronRight className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium md:text-lg">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full lg:w-[400px] bg-[#f8fbff] rounded-[2rem] p-8 border border-[#e8f1fb] space-y-8 flex flex-col justify-center">
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 border border-gray-100">
                    <Mail className="w-6 h-6 text-[#ED2793]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
                    <a href="mailto:hello@popularivf.com" className="text-[#145390] font-bold text-lg hover:text-[#ED2793] transition-colors break-all">
                      hello@popularivf.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border border-gray-100">
                    <PhoneCall className="w-6 h-6 text-[#145390]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Phone</p>
                    <a href="tel:9151000135" className="text-[#145390] font-bold text-lg hover:text-[#ED2793] transition-colors">
                      9151000135
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
