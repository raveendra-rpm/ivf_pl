import { BadgeCheck, User, Copy, Plus } from 'lucide-react';

export default function DoctorsSection() {
  const doctors = [
    {
      name: "Dr. Priyanka Jaiswal",
      designation: "Obstetrics & Gynaecology",
      experience: "10+ Years Exp",
      patients: "12+",
      reviews: "150+",
      image: "/dr_priyanka_jaiswal.avif"
    },
    {
      name: "Dr. Srishti Tanya",
      designation: "Obstetrics & Gynaecology",
      experience: "8+ Years Exp",
      patients: "8+",
      reviews: "95+",
      image: "/dr._srishti_tanya.avif"
    },
    {
      name: "Dr. Akanksha Chaturvedi",
      designation: "IVF & Infertility Medicine",
      experience: "12+ Years Exp",
      patients: "15+",
      reviews: "210+",
      image: "/dr_akanksha_chaturvedi.avif"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f8fbff] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e8f1fb] to-transparent opacity-60 pointer-events-none" />
      <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-[#145390]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#145390] mb-4 leading-tight">
            Our Fertility <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#145390] to-[#1a6ab8]">Experts</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Meet our team of highly experienced and compassionate fertility specialists dedicated to helping you build your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {doctors.map((doctor, index) => (
            <div key={index} className="group relative bg-white rounded-[2.5rem] p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(20,83,144,0.08)] border border-transparent hover:border-[#145390]/10 transition-all duration-500 overflow-hidden flex flex-col">
              
              {/* Image Container */}
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] bg-gray-100">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out" 
                />
              </div>
              
              {/* Content */}
              <div className="pt-5 px-3 pb-3 text-left flex-1 flex flex-col">
                <div className="flex items-center mb-1.5 justify-between">
                  <h3 className="text-[22px] font-bold text-gray-900 leading-snug group-hover:text-[#145390] transition-colors">{doctor.name}</h3>
                  <BadgeCheck className="w-[22px] h-[22px] text-[#22c55e] shrink-0" fill="currentColor" stroke="white" strokeWidth={2} />
                </div>
                
                <p className="text-[#64748b] text-[15px] leading-relaxed mb-4">
                  <span className="font-semibold text-[#145390]">{doctor.designation}</span><br/>
                  <span className="text-sm">{doctor.experience.toLowerCase().replace(' exp', '')} experience</span>
                </p>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-5 px-1">
                    <div className="flex items-center gap-1.5 text-[#475569] font-medium text-sm">
                      <User className="w-[16px] h-[16px] text-[#145390]" strokeWidth={2.5} />
                      <span>{doctor.patients}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#475569] font-medium text-sm">
                      <Copy className="w-[16px] h-[16px] text-[#ED2793]" strokeWidth={2.5} />
                      <span>{doctor.reviews} Reviews</span>
                    </div>
                  </div>
                  
                  <a href="#" className="w-full bg-[#f8fbff] hover:bg-[#145390] text-[#145390] hover:text-white border border-[#e8f1fb] hover:border-[#145390] transition-all duration-300 font-bold text-[15px] py-3 rounded-2xl flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow-md">
                    Consult Now 
                    <Plus className="w-[18px] h-[18px] transform group-hover/btn:rotate-90 transition-transform duration-300" strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
