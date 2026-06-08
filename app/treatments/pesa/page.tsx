import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PesaPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-blue via-[#ED2793] to-[#ff7eb3] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Percutaneous Epididymal Sperm Aspiration (PESA)</h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/80 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span>Male Infertility</span>
              <span>›</span>
              <span className="text-white font-semibold">PESA</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-normal text-[#2e5299] mb-6">
              Percutaneous Epididymal Sperm Aspiration (PESA)
            </h2>
            <div className="text-[#4a4a4a] text-[15px] md:text-[17px] leading-relaxed">
              <p className="mb-4">
                <span className="text-[#f12893] text-[16px] md:text-[18px]">PESA:-</span> Percutaneous Epididymal Sperm Aspiration or PESA is a sperm retrieval technique which uses minimal invasive method. In this technique, the sperm is aspirated from the epididymis (a coiled tube at the back of the testicle that stores and carries sperm). Retrieved sperm can be frozen for future fertility treatments or used in an ICSI-IVF cycle. PESA is an effective procedure that can be administered among men, more specifically on those who have undergone a vasectomy or have obstructive azoospermia as well as for men who were born without a vas deferens. On an unsuccessful result of PESA, TESE is recommended.
              </p>
              <p>
                At Popular IVF, our multi-disciplinary team of fertility specialists and uro-andrologists are experienced in performing safe and effective PESA among other advanced surgical sperm retrieval techniques. We also provide the facility for single sperm vitrification in case of extremely low sperm count.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
