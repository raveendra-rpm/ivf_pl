import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />

      <main className="flex-grow pt-[72px] xl:pt-[84px]">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-blue via-[#ED2793] to-[#ff7eb3] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Contact Us</h1>
          </div>
        </div>

        {/* Contact Info & Form Section */}
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-primary-blue mb-2">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed">Our dedicated team is always ready to assist you. Contact us today to schedule an appointment or get more information about our treatments.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="bg-pink-50 p-3 rounded-2xl text-primary-pink shrink-0 shadow-sm border border-pink-100">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Center Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      B.L.W Road, Kakarmatta Varanasi,<br />Uttar Pradesh, India 221001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-pink-50 p-3 rounded-2xl text-primary-pink shrink-0 shadow-sm border border-pink-100">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Phone Numbers</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">Main: <a href="tel:+919151000135" className="font-medium hover:text-primary-pink transition-colors">+91 9151000135</a></p>
                      <p className="text-gray-600">Helpline: <a href="tel:+917311111362" className="font-medium hover:text-primary-pink transition-colors">+91 7311111362</a></p>
                      <p className="text-gray-600">Toll Free: <a href="tel:1800121141000" className="font-medium hover:text-primary-pink transition-colors">1800121141000</a></p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-pink-50 p-3 rounded-2xl text-primary-pink shrink-0 shadow-sm border border-pink-100">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Email Address</h3>
                    <p className="text-gray-600"><a href="mailto:hello@popularivf.com" className="font-medium hover:text-primary-pink transition-colors">hello@popularivf.com</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-pink-50 p-3 rounded-2xl text-primary-pink shrink-0 shadow-sm border border-pink-100">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Opening Hours</h3>
                    <p className="text-gray-600">We are open <span className="font-medium text-gray-800">24/7</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-10 border border-gray-100">
              <h3 className="text-2xl font-extrabold text-primary-blue mb-6">Send us a Message</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">First Name</label>
                    <input type="text" placeholder="Rahul" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all" required />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">Last Name</label>
                    <input type="text" placeholder="Kumar" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input type="email" placeholder="rahul@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all" required />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all" required />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all resize-none" required></textarea>
                </div>

                <button type="submit" className="w-full bg-primary-pink hover:bg-[#d61b7f] text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-2">
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-[400px] bg-gray-100">
          <iframe
            src="https://maps.google.com/maps?q=Popular+Hospital+Varanasi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>

      <Footer />
    </div>
  );
}
