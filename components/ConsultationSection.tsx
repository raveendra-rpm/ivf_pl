'use client';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export default function ConsultationSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left Side */}
          <div className="md:w-1/2 w-full">
            <p className="text-gray-400 dark:text-gray-500 uppercase text-[13px] tracking-wide font-semibold mb-4">
              Not sure which treatment is suitable for you?
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-semibold text-[#1e293b] dark:text-gray-100 leading-[1.1] mb-6">
              Get a FREE <br className="hidden md:block" /> Consultation Now!
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-md text-[15px] leading-relaxed">
              Are you looking for top-quality fertility guidance tailored to your needs? Reach out to us.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="bg-[#0066cc] w-12 h-10 rounded flex items-center justify-center text-white shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 dark:text-gray-500 text-sm mb-0.5">E-mail</p>
                  <p className="text-[#1e293b] dark:text-gray-200 font-medium text-[15px]">hello@popularivf.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="text-[#0066cc] w-12 h-10 rounded flex items-center justify-center shrink-0">
                  <Phone className="w-[26px] h-[26px] -ml-2" />
                </div>
                <div>
                  <p className="text-gray-400 dark:text-gray-500 text-sm mb-0.5">Phone number</p>
                  <p className="text-[#1e293b] dark:text-gray-200 font-medium text-[15px]">+91 9151000135</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2 w-full">
            <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-none border border-gray-50 dark:border-gray-700">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                
                <div>
                  <label className="block text-gray-500 dark:text-gray-400 text-sm font-medium mb-1.5 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Priya Sharma" 
                    required
                    className="w-full px-5 py-3 rounded-2xl bg-[#f8fafc] dark:bg-gray-700 border-none focus:ring-2 focus:ring-primary-blue/20 transition-all text-gray-700 dark:text-gray-200 placeholder:text-gray-300 dark:placeholder:text-gray-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-500 dark:text-gray-400 text-sm font-medium mb-1.5 ml-1">Mobile Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 9876543210" 
                    required
                    className="w-full px-5 py-3 rounded-2xl bg-[#f8fafc] dark:bg-gray-700 border-none focus:ring-2 focus:ring-primary-blue/20 transition-all text-gray-700 dark:text-gray-200 placeholder:text-gray-300 dark:placeholder:text-gray-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-500 dark:text-gray-400 text-sm font-medium mb-1.5 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="priya@example.com" 
                    className="w-full px-5 py-3 rounded-2xl bg-[#f8fafc] dark:bg-gray-700 border-none focus:ring-2 focus:ring-primary-blue/20 transition-all text-gray-700 dark:text-gray-200 placeholder:text-gray-300 dark:placeholder:text-gray-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-500 dark:text-gray-400 text-sm font-medium mb-1.5 ml-1">Message</label>
                  <textarea 
                    placeholder="Type your message" 
                    rows={2}
                    className="w-full px-5 py-3 rounded-2xl bg-[#f8fafc] dark:bg-gray-700 border-none focus:ring-2 focus:ring-primary-blue/20 transition-all text-gray-700 dark:text-gray-200 placeholder:text-gray-300 dark:placeholder:text-gray-500 outline-none resize-none"
                  ></textarea>
                </div>

                <div className="pt-3">
                  <button 
                    type="submit" 
                    className="bg-primary-blue hover:bg-[#0f4070] text-white font-medium py-1.5 px-2 pr-7 rounded-full transition-colors flex items-center gap-3 w-max"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-blue">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    <span className="text-[15px]">SUBMIT</span>
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
