'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      question: "When is the right time to start IVF treatment?",
      answer: "After the initial consultation, examination and blood tests doctor will explain the best time to start the treatment. Usually Doctor may start your treatment on the 2nd or 3rd day of your period."
    },
    {
      question: "When should I opt for IVF?",
      answer: "The IVF procedure can be prescribed in cases where the other fertility treatments have failed, or if the chances of a successful pregnancy are higher with this method than with any other treatment. If there are no contraindications, the procedure can be carried out simply at the request of the couple by considering that precise time as the right time for IVF."
    },
    {
      question: "How many times can we try IVF?",
      answer: "There are no set guidelines on how many times IVF can be done but a couple can try as many times as they want."
    },
    {
      question: "Can we have our tests done at a nearby local clinic?",
      answer: "Some tests which are prescribed by our highly qualified and well trained doctors needs to be carried by our team of experts only so it is feasible if you get it done from our Popular Pratap IVF centre for the better and desired results."
    },
    {
      question: "Is IVF Painful?",
      answer: "No, IVF is not at all painful because the injections used for IVF are purified and injected in subcutaneous form. The egg collection process is done under light sedation which is also not painful. At the time of embryo transfer, anaesthesia is not given but it is a 2 to 5 minutes process which hardly causes any pain. Every patient is different; therefore the process will differ from patient to patient. However, when it comes to IVF injections, they are thin and easy. They can also be administered under anaesthesia if required."
    },
    {
      question: "What is the success rate of IVF?",
      answer: "Success rates strongly depend on the age of the patient, their condition, medical history and the treatment used. Popular Pratap IVF has 90% success ratio. However by leveraging advanced technology and standardising the procedures, we are constantly working towards improving the IVF success rates."
    },
    {
      question: "When should I opt for IVF?",
      answer: "The IVF procedure can be prescribed in cases where the other fertility treatments have failed, or if the chances of a successful pregnancy are higher with this method than with any other treatment. If there are no contraindications, the procedure can be carried out simply at the request of the couple by considering that precise time as the right time for IVF."
    },
    {
      question: "In which cases, IVF is performed?",
      answer: (
        <div className="space-y-4">
          <p><b>Tubal-peritoneal factor-</b> Violation of the patency of the fallopian tubes leads to the fact that the egg cannot penetrate into the uterine cavity. In this case, you can either try to restore patency using a surgical laparoscopic operation or perform IVF and implant an already developing embryo into the uterine cavity.</p>
          <p><b>Male factor-</b> This diagnosis is made when the quality of sperm is not high enough. If the number of healthy active sperm is too low to conceive a healthy child, it is better to resort to ART.</p>
          <p><b>Endometriosis-</b> Mild forms of endometriosis usually respond to surgery and hormonal treatment. If, after the therapy, pregnancy does not occur, then the doctor sends the couple for IVF procedure.</p>
          <p><b>Age-related infertility-</b> Age plays a vital role when we talk about deciding the right time for IVF. With this factor of infertility, it is desirable to supplement the standard IVF procedure with ICSI and assisted hatching methods.</p>
          <p><b>Anovulation-</b> Anovulation is usually treated with simpler methods, such as hormonal stimulation combined with IUI. But if it's unsuccessful, you can always use the IVF method. Unexplained infertility- If it is not possible to establish an accurate diagnosis, and the therapy is unsuccessful, the doctor may advise the couple to resort to the IVF procedure.</p>
        </div>
      )
    },
    {
      question: "How long do I need to rest after the embryo transfer procedure?",
      answer: "Resting 15-20 minutes after the transfer is usually sufficient. We suggest not doing heavy exercise and walking for long distances during this time period. Women who work at an office can work the next day to resume daily activities."
    },
    {
      question: "What are the do's and don'ts after Embryo Transfer?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Bed rest is not required after embryo transfer; avoid lifting heavy weight and any strenuous exercise</li>
          <li>Take healthy diet inclusive of antioxidants and avoid outside food</li>
          <li>Avoid any stress and negative thoughts</li>
          <li>Take medications prescribed after embryo transfer properly</li>
          <li>Avoid using public washrooms and maintain proper hydration to avoid urinary tract infection</li>
        </ul>
      )
    },
    {
      question: "Can I continue with my routine activities after embryo transfer?",
      answer: "Even though, embryo is formed artificially in an IVF pregnancy, there is no difference from what happens in the natural cycle. The uterus accepts the embryo in the same way it accepts the naturally fertilised eggs. It is important to understand that nature has a foolproof plan in everything including the reproductive system where the embryo attaches to the uterine lining very firmly regardless of whether it attaches naturally or artificially. The movements or walk around or even gravity, does not cause the embryo to detach and fall off. Also, it is a total myth that bed rest after embryo transfer increases success rate of IVF. In fact, research has shown that patients who do complete bed rest after embryo transfer have less success in IVF as compared to patients who continue to do their routine activities. Main reason behind this is that patients who keep themselves engaged in some activities have less stress levels which help in increasing their IVF success. Therefore, the advice of bed rest after embryo transfer is over exaggerated or unrealistic."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-[#fcf8fa] relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-pink/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-[#ED2793] text-xs font-bold px-5 py-2.5 rounded-full mb-6 tracking-wide uppercase border border-[#ED2793]/10 shadow-[0_4px_15px_rgba(237,39,147,0.05)]">
            <span className="w-2 h-2 rounded-full bg-[#ED2793] inline-block animate-pulse shadow-[0_0_8px_rgba(237,39,147,0.8)]"></span>
            Any Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#145390] mb-6 leading-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED2793] to-[#ff7eb3]">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our fertility treatments, processes, and what to expect on your journey.
          </p>
        </div>
        
        {/* FAQ Accordion List */}
        <div className="space-y-4 md:space-y-5">
          {faqs.map((faq, index) => {
            const isActive = openIndex === index;
            return (
              <div 
                key={index} 
                className={`transition-all duration-500 rounded-[2rem] border ${
                  isActive 
                    ? 'bg-white border-[#ED2793]/20 shadow-[0_15px_40px_rgba(237,39,147,0.08)]' 
                    : 'bg-white border-transparent shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(20,83,144,0.08)]'
                }`}
              >
                <button
                  className="w-full text-left flex items-center justify-between px-6 py-4 md:px-8 md:py-5 group"
                  onClick={() => setOpenIndex(isActive ? null : index)}
                >
                  <span className={`pr-4 text-[16px] md:text-[18px] font-bold transition-colors duration-300 ${isActive ? 'text-[#ED2793]' : 'text-[#145390] group-hover:text-[#ED2793]'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full transition-all duration-500 shadow-sm ${
                    isActive ? 'bg-[#ED2793] text-white rotate-180' : 'bg-[#f8fbff] text-[#145390] group-hover:bg-[#fdf0f7] group-hover:text-[#ED2793]'
                  }`}>
                    <Plus className={`h-4 w-4 md:h-5 md:w-5 transition-transform duration-500 ${isActive ? 'rotate-45' : ''}`} strokeWidth={2.5} />
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-600 text-[15px] leading-relaxed">
                      <div className="pt-5 border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
