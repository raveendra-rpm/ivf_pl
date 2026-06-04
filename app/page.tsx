import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyIVFSection from '@/components/WhyIVFSection';
import PersonalisedHelpSection from '@/components/PersonalisedHelpSection';
import ProcessStepsSection from '@/components/ProcessStepsSection';
import TreatmentsSection from '@/components/TreatmentsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GoogleReviewsSection from '@/components/GoogleReviewsSection';
import DoctorsSection from '@/components/DoctorsSection';

import FAQSection from '@/components/FAQSection';
import BlogsSection from '@/components/BlogsSection';
import ConsultationSection from '@/components/ConsultationSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WhyIVFSection />
        <PersonalisedHelpSection />
        <ProcessStepsSection />
        <TreatmentsSection />
        <TestimonialsSection />
        <GoogleReviewsSection />
        <DoctorsSection />

        <FAQSection />
        <BlogsSection />
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  );
}