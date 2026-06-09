import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  CheckCircle2,
  Activity,
  Heart,
  Baby,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Microscope,
  Award
} from 'lucide-react';

export default function OurStoryPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />

      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-[#f8fbff]">

        {/* 1. HERO SECTION */}
        <section className="relative h-[280px] md:h-[360px] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/about/about_us_banner.jpeg" alt="About Us" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#145390]/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">About Us</h1>
          </div>
        </section>

        {/* 2. ABOUT IVF DEPARTMENT - Redesigned */}
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#f0f6fc] to-[#fcf0f7] rounded-full blur-[100px] opacity-70 -translate-y-1/2 translate-x-1/3 z-0" />

          <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

              {/* Text Side */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#fdf0f7] text-[#ED2793] text-sm font-bold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
                    <Heart className="w-4 h-4 fill-current" />
                    Trusted Fertility Care
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-[#145390] leading-tight">
                    About IVF <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED2793] to-[#ff7eb3]">Department</span>
                  </h2>
                </div>

                <div className="bg-white/60 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#145390] to-[#ED2793] rounded-l-3xl" />

                  <div className="space-y-5 text-gray-600 leading-relaxed text-[15px] md:text-base font-medium">
                    <p>
                      Popular IVF Hospital is committed to holistic management of infertile couples suffering from various ailments pertaining to reproductive health. According to the report from WHO, infertility is a global health issue affecting millions of people of reproductive age worldwide. Overall prevalence of infertility in India approximately 3.9 to 16.7%.
                    </p>
                    <p>
                      Infertility is a disease of the male or female reproductive system which is clinically defined by the failure to achieve a pregnancy after 12 months or more of regular unprotected sexual intercourse.
                    </p>
                  </div>
                </div>

                <div className="pl-4 border-l-4 border-[#ED2793] space-y-3">
                  <h3 className="text-xl font-bold text-[#145390]">There are two types of infertility cases.</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    <span className="font-bold text-[#145390] bg-[#eef4fb] px-2 py-0.5 rounded mr-1">Primary infertility</span>
                    is the condition in which couples who have never been able to conceive, while
                    <span className="font-bold text-[#145390] bg-[#eef4fb] px-2 py-0.5 rounded ml-1 mr-1">secondary infertility</span>
                    indicates difficulty in conceiving after already having conceived.
                  </p>
                  <p className="text-gray-500 text-sm font-medium italic">
                    Infertility may occur due to either male factors, female factors, a combination of male and female factors or may be unexplained.
                  </p>
                </div>
              </div>

              {/* Image Composition */}
              <div className="relative h-[500px] lg:h-[600px] w-full">
                <div className="absolute inset-0 bg-[#145390]/5 rounded-[3rem] transform rotate-3 scale-105 transition-transform hover:rotate-0 duration-700" />
                <div className="relative w-full h-full bg-white rounded-[3rem] shadow-2xl p-4 flex flex-col gap-4 z-10">
                  <div className="flex-1 rounded-[2.5rem] overflow-hidden relative group">
                    <img src="/images/about/about_overview_main.jpeg" alt="Overview Main" className="w-full h-full object-cover transition-transform duration-700" />
                  </div>
                  <div className="h-[220px] flex gap-4">
                    <div className="flex-1 rounded-[2rem] overflow-hidden relative group">
                      <img src="/images/about/about_overview_semen.jpeg" alt="Overview Semen" className="w-full h-full object-cover transition-transform duration-700" />
                    </div>
                    <div className="w-[45%] rounded-[2rem] overflow-hidden relative group">
                      <img src="/images/about/about_overview_lst.jpeg" alt="Overview LST" className="w-full h-full object-cover transition-transform duration-700" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. CAUSES OF INFERTILITY - Redesigned */}
        <section className="py-20 md:py-32 bg-[#f8fbff] relative">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">

            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#145390] mb-6">
                Causes of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#145390] to-[#1a6ab8]">Infertility</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                The exact cause of infertility is investigated at Popular IVF Hospital. Diagnosis and treatments are totally personalized for the best result at an affordable rate.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Factors Cards */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Female Factors */}
                <div className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#ED2793]/30 relative overflow-hidden flex flex-col hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#fdf0f7] to-transparent rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#fdf0f7] text-[#ED2793] flex items-center justify-center group-hover:bg-[#ED2793] group-hover:text-white transition-colors duration-500 shadow-inner">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5" /><path d="M12 13v9" /><path d="M9 18h6" /></svg>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#145390]">FEMALE FACTORS</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600 text-[15px] font-medium relative z-10 flex-1">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#ED2793]" /> Uterus size, shape and thickness</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#ED2793]" /> Endometriosis</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#ED2793]" /> Pelvic Inflammatory Disease</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#ED2793]" /> Fibroids</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#ED2793]" /> Age</li>
                  </ul>
                </div>

                {/* Male Factors */}
                <div className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#145390]/30 relative overflow-hidden flex flex-col hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#e8f1fb] to-transparent rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#e8f1fb] text-[#145390] flex items-center justify-center group-hover:bg-[#145390] group-hover:text-white transition-colors duration-500 shadow-inner">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="14" r="5" /><path d="M14 10l5-5" /><path d="M14 5h5v5" /></svg>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#145390]">MALE FACTORS</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600 text-[15px] font-medium relative z-10 flex-1">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#145390]" /> Varicocele</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#145390]" /> Ejaculation issues</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#145390]" /> Autoimmune issues</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#145390]" /> Defects of tubules that transport sperm</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#145390]" /> Hormone Imbalance</li>
                  </ul>
                </div>

                {/* Both Factors */}
                <div className="group bg-gradient-to-r from-[#145390] to-[#1a6ab8] rounded-[2rem] p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex items-center justify-between cursor-default">
                  <div className="absolute right-0 top-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
                  <h3 className="text-lg font-extrabold text-white relative z-10 tracking-wide">BOTH MALE & FEMALE FACTORS</h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Unexplained */}
                <div className="group bg-gradient-to-r from-[#ED2793] to-[#ff47a9] rounded-[2rem] p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex items-center justify-between cursor-default">
                  <div className="absolute right-0 top-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
                  <h3 className="text-lg font-extrabold text-white relative z-10 tracking-wide">UNEXPLAINED INFERTILITY</h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>

              </div>

              {/* Image Column */}
              <div className="lg:col-span-4 h-full">
                <div className="bg-white rounded-[2.5rem] p-3 shadow-xl h-full min-h-[400px] border border-gray-100 group">
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    <img src="/images/about/about_ivf_fertility_four.jpeg" alt="Baby feet in hands" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                      <p className="font-medium text-sm md:text-base leading-relaxed drop-shadow-md">
                        Various updated and latest technologies including controlled ovarian stimulation, IUI, IVF and ICSI are being practiced daily to get the best results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. USP OF DEPARTMENT - Redesigned (White Theme) */}
        <section className="py-24 md:py-32 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <span className="text-[#ED2793] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#145390] mb-6">
                USP of Department
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              <div className="relative h-[450px] md:h-[600px] w-full">
                <div className="absolute inset-0 bg-[#ED2793]/10 rounded-[3rem] transform -rotate-3" />
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-xl border-4 border-white">
                  <img src="/images/about/about_overview.jpeg" alt="Baby on rug" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="bg-[#f8fbff] border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#145390] to-[#ED2793]" />

                <h3 className="text-2xl md:text-3xl font-extrabold text-[#145390] mb-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#eef4fb] flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-[#145390]" />
                  </div>
                  Complete Infertility Workup
                </h3>
                <p className="text-gray-600 mb-10 text-base md:text-lg leading-relaxed font-medium">
                  Popular IVF Hospital has a complete panel of investigations for both male and female infertility. It includes:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
                  {[
                    "Hormonal profile",
                    "Routine investigations of couple",
                    "Transvaginal sonography",
                    "Pap smear",
                    "Husband semen analysis",
                    "Hysterosalpingography",
                    "Diagnostic laparoscopy and hysteroscopy"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#fdf0f7] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ED2793]" />
                      </div>
                      <span className="text-gray-700 font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TREATMENTS - FEMALE TREATMENTS - Redesigned */}
        <section className="py-20 md:py-32 bg-white relative">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWNDBIMHptMzkuNSAwVjBoLjV2NDBoLS41eiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+PC9zdmc+')] opacity-50 z-0" />

          <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-[#145390] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Expert Solutions</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#145390] mb-6">
                Treatments – <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED2793] to-[#ff7eb3]">Female</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

              {[
                {
                  num: "01",
                  title: "IUI",
                  subtitle: "(Intrauterine Insemination)",
                  desc: "The most common basic form of fertility treatment used initially. The female eggs are stimulated by some drugs and growth is assessed by serial follicular monitoring. At the time of ovulation, prepared semen sample of husband is put inside uterine cavity using an IUI catheter which is a very simple, quick and painless procedure."
                },
                {
                  num: "02",
                  title: "IVF",
                  subtitle: "(In-vitro Fertilization)",
                  desc: "In vitro fertilization is an artificial reproductive technique. Female eggs are stimulated by a set of drugs for 10-12 days after menstruation and then aspirated under sedation inside the operation theatre. The eggs are fertilized with husband's washed semen by fertilization in IVF Lab."
                },
                {
                  num: "03",
                  title: "ICSI",
                  subtitle: "(Intra Cytoplasmic Sperm Injection)",
                  desc: "Intra Cytoplasmic Sperm Injection is an artificial reproductive technique where female eggs are stimulated by a set of drugs for 10-12 days after menstruation and then aspirated under sedation inside the operation theatre. A single sperm is selected by injection through an injecting pipette into the cytoplasm of a mature oocyte."
                },
                {
                  num: "04",
                  title: "LAH",
                  subtitle: "(Laser-Assisted Hatching)/Blastocyst Culture",
                  desc: "Popular IVF Hospital has access of laser in modern setup with the use of advanced equipment for Recurrent Implantation Failure, PCOD and genital tuberculosis by using latest advanced technology of laser assisted hatching and blastocyst culture."
                },
                {
                  num: "05",
                  title: "Counselling",
                  subtitle: "Extensive Support System",
                  desc: "Infertility is a disease which causes immense stress to the couple and causes lot of stress over time. ART treatment and its outcomes are also some times challenging for the couple and the family hence the couple needs extensive counselling to relieve them at each stage of ART treatment. We at popular hospital have fully devoted counsellor who will take out all your physical and mental stress/trauma by couples and by relative there.",
                  colSpan: "lg:col-span-2"
                }
              ].map((card, idx) => (
                <div key={idx} className={`bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-[#f4cbe0] flex flex-col relative overflow-hidden ${card.colSpan || ''}`}>
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#145390] to-[#ED2793]" />

                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8 relative z-10">
                    <span className="text-5xl md:text-6xl font-black text-[#ED2793] drop-shadow-sm inline-block">
                      {card.num}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-[#ED2793] mb-1">{card.title}</h3>
                      <span className="text-sm font-semibold text-[#5c7a99] block">{card.subtitle}</span>
                    </div>
                  </div>

                  <p className="text-[#5c7a99] text-[15px] leading-relaxed relative z-10 flex-1">
                    {card.desc}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* 6. GENERAL ISSUES/DISEASES - Redesigned (Professional) */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-[#ED2793] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Conditions We Treat</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#145390]">
                  General Issues & Diseases
                </h2>
              </div>
              <div className="md:w-1/3">
                <p className="text-gray-600 font-medium leading-relaxed">
                  We provide careful evaluation and comprehensive treatments for a wide range of reproductive health conditions to ensure the best possible outcomes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "PCOD",
                  desc: "Popular IVF hospital varanasi is one of the best places to treat PCOD (Polycystic Ovarian Disease) which is a very common condition in young women where small cysts are present in ovaries which disrupt regular menstruation and thus prevent the patient from conceiving.",
                  icon: <Activity className="w-6 h-6 text-[#145390]" />
                },
                {
                  title: "Endometriosis",
                  desc: "Endometriosis is a common condition of disorder in which the endometrium tissue grows outside uterus, it causes severe pain and heavy bleeding which may lead to not conceiving together.",
                  icon: <ShieldCheck className="w-6 h-6 text-[#145390]" />
                },
                {
                  title: "Fibroid",
                  desc: "Popular IVF hospital offers the best solutions to treat fibroids which are non-cancerous growths in the uterus which can be cause of non-conceiving & heavy bleeding.",
                  icon: <Stethoscope className="w-6 h-6 text-[#145390]" />
                },
                {
                  title: "Recurrent Implantation Failure",
                  desc: "At Popular hospital we treat those working couples from all other centre who fail to conceive after IVF procedures. We give priority on quality of embryos.",
                  icon: <Baby className="w-6 h-6 text-[#145390]" />
                },
                {
                  title: "Pelvic adhesions",
                  desc: "It is a condition where bands of scar tissue form in the pelvic region leading to organs sticking together which limits the eggs to travel down to uterus.",
                  icon: <Heart className="w-6 h-6 text-[#145390]" />
                },
                {
                  title: "Genital Tuberculosis",
                  desc: "It is one of the common cause of infertility in India. Popular Hospital is one of the best place for its careful evaluation & treatments. As most of the time it goes unnoticed. Mostly the patient is asymptomatic, it affects the urogenital organs most commonly fallopian tubes and also affects endometrium cavity, ovaries, Cervix and Vagina.",
                  icon: <Activity className="w-6 h-6 text-[#145390]" />
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#f8fbff] rounded-2xl p-8 border border-gray-100 hover:border-[#145390]/30 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#145390] mb-4">{item.title}</h4>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Professional Image Banner below grid */}
            <div className="mt-16 w-full h-[300px] md:h-[400px] rounded-[2.5rem] overflow-hidden relative shadow-sm border border-gray-100">
              <img src="/images/about/about_us_banner.jpeg" alt="About Us Banner" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#145390]/90 via-[#145390]/60 to-transparent" />
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white max-w-lg mb-4">Dedicated to Your Wellbeing</h3>
                <p className="text-white/90 text-lg max-w-md font-medium leading-relaxed">Expert evaluation and treatment for a healthy journey ahead.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
