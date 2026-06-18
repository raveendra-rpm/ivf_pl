export default function StatsSection() {
  const stats = [
    { value: "86%+", label: "High Success Rate" },
    { value: "15,000+", label: "IVF Babies Delivered" },
    { value: "5+ Years", label: "of Excellence" },
    { value: "50+", label: "Fertility Experts" },
  ];

  return (
    <section className="py-12 bg-white relative z-20 -mt-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            {stats.map((stat, index) => (
              <div key={index} className={`flex flex-col items-center text-center ${index === 0 || index === 2 ? 'pl-0' : 'pl-4 md:pl-0'}`}>
                <div className="text-3xl md:text-4xl font-black text-primary-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
