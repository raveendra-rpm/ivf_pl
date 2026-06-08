import { CalendarHeart, ClipboardList, Syringe, Dna, Baby, CheckCircle2 } from 'lucide-react';

export default function ProcessStepsSection() {
  const steps = [
    {
      id: 1,
      title: "Consultation",
      description: "Initial evaluation and personalized fertility planning with our experts.",
      icon: CalendarHeart,
    },
    {
      id: 2,
      title: "Tests",
      description: "Comprehensive fertility screening and blood tests.",
      icon: ClipboardList,
    },
    {
      id: 3,
      title: "Stimulation",
      description: "Ovarian stimulation using advanced medications.",
      icon: Syringe,
    },
    {
      id: 4,
      title: "Egg Retrieval",
      description: "Safe and painless ultrasound-guided egg collection.",
      icon: Dna,
    },
    {
      id: 5,
      title: "Embryo Transfer",
      description: "Transferring the healthiest embryo to the uterus.",
      icon: Baby,
    },
    {
      id: 6,
      title: "Result",
      description: "Pregnancy test to confirm your beautiful journey.",
      icon: CheckCircle2,
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#f8fbff] dark:from-gray-800 to-white dark:to-gray-900 pointer-events-none" />
      <div className="absolute -left-40 top-40 w-[600px] h-[600px] bg-[#ED2793]/5 dark:bg-[#ED2793]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -right-40 bottom-0 w-[600px] h-[600px] bg-[#145390]/5 dark:bg-[#145390]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block py-2 px-4 rounded-full bg-[#145390]/10 dark:bg-[#145390]/30 text-[#145390] dark:text-blue-300 font-bold text-sm mb-4 border border-[#145390]/20 dark:border-[#145390]/40">
            IVF Treatment Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#145390] dark:text-blue-100 mb-6 leading-tight">
            Your Step-by-Step <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED2793] dark:from-pink-400 to-[#ff52ad] dark:to-pink-300">Process</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
            Understanding the IVF journey is important. Here is a simple, transparent visual timeline of what to expect during your treatment with us.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#145390] via-[#ED2793] to-[#145390] w-full opacity-30 dark:opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex flex-col items-center text-center group">
                
                {/* Connecting Line (Mobile/Tablet) */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-[48px] left-[50%] w-[2px] h-[calc(100%+32px)] bg-gradient-to-b from-[#ED2793]/30 dark:from-pink-500/30 to-transparent -z-10" />
                )}

                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-2 lg:right-auto lg:left-[calc(50%+16px)] bg-white dark:bg-gray-800 text-[#ED2793] dark:text-pink-400 font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md dark:shadow-none border border-gray-100 dark:border-gray-700 z-20 text-sm">
                  {step.id}
                </div>

                {/* Icon Container */}
                <div className="w-24 h-24 mb-6 rounded-[2rem] bg-white dark:bg-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none border border-gray-100 dark:border-gray-700 flex items-center justify-center relative z-10 group-hover:-translate-y-2 transition-all duration-500 group-hover:shadow-[0_20px_40px_rgb(237,39,147,0.15)] dark:group-hover:border-pink-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] dark:from-gray-700/30 to-white dark:to-gray-800" />
                  <div className="absolute inset-0 bg-[#ED2793] opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500" />
                  <step.icon className="w-10 h-10 text-[#145390] dark:text-blue-300 group-hover:text-[#ED2793] dark:group-hover:text-pink-400 transition-colors duration-500 relative z-10" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-[#145390] dark:group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <a href="/book-appointment" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-[#ED2793] rounded-2xl hover:bg-[#d61c7f] hover:shadow-lg hover:shadow-[#ED2793]/30 hover:-translate-y-1">
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
