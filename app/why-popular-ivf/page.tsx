import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, ShieldCheck, Microscope, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Why Popular IVF? | Our Unique Approach',
  description: 'Discover why thousands of couples choose Popular IVF for their fertility journey. Ethical treatments, advanced technology, and compassionate care.',
};

const reasons = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#145390]" />,
    title: 'Ethical & Transparent',
    description: 'We believe in 100% transparency. No hidden costs, honest success rates, and ethical treatment protocols tailored to you.',
  },
  {
    icon: <Microscope className="w-8 h-8 text-[#ED2793]" />,
    title: 'Advanced Technology',
    description: 'Our Class 100 clean room embryology labs use the latest global technologies, including ICSI, MACS, and Laser Assisted Hatching.',
  },
  {
    icon: <Users className="w-8 h-8 text-[#145390]" />,
    title: 'Expert Medical Team',
    description: 'Led by highly experienced fertility specialists, embryologists, and a dedicated support staff committed to your dream.',
  },
  {
    icon: <Heart className="w-8 h-8 text-[#ED2793]" />,
    title: 'Compassionate Care',
    description: 'Infertility is an emotional journey. We provide psychological support and patient-centric care every step of the way.',
  },
];

export default function WhyPopularIVFPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      
      <main className="flex-grow pt-[72px] xl:pt-[84px]">
        {/* Hero Section */}
        <section className="relative h-[280px] md:h-[360px] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/about/about_us_banner.jpeg" alt="Why Popular IVF" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#145390]/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
              Why Popular IVF?
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto font-medium">
              Your dream of parenthood is our life's mission. Discover the pillars of trust, technology, and care that make us the preferred choice.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700">
                  <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 bg-[#145390] text-white">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Promise To You</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                'Highest Clinical Standards & Protocols',
                'Affordable EMI Options Available',
                'Personalized Treatment Plans',
                'High Success Rates in the First Cycle',
                'State-of-the-art Modular Operation Theatres',
                'Complete Privacy & Confidentiality'
              ].map((promise, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ED2793] shrink-0 mt-0.5" />
                  <span className="text-lg font-medium">{promise}</span>
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
