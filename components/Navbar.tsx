"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const navLinks = [
  {
    label: 'About Us',
    href: '#',
    children: [
      { label: 'Our Story', href: '/our-story' },
      { label: 'Our Team', href: '/our-team' },
      { label: 'Why Us?', href: '/why-us' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    label: 'Treatment & Services',
    href: '#',
    children: [
      { 
        label: 'Female Fertility Treatments', 
        href: '#',
        children: [
          { label: 'IN VITRO FERTILISATION (IVF)', href: '#' },
          { label: 'INTRACYTOPLASMIC SPERM INJECTION (ICSI)', href: '#' },
          { label: 'INTRAUTERINE INSEMINATION (IUI)', href: '#' },
          { label: 'FROZEN EMBRYO TRANSFER (FET)', href: '#' },
          { label: 'LAH | LASER ASSISTED HATCHING', href: '#' },
          { label: 'OVULATION INDUCTION', href: '#' },
          { label: 'BLASTOCYST CULTURE', href: '#' },
        ]
      },
      { 
        label: 'Male Infertility', 
        href: '#',
        children: [
          { label: 'TESTICULAR SPERM ASPIRATION (TESA)', href: '#' },
          { label: 'MICRO-TESE', href: '#' },
          { label: 'VARICOCELE REPAIR', href: '#' },
          { label: 'PERCUTANEOUS EPIDIDYMAL SPERM ASPIRATION (PESA)', href: '#' },
          { label: 'TESTICULAR TISSUE BIOPSY', href: '#' },
          { label: 'ELECTROEJACULATION AND ANCILLARY SERVICES', href: '#' },
        ]
      },
      { 
        label: 'Donor Services', 
        href: '#',
        children: [
          { label: 'DONOR EGG', href: '#' },
          { label: 'DONOR SPERM', href: '#' },
        ]
      },
      { 
        label: 'Fertility Preservation', 
        href: '#',
        children: [
          { label: 'EGG FREEZING', href: '#' },
          { label: 'EMBRYO REDUCTION', href: '#' },
          { label: 'SPERM FREEZING', href: '#' },
          { label: 'EMBRYO FREEZING', href: '#' },
          { label: 'OVARIAN CORTEX FREEZING', href: '#' },
          { label: 'TESTICULAR TISSUE FREEZING', href: '#' },
          { label: 'CANCER FERTILITY PRESERVATION', href: '#' },
        ]
      },
      { 
        label: 'Gynaecological Procedures', 
        href: '#',
        children: [
          { label: 'HORMONE ASSAY FOR OVARIAN RESERVE TEST', href: '#' },
          { label: 'ADVANCED LAPAROSCOPY', href: '#' },
          { label: 'BASIC & ADVANCED HYSTEROSCOPY', href: '#' },
        ]
      },
      { 
        label: 'Genetics & Diagnostics', 
        href: '#',
        children: [
          { label: 'INFERTILITY ASSESSMENT PANEL', href: '#' },
          { label: 'TUBAL PATENCY TESTS (HSG, SSG)', href: '#' },
          { label: 'ADVANCED SEMEN ANALYSIS', href: '#' },
          { label: 'ULTRASOUND - 3D ULTRASOUND / COLOUR DOPPLER', href: '#' },
          { label: 'PREIMPLANTATION GENETIC SCREENING (PGS)', href: '#' },
          { label: 'PREIMPLANTATION GENETIC DIAGNOSIS', href: '#' },
          { label: 'GENETIC PANEL', href: '#' },
        ]
      },
    ],
  },
  { label: 'Success Rate', href: '/success-rate' },
  {
    label: 'Second Opinion',
    href: '#',
    children: [
      { label: 'REPETED MISCARIAGES', href: '#' },
      { label: 'REPEATED IVF FAILURE', href: '#' },
      { label: 'FERTILITY & CANCER', href: '#' },
      { label: 'RECURRENT IMPLANTATION FAILURE', href: '#' },
    ],
  },
  {
    label: 'Trying for a Baby?',
    href: '#',
    children: [
      { label: 'When to Seek Help?', href: '#' },
      { label: 'Food & Nutrition', href: '#' },
      { label: 'Ovulation Calculator', href: '#' },
      { label: 'Period Calculator', href: '#' },
      { label: 'Pregnancy Calculator', href: '#' },
      { label: 'Pregnancy Conception Calculator', href: '#' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar({ alwaysDark = false }: { alwaysDark?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Desktop state
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  
  // Mobile state
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const [mobileExpandedSubItem, setMobileExpandedSubItem] = useState<string | null>(null);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const activeHeader = isScrolled || alwaysDark;

  const headerBg = activeHeader
    ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-gray-100'
    : 'bg-transparent';

  const linkColor = activeHeader ? 'text-gray-700 hover:text-primary-pink' : 'text-white/90 hover:text-white';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${headerBg}`}>
        <div className="w-full max-w-[1600px] mx-auto flex h-[72px] xl:h-[84px] items-center justify-between px-4 lg:px-8 xl:px-6 2xl:px-10 gap-2">

          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <img
              src="/popular_ivf_logo.webp"
              alt="Popular IVF Logo"
              className="h-12 w-auto max-w-[190px] rounded-xl object-contain md:h-14 md:max-w-[230px] xl:h-16 xl:max-w-[270px] 2xl:h-[68px] 2xl:max-w-[300px]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav ref={dropdownRef} className="hidden min-w-0 flex-1 items-center justify-center gap-0 xl:flex 2xl:gap-0.5 h-full">
            {navLinks.map((link) => (
              <div 
                key={link.label} 
                className="relative group h-full flex items-center"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => {
                  if (link.children) {
                    setOpenDropdown(null);
                    setOpenSubDropdown(null);
                  }
                }}
              >
                {link.children ? (
                  <button
                    onClick={() => {
                      if (openDropdown === link.label) {
                        setOpenDropdown(null);
                        setOpenSubDropdown(null);
                      } else {
                        setOpenDropdown(link.label);
                      }
                    }}
                    className={`flex items-center gap-0.5 2xl:gap-1 px-1 py-2 2xl:px-2 rounded-lg text-[10px] 2xl:text-[11.5px] font-bold uppercase tracking-wide whitespace-nowrap transition-all duration-200 ${linkColor} hover:bg-white/10`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3 w-3 2xl:h-3.5 2xl:w-3.5 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`}
                      strokeWidth={2.5}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`flex items-center px-1 py-2 2xl:px-2 rounded-lg text-[10px] 2xl:text-[11.5px] font-bold uppercase tracking-wide whitespace-nowrap transition-all duration-200 ${linkColor} hover:bg-white/10`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-3 z-50">
                    <div className="w-64 bg-white rounded-xl shadow-2xl shadow-black/10 border border-gray-100 py-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                      {link.children.map((child) => (
                        <div 
                          key={child.label}
                          className="relative group/sub"
                          onMouseEnter={() => child.children && setOpenSubDropdown(child.label)}
                          onMouseLeave={() => child.children && setOpenSubDropdown(null)}
                        >
                          {child.children ? (
                            <button
                              onClick={() => setOpenSubDropdown(openSubDropdown === child.label ? null : child.label)}
                              className="w-full flex items-center justify-between px-4 py-2.5 text-[13px] text-gray-700 font-semibold hover:bg-pink-50 hover:text-primary-pink transition-colors"
                            >
                              {child.label}
                              <ChevronRight className="w-3.5 h-3.5 text-gray-400" strokeWidth={2.5} />
                            </button>
                          ) : (
                            <Link
                              href={child.href}
                              onClick={() => {
                                setOpenDropdown(null);
                                setOpenSubDropdown(null);
                              }}
                              className="block px-4 py-2.5 text-[13px] text-gray-700 font-semibold hover:bg-pink-50 hover:text-primary-pink transition-colors"
                            >
                              {child.label}
                            </Link>
                          )}

                          {/* Sub-Dropdown */}
                          {child.children && openSubDropdown === child.label && (
                            <div className="absolute top-0 left-full pl-1 z-50">
                              <div className="w-72 bg-white rounded-xl shadow-2xl shadow-black/10 border border-gray-100 py-1.5 animate-in fade-in slide-in-from-left-2 duration-150">
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.label}
                                    href={subChild.href}
                                    onClick={() => {
                                      setOpenDropdown(null);
                                      setOpenSubDropdown(null);
                                    }}
                                    className="block px-4 py-2.5 text-[13px] text-gray-700 font-semibold hover:bg-pink-50 hover:text-primary-pink transition-colors"
                                  >
                                    {subChild.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Phone + Hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Phone Button */}
            <a
              href="tel:+919151000135"
              className={`hidden md:flex items-center gap-1.5 min-[1900px]:gap-2 rounded-full pl-1 pr-2 2xl:pr-3 min-[1900px]:pr-4 py-1 2xl:py-1.5 min-[1900px]:py-2 transition-all duration-200 shadow-sm group ${
                activeHeader
                  ? 'bg-primary-blue hover:bg-primary-blue/90 text-white'
                  : 'bg-white hover:bg-gray-50 text-primary-blue'
              }`}
            >
              <div className={`rounded-full p-1.5 min-[1900px]:p-2 flex items-center justify-center transition-colors ${activeHeader ? 'bg-white/20' : 'bg-primary-blue'}`}>
                <Phone className={`h-3.5 w-3.5 min-[1900px]:h-4 min-[1900px]:w-4 ${activeHeader ? 'text-white' : 'text-white'}`} />
              </div>
              <span className={`font-bold text-[11px] tracking-wide 2xl:text-[12px] min-[1900px]:text-[14px] ${activeHeader ? 'text-white' : 'text-primary-blue'}`}>
                +91 9151000135
              </span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`xl:hidden p-2 rounded-lg transition-colors ${activeHeader ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ───── Mobile Drawer ───── */}
      {/* Backdrop */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] transition-opacity duration-300 xl:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[85vw] max-w-[340px] bg-white z-[90] flex flex-col shadow-2xl transition-transform duration-300 ease-out xl:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-primary-blue to-primary-blue/80">
          <img src="/popular_ivf_logo.webp" alt="Popular IVF Logo" className="h-10 rounded-lg object-contain" />
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <nav className="flex-1 overflow-y-auto py-3">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <button
                    onClick={() => setMobileExpandedItem(mobileExpandedItem === link.label ? null : link.label)}
                    className="w-full flex items-center justify-between px-5 py-3.5 text-[13.5px] font-bold uppercase tracking-wide text-gray-800 hover:bg-pink-50 hover:text-primary-pink transition-colors"
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${mobileExpandedItem === link.label ? 'rotate-180 text-primary-pink' : 'text-gray-400'}`}
                      strokeWidth={2.5}
                    />
                  </button>
                  {mobileExpandedItem === link.label && (
                    <div className="bg-gray-50 border-l-2 border-primary-pink ml-5">
                      {link.children.map((child) => (
                        <div key={child.label}>
                          {child.children ? (
                            <>
                              <button
                                onClick={() => setMobileExpandedSubItem(mobileExpandedSubItem === child.label ? null : child.label)}
                                className="w-full flex items-center justify-between px-5 py-2.5 text-[13px] text-gray-700 font-semibold hover:text-primary-pink transition-colors"
                              >
                                {child.label}
                                <ChevronDown
                                  className={`h-3.5 w-3.5 transition-transform duration-200 ${mobileExpandedSubItem === child.label ? 'rotate-180 text-primary-pink' : 'text-gray-400'}`}
                                  strokeWidth={2.5}
                                />
                              </button>
                              {mobileExpandedSubItem === child.label && (
                                <div className="bg-gray-100 border-l-2 border-primary-pink ml-5">
                                  {child.children.map((subChild) => (
                                    <Link
                                      key={subChild.label}
                                      href={subChild.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block px-5 py-2.5 text-[12px] text-gray-600 font-semibold hover:text-primary-pink transition-colors"
                                    >
                                      {subChild.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-5 py-2.5 text-[13px] text-gray-600 font-semibold hover:text-primary-pink transition-colors"
                            >
                              {child.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-5 py-3.5 text-[13.5px] font-bold uppercase tracking-wide text-gray-800 hover:bg-pink-50 hover:text-primary-pink transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Drawer Footer - Phone */}
        <div className="p-5 border-t border-gray-100">
          <a
            href="tel:+919151000135"
            className="flex items-center justify-center gap-3 bg-primary-blue hover:bg-primary-blue/90 text-white font-bold rounded-xl py-3.5 transition-colors shadow-md"
          >
            <Phone className="h-4 w-4" />
            +91 915 100 0135
          </a>
        </div>
      </div>
    </>
  );
}
