import { Star, ArrowUpRight } from 'lucide-react';

export default function CentresSection() {
  const centres = [
    {
      name: "Popular Hospital - Main Branch",
      location: "Varanasi",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Popular Hospital - Mirzapur",
      location: "Mirzapur",
      image: "https://images.unsplash.com/photo-1538108149393-cebb47ac527c?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Popular Hospital - Gopiganj",
      location: "Gopiganj",
      image: "https://images.unsplash.com/photo-1512675828443-4f40f0f41ab9?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Popular Hospital - Bachhaon",
      location: "Bachhaon",
      image: "https://images.unsplash.com/photo-1587559070757-f72a388edbba?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Our Centres</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            State-of-the-art infrastructure designed to provide you with the best fertility care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-center">
          {centres.map((center, index) => (
            <div key={index} className="bg-white p-3.5 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col hover:shadow-lg transition-shadow duration-300">
              
              {/* Image Section */}
              <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4 bg-gray-100">
                <img src={center.image} alt={center.name} className="w-full h-full object-cover" />
                
                {/* Top Left Pills */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-full">
                    IVF Centre
                  </span>
                </div>
                
                {/* Top Right Rating */}
                <div className="absolute top-3 right-4">
                  <span className="flex items-center gap-1 text-white text-[13px] font-bold drop-shadow-md">
                    <Star className="w-3.5 h-3.5 fill-white text-white" /> 4.9
                  </span>
                </div>
              </div>

              {/* Details Section */}
              <div className="px-2 pb-1 flex flex-col flex-grow">
                <div className="mb-1.5">
                  <h3 className="text-[19px] font-semibold text-[#1a1a1a] leading-tight line-clamp-1">
                    {center.name}
                  </h3>
                </div>
                
                <p className="text-[#a3a3a3] text-[13px] mb-6">{center.location} • Premium Facility</p>
                
                <div className="mt-auto flex items-center justify-between">
                  <span className="bg-[#f1f5f9] text-[#1e293b] font-bold text-[15px] px-4 py-2 rounded-full">
                    24/7 Open
                  </span>
                  <a 
                    href="#" 
                    className="bg-primary-blue hover:bg-[#0f4070] text-white text-[14px] font-medium py-2 pl-5 pr-2 rounded-full transition-colors flex items-center gap-2.5"
                  >
                    Get Direction
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-primary-blue">
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
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
