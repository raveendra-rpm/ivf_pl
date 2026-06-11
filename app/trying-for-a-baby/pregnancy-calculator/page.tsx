'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PregnancyCalculatorPage() {
  const [calcMethod, setCalcMethod] = useState('LMP');
  const [baseDate, setBaseDate] = useState('');
  const [result, setResult] = useState<{ expectedDueDate: string; } | null>(null);

  const calculateDueDate = () => {
    if (!baseDate) return;
    
    const date = new Date(baseDate);
    const expected = new Date(date);

    if (calcMethod === 'LMP') {
      // LMP: add 280 days
      expected.setDate(expected.getDate() + 280);
    } else if (calcMethod === 'Conception') {
      // Conception: add 266 days
      expected.setDate(expected.getDate() + 266);
    } else if (calcMethod === 'IVF3') {
      // IVF Day 3: add 266 days
      expected.setDate(expected.getDate() + 266);
    } else if (calcMethod === 'IVF5') {
      // IVF Day 5: add 261 days
      expected.setDate(expected.getDate() + 261);
    }

    const formatDate = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    setResult({
      expectedDueDate: formatDate(expected),
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
              Pregnancy Calculator
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/80 font-medium flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span>Trying for a Baby?</span>
              <span>›</span>
              <span className="text-white font-semibold">Pregnancy Calculator</span>
            </div>
          </div>
        </div>

        {/* ── SECTION: PREGNANCY TERM & CALCULATOR ── */}
        <section className="bg-[#f8fbff] py-16 md:py-24 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-pink-100/40 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-blue-100/40 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

            {/* Section header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-pink-100 text-primary-pink font-bold text-sm tracking-wide uppercase mb-5">
                <span className="w-2 h-2 rounded-full bg-primary-pink animate-pulse"></span>
                Your Pregnancy Journey
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#145390]">
                Pregnancy Term & <span className="text-primary-pink">Calculator</span>
              </h2>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { num: "40", unit: "Weeks", label: "Full Pregnancy Term" },
                { num: "3", unit: "Trimesters", label: "Stages of Pregnancy" },
                { num: "280", unit: "Days", label: "From LMP to Delivery" },
                { num: "38", unit: "Weeks", label: "From Conception" },
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#145390] mb-4">What is a Due Date Calculator?</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  A pregnancy calculator, also known as a due date calculator, helps expecting parents estimate around when they will deliver. It is designed to track the days into the stage of pregnancy and other important milestones, like hearing the heartbeat or viewing the baby's first ultrasound. Healthing uses a 280 day/40 weeks length model as pregnancy timeline. This uses pregnancy length as its yardstick using the initial state of the first cycle before delivery. Childbirth is usually estimated 40 weeks of conception or 38 weeks from the onset of the last menstrual period. During the initial visit to an OB-GYN, the doctor usually gives them an estimated date of when the child will be born, typically based on a sonogram. This is referred to as the due date. The due date is normally estimated in a separate initial menstrual period.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#145390]/20 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#145390] to-[#ED2793] rounded-l-3xl"></div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#145390" strokeWidth="2">
                    <path d="M3 12h4l3 8 4-16 3 8h4"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#145390] mb-4">Tracking Week by Week Progress</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  A pregnancy calculator week by week helps account for all that progress. The milestones are essential to understanding and following up with the baby's developmental stages and impacts highly the health of each pregnancy trimester. Other milestones like the pregnancy month calculator, measure time in months, which may be more feasible for some parents.
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
                    <label className="block text-primary-pink font-bold mb-2 text-sm uppercase tracking-wide">Calculate By</label>
                    <select 
                      value={calcMethod}
                      onChange={(e) => setCalcMethod(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-pink focus:outline-none transition-colors text-gray-700 bg-white"
                    >
                      <option value="LMP">First Day of Last Period</option>
                      <option value="Conception">Known Conception Date</option>
                      <option value="IVF3">IVF Day 3 Transfer</option>
                      <option value="IVF5">IVF Day 5 Transfer</option>
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
                    onClick={calculateDueDate}
                    className="w-full bg-[#145390] hover:bg-[#0e3d6e] text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Calculate My Expected Due Date
                  </button>
                </div>
                
                {result && (
                  <div className="mt-6 p-5 bg-blue-50 rounded-xl border border-blue-100 text-center animate-in fade-in slide-in-from-bottom-2">
                    <p className="text-gray-600 text-sm mb-1 font-medium">Your Expected Due Date</p>
                    <p className="text-xl font-bold text-[#145390]">{result.expectedDueDate}</p>
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
                      <span className="font-extrabold">Myth:</span> Pregnancy calculators can determine the exact date of conception.
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed"><span className="font-bold text-[#145390]">Fact:</span> They estimate conception based on your menstrual cycle, but sperm can live up to five days so conception could vary by a few days.</p>
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
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">Pregnancy Due Date Calculator: Track Your Journey Week by Week</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <p>Pregnancy is a significant and extensive 40-week (ten months) beautiful yet physically taxing journey. Tracking your pregnancy fully week by week, knowing what to expect, when your baby may arrive, not just out of curiosity, is an integral part of prenatal care, important for you and your health and preparing for the big post-delivery day.</p>
                <p>This free online pregnancy due date calculator tool will help you to easily plan ahead, safely ensure a timely delivery of the baby on the next trimester safely into this healthy, protected and nurtured network.</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">What Is a Pregnancy Due Date Calculator?</h2>
              <p className="text-gray-700 mb-6 text-lg">A pregnancy due date calculator is a medical prediction tool that estimates your baby's Estimated Due Date (EDD), the day you are most likely to give birth. This calculator is typically 40 weeks counted down from:</p>
              <ul className="space-y-4 text-gray-700 text-lg mb-6">
                {[
                  "The first day of your last menstrual period (LMP); or",
                  "The calculated/ known date of conception."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(237,39,147,0.5)]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed">
                While it is normal to give birth in a window preceding or following this date, it still provides a useful reference point for tracking your baby's development and scheduling your prenatal check-ups safely.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">What Are the Key Stages of Pregnancy (Week by Week)?</h2>
              <p className="text-gray-700 mb-8 text-lg">As mentioned earlier, a pregnancy is 40 weeks long, averagely approx. 9 months. This entire timeline is further divided into 3 trimesters based on the baby's development stages. Understanding these 3 trimesters gives a better clarity to the expecting family, including the due date. So, let's understand how these trimesters are generally divided:</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-primary-pink mb-4">First Trimester (Weeks 1-13): The Foundation of Life</h3>
                  <ul className="space-y-4 text-gray-700 text-lg">
                    <li className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0"></span>
                      <span><span className="font-bold">Weeks 1-4:</span> Fertilization and implantation happen during this time. The embryo develops, and by week 4, the placenta begins to develop.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0"></span>
                      <span><span className="font-bold">Weeks 5-8:</span> The baby's heart begins to beat at this age, and tiny facial features begin to emerge. You might start to experience early pregnancy symptoms such as nausea and fatigue.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0"></span>
                      <span><span className="font-bold">Weeks 9-13:</span> The baby's major organs, muscles, and nerves develop. At the end of this stage of pregnancy, your little one is officially called a foetus.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary-pink mb-4">Second Trimester (Weeks 14-27): Growth and Movement</h3>
                  <ul className="space-y-4 text-gray-700 text-lg">
                    <li className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0"></span>
                      <span><span className="font-bold">Weeks 14-18:</span> You might start to feel the baby's movements today, and you may also notice a little baby bump.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0"></span>
                      <span><span className="font-bold">Weeks 19-22:</span> The movements get noticeable and you can have an ultrasound check to determine the baby's sex (however, in India sex revelation is illegal/punishable/a crime).</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0"></span>
                      <span><span className="font-bold">Weeks 23-27:</span> The baby's senses are developing, and it can start responding to sounds and light. As your baby grows, you will feel stronger kicks.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary-pink mb-4">Third Trimester (Weeks 28-40): Final Preparations for Birth</h3>
                  <ul className="space-y-4 text-gray-700 text-lg">
                    <li className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0"></span>
                      <span><span className="font-bold">Weeks 28-32:</span> Your baby is putting on fat and settling head-down into the pelvis. You may experience Braxton Hicks contractions at this point.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0"></span>
                      <span><span className="font-bold">Weeks 33-36:</span> Your baby will be head-down in preparation for delivery. You may feel the baby kick more notably.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0"></span>
                      <span><span className="font-bold">Weeks 37-40:</span> You are full-term. Your baby can arrive at any time, and labour can begin any day. So sure to keep your hospital bag packed.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">Methods to Estimate Your Pregnancy Due Date:</h2>
              <p className="text-gray-700 mb-6 text-lg">While estimating your due date, doctors and specialists turn to the correct and reliable methods, based on what information is available. Some of the most working approaches to the estimation include:</p>
              <ul className="space-y-6 text-gray-700 text-lg">
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(237,39,147,0.5)]"></span>
                  <span><span className="font-bold">Last Menstrual Period (LMP):</span> This is the most common method used. In this method, you add 280 days (40 weeks) to the first day of your last period. It works effectively for women with a regular 28-day cycle. Although not scientifically mostly accurate.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(237,39,147,0.5)]"></span>
                  <span><span className="font-bold">Conception Date/IVF Transfer Date:</span> This calculation date is preferred for individuals tracking ovulation or undergoing fertility treatment. The estimated due date is calculated based on the known or exact conception (or transfer). It will easily be more accurate the more you know about the ovulation date.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(237,39,147,0.5)]"></span>
                  <div className="space-y-2">
                    <span><span className="font-bold">IVF Transfer Date:</span> The estimated due date can also be accurate when pregnancy results from IVF since we know exactly when conception occurred.</span>
                    <ul className="pl-4 space-y-2">
                      <li>- For a Day 3 transfer, add 266 days to the transfer date.</li>
                      <li>- For a Day 5 transfer, add 261 days to the transfer date.</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(237,39,147,0.5)]"></span>
                  <span><span className="font-bold">Ultrasound Scan:</span> In cases where you cannot state both LMP and conception dates, an ultrasound scan can be utilized to calculate the estimated due date. Early ultrasound scans (12 weeks or less) are most able to estimate gestational age and determine the due date. This method is beneficial for women with irregular cycles.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">How Accurate Is the Due Date and Its Calculator?</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <p>Pregnancy due date calculators are tools only for a rough estimated time duration, not the actual date of delivery. Calculators rely on the concept that a woman has a standard 28-day menstrual cycle with ovulation on the 14th day. But, not every woman has this common cycle. Hence you can say that the accuracy of the result largely depends upon:</p>
                <ul className="list-disc pl-8 space-y-2 mb-4">
                  <li>Irregular Periods</li>
                  <li>Late Ovulation</li>
                  <li>Variations in length of the cycle</li>
                </ul>
                <p>All of these are critical factors that might have underlying and real influence. Therefore, the estimated date of delivery is always never absolute; in actuality 4% of women give delivery exactly on their estimated due date.</p>
                <p>This is why a two-week buffer period, before and after the due date (or the date it set to), is generally estimated for delivery, which typically is in the 38th or 42nd week of pregnancy. Moreover, your healthcare provider may alter your estimated due date based on routine prenatal visits.</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">Why Use a Due Date Calculator?</h2>
              <p className="text-gray-700 mb-6 text-lg">You might be somewhat conceiving a pregnancy or expecting a baby right on time? Then this calculator tool helps not only you, but they can provide valuable insights into:</p>
              <ul className="space-y-4 text-gray-700 text-lg">
                {[
                  "How the baby is developing",
                  "When to schedule specific important prenatal tests and scans",
                  "And, most importantly, it lets you prepare mentally, physically, and emotionally for your big day"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(237,39,147,0.5)]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">What If the Due Date Passes?</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <p>Even if your pregnancy due date passes, don't worry. It is completely normal for the estimated due date to be wrong. As mentioned earlier, the due date is an estimating tool of the time, and it is quite common for the baby to arrive one to two weeks before or after that estimated date. If you have crossed 40 weeks, you and your healthcare provider should discuss options.</p>
                <p>However, if the labour doesn't begin even after 41-42 weeks, your doctor may suggest that you undergo induced labour. Besides that, sometimes the baby needs just a little bit of time to formally given that it won't be that long until you hold it.</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-[#145390] mb-6">Conclusion</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Finally, a pregnancy due date calculator can be a great tool for any parent-to-be and a helpful guide through the remarkable journey of pregnancy. You can use this tool to know your baby's growth, schedule visits with your care provider, and prepare emotionally and practically for birth. Although your baby may be born a day or two before or after the exact due date, figuring out your estimated due date means you understand the growing stage better. Trust the journey you are on, its nature, and try looking every day to closer anticipator your child's birth.
              </p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
