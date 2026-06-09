import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DoctorsSection from '@/components/DoctorsSection';

export default function OurTeamPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-[#f8fbff]">
        
        {/* 1. HERO SECTION */}
        <section className="relative h-[280px] md:h-[360px] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/about/our_team_banner.jpg" alt="Our Team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#145390]/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">Our Team</h1>
          </div>
        </section>

        {/* 2. DOCTORS SECTION */}
        <DoctorsSection />

        {/* 3. TEAM COMMITMENT SECTION */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#f8fbff] to-[#fcf0f7] rounded-full blur-[100px] opacity-70 pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#145390] mb-6 leading-tight">
              Dedicated to Delivering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED2793] to-[#ff7eb3]">Best Patient Care</span>
            </h2>
            
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
              As a united team of experienced specialists and compassionate staff, we believe in treating every patient like family. Our collective expertise ensures that you receive the highest standard of personalized fertility care in a supportive, comforting environment. Your dream is our shared mission.
            </p>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
