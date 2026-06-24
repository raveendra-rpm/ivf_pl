'use client';

import { useState } from 'react';
import { ArrowRight, Sparkles, HeartPulse, Baby, Microscope, HelpCircle, CheckCircle2 } from 'lucide-react';

const options = [
  {
    icon: <HeartPulse className="w-5 h-5" />,
    label: "I have a previous history of failed IUI/IVF.",
  },
  {
    icon: <Baby className="w-5 h-5" />,
    label: "I am suffering from recurrent pregnancy loss (miscarriages).",
  },
  {
    icon: <Microscope className="w-5 h-5" />,
    label: "I am suffering from Azoospermia / Low /Zero Sperm Count.",
  },
  {
    icon: <HelpCircle className="w-5 h-5" />,
    label: "I have been trying for a baby (First or Second) for more than a year / Don't know the reason.",
  },
  {
    icon: <HeartPulse className="w-5 h-5" />,
    label: "I am suffering from irregular menses/no menses",
  },
  {
    icon: <HeartPulse className="w-5 h-5" />,
    label: "PCOS / Endometrics / Tubal Blockage / Low AMH",
  },
];

export default function PersonalisedHelpSection() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', mobile: '' });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-[#f4f8fd] dark:bg-gray-900 relative overflow-hidden transition-colors">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#dbeafe] dark:bg-blue-900/20 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fce7f3] dark:bg-pink-900/20 rounded-full blur-3xl opacity-40 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-[0_1px_4px_rgba(0,0,0,0.16)] dark:shadow-none dark:border dark:border-gray-700 overflow-hidden grid grid-cols-1 lg:grid-cols-5">

          {/* ── LEFT PANEL ── */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#145390] via-[#1a6abf] to-[#0e3d6e] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-16 -left-8 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-semibold px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                Free Personalised Guidance
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                Get Personalised<br />
                <span className="text-[#f9a8d4]">Help!</span>
              </h2>

              <p className="text-blue-100 text-sm md:text-base leading-relaxed mb-8">
                These are most common problems — nothing to worry about. Choose the one that best suits your situation and get a <span className="text-white font-semibold">free expert recommendation</span>.
              </p>

              {/* Trust indicators */}
              <div className="space-y-3">
                {[
                  "100% Confidential Consultation",
                  "Expert Fertility Specialists",
                  "No Charges, No Commitment",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#ED2793] flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-blue-100 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom decoration */}
            <div className="relative z-10 mt-10 hidden lg:block">
              <div className="text-white/20 text-8xl font-black leading-none select-none">IVF</div>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-between h-full">
            {step === 1 && (
              <>
                <div className="flex-1">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Step 1 of 2</p>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    What best describes your situation?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">Select the option that applies to you:</p>

                  {/* Options */}
                  <div className="space-y-3">
                    {options.map((option, index) => {
                      const isSelected = selectedOption === index;
                      return (
                        <button
                          key={index}
                          onClick={() => setSelectedOption(index)}
                          className={`w-full text-left cursor-pointer rounded-2xl px-5 py-4 flex items-center gap-4 transition-all duration-300 border-2 group ${
                            isSelected
                              ? 'bg-[#145390] border-[#145390] text-white shadow-lg scale-[1.01]'
                              : 'bg-[#f8fafc] dark:bg-gray-800/50 border-transparent hover:border-[#145390]/30 hover:bg-[#eef4fb] dark:hover:bg-gray-700 dark:border-gray-700 text-gray-700 dark:text-gray-300 shadow-sm dark:shadow-none'
                          }`}
                        >
                          {/* Radio */}
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? 'border-white bg-white/20' : 'border-[#145390]/50 dark:border-gray-500 group-hover:border-[#145390] dark:group-hover:border-blue-400'
                          }`}>
                            {isSelected && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                          </div>

                          {/* Icon */}
                          <div className={`shrink-0 transition-colors ${isSelected ? 'text-blue-200' : 'text-[#145390] dark:text-blue-400'}`}>
                            {option.icon}
                          </div>

                          {/* Label */}
                          <span className={`font-medium text-sm md:text-[15px] leading-snug ${isSelected ? 'text-white' : 'text-gray-800 dark:text-gray-200'}`}>
                            {option.label}
                          </span>

                          {/* Check mark */}
                          {isSelected && (
                            <div className="ml-auto shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Next Button */}
                <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-xs text-gray-400">
                    {selectedOption !== null
                      ? '✓ Option selected — click Next to proceed'
                      : 'Please select an option above'}
                  </p>
                  <button
                    disabled={selectedOption === null}
                    onClick={() => setStep(2)}
                    className={`flex items-center gap-3 font-semibold text-[15px] py-2 pl-7 pr-2 rounded-full shadow-md transition-all duration-300 group ${
                      selectedOption !== null
                        ? 'bg-[#145390] hover:bg-[#0f4070] text-white hover:shadow-xl hover:-translate-y-0.5 cursor-pointer'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <span>Next</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      selectedOption !== null ? 'bg-white text-[#145390] group-hover:translate-x-0.5' : 'bg-gray-300 text-gray-400'
                    }`}>
                      <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </button>
                </div>
              </>
            )}

            {step === 2 && !submitted && (
              <div className="flex-1 flex flex-col justify-center py-6">
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Step 2 of 2</p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Just a few more details
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">Please provide your contact information so our experts can reach out to you.</p>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your name"
                      className="w-full px-5 py-3.5 rounded-2xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 focus:bg-white dark:focus:bg-gray-800 focus:ring-0 focus:border-[#145390] outline-none transition-all text-gray-800 dark:text-gray-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      id="mobile"
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      placeholder="Enter your mobile number"
                      className="w-full px-5 py-3.5 rounded-2xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 focus:bg-white dark:focus:bg-gray-800 focus:ring-0 focus:border-[#145390] outline-none transition-all text-gray-800 dark:text-gray-200"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <button 
                    onClick={() => setStep(1)}
                    className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 font-medium text-sm transition-colors py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Back
                  </button>
                  <button
                    disabled={!formData.name || !formData.mobile}
                    onClick={() => setSubmitted(true)}
                    className={`flex items-center gap-3 font-semibold text-[15px] py-3 px-8 rounded-full shadow-md transition-all duration-300 group ${
                      formData.name && formData.mobile
                        ? 'bg-[#145390] hover:bg-[#0f4070] text-white hover:shadow-xl hover:-translate-y-0.5 cursor-pointer'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            )}

            {step === 2 && submitted && (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-green-50 dark:bg-green-900/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Thank You, {formData.name}!</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm text-[15px] leading-relaxed">
                  We have received your request. Our fertility experts will contact you shortly on <span className="font-semibold text-gray-700 dark:text-gray-300">{formData.mobile}</span>.
                </p>
                <button
                  onClick={() => {
                    setStep(1);
                    setSelectedOption(null);
                    setFormData({ name: '', mobile: '' });
                    setSubmitted(false);
                  }}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:shadow-sm"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
