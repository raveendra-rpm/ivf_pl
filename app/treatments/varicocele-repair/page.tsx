import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function VaricoceleRepairPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-blue via-[#ED2793] to-[#ff7eb3] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Varicocele Repair</h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/80 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span>Male Infertility</span>
              <span>›</span>
              <span className="text-white font-semibold">Varicocele Repair</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-normal text-[#2e5299] mb-6">
              Varicocele Repair
            </h2>
            <div className="text-[#4a4a4a] text-[15px] md:text-[17px] leading-relaxed">
              <p className="mb-4">
                <span className="text-[#f12893] text-[16px] md:text-[18px]">Varicocele Repair:-</span> Varicoceles are enlarged veins in the testicles similar to varicose veins found in the leg. Although varicoceles do not generally cause any symptoms, they are a common cause of low sperm production and reduced sperm quality as they tend to increase the temperature in or around the testicle.
              </p>
              <p>
                Popular IVF offer subinguinal microsurgical varicocelectomy [FO1] – the preferred treatment for varicoceles. With the help of this minimally invasive procedure, it is possible to identify and divide all the dilated veins while sparing the arteries and lymphatic vessels for optimal outcomes.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
