"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown, ChevronRight, Sun, Moon } from 'lucide-react';

type NavLink = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    children?: {
      label: string;
      href: string;
    }[];
  }[];
};

const navLinks: NavLink[] = [
  {
    label: 'About Us',
    href: '#',
    children: [
      { label: 'Overview', href: '/our-story' },
      { label: 'Why Popular IVF?', href: '/why-popular-ivf' },
      { label: 'Our Team', href: '/our-team' },
      { label: 'Our Facility & Lab', href: '/facility-lab' },
      { label: 'Awards & Recognition', href: '/our-team/awards' },
      { label: 'Media Coverage', href: '/our-team/media-coverage' },
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
          { label: 'IN VITRO FERTILISATION (IVF)', href: '/treatments/ivf' },
          { label: 'INTRACYTOPLASMIC SPERM INJECTION (ICSI)', href: '/treatments/icsi' },
          { label: 'INTRAUTERINE INSEMINATION (IUI)', href: '/treatments/iui' },
          { label: 'FROZEN EMBRYO TRANSFER (FET)', href: '/treatments/fet' },
          { label: 'LAH | LASER ASSISTED HATCHING', href: '/treatments/lah' },
          { label: 'OVULATION INDUCTION', href: '/treatments/ovulation-induction' },
          { label: 'BLASTOCYST CULTURE', href: '/treatments/blastocyst-culture' },
        ]
      },
      {
        label: 'Male Infertility',
        href: '#',
        children: [
          { label: 'TESTICULAR SPERM ASPIRATION (TESA)', href: '/treatments/tesa' },
          { label: 'MICRO-TESE', href: '/treatments/micro-tese' },
          { label: 'VARICOCELE REPAIR', href: '/treatments/varicocele-repair' },
          { label: 'PERCUTANEOUS EPIDIDYMAL SPERM ASPIRATION (PESA)', href: '/treatments/pesa' },
          { label: 'TESTICULAR TISSUE BIOPSY', href: '/treatments/testicular-tissue-biopsy' },
          { label: 'ELECTROEJACULATION AND ANCILLARY SERVICES', href: '/treatments/electroejaculation' },
        ]
      },
      {
        label: 'Donor Services',
        href: '#',
        children: [
          { label: 'DONOR EGG', href: '/treatments/donor-egg' },
          { label: 'DONOR SPERM', href: '/treatments/donor-sperm' },
        ]
      },
      {
        label: 'Fertility Preservation',
        href: '#',
        children: [
          { label: 'EGG FREEZING', href: '/treatments/egg-freezing' },
          { label: 'EMBRYO REDUCTION', href: '/treatments/embryo-reduction' },
          { label: 'SPERM FREEZING', href: '/treatments/sperm-freezing' },
          { label: 'EMBRYO FREEZING', href: '/treatments/embryo-freezing' },
          { label: 'OVARIAN CORTEX FREEZING', href: '/treatments/ovarian-cortex-freezing' },
          { label: 'TESTICULAR TISSUE FREEZING', href: '/treatments/testicular-tissue-freezing' },
          { label: 'CANCER FERTILITY PRESERVATION', href: '/treatments/cancer-fertility-preservation' },
        ]
      },
      {
        label: 'Gynaecological Procedures',
        href: '#',
        children: [
          { label: 'HORMONE ASSAY FOR OVARIAN RESERVE TEST', href: '/treatments/hormone-assay-ovarian-reserve' },
          { label: 'ADVANCED LAPAROSCOPY', href: '/treatments/advanced-laparoscopy' },
          { label: 'BASIC & ADVANCED HYSTEROSCOPY', href: '/treatments/basic-advanced-hysteroscopy' },
        ]
      },
      {
        label: 'Genetics & Diagnostics',
        href: '#',
        children: [
          { label: 'INFERTILITY ASSESSMENT PANEL', href: '/treatments/infertility-assessment-panel' },
          { label: 'TUBAL PATENCY TESTS (HSG, SSG)', href: '/treatments/tubal-patency-tests' },
          { label: 'ADVANCED SEMEN ANALYSIS', href: '/treatments/advanced-semen-analysis' },
          { label: 'ULTRASOUND - 3D ULTRASOUND / COLOUR DOPPLER', href: '/treatments/ultrasound-3d-doppler' },
          { label: 'PREIMPLANTATION GENETIC SCREENING (PGS)', href: '/treatments/pgs-screening' },
          { label: 'PREIMPLANTATION GENETIC DIAGNOSIS', href: '/treatments/pgd-diagnosis' },
          { label: 'GENETIC PANEL', href: '/treatments/genetic-panel' },
        ]
      },
    ],
  },
  { label: 'Success Rate', href: '/success-rate' },
  {
    label: 'Second Opinion',
    href: '#',
    children: [
      { label: 'REPETED MISCARIAGES', href: '/second-opinion/repeated-miscarriages' },
      { label: 'REPEATED IVF FAILURE', href: '/second-opinion/repeated-ivf-failure' },
      { label: 'FERTILITY & CANCER', href: '/second-opinion/fertility-and-cancer' },
      { label: 'RECURRENT IMPLANTATION FAILURE', href: '/second-opinion/recurrent-implantation-failure' },
    ],
  },
  {
    label: 'Trying for a Baby?',
    href: '#',
    children: [
      { label: 'When to Seek Help?', href: '/trying-for-a-baby/when-to-seek-help' },
      { label: 'Food & Nutrition', href: '/trying-for-a-baby/food-and-nutrition' },
      { label: 'Ovulation Calculator', href: '/trying-for-a-baby/ovulation-calculator' },
      { label: 'Period Calculator', href: '/trying-for-a-baby/period-calculator' },
      { label: 'Pregnancy Calculator', href: '/trying-for-a-baby/pregnancy-calculator' },
      { label: 'Pregnancy Conception Calculator', href: '/trying-for-a-baby/pregnancy-conception-calculator' },
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

  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

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
    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-gray-100 dark:border-gray-800'
    : 'bg-transparent';

  const linkColor = activeHeader ? 'text-gray-700 dark:text-gray-200 hover:text-primary-pink dark:hover:text-primary-pink' : 'text-white/90 hover:text-white';

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
                    <div className="w-64 bg-white dark:bg-gray-900 rounded-xl shadow-2xl shadow-black/10 border border-gray-100 dark:border-gray-800 py-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
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
                              className="w-full flex items-center justify-between px-4 py-2.5 text-[13px] text-gray-700 dark:text-gray-300 font-semibold hover:bg-pink-50 dark:hover:bg-gray-800 hover:text-primary-pink transition-colors"
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
                              className="block px-4 py-2.5 text-[13px] text-gray-700 dark:text-gray-300 font-semibold hover:bg-pink-50 dark:hover:bg-gray-800 hover:text-primary-pink transition-colors"
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

          {/* Right: Phone + Theme Toggle + Hamburger */}
          <div className="flex items-center gap-2 lg:gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`flex p-2 rounded-full transition-all duration-200 shadow-sm border border-transparent ${activeHeader
                ? 'bg-gray-50 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200'
                : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              aria-label="Toggle Theme"
              title="Toggle Dark Mode"
            >
              {!mounted ? (
                <div className="w-4 h-4 min-[1900px]:w-5 min-[1900px]:h-5" />
              ) : isDark ? (
                <Moon className="h-4 w-4 min-[1900px]:h-5 min-[1900px]:w-5" />
              ) : (
                <Sun className="h-4 w-4 min-[1900px]:h-5 min-[1900px]:w-5" />
              )}
            </button>

            {/* Phone Button */}
            <a
              href="tel:+919151000135"
              className={`hidden md:flex items-center gap-1.5 min-[1900px]:gap-2 rounded-full pl-1 pr-2 2xl:pr-3 min-[1900px]:pr-4 py-1 2xl:py-1.5 min-[1900px]:py-2 transition-all duration-200 shadow-sm group ${activeHeader
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
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] transition-opacity duration-300 xl:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[85vw] max-w-[340px] bg-white dark:bg-gray-900 z-[90] flex flex-col shadow-2xl transition-transform duration-300 ease-out xl:hidden ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
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
                    className="w-full flex items-center justify-between px-5 py-3.5 text-[13.5px] font-bold uppercase tracking-wide text-gray-800 dark:text-gray-200 hover:bg-pink-50 dark:hover:bg-gray-800 hover:text-primary-pink transition-colors"
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
