import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FacilityTourSection from '@/components/FacilityTourSection';
import { Microscope, Activity, CheckCircle, Shield } from 'lucide-react';

export const metadata = {
  title: 'Our Facility & Lab | Popular IVF Centre',
  description: 'Explore our state-of-the-art IVF facilities, Class 100 Embryology Lab, and advanced reproductive technologies.',
};

export default function FacilityLabPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      
      <main className="flex-grow pt-[72px] xl:pt-[84px]">
        {/* Page Hero */}
        <section className="relative h-[280px] md:h-[360px] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            {/* Reusing about_overview.jpeg as a clean background for the lab */}
            <img src="/images/about/about_overview.jpeg" alt="Facility & Lab" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#145390]/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
              Our Facility & Lab
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto font-medium">
              Welcome to Eastern UP's most advanced fertility center. Our infrastructure is meticulously designed to optimize embryo development.
            </p>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center text-[#145390]">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Class 100 Clean Room</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our embryology lab maintains a strict Class 100 clean room environment. This ensures zero air contamination, providing the perfect sterile conditions for embryo culture.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-pink-50 dark:bg-gray-800 flex items-center justify-center text-[#ED2793]">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Advanced Equipment</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Equipped with state-of-the-art incubators, micromanipulators for ICSI, and advanced cryopreservation units imported from the world's leading medical technology providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reusing the Facility Tour Section for visual gallery */}
        <div className="pb-20 bg-white dark:bg-gray-900">
           <FacilityTourSection showExploreButton={false} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
