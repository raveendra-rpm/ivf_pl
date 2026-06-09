import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FacilityTourSection from '@/components/FacilityTourSection';
import { Camera } from 'lucide-react';

export const metadata = {
  title: 'Gallery Tour | Popular IVF Centre',
  description: 'Take a virtual tour of our state-of-the-art IVF facilities, embryology labs, and consultation rooms.',
};

export default function GalleryTourPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="pt-32 pb-20 bg-blue-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 shadow-xl mb-6 text-[#ED2793]">
              <Camera className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
              Our <span className="text-[#145390] dark:text-blue-400">Gallery Tour</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our world-class infrastructure designed to provide you with the safest, most comfortable, and highly successful fertility treatments.
            </p>
          </div>
        </section>

        {/* Reusing the Facility Tour Section for the main gallery view */}
        <div className="pb-20 bg-white dark:bg-gray-900">
           <FacilityTourSection showExploreButton={false} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
