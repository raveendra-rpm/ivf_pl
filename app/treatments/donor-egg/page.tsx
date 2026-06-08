import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DonorEggPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-blue via-[#ED2793] to-[#ff7eb3] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Donor Egg</h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/80 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span>Donor Services</span>
              <span>›</span>
              <span className="text-white font-semibold">Donor Egg</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-normal text-[#2e5299] mb-6">
              EGG DONOR
            </h2>
            <div className="text-[#4a4a4a] text-[15px] md:text-[17px] leading-relaxed mb-10">
              <p className="mb-4">
                <span className="text-[#f12893] text-[16px] md:text-[18px]">EGG DONOR:-</span> IVF with donor eggs is helpful for couples who are not able to use their own eggs in IVF for some reason or the other. The treatment cycle is the same as the conventional IVF. The only exception that remains is the eggs used in the cycle are sourced from licensed donor agencies. It has been mandated under government guidelines that all the information about the couple and the donors should be kept confidential.
              </p>
              <p>
                Popular IVF offers access to high-quality donor eggs, sourced from government authorised agencies. We match donors to the couple based on physical characteristics and blood typing for best results. We understand how challenging of a decision to undergo donor IVF can be. Thus our team extends all the support and wards off all the doubts regarding IVF so that they can undergo their treatment with confidence.
              </p>
            </div>

            {/* Steps Section */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-2">
                Steps to becoming an egg donor
              </h3>
              <p className="text-[#2e5299] text-[16px] md:text-[18px] mb-6">
                There are a few steps that can help you become an egg donor candidate:
              </p>
              <ul className="space-y-4">
                {[
                  'Between the ages of 18 and 32 years old',
                  'Menstrual cycles that are regular',
                  'Non-smoker',
                  'Having two ovaries',
                  'I am not currently using any psychoactive drugs.',
                  'Having no prior history of substance abuse',
                  'Having no ancestors with inheritable genetic disorders',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#4a4a4a] text-[15px] md:text-[16px]">
                    <span className="mt-0.5 text-[#2e5299] font-bold text-sm">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
