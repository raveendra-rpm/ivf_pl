'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PregnancyConceptionCalculatorPage() {
  const [calcMethod, setCalcMethod] = useState('DueDate');
  const [baseDate, setBaseDate] = useState('');
  const [result, setResult] = useState<{ conceptionWindow: string; } | null>(null);

  const calculateConception = () => {
    if (!baseDate) return;
    
    const date = new Date(baseDate);
    let lmpDate = new Date(date);

    if (calcMethod === 'DueDate') {
      // LMP is 280 days before Due Date
      lmpDate.setDate(lmpDate.getDate() - 280);
    } else if (calcMethod === 'LMP') {
      // LMP is the selected date
    }

    const windowStart = new Date(lmpDate);
    windowStart.setDate(windowStart.getDate() + 11);
    
    const windowEnd = new Date(lmpDate);
    windowEnd.setDate(windowEnd.getDate() + 21);

    const formatDate = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    setResult({
      conceptionWindow: `${formatDate(windowStart)} - ${formatDate(windowEnd)}`,
    });
  };

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-white">
        
        {/* ── HERO ── */}
        <div className="bg-gradient-to-r from-primary-blue via-[#ED2793] to-[#ff7eb3] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
              Conception Calculator
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/80 font-medium flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Trying for a Baby?</span>
              <span>›</span>
              <span className="text-white font-semibold">Conception Calculator</span>
            </div>
          </div>
        </div>

        {/* ── SECTION: WHAT IS CONCEPTION CALCULATOR ── */}
        <section className="bg-[#f8fbff] py-16 md:py-24 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-pink-100/40 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-blue-100/40 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

            {/* Section header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-pink-100 text-primary-pink font-bold text-sm tracking-wide uppercase mb-5">
                <span className="w-2 h-2 rounded-full bg-primary-pink animate-pulse"></span>
                Family Planning
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#145390]">
                What is the <span className="text-primary-pink">Conception Calculator?</span>
              </h2>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { num: "11-21", unit: "Days", label: "Conception Window" },
                { num: "5", unit: "Days", label: "Sperm Survival" },
                { num: "24", unit: "Hours", label: "Egg Viability" },
                { num: "~14", unit: "Days", label: "Before Next Period" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <p className="text-2xl md:text-3xl font-extrabold text-[#145390]">{stat.num}</p>
                  <p className="text-primary-pink font-semibold text-sm">{stat.unit}</p>
                  <p className="text-gray-500 text-xs mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Two content cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-pink/20 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#ED2793] to-[#145390] rounded-l-3xl"></div>
                <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ED2793" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#145390] mb-4">Your Go-To Fertility Tool</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Planning for parenthood? The conception calculator is your go-to tool. This user-friendly device helps couples pinpoint fertile days and estimate conception dates with scientific accuracy. Many aspiring parents stress over timing but, armed with the right information; the journey becomes easier. By leveraging this powerful resource, couples can confidently navigate the path to parenthood. Don't leave it to chance - equip yourself with knowledge and take control of your family planning journey today.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#145390]/20 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#145390] to-[#ED2793] rounded-l-3xl"></div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#145390" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#145390] mb-4">How the Calculator Estimates</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  The conception date calculator estimates when your baby was conceived based on key information. It uses details like your last menstrual period and cycle length to pinpoint fertilization. This tool helps expectant parents track milestones and due dates. By adding a few personal details, you'll receive an approximate timeframe for when sperm meets egg. Many find this invaluable for planning their pregnancy journey and understanding their baby's development timeline.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* ── SECTION: CALCULATOR & MYTH/FACT ── */}
        <section className="bg-pink-50/50 py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <h2 className="text-3xl font-extrabold text-[#145390] mb-10">Calculate Now!</h2>
            
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              
              {/* Form */}
              <div className="lg:w-1/3 w-full bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <div className="space-y-6">
                  <div>
                    <label className="block text-primary-pink font-bold mb-2 text-sm uppercase tracking-wide">Calculate by</label>
                    <select 
                      value={calcMethod}
                      onChange={(e) => setCalcMethod(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-pink focus:outline-none transition-colors text-gray-700 bg-white"
                    >
                      <option value="DueDate">Due Date</option>
                      <option value="LMP">Last Menstrual Period</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-primary-pink font-bold mb-2 text-sm uppercase tracking-wide">Your Date</label>
                    <input 
                      type="date" 
                      value={baseDate}
                      onChange={(e) => setBaseDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-pink focus:outline-none transition-colors text-gray-700 bg-white"
                    />
                  </div>
                  <button 
                    onClick={calculateConception}
                    className="w-full bg-[#145390] hover:bg-[#0e3d6e] text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Calculate My Conception Date
                  </button>
                </div>
                
                {result && (
                  <div className="mt-6 p-5 bg-blue-50 rounded-xl border border-blue-100 text-center animate-in fade-in slide-in-from-bottom-2">
                    <p className="text-gray-600 text-sm mb-1 font-medium">Likely Conception Window</p>
                    <p className="text-xl font-bold text-[#145390]">{result.conceptionWindow}</p>
                  </div>
                )}
              </div>

              {/* Myth vs Fact */}
              <div className="lg:w-2/3 w-full">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-8 lg:mt-6">
                  <div className="flex-shrink-0 w-32 h-32 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-pink-50 rounded-full scale-110"></div>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ED2793" strokeWidth="1.5" className="relative z-10">
                      <path d="M9 18h6M10 22h4M12 2v2M4.22 4.22l1.42 1.42M2 12h2M19.78 4.22l-1.42 1.42M22 12h-2M15 18v-2a4 4 0 1 0-6 0v2h6z"/>
                    </svg>
                    <div className="absolute bottom-1 bg-white px-3 py-1 rounded-full text-[10px] font-black text-[#145390] shadow-sm uppercase tracking-wider z-20 border border-gray-100 text-center leading-tight">
                      Myth<br/>vs<br/>Fact
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#ED2793] mb-3 leading-snug">
                      <span className="font-extrabold">Myth:</span> Conception calculators can pinpoint the exact moment of conception.
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed"><span className="font-bold text-[#145390]">Fact:</span> They estimate the date based on ovulation, but the exact moment varies due to sperm survival.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SECTION: TEXT CONTENT ── */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-16">
            
            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">How to calculate the conception date</h2>
              <p className="text-gray-700 mb-6 text-lg">The conception calculator can give you your conception date through the following three methods:</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-primary-pink mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-pink flex-shrink-0"></span>
                    Last menstrual period date
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed ml-4">
                    Conception typically occurs 11-21 days after a woman's period starts, assuming a 28-day cycle. Counting from day one of the last menstrual period helps pinpoint the likely conception window. This time frame allows couples to estimate when pregnancy may have begun, aiding in family planning or prenatal care decisions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-pink mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-pink flex-shrink-0"></span>
                    Estimated due date
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed ml-4">
                    Count back forty weeks from your due date to pinpoint your last period's start. Add eleven to twenty-one days, and voila - your likely conception window emerges. This method proves useful for women with unpredictable cycles, offering a clearer picture of when pregnancy began. While not exact, it provides a reasonable estimate to satisfy curiosity about your baby's earliest moments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-pink mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-pink flex-shrink-0"></span>
                    Gestational age
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed ml-4">
                    Pinpointing conception and menstruation dates requires a simple calculation. Start with the current date and subtract the weeks of pregnancy. This reveals the last period's start. Add 11-21 days to find the likely conception window. This method offers a reliable estimate for those tracking their reproductive timeline. Remember, individual cycles may vary slightly from these calculations.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">What Factors Affect the Accuracy of Conception Calculator?</h2>
              <p className="text-gray-700 mb-8 text-lg">The accuracy of the results of a conception calculator highly depends on your menstrual cycle. <span className="text-primary-pink font-semibold">Irregular periods</span> make pinpointing fertile windows trickier. These tools work best for those with predictable monthly cycles, offering less precise estimates for women with fluctuating menstrual patterns.</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-primary-pink mb-3">Health Conditions</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Menstrual cycles and fertility shift with <span className="text-primary-pink font-semibold">PCOS</span> or thyroid issues. These conditions obscure ovulation timing and complicate pregnancy planning. Women facing such challenges must tune into their body's subtle cues. Vigilant self-awareness becomes crucial for those navigating reproductive health with hormonal imbalances.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-pink mb-3">Lifestyle Factors</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Irregular cycles stem from lifestyle factors. Stress disrupts hormones. Altered diet and exercise habits impact metabolism. Poor sleep throws off your body's rhythms. These elements intertwine, destabilizing your menstrual clock.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-pink mb-3">Hormonal Influences</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Menstrual cycles can temporarily fluctuate after discontinuing birth control. Certain medications also influence hormones, potentially shifting period timing. These elements warrant attention for accurate cycle tracking.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">Benefits of Using the Conception Calculator</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-primary-pink mb-3">Increased Conception Chances</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Optimal conception rates are contingent upon precise timing. The date of conception calculator offers approximate identification of the fertile window, facilitating the alignment of sexual intercourse with the ovulatory period.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-pink mb-3">Personalised Insights</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    With a conception calculator, you have a personal fertility assistant by your side. By using it, you will know exactly when you are most likely to get pregnant. Most importantly, tracking your period allows you to see patterns in your reproductive health. Your doctors will also have more information and be able to help you better.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-pink mb-3">User-Friendly Interface</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Most conception calculators have a simplistic design. They come with a user-friendly interface to ensure that everyone can use it. You won't have to deal with any medical jargon and within seconds, you will have the information you need.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-pink mb-3">Health Awareness</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Your menstrual cycle tells a lot about your health. A conception calculator helps you track it and know your fertile window. By tracking your cycle, you're taking a proactive step towards a healthier you. Uncover hidden patterns and empower yourself to take charge of your reproductive health.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-pink mb-3">Emotional Support</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Understanding your fertility can make a big difference in your journey to parenthood. By identifying your fertile days, couples can feel more confident and in control. A reliable fertility guide provides valuable information and support.
                  </p>
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
