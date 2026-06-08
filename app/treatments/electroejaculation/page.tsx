import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ElectroejaculationPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-blue via-[#ED2793] to-[#ff7eb3] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Electroejaculation and Ancillary Services</h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/80 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span>Male Infertility</span>
              <span>›</span>
              <span className="text-white font-semibold">Electroejaculation and Ancillary Services</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-normal text-[#2e5299] mb-6">
              Electroejaculation and Ancillary services
            </h2>
            <div className="text-[#4a4a4a] text-[15px] md:text-[17px] leading-relaxed mb-10">
              <p className="mb-4">
                <span className="text-[#f12893] text-[16px] md:text-[18px]">Electroejaculation and Ancillary services:-</span> Electroejaculation is a highly effective method to procure sperm for fertility treatments like IUI and IVF. This procedure is brought to use when the male partner is unsuccessful in providing a semen sample through ejaculation.
              </p>
              <p>
                At Popular IVF, we offer electroejaculation and ancillary services including a complete range of surgical sperm retrieval procedures.
              </p>
            </div>

            {/* Why Electroejaculation */}
            <div>
              <h3 className="text-xl md:text-2xl font-normal text-[#2e5299] mb-3">
                Why Electroejaculation?
              </h3>
              <p className="text-[#4a4a4a] text-[15px] md:text-[16px] leading-relaxed mb-4">
                Electroejaculation is a beneficial procedure for patients who are unable to ejaculate for the following reasons:
              </p>
              <ul className="space-y-3">
                {[
                  'Spinal cord injury',
                  'Physiological issues',
                  'Psychological problems',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#4a4a4a] text-[15px] md:text-[16px]">
                    <span className="mt-1 text-primary-blue font-bold text-base">›</span>
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
