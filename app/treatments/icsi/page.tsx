import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessStepsSection from '@/components/ProcessStepsSection';

export default function ICSIPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">
        {/* Hero Section */}
        <div className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/treatments/icsi_banner.jpeg" alt="Intracytoplasmic Sperm Injection (ICSI)" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Intracytoplasmic Sperm Injection (ICSI)</h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/90 font-medium drop-shadow-md">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span className="text-white font-bold">ICSI</span>
            </div>
          </div>
        </div>

        {/* ── INTRO SECTION ── */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-normal text-primary-blue leading-tight mb-8">
              Intracytoplasmic Sperm Injection(ICSI)
            </h2>
            
            <div className="space-y-6 text-gray-700 text-[15px] md:text-base leading-relaxed">
              <p>
                <span className="text-primary-pink text-xl">ICSI:-</span> Before a man’s sperm can fertilize a woman’s egg, the head of the sperm must attach to the outside of the egg. Once attached, the sperm pushes through the outer layer to the inside of the egg (cytoplasm), where fertilization takes place.
              </p>
              <p>
                Sometimes the sperm cannot penetrate the outer layer, for a variety of reasons. The egg’s outer layer may be thick or hard to penetrate or the sperm may be unable to swim. In these cases, a procedure called intracytoplasmic sperm injection (ICSI) can be done along with in vitro fertilization (IVF) to help fertilize the egg. During ICSI, a single sperm is injected directly into the cytoplasm the egg.
              </p>
            </div>
          </div>
        </section>

        {/* ── CONDITIONS SECTION ── */}
        <section className="py-16 md:py-20 bg-[#f4f8fd]">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Why would I need ICSI?</h3>
              <p className="text-xl text-primary-blue font-normal">ICSI helps to overcome fertility problems, such as</p>
            </div>

            <div className="space-y-5">
              {[
                "The male partner produces too few sperm to do artificial insemination (intrauterine insemination [IUI]) or IVF",
                "The sperm may not move in a normal fashion",
                "The sperm may have trouble attaching to the egg",
                "A blockage in the male reproductive tract may keep sperm from getting out",
                "Eggs have not fertilized by traditional IVF, regardless of the condition of the sperm.",
                "In vitro matured eggs are being used.",
                "Previously frozen eggs are being used."
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

        {/* ── PROCESS SECTION ── */}
        <ProcessStepsSection />

      </main>
      <Footer />
    </div>
  );
}
