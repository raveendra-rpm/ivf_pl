import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function InfertilityAssessmentPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-slate-50">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px]">

        {/* ── HERO ── */}
        <div className="bg-gradient-to-r from-primary-blue via-[#ED2793] to-[#ff7eb3] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
              Infertility Assessment Panel
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/80 font-medium flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Treatments</span>
              <span>›</span>
              <span>Genetics & Diagnostics</span>
              <span>›</span>
              <span className="text-white font-semibold">Infertility Assessment Panel</span>
            </div>
          </div>
        </div>

        {/* ── CONTENT SECTION ── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-blue-900/5 overflow-hidden border border-gray-100">
              <div className="flex flex-col lg:flex-row">
                
                {/* Left Content */}
                <div className="p-8 md:p-12 lg:w-3/5 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-full -z-10 opacity-50" />
                  
                  <div className="prose prose-lg text-gray-700 leading-relaxed">
                    <p>
                      Infertility us a contentious and complex condition which has had a negative impact on nearly 15% of couples who wish to conceive a baby as parents. Thankfully, the field of Assisted Reproductive Technology has been a bright spot since it has made it possible to counter almost all types of infertility issues that affect both men and women. 
                    </p>
                    <p>
                      Popular IVF facilitate comprehensive male and female infertility assessment panel comprising of a team of doctors who analyze the patient's fertility and ability to conceive. 
                    </p>
                    <p className="font-medium text-primary-blue bg-blue-50/50 p-6 rounded-2xl border-l-4 border-primary-pink mt-6">
                      Our thorough fertility evaluation and patient focused treatment approach allows for better diagnostic decisions, personalised protocols, and an enhanced treatment experience.
                    </p>
                  </div>
                </div>

                {/* Right Panel/Stats */}
                <div className="bg-gradient-to-br from-slate-900 to-primary-blue text-white p-8 md:p-12 lg:w-2/5 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 opacity-10">
                    <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold mb-8">Panel Highlights</h3>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-xl">
                        <span className="text-xl">👩‍⚕️</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white">Expert Team</h4>
                        <p className="text-blue-200 text-sm mt-1">Dedicated doctors analyzing both male and female fertility.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-xl">
                        <span className="text-xl">🔬</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white">Comprehensive</h4>
                        <p className="text-blue-200 text-sm mt-1">Countering almost all types of infertility issues.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-xl">
                        <span className="text-xl">📋</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white">Personalised Protocols</h4>
                        <p className="text-blue-200 text-sm mt-1">Patient focused treatment for enhanced experience.</p>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="py-16 md:py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="inline-block p-4 rounded-full bg-pink-50 text-primary-pink mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-6">
              Ready for a Comprehensive Evaluation?
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Book an appointment with our expert assessment panel today and take the first step towards personalized diagnostic decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-appointment"
                className="bg-primary-pink hover:bg-[#d61b7f] text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg shadow-pink-500/30 hover:shadow-xl hover:-translate-y-1"
              >
                Schedule Assessment
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
