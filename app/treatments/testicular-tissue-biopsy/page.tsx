import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TesticularTissueBiopsyPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-blue via-[#ED2793] to-[#ff7eb3] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Testicular Tissue Biopsy</h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/80 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span>Male Infertility</span>
              <span>›</span>
              <span className="text-white font-semibold">Testicular Tissue Biopsy</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-normal text-[#2e5299] mb-6">
              Testicular Tissue Biopsy
            </h2>
            <div className="text-[#4a4a4a] text-[15px] md:text-[17px] leading-relaxed">
              <p className="mb-4">
                <span className="text-[#f12893] text-[16px] md:text-[18px]">Testicular Tissue Biopsy:-</span> Around one third of all infertility cases are due to fertility problems in the male partner. While semen analysis is the primary test to assess sperm count, motility, and morphology, testicular tissue biopsy is the cornerstone of male infertility diagnosis to identify the cause unexplained infertility and azoospermia.
              </p>
              <p>
                Popular IVF offers a comprehensive range of male fertility treatments, diagnostic procedures and fertility preservation techniques including rare or single sperm vitrification. We have a team of experienced fertility specialists and uro-andrologists who have experience and exclusive specialization in performing safe and effective testicular biopsy. During the test, we work on the objective to work for salvaging and preserving the viable sperm from the specimen. At the same time, we make efforts to avoid the need for a secondary sperm retrieval procedure whenever possible.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
