import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.582 6.186a2.665 2.665 0 0 0-1.876-1.888C18.047 3.84 12 3.84 12 3.84s-6.047 0-7.706.458a2.665 2.665 0 0 0-1.876 1.888C1.96 7.854 1.96 12 1.96 12s0 4.146.458 5.814a2.665 2.665 0 0 0 1.876 1.888C6.047 20.16 12 20.16 12 20.16s6.047 0 7.706-.458a2.665 2.665 0 0 0 1.876-1.888C22.04 16.146 22.04 12 22.04 12s0-4.146-.458-5.814zM9.96 15.115V8.885l6.082 3.115-6.082 3.115z" />
  </svg>
);

export default function Footer() {
  const aboutLinks = [
    { name: 'About Us', href: '/our-story' },
    { name: 'Why Us?', href: '/why-popular-ivf' },
    { name: 'Popular Group', href: '#' },
    { name: 'Career', href: '/careers' },
    { name: 'News & Updates', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const treatmentLinks = [
    { name: 'Fertility Treatments', href: '/services/fertility-treatments' },
    { name: 'Male Infertility', href: '/services/male-infertility' },
    { name: 'Donor Services', href: '/services/donor-services' },
    { name: 'Fertility Preservation', href: '/services/fertility-preservation' },
    { name: 'Gynaecological Procedures', href: '/services/gynaecological-procedures' },
    { name: 'Diagnostics', href: '/services/diagnostics' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0A192F] via-[#145390] to-[#0A192F] text-white pt-24 pb-12 relative overflow-hidden transition-colors">
      {/* Decorative top border gradient */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#145390] via-[#ED2793] to-[#ff7eb3]"></div>

      {/* Background blobs for footer */}
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#ED2793]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 mb-16">

          {/* Column 1: Logo & About */}
          <div className="lg:col-span-4 space-y-8 pr-0 lg:pr-8 pt-8">
            <Link href="/" className="inline-block">
              <img
                src="/popular_ivf_logo.png"
                alt="Popular IVF Logo"
                className="h-12 w-auto max-w-[190px] bg-white p-2 rounded-xl object-contain md:h-14 md:max-w-[230px] xl:h-16 xl:max-w-[270px]"
              />
            </Link>

            <p className="text-blue-100/80 leading-relaxed text-[15px]">
              At Popular IVF, we make every effort to help you to have a healthy, adorable baby. Your desire to become a parent can come true with the help of our skilled medical staff. We can address all of your fertility issues and assist you in moving forward on your journey towards parenting thanks to our cutting-edge clinical setup.
            </p>

            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/popularivf" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#ED2793] hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_4px_12px_rgba(237,39,147,0.3)]">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="https://x.com/popular_vns" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#ED2793] hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_4px_12px_rgba(237,39,147,0.3)]">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/popular_hospitals/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#ED2793] hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_4px_12px_rgba(237,39,147,0.3)]">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#ED2793] hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_4px_12px_rgba(237,39,147,0.3)]">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: ABOUT US */}
          <div className="lg:col-span-2 lg:pl-2 pt-8">
            <h3 className="text-lg font-extrabold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ED2793] rounded-full"></span>
              About Us
            </h3>
            <ul className="space-y-4">
              {aboutLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="inline-flex items-center text-[16px] text-blue-100/80 font-medium hover:text-white transition-colors">
                    <span className="text-[#ED2793] mr-2 text-sm font-bold">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: TREATMENT & SERVICES */}
          <div className="lg:col-span-2 pt-8">
            <h3 className="text-lg font-extrabold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ED2793] rounded-full"></span>
              Treatments
            </h3>
            <ul className="space-y-4">
              {treatmentLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="inline-flex items-center text-[16px] text-blue-100/80 font-medium hover:text-white transition-colors">
                    <span className="text-[#ED2793] mr-2 text-sm font-bold">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: GET IN TOUCH */}
          <div className="lg:col-span-4 relative">
            <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 shadow-lg border border-white/10 h-full">
              <h3 className="text-lg font-extrabold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-[#ED2793] rounded-full"></span>
                Get In Touch
              </h3>

              <div className="space-y-5 text-[15px]">
                <h4 className="font-bold text-white text-lg mb-2">Popular IVF</h4>

                <div className="flex items-start gap-4 group">
                  <div className="mt-1 bg-white/10 p-2 rounded-xl shadow-sm group-hover:shadow-md transition-shadow shrink-0 text-[#ED2793]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-blue-50 font-medium leading-relaxed pt-1">
                    B.L.W Road, Kakarmatta Varanasi, Uttar Pradesh, India 221001
                  </span>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="bg-white/10 p-2 rounded-xl shadow-sm group-hover:shadow-md transition-shadow shrink-0 text-[#ED2793]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-blue-50 font-medium break-all">hello@popularivf.com</span>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="bg-white/10 p-2 rounded-xl shadow-sm group-hover:shadow-md transition-shadow shrink-0 text-[#ED2793]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <a href="tel:+919151000135" className="text-blue-50 font-medium hover:text-white transition-colors">+91 9151000135</a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-3 text-[14px]">
                <div className="flex justify-between items-center"><span className="font-bold text-blue-100/80">Helpline no.:</span> <a href="tel:+917800001896" className="font-bold text-white hover:text-pink-300 transition-colors">+91 7800001896</a></div>
                <div className="flex justify-between items-center"><span className="font-bold text-blue-100/80">Toll Free No:</span> <a href="tel:1800121141000" className="font-bold text-white hover:text-pink-300 transition-colors">1800121141000</a></div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-blue-200 font-medium relative z-10">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Popular IVF. All rights reserved. | Designed and developed by{' '}
            <a
              href="https://sarthaktech.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-blue-100 transition-colors font-extrabold"
            >
              Sarthak Tech
            </a>
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
