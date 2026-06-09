import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AwardsSection from '@/components/AwardsSection';
import { Award } from 'lucide-react';

export const metadata = {
  title: 'Awards & Recognitions | Popular IVF Centre',
  description: 'View the awards and accreditations earned by Popular IVF for outstanding clinical excellence and patient care in Varanasi and Eastern UP.',
};

export default function AwardsPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      
      <main className="flex-grow pt-[72px] xl:pt-[84px]">
        {/* Page Hero */}
        <section className="relative h-[280px] md:h-[360px] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/awards_&_recognitions_banner.jpg" alt="Awards & Recognitions" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#145390]/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
              Awards & Recognitions
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto font-medium">
              Our clinical excellence and dedication to helping couples achieve parenthood has been recognized by national medical boards and health organizations.
            </p>
          </div>
        </section>

        {/* The main Awards Section block */}
        <div className="py-8 bg-white dark:bg-gray-900">
           <AwardsSection />
        </div>

        {/* Detailed Info */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What Our Accreditations Mean For You</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#145390] dark:text-blue-400 mb-2">NABH Accreditation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    The National Accreditation Board for Hospitals & Healthcare Providers (NABH) is a constituent board of Quality Council of India. Our accreditation guarantees that we follow stringent protocols for patient safety, infection control, and clinical outcomes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#ED2793] dark:text-pink-400 mb-2">IMA Membership</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    As proud members of the Indian Medical Association, our doctors adhere to the highest ethical and professional standards prescribed by the national body of medical professionals.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#145390] dark:text-blue-400 mb-2">State Medical Council Registration</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Popular IVF is a fully registered and compliant facility. We strictly adhere to all ART (Assisted Reproductive Technology) guidelines and legal frameworks set by the government, ensuring 100% legal and ethical fertility treatments.
                  </p>
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
