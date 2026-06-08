import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TesticularTissueFreezingPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">
        
        {/* Hero Section */}
        <div className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/treatments/testicular_tissue_freezing_banner.jpg" alt="Testicular Tissue Freezing" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Testicular Tissue Freezing</h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/90 font-medium drop-shadow-md flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span>Fertility Preservation</span>
              <span>›</span>
              <span className="text-white font-bold">Testicular Tissue Freezing</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              
              <div className="lg:w-1/2">
                <span className="inline-block bg-pink-50 text-primary-pink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                  Fertility Preservation
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue leading-tight mb-6">
                  Testicular-tissue-<span className="text-primary-pink">freezing</span>
                </h2>
                <div className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-6">
                  <p className="mb-4">
                    Testicular tissue freezing is an experimental and promising fertility preservation technique that is suitable prepubescent patients who are not yet producing sperm. In this process of testicular tissue freezing, testicular tissues which contain stem cell are carefully extracted and frozen. The same stem cells are capable of starting spermatogenesis (sperm production) from the patient's testes. Once the patient is cure and expresses his will to start a family, these tissue samples can be used for maturing the sperm to complete the future IVF-ICSI treatments.
                  </p>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="/images/treatments/testicular_tissue_freezing_img.jpg"
                    alt="Testicular Tissue Freezing Process"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/40 to-transparent" />
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
