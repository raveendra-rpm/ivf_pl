"use client";

const reasons = [
  {
    image: "/when_choose_ivf/in_vitro_fertilization_banner.jpg",
    title: "Blocked or Damaged Fallopian Tubes",
    desc: "When tubes are blocked or damaged, eggs cannot travel to the uterus. IVF bypasses the tubes entirely.",
  },
  {
    image: "/when_choose_ivf/microsurgical_testicular_sperm.jpg",
    title: "Male Infertility",
    desc: "Low sperm count, poor motility, or morphology issues are effectively addressed through IVF with ICSI.",
  },
  {
    image: "/when_choose_ivf/timely_evaluation_img.jpg",
    title: "Advanced Maternal Age",
    desc: "As egg quality and quantity decline with age, IVF maximizes the chances of a successful pregnancy.",
  },
  {
    image: "/when_choose_ivf/known_conditions_img.jpg",
    title: "Endometriosis",
    desc: "Endometriosis can damage reproductive organs. IVF is often the most effective option for conception.",
  },
  {
    image: "/when_choose_ivf/ivf_failure_img.jpg",
    title: "Previous Unsuccessful Treatments",
    desc: "If IUI or other fertility treatments have not worked, IVF offers a significantly higher success rate.",
  },
  {
    image: "/when_choose_ivf/egg_freezing_img.jpg",
    title: "Fertility Preservation",
    desc: "IVF allows freezing of eggs or embryos for future use, ideal before cancer treatment or for career planning.",
  },
  {
    image: "/when_choose_ivf/repeated_miscarriages_banner.jpg",
    title: "Recurrent Miscarriages",
    desc: "IVF with genetic testing (PGT) helps identify healthy embryos, reducing the risk of repeated miscarriages.",
  },
  {
    image: "/when_choose_ivf/seek_help_img.jpg",
    title: "Unexplained Infertility",
    desc: "When no clear cause is found, IVF is often the most effective path to achieving pregnancy.",
  },
];

export default function WhenToChooseIVFSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-[#fdf4fa] to-white dark:from-gray-900 dark:via-gray-900/50 dark:to-gray-900 overflow-hidden transition-colors duration-300">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-pink/5 dark:bg-primary-pink/10 blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-blue/5 dark:bg-primary-blue/10 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight transition-colors text-gray-900 dark:text-white">
            <span className="text-[#145390] dark:text-blue-300">When to</span>{" "}
            <span className="text-primary-pink">Choose Popular Hospital IVF</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            IVF is a proven path to parenthood for many couples. Here are the key conditions where IVF offers the best chance of success.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-64 md:h-72"
            >
              {/* Full background image */}
              <img
                src={reason.image}
                alt={reason.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Always-on dark gradient from bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* Hover: stronger pink overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-pink/80 via-primary-pink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Text on top of image */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col justify-end">
                <h3 className="font-bold text-white text-base md:text-[17px] leading-snug mb-1 group-hover:-translate-y-1 transition-transform duration-300">
                  {reason.title}
                </h3>
                <p className="text-xs md:text-sm text-white/90 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 opacity-0 group-hover:opacity-100 mt-1">
                  {reason.desc}
                </p>
              </div>

              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-pink to-primary-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
