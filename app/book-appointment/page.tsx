"use client";

import { User, Check, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BookAppointmentPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow bg-[#fcf8fa] py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="bg-white shadow-lg rounded-[2rem] overflow-hidden border border-[#ED2793]/10">
            
            {/* Header */}
            <div className="bg-gray-50/80 p-8 md:p-10 border-b border-gray-100 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary-pink/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-blue/5 rounded-full blur-[80px] pointer-events-none" />
              
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#145390] mb-3 relative z-10">
                Book an <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED2793] to-[#ff7eb3]">Appointment</span>
              </h1>
              <p className="text-gray-500 text-[15px] md:text-base relative z-10">Start your journey to parenthood today</p>
            </div>

            {/* Form Content */}
            <div className="p-8 md:p-10 relative z-10">
              <form className="space-y-5">
                {/* Name Input */}
                <div className="flex items-center border border-gray-200 hover:border-gray-300 rounded-xl p-3 bg-gray-50/50 focus-within:bg-white focus-within:border-primary-pink focus-within:ring-2 focus-within:ring-primary-pink/20 transition-all">
                  <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 shadow-sm">
                    <User className="h-5 w-5 text-[#ED2793]" strokeWidth={2.5} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Full Name*" 
                    className="bg-transparent focus:outline-none ml-4 w-full text-gray-800 font-medium placeholder:font-normal placeholder:text-gray-400 text-base"
                    required
                  />
                </div>

                {/* Phone Input */}
                <div className="flex items-center border border-gray-200 hover:border-gray-300 rounded-xl p-3 bg-gray-50/50 focus-within:bg-white focus-within:border-primary-pink focus-within:ring-2 focus-within:ring-primary-pink/20 transition-all">
                  <div className="flex items-center gap-2 border-r border-gray-200 pr-4 shrink-0 bg-white rounded-full px-3 py-2 shadow-sm">
                    <span className="text-xl leading-none">🇮🇳</span>
                    <span className="text-gray-700 font-bold text-sm ml-1">+91</span>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Mobile Number*" 
                    className="bg-transparent focus:outline-none ml-4 w-full text-gray-800 font-medium placeholder:font-normal placeholder:text-gray-400 text-base tracking-wide"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="flex items-center border border-gray-200 hover:border-gray-300 rounded-xl p-3 bg-gray-50/50 focus-within:bg-white focus-within:border-primary-pink focus-within:ring-2 focus-within:ring-primary-pink/20 transition-all">
                  <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="h-5 w-5 text-[#ED2793]" strokeWidth={2.5} />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="bg-transparent focus:outline-none ml-4 w-full text-gray-800 font-medium placeholder:font-normal placeholder:text-gray-400 text-base"
                  />
                </div>

                {/* Message Input */}
                <div className="flex items-start border border-gray-200 hover:border-gray-300 rounded-xl p-3 bg-gray-50/50 focus-within:bg-white focus-within:border-primary-pink focus-within:ring-2 focus-within:ring-primary-pink/20 transition-all">
                  <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 shadow-sm mt-1">
                    <MessageSquare className="h-5 w-5 text-[#ED2793]" strokeWidth={2.5} />
                  </div>
                  <textarea 
                    placeholder="Message or Questions" 
                    rows={4}
                    className="bg-transparent focus:outline-none ml-4 w-full text-gray-800 font-medium placeholder:font-normal placeholder:text-gray-400 text-base resize-none mt-2"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-[#145390] hover:bg-[#1a6ab8] text-white font-bold text-lg rounded-xl py-4 transition-all shadow-lg shadow-[#145390]/20 hover:shadow-xl hover:-translate-y-0.5 mt-4"
                >
                  Submit Application
                </button>

                {/* Checkboxes */}
                <div className="pt-6 space-y-4 border-t border-gray-100 mt-6">
                  <label className="flex items-start justify-start gap-4 cursor-pointer group">
                    <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                      <input type="checkbox" className="peer appearance-none w-5 h-5 rounded-[6px] border-2 border-gray-300 checked:bg-[#145390] checked:border-[#145390] transition-all cursor-pointer" defaultChecked />
                      <Check className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none stroke-[3]" />
                    </div>
                    <span className="text-[14px] text-gray-600 font-medium leading-relaxed">
                      By continuing, you agree to our <Link href="#" className="text-[#ED2793] font-bold hover:underline">T&C</Link> and <Link href="#" className="text-[#ED2793] font-bold hover:underline">Privacy Policies</Link>
                    </span>
                  </label>

                  <label className="flex items-center justify-start gap-4 cursor-pointer group">
                    <div className="relative flex items-center justify-center shrink-0">
                      <input type="checkbox" className="peer appearance-none w-5 h-5 rounded-[6px] border-2 border-gray-300 checked:bg-[#145390] checked:border-[#145390] transition-all cursor-pointer" defaultChecked />
                      <Check className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none stroke-[3]" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#25D366] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                      </div>
                      <span className="text-[14px] text-gray-700 font-medium">Opt-in for WhatsApp updates</span>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
