'use client';

const trustSignals = [
  {
    image: '/images/nabh-accreditated-inodaya-hospital.png',
    title: 'NABH Accredited',
    subtitle: 'Highest Standard of Healthcare',
  },
  {
    image: '/images/indian-medical-association-logo-png_seeklogo-176771.png',
    title: 'IMA Member',
    subtitle: 'Indian Medical Association',
  },
  {
    image: '/images/upregimages.jpg',
    title: 'Registered Centre',
    subtitle: 'State Medical Council',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Gold_medal_icon.svg/200px-Gold_medal_icon.svg.png',
    title: 'Best IVF Center',
    subtitle: 'Varanasi Excellence Awards',
  },
];

export default function AwardsSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Awards, Certifications & <span className="text-[#145390] dark:text-blue-400">Accreditations</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Our commitment to clinical excellence, ethical practices, and world-class patient care is recognized globally.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustSignals.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-pink-50/50 dark:hover:bg-gray-800 transition-colors duration-300 group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-gray-100 dark:border-gray-600">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm md:text-base mb-1">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
