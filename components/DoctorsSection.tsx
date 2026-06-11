import { BadgeCheck, User, Copy, Plus } from 'lucide-react';
import Link from 'next/link';

export default function DoctorsSection() {
  const doctors = [
    {
      name: "Dr. Kiran Kaushik",
      slug: "dr-kiran-kaushik",
      designation: "SR. OBS., GYNAE. & FERTILITY EXPERT",
      experience: "25 Years",
      patients: "30+",
      reviews: "350+",
      image: "/dr_kiran_kaushik.avif"
    },
    {
      name: "Dr. Priyanka Jaiswal",
      slug: "dr-priyanka-jaiswal",
      designation: "IVF & Infertility Medicine",
      experience: "7+ Years",
      patients: "12+",
      reviews: "150+",
      image: "/dr_priyanka_jaiswal.avif"
    },
    {
      name: "Dr. Srishti Tanya",
      slug: "dr-srishti-tanya",
      designation: "IVF & Infertility Medicine",
      experience: "8 Years",
      patients: "8+",
      reviews: "95+",
      image: "/dr._srishti_tanya.avif"
    },
    {
      name: "Dr. Akanksha Chaturvedi",
      slug: "dr-akanksha-chaturvedi",
      designation: "IVF & Infertility Medicine",
      experience: "7+ Years",
      patients: "15+",
      reviews: "210+",
      image: "/dr_akanksha_chaturvedi.avif"
    },
    {
      name: "Dr. Madhavi Paramar",
      slug: "dr-madhavi-paramar",
      designation: "IVF & Infertility Medicine",
      experience: "7+ Years",
      patients: "20+",
      reviews: "180+",
      image: "/dr_madhvi_parmar.avif"
    }
  ];

  return (
    <section id="doctors" className="py-20 md:py-28 bg-[#f8fbff] dark:bg-gray-900 relative overflow-hidden transition-colors">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e8f1fb] dark:from-blue-900/10 to-transparent opacity-60 pointer-events-none" />
      <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-[#145390]/5 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#145390] dark:text-blue-100 mb-4 leading-tight">
            Our Fertility <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#145390] dark:from-blue-400 to-[#1a6ab8] dark:to-blue-300">Experts</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Meet our team of highly experienced and compassionate fertility specialists dedicated to helping you build your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {doctors.slice(0, 4).map((doctor, index) => (
            <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-[2.5rem] p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_20px_40px_rgb(20,83,144,0.08)] border border-transparent dark:border-gray-700 hover:border-[#145390]/10 dark:hover:border-blue-500/30 transition-all duration-500 overflow-hidden flex flex-col">
              
              {/* Image Container */}
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] bg-gray-100 dark:bg-gray-700">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out" 
                />
              </div>
              
              {/* Content */}
              <div className="pt-5 px-3 pb-3 text-left flex-1 flex flex-col">
                <div className="flex items-center mb-1.5 justify-between">
                  <h3 className="text-[22px] font-bold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-[#145390] dark:group-hover:text-blue-300 transition-colors">{doctor.name}</h3>
                  <BadgeCheck className="w-[22px] h-[22px] text-[#22c55e]" fill="currentColor" stroke="white" strokeWidth={2} />
                </div>
                
                <p className="text-[#64748b] dark:text-gray-400 text-[15px] leading-relaxed mb-4">
                  <span className="font-semibold text-[#145390] dark:text-blue-300">{doctor.designation}</span>
                </p>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-5 px-1">
                    <div className="flex items-center gap-1.5 text-[#475569] dark:text-gray-300 font-medium text-sm">
                      <User className="w-[16px] h-[16px] text-[#145390] dark:text-blue-300" strokeWidth={2.5} />
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#475569] dark:text-gray-300 font-medium text-sm">
                      <Copy className="w-[16px] h-[16px] text-[#ED2793] dark:text-pink-400" strokeWidth={2.5} />
                      <span>{doctor.reviews} Reviews</span>
                    </div>
                  </div>
                  
                  <Link href={`/doctors/${doctor.slug}`} className="w-full bg-[#f8fbff] dark:bg-gray-700 hover:bg-[#145390] dark:hover:bg-blue-600 text-[#145390] dark:text-blue-100 hover:text-white border border-[#e8f1fb] dark:border-gray-600 hover:border-[#145390] transition-all duration-300 font-bold text-[15px] py-3 rounded-2xl flex items-center justify-center gap-2 group/btn shadow-sm dark:shadow-none hover:shadow-md">
                    Consult Now 
                    <Plus className="w-[18px] h-[18px] transform group-hover/btn:rotate-90 transition-transform duration-300" strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5th doctor — aligned left */}
        {doctors.length > 4 && (
          <div className="flex justify-start mt-6 md:mt-8">
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-24px)] max-w-none group relative bg-white dark:bg-gray-800 rounded-[2.5rem] p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_20px_40px_rgb(20,83,144,0.08)] border border-transparent dark:border-gray-700 hover:border-[#145390]/10 dark:hover:border-blue-500/30 transition-all duration-500 overflow-hidden flex flex-col">
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] bg-gray-100 dark:bg-gray-700">
                <img
                  src={doctors[4].image}
                  alt={doctors[4].name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out"
                />
              </div>
              <div className="pt-5 px-3 pb-3 text-left flex-1 flex flex-col">
                <div className="flex items-center mb-1.5 justify-between">
                  <h3 className="text-[22px] font-bold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-[#145390] dark:group-hover:text-blue-300 transition-colors">{doctors[4].name}</h3>
                  <BadgeCheck className="w-[22px] h-[22px] text-[#22c55e]" fill="currentColor" stroke="white" strokeWidth={2} />
                </div>
                <p className="text-[#64748b] dark:text-gray-400 text-[15px] leading-relaxed mb-4">
                  <span className="font-semibold text-[#145390] dark:text-blue-300">{doctors[4].designation}</span>
                </p>
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-5 px-1">
                    <div className="flex items-center gap-1.5 text-[#475569] dark:text-gray-300 font-medium text-sm">
                      <User className="w-[16px] h-[16px] text-[#145390] dark:text-blue-300" strokeWidth={2.5} />
                      <span>{doctors[4].experience}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#475569] dark:text-gray-300 font-medium text-sm">
                      <Copy className="w-[16px] h-[16px] text-[#ED2793] dark:text-pink-400" strokeWidth={2.5} />
                      <span>{doctors[4].reviews} Reviews</span>
                    </div>
                  </div>
                  <Link href={`/doctors/${doctors[4].slug}`} className="w-full bg-[#f8fbff] dark:bg-gray-700 hover:bg-[#145390] dark:hover:bg-blue-600 text-[#145390] dark:text-blue-100 hover:text-white border border-[#e8f1fb] dark:border-gray-600 hover:border-[#145390] transition-all duration-300 font-bold text-[15px] py-3 rounded-2xl flex items-center justify-center gap-2 group/btn shadow-sm dark:shadow-none hover:shadow-md">
                    Consult Now
                    <Plus className="w-[18px] h-[18px] transform group-hover/btn:rotate-90 transition-transform duration-300" strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
