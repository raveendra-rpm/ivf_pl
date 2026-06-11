'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OvulationCalculatorPage() {
  const [lastPeriod, setLastPeriod] = useState('');
  const [periodLength, setPeriodLength] = useState('5');
  const [cycleLength, setCycleLength] = useState('28');
  const [result, setResult] = useState<{ ovulationDate: string; fertileWindowStart: string; fertileWindowEnd: string } | null>(null);

  const calculateOvulation = () => {
    if (!lastPeriod) return;
    
    const startDate = new Date(lastPeriod);
    const cycleDays = parseInt(cycleLength, 10);
    
    // Ovulation is roughly 14 days before the next period
    const nextPeriodDate = new Date(startDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + cycleDays);
    
    const ovulationDate = new Date(nextPeriodDate);
    ovulationDate.setDate(ovulationDate.getDate() - 14);
    
    const fertileStart = new Date(ovulationDate);
    fertileStart.setDate(fertileStart.getDate() - 5);
    
    const fertileEnd = new Date(ovulationDate);
    fertileEnd.setDate(fertileEnd.getDate() + 1);

    const formatDate = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    setResult({
      ovulationDate: formatDate(ovulationDate),
      fertileWindowStart: formatDate(fertileStart),
      fertileWindowEnd: formatDate(fertileEnd)
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
              Ovulation Calculator
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/80 font-medium flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Trying for a Baby?</span>
              <span>›</span>
              <span className="text-white font-semibold">Ovulation Calculator</span>
            </div>
          </div>
        </div>

        {/* ── SECTION: WHAT IS OVULATION ── */}
        <section className="bg-[#f8fbff] py-16 md:py-24 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-pink-100/40 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-blue-100/40 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

            {/* Section header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-pink-100 text-primary-pink font-bold text-sm tracking-wide uppercase mb-5">
                <span className="w-2 h-2 rounded-full bg-primary-pink animate-pulse"></span>
                Understanding Your Cycle
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#145390]">
                What is <span className="text-primary-pink">Ovulation?</span>
              </h2>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { num: "28", unit: "Days", label: "Average Cycle" },
                { num: "12-24", unit: "Hours", label: "Egg Survives" },
                { num: "5", unit: "Days", label: "Sperm Survives" },
                { num: "Days 10-15", unit: "", label: "Most Fertile (28-day cycle)" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <p className="text-2xl md:text-3xl font-extrabold text-[#145390]">{stat.num}</p>
                  {stat.unit && <p className="text-primary-pink font-semibold text-sm">{stat.unit}</p>}
                  <p className="text-gray-500 text-xs mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Two content cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-pink/20 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#ED2793] to-[#145390] rounded-l-3xl"></div>
                <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ED2793" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                </div>
                <h3 className="text-lg font-bold text-[#145390] mb-4">The Ovulation Process</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Ovulation is a part of a woman's menstrual cycle, where ovarian follicles rupture to release one or more mature eggs. The eggs are released by the ovaries, which can result in embryo development when fertilized by a sperm. The time frame within which ovulation occurs is known as the ovulation period. This is the time during their menstrual cycle when the chances of fertilization and pregnancy are the highest. For instance, in the case of a 28-day-long menstrual cycle, days 10 to 15 are considered to be the ovulation period. These are the most fertile days of the menstrual cycle. The ovulation period usually begins four days before the middle day of a woman's menstrual cycle and continues for four days.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#145390]/20 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#145390] to-[#ED2793] rounded-l-3xl"></div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#145390" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </div>
                <h3 className="text-lg font-bold text-[#145390] mb-4">Why It Matters for Conception</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Knowing the ovulation period is important for women trying to conceive because egg fertilization can occur within 12 to 24 hours after it is released. Since sperm can survive within the uterus for up to 5 days, having sexual intercourse before and on the day of ovulation can maximize the chances of fertilization and thereby, conception. If fertilization occurs, the fertilized egg will then implant in the uterus within the next 6 to 12 days. If the egg is not fertilized within the ovulation period, menstruation occurs, causing the expulsion of blood and mucosal tissue from the inner lining of the uterus.
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
                    <label className="block text-primary-pink font-bold mb-2 text-sm uppercase tracking-wide">Start day of last period</label>
                    <input 
                      type="date" 
                      value={lastPeriod}
                      onChange={(e) => setLastPeriod(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-pink focus:outline-none transition-colors text-gray-700 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-primary-pink font-bold mb-2 text-sm uppercase tracking-wide">How long did it last</label>
                    <select 
                      value={periodLength}
                      onChange={(e) => setPeriodLength(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-pink focus:outline-none transition-colors text-gray-700 bg-white"
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} {n===10?'+':''}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-primary-pink font-bold mb-2 text-sm uppercase tracking-wide">Average length of cycle</label>
                    <select 
                      value={cycleLength}
                      onChange={(e) => setCycleLength(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-pink focus:outline-none transition-colors text-gray-700 bg-white"
                    >
                      {Array.from({length: 25}, (_, i) => i + 21).map(n => <option key={n} value={n}>{n} days</option>)}
                    </select>
                  </div>
                  <button 
                    onClick={calculateOvulation}
                    className="w-full bg-[#145390] hover:bg-[#0e3d6e] text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Calculate My Fertile Days
                  </button>
                </div>
                
                {result && (
                  <div className="mt-6 p-5 bg-blue-50 rounded-xl border border-blue-100 text-center animate-in fade-in slide-in-from-bottom-2">
                    <p className="text-gray-600 text-sm mb-1 font-medium">Estimated Ovulation Date</p>
                    <p className="text-xl font-bold text-primary-pink mb-3">{result.ovulationDate}</p>
                    <div className="h-px bg-blue-200 w-full mb-3" />
                    <p className="text-gray-600 text-sm mb-1 font-medium">Your Fertile Window</p>
                    <p className="text-lg font-bold text-[#145390]">{result.fertileWindowStart} - {result.fertileWindowEnd}</p>
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
                      <span className="font-extrabold">Myth:</span> Ovulation calculators work for all women, regardless of cycle variability.
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed"><span className="font-bold text-[#145390]">Fact:</span> They are less accurate for irregular cycles, as they rely on an average cycle length.</p>
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
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">How to Spot the Signs of Ovulation?</h2>
              <p className="text-gray-700 mb-6 text-lg">Ovulation and its signs can differ from woman to woman, but there are some common symptoms to look out for. These include:</p>
              <ul className="space-y-4 text-gray-700 text-lg">
                {[
                  "Changes in the consistency of cervical mucus, which becomes more stretchy and clear, like an egg white",
                  "Slight rise in basal body temperature, which stays elevated during most of the fertile days",
                  "Nausea and headaches on the day of ovulation due to changes in the levels of estrogen and progesterone",
                  "Bloating",
                  "Changes in appetite or mood",
                  "Slight change in the position of the cervix, which becomes higher, softer, and more open",
                  "Light brown spotting or discharge",
                  "Soreness or tenderness of the breasts",
                  "Increased sex drive",
                  "Mild pain in the pelvis or lower abdomen",
                  "Increased sensitivity to smell and taste",
                  "Swelling of the vulva or vagina"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(237,39,147,0.5)]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">How to Calculate My Fertile Days?</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                If you are wondering when your most fertile days are, an ovulation calculator is a helpful solution. It is a tool that lets you determine your expected ovulation date based on the history of your previous menstrual cycles. This calculates the probable date of your next ovulation and when you are most fertile. Every woman's menstrual cycle is unique, so knowing your fertile days can help improve your chances of conception or a pregnancy.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">How to Use the Ovulation Date Calculator?</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-5">
                <p>The ovulation date calculator works on the information you provide regarding your last menstrual cycle. So, you must enter the first day of your last menstrual cycle and the length of your usual menstrual cycle.</p>
                <p>The duration of the menstrual cycle is the number of days starting from the first day of your period to the day before the start of your next period. The average length of the menstrual cycle is around 28 days; however, it can be shorter or longer, varying from person to person. The ovulation period calculator usually counts 14 days backwards from the expected first day of your next period to determine your upcoming ovulating period. You can check your fertile days for the upcoming few months as well.</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">How Does the Menstrual Cycle Work?</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                A menstrual cycle begins when you begin menstruating or start having your period. This is when the lining of your uterus, which is the site of implantation after fertilization of an egg by a sperm, starts shedding. This finally exits the body in the form of blood, and this phase is known as your menstrual period, which typically takes place on the 1st day of a 28-day menstrual cycle. But the ovulation period is a lot longer than just one day. Four to five days before ovulation and roughly two days after ovulation, i.e., around a week in your menstrual cycle is considered your ovulation period, which is the most fertile period for fertilization and conception. Understanding when you are most likely to conceive during the menstrual cycle can help better your chances of getting pregnant.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">What if the Menstrual Cycle is Irregular?</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                If your menstrual cycle is irregular, it may be troublesome to figure out the exact days of your ovulation based on the ovulation calculator alone. Other ways to predict your probable ovulation days include tracking your basal body temperature, checking your cervix for changes, and using ovulation predictor kits. Other medical ovulation predictor kits use saliva or sweat to detect the level of estrogen, which changes over the course of a woman's menstrual cycle. Talk to your general physician or gynaecologist to determine which online ovulation calculator for irregular periods can be helpful for you.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">When is the Best Time to Conceive?</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                The best time for you to conceive is during the fertile days of your ovulation period. This time frame includes the 4 to 5 days before your ovulation until the day after your ovulation occurs. Sperm can survive for a few days within a woman's body, usually up to 5 days. Therefore, having sexual intercourse in the days leading up to your ovulation day and the day after can increase your chances of conception and pregnancy significantly.
              </p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
