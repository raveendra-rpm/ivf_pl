'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PeriodCalculatorPage() {
  const [lastPeriod, setLastPeriod] = useState('');
  const [periodLength, setPeriodLength] = useState('5');
  const [cycleLength, setCycleLength] = useState('28');
  const [result, setResult] = useState<{ nextPeriod: string; } | null>(null);

  const calculatePeriod = () => {
    if (!lastPeriod) return;
    
    const startDate = new Date(lastPeriod);
    const cycleDays = parseInt(cycleLength, 10);
    
    const nextPeriodDate = new Date(startDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + cycleDays);
    
    const formatDate = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    setResult({
      nextPeriod: formatDate(nextPeriodDate),
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
              Period Calculator
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/80 font-medium flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Trying for a Baby?</span>
              <span>›</span>
              <span className="text-white font-semibold">Period Calculator</span>
            </div>
          </div>
        </div>

        {/* ── SECTION: WHAT IS A PERIOD CALCULATOR ── */}
        <section className="bg-[#f8fbff] py-16 md:py-24 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-pink-100/40 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-blue-100/40 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

            {/* Section header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-pink-100 text-primary-pink font-bold text-sm tracking-wide uppercase mb-5">
                <span className="w-2 h-2 rounded-full bg-primary-pink animate-pulse"></span>
                Menstrual Health
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#145390]">
                What is a <span className="text-primary-pink">Period Calculator?</span>
              </h2>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { num: "21-35", unit: "Days", label: "Normal Cycle Range" },
                { num: "3-7", unit: "Days", label: "Period Duration" },
                { num: "12", unit: "Months", label: "Cycles Per Year" },
                { num: "400+", unit: "Cycles", label: "In a Lifetime" },
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
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#145390] mb-4">Why Track Your Cycle?</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Menstruation, commonly referred to as the menstrual cycle or menstrual period, is an integral part of a woman's reproductive health. It is a monthly cycle that ensures a woman's body readies itself for pregnancy. Tracking your menstruation cycle is important as it helps in identifying your cycle pattern, lets you know your current health as it relates to it, and tracks so you know when your ovulation days begin. A period calculator helps you calculate when your next expected menstrual period will begin and your most fertile days—which can help you determine the best time to get pregnant.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#145390]/20 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#145390] to-[#ED2793] rounded-l-3xl"></div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#145390" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#145390] mb-4">How the Calculator Works</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  A period date calculator uses the basic information to predict the next period dates, and then information about previous cycles can aid in pinpointing and better predict the upcoming period date. This period app may be useful to those with irregular or late periods. It gives better predictions than manually calculating the next period dates.
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
                    onClick={calculatePeriod}
                    className="w-full bg-[#145390] hover:bg-[#0e3d6e] text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Track My Period Cycle
                  </button>
                </div>
                
                {result && (
                  <div className="mt-6 p-5 bg-blue-50 rounded-xl border border-blue-100 text-center animate-in fade-in slide-in-from-bottom-2">
                    <p className="text-gray-600 text-sm mb-1 font-medium">Estimated Next Period</p>
                    <p className="text-xl font-bold text-[#145390]">{result.nextPeriod}</p>
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
                      <span className="font-extrabold">Myth:</span> Period calculators can predict your exact date with 100% accuracy.
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed"><span className="font-bold text-[#145390]">Fact:</span> They estimate based on your cycle length, but variation can lead to discrepancies.</p>
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
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">How Do You Calculate a Menstrual Cycle and Menstrual Period?</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <p>Many people get confused between the terms 'menstrual cycle' and 'menstrual period', and often use them interchangeably. But there is a difference. The menstrual cycle is the time between the first day of your period and the first day of your next period. During this duration, the body undergoes hormonal changes, ovulates, and if fertilization doesn't occur, shreds its lining, resulting in periods. The menstrual cycle can vary between 21 to 35 days normally.</p>
                <p>On the other hand, the menstrual period is when the uterine lining sheds in the form of blood. Menstrual blood comes out of the body in the form of period blood. This usually lasts for 3 to 7 days. You have to count the day you start bleeding to the day your bleeding subsides or stops completely to count the length of your menstrual period.</p>
                <p>A period calculator can help you estimate when your next period is likely to begin. It uses the duration of the menstrual cycle and the bleeding to make an accurate prediction for you.</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">Understanding the Phases of the Menstrual Cycle</h2>
              <p className="text-gray-700 mb-6 text-lg">The menstrual cycle may be divided into four primary phases:</p>
              <ul className="space-y-4 text-gray-700 text-lg">
                {[
                  "Menstrual Phase: This phase is characterized by bleeding. The lining of the uterus sheds off, and this flow constitutes the menstrual period flow.",
                  "Follicular Phase: This phase somewhat overlaps the menstrual phase. The pituitary gland releases FSH (follicle-stimulating hormone) which starts the development of follicles in the ovary to mature an egg.",
                  "Ovulation Phase: This involves the release of a mature egg from the ovary down into the uterus.",
                  "Luteal Phase: The empty follicle turns into the corpus luteum and starts producing progesterone to thicken the uterine lining in anticipation of a potential pregnancy."
                ].map((item, idx) => {
                  const [title, ...rest] = item.split(': ');
                  return (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(237,39,147,0.5)]"></span>
                      <span><span className="font-bold">{title}:</span> {rest.join(': ')}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">Signs Your Period Is Coming</h2>
              <p className="text-gray-700 mb-6 text-lg">If you are suffering from some of the following symptoms, then you may be experiencing premenstrual syndrome (PMS):</p>
              <ul className="space-y-4 text-gray-700 text-lg">
                {[
                  "Change in the breast size or might feel tender and/or swollen.",
                  "Bloating - Feeling of fullness or swelling of the stomach.",
                  "Bowel Problems - Experiencing loose motion or diarrhea.",
                  "Acne - Hormonal variations cause an acne flare up and clear up again as your period finishes.",
                  "Mood Swings - Irritability, anxiety, or mood swings.",
                  "Headaches - Hormonal changes trigger migraines or headaches.",
                  "Fatigue - You will commonly feel very tired or exhausted."
                ].map((item, idx) => {
                  const [title, ...rest] = item.split(' - ');
                  return (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(237,39,147,0.5)]"></span>
                      <span>{rest.length > 0 ? <><span className="font-bold">{title}</span> - {rest.join(' - ')}</> : item}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">Causes of Delayed or Missing Periods</h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                {[
                  "Pregnancy - This is the most common reason for missing a period.",
                  "Birth Control - You can experience varying lengths of periods depending on your birth control.",
                  "Stress - High levels of stress can affect hormone balance.",
                  "Weight Changes - Substantial weight loss or weight gain can affect the menstrual cycle.",
                  "Menopause - Women typically reach menopause in their late 40s or early 50s."
                ].map((item, idx) => {
                  const [title, ...rest] = item.split(' - ');
                  return (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(237,39,147,0.5)]"></span>
                      <span>{rest.length > 0 ? <><span className="font-bold">{title}</span> - {rest.join(' - ')}</> : item}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">Why is Menstrual Period Important to Track?</h2>
              <p className="text-gray-700 mb-6 text-lg">Considering your period is very instrumental to your reproductive health. This helps in regularizing patterns that may indicate some underlying health problem. Here are some reasons why a period tracker is useful:</p>
              <ul className="space-y-4 text-gray-700 text-lg">
                {[
                  "Period Date Prediction - Helpful to pre-plan your period ahead of time when the next period is due, which makes it easier to plan events, holidays, or any activities during this time.",
                  "Irregularity Detection - Provides indications of irregular, late, or early periods which may show underlying conditions.",
                  "Pregnancy Planning - Enabling tracking of fertile windows and days of ovulation.",
                  "Symptom Management - Predictability for symptoms of PMS.",
                  "Monitoring Health - Tracking your periods offers an easy way to monitor general reproductive health and specifically to determine the chronicity of any problems that need observation for medical attention.",
                  "Lifestyle Planning - Enables you to plan vacations or any other events with the assurance of an unexpected period.",
                  "Medication Scheduling - This helps in managing medications for birth control or fertility treatments."
                ].map((item, idx) => {
                  const [title, ...rest] = item.split(' - ');
                  return (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(237,39,147,0.5)]"></span>
                      <span>{rest.length > 0 ? <><span className="font-bold">{title}</span> - {rest.join(' - ')}</> : item}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">What are the Benefits of Using a Period Calculator?</h2>
              <p className="text-gray-700 mb-6 text-lg">The following are some advantages of using a period calculator app:</p>
              <ul className="space-y-4 text-gray-700 text-lg">
                {[
                  "Accuracy - Gives you a more accurate calculation for when your next period is due.",
                  "Convenience - You find a period calculator online quickly and it is quite user-friendly.",
                  "Health Insights - Gives you insights into your menstrual and general health concerns.",
                  "Pregnancy Planning - Useful tool to map out the fertile days for conception."
                ].map((item, idx) => {
                  const [title, ...rest] = item.split(' - ');
                  return (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(237,39,147,0.5)]"></span>
                      <span>{rest.length > 0 ? <><span className="font-bold">{title}</span> - {rest.join(' - ')}</> : item}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">How Does a Period Calculator Calculate the Menstrual Cycle and Length?</h2>
              <p className="text-gray-700 mb-6 text-lg">The period calculator calculates the cycle and length by considering the following aspects:</p>
              <ul className="space-y-4 text-gray-700 text-lg">
                {[
                  "You will need to provide data that includes the first day of the period and the average cycle length.",
                  "Afterward, it adds the cycle duration to calculate past data to predict the expected dates of your next period.",
                  "The app is beneficial to those with regular periods, but helpful to those with irregular ones to observe patterns from the data provided.",
                  "Many websites and online apps list their period calculator features online to predict periods."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(237,39,147,0.5)]"></span>
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
