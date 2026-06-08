"use client";

import { useState } from 'react';
import { User, Check, Mail, MessageSquare, Phone, Calendar, Clock, MapPin, Star } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BookAppointmentPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-[#f4f8fd]">

        {/* ── HERO STRIP ── */}
        <div className="relative bg-[#060f24] overflow-hidden py-14 md:py-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80"
              alt="Book Appointment"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060f24] via-[#060f24]/90 to-[#145390]/40" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#ED2793]/10 blur-[100px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-[#145390]/20 blur-[80px] translate-y-1/2" />

          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 max-w-2xl mx-auto">
              Begin Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED2793] to-[#ff7eb3]">Parenthood</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
              Our expert fertility team at Popular IVF, Varanasi is ready to help you take the first step.
            </p>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="container mx-auto px-4 md:px-8 max-w-6xl py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* ── LEFT PANEL ── */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Why Choose Us */}
              <div className="bg-[#060f24] rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-[#ED2793]/10 blur-[60px] -translate-y-1/2 translate-x-1/2" />
                <span className="text-[#ED2793] text-xs font-bold uppercase tracking-widest mb-4 block">Why Popular IVF?</span>
                <h2 className="text-xl font-extrabold text-white mb-6 leading-snug">Trusted by thousands of families across India</h2>
                <div className="space-y-4">
                  {[
                    { icon: '✨', title: '90%+ Success Rate', desc: 'Among the highest in the region' },
                    { icon: '🧬', title: 'Advanced IVF Lab', desc: 'State-of-the-art embryology lab' },
                    { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges, ever' },
                    { icon: '🤝', title: 'Personalized Care', desc: 'Tailored plans for every couple' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg shrink-0">{item.icon}</div>
                      <div>
                        <p className="font-bold text-white text-sm">{item.title}</p>
                        <p className="text-white/50 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm">
                <h3 className="font-extrabold text-[#145390] text-base mb-5">Get In Touch</h3>
                <div className="space-y-4">
                  <a href="tel:+919151000135" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#ED2793]/10 flex items-center justify-center shrink-0 group-hover:bg-[#ED2793]/20 transition-colors">
                      <Phone className="w-4 h-4 text-[#ED2793]" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Call Us</p>
                      <p className="text-[#145390] font-bold text-sm">+91 9151000135</p>
                    </div>
                  </a>
                  <a href="mailto:hello@popularivf.com" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#145390]/10 flex items-center justify-center shrink-0 group-hover:bg-[#145390]/20 transition-colors">
                      <Mail className="w-4 h-4 text-[#145390]" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Email Us</p>
                      <p className="text-[#145390] font-bold text-sm">hello@popularivf.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">OPD Hours</p>
                      <p className="text-[#145390] font-bold text-sm">Open 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Location</p>
                      <p className="text-[#145390] font-bold text-sm">B.L.W Road, Kakarmatta, Varanasi — 221001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT PANEL — FORM ── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">

                {/* Form Header */}
                <div className="bg-gradient-to-r from-[#145390] to-[#1a6ab8] p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[250px] h-[250px] rounded-full bg-white/5 blur-[60px]" />
                  <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] rounded-full bg-[#ED2793]/10 blur-[60px]" />
                  <span className="inline-block bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-white/20">Book Appointment</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white relative z-10 leading-snug">
                    Fill in your details<br />
                    <span className="text-[#ff7eb3]">we&apos;ll call you back!</span>
                  </h2>
                  <p className="text-white/60 text-sm mt-2 relative z-10">Typically we respond within 30 minutes during OPD hours.</p>
                </div>

                {/* Form */}
                <div className="p-8 md:p-10">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-emerald-500" strokeWidth={2.5} />
                      </div>
                      <h3 className="text-2xl font-extrabold text-[#145390] mb-2">Request Submitted!</h3>
                      <p className="text-gray-500 text-sm max-w-sm mx-auto">
                        Thank you! Our team will reach out to you shortly to confirm your appointment.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-8 text-[#ED2793] font-bold text-sm hover:underline"
                      >
                        Submit another request
                      </button>
                    </div>
                  ) : (
                    <form className="space-y-5" onSubmit={handleSubmit}>

                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Full Name *</label>
                        <div className="flex items-center border border-gray-200 hover:border-[#145390]/40 rounded-2xl p-3.5 bg-gray-50 focus-within:bg-white focus-within:border-[#145390] focus-within:ring-2 focus-within:ring-[#145390]/10 transition-all">
                          <div className="w-9 h-9 rounded-xl bg-[#145390]/10 flex items-center justify-center shrink-0">
                            <User className="h-4 w-4 text-[#145390]" strokeWidth={2.5} />
                          </div>
                          <input
                            type="text"
                            placeholder="e.g. Priya Sharma"
                            className="bg-transparent focus:outline-none ml-3 w-full text-gray-800 font-medium placeholder:font-normal placeholder:text-gray-400 text-[15px]"
                            required
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Mobile Number *</label>
                        <div className="flex items-center border border-gray-200 hover:border-[#145390]/40 rounded-2xl p-3.5 bg-gray-50 focus-within:bg-white focus-within:border-[#145390] focus-within:ring-2 focus-within:ring-[#145390]/10 transition-all">
                          <div className="flex items-center gap-2 border-r border-gray-200 pr-4 shrink-0">
                            <span className="text-xl leading-none">🇮🇳</span>
                            <span className="text-gray-700 font-bold text-sm">+91</span>
                          </div>
                          <input
                            type="tel"
                            placeholder="98765 43210"
                            className="bg-transparent focus:outline-none ml-4 w-full text-gray-800 font-medium placeholder:font-normal placeholder:text-gray-400 text-[15px] tracking-wide"
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Email Address</label>
                        <div className="flex items-center border border-gray-200 hover:border-[#145390]/40 rounded-2xl p-3.5 bg-gray-50 focus-within:bg-white focus-within:border-[#145390] focus-within:ring-2 focus-within:ring-[#145390]/10 transition-all">
                          <div className="w-9 h-9 rounded-xl bg-[#ED2793]/10 flex items-center justify-center shrink-0">
                            <Mail className="h-4 w-4 text-[#ED2793]" strokeWidth={2.5} />
                          </div>
                          <input
                            type="email"
                            placeholder="you@example.com"
                            className="bg-transparent focus:outline-none ml-3 w-full text-gray-800 font-medium placeholder:font-normal placeholder:text-gray-400 text-[15px]"
                          />
                        </div>
                      </div>


                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Message / Questions</label>
                        <div className="flex items-start border border-gray-200 hover:border-[#145390]/40 rounded-2xl p-3.5 bg-gray-50 focus-within:bg-white focus-within:border-[#145390] focus-within:ring-2 focus-within:ring-[#145390]/10 transition-all">
                          <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                            <MessageSquare className="h-4 w-4 text-emerald-600" strokeWidth={2.5} />
                          </div>
                          <textarea
                            placeholder="Tell us about your concern or query..."
                            rows={3}
                            className="bg-transparent focus:outline-none ml-3 w-full text-gray-800 font-medium placeholder:font-normal placeholder:text-gray-400 text-[15px] resize-none"
                          ></textarea>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#ED2793] to-[#d61b7f] hover:from-[#d61b7f] hover:to-[#c0186f] text-white font-extrabold text-base rounded-2xl py-4 transition-all shadow-lg shadow-[#ED2793]/25 hover:shadow-xl hover:shadow-[#ED2793]/30 hover:-translate-y-0.5 mt-2"
                      >
                        Book My Appointment →
                      </button>

                      {/* Checkboxes */}
                      <div className="pt-5 space-y-3 border-t border-gray-100 mt-4">
                        <label className="flex items-start justify-start gap-3 cursor-pointer">
                          <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                            <input type="checkbox" className="peer appearance-none w-5 h-5 rounded-[6px] border-2 border-gray-300 checked:bg-[#145390] checked:border-[#145390] transition-all cursor-pointer" defaultChecked />
                            <Check className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none stroke-[3]" />
                          </div>
                          <span className="text-[13px] text-gray-500 leading-relaxed">
                            I agree to the{' '}
                            <Link href="#" className="text-[#ED2793] font-bold hover:underline">Terms &amp; Conditions</Link>
                            {' '}and{' '}
                            <Link href="#" className="text-[#ED2793] font-bold hover:underline">Privacy Policy</Link>
                          </span>
                        </label>
                        <label className="flex items-center justify-start gap-3 cursor-pointer">
                          <div className="relative flex items-center justify-center shrink-0">
                            <input type="checkbox" className="peer appearance-none w-5 h-5 rounded-[6px] border-2 border-gray-300 checked:bg-[#25D366] checked:border-[#25D366] transition-all cursor-pointer" defaultChecked />
                            <Check className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none stroke-[3]" />
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-[#25D366] rounded-full flex items-center justify-center shrink-0">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                            </div>
                            <span className="text-[13px] text-gray-500 font-medium">Receive updates on WhatsApp</span>
                          </div>
                        </label>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
