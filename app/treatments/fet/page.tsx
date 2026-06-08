import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FETPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">
        {/* Hero Section */}
        <div className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/treatments/frozen_embryo_transfer_treatments.jpeg" alt="Frozen Embryo Transfer (FET)" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Frozen Embryo Transfer (FET)</h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/90 font-medium drop-shadow-md">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span className="text-white font-bold">FET</span>
            </div>
          </div>
        </div>

        {/* ── INTRO SECTION ── */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-normal text-primary-blue leading-tight mb-8">
              Frozen Embryo Transfer (FET)
            </h2>
            
            <div className="space-y-6 text-gray-700 text-[15px] md:text-base leading-relaxed">
              <p>
                <span className="text-primary-pink text-xl font-bold">FET:- </span> 
                A frozen embryo transfer (FET) is a cycle in which embryos from a previous IVF or ICSI cycle that have been cryopreserved (frozen) are thawed and transferred to the uterus. It provides an excellent opportunity for pregnancy without the need for additional ovarian stimulation medications and egg retrieval procedures.
              </p>
              <p>
                The success rates of frozen embryo transfers are highly comparable to fresh embryo transfers, and in some clinical situations, they may even be higher because the uterine environment is more natural and receptive without the high hormone levels associated with fresh stimulation cycles.
              </p>
            </div>
          </div>
        </section>

        {/* ── CONDITIONS SECTION ── */}
        <section className="py-16 md:py-20 bg-[#f4f8fd]">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Why would I need FET?</h3>
              <p className="text-xl text-primary-blue font-normal">FET is commonly recommended for the following reasons:</p>
            </div>

            <div className="space-y-5">
              {[
                "You have surplus high-quality embryos remaining after a fresh IVF cycle.",
                "To give your uterus time to recover from the fertility drugs used during ovarian stimulation (often referred to as a 'freeze-all' cycle).",
                "You are undergoing Preimplantation Genetic Testing (PGT) on your embryos, which requires time to receive the genetic results.",
                "You are using frozen donor embryos or frozen donor eggs.",
                "To avoid the risk of Ovarian Hyperstimulation Syndrome (OHSS) after egg retrieval."
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 text-gray-600 shrink-0 font-bold">
                    &gt;
                  </div>
                  <p className="text-gray-700 text-[15px] md:text-base">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
