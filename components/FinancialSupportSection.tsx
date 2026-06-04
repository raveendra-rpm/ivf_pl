export default function FinancialSupportSection() {
  return (
    <section className="py-12 md:py-20 bg-background-light border-y border-pink-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="w-full md:w-1/3 flex justify-center order-2 md:order-1">
            <div className="w-48 h-48 md:w-64 md:h-64 relative">
              {/* Using a placeholder image for the money bag illustration */}
              <img 
                src="https://images.unsplash.com/photo-1579621970588-a3f5ce599fac?q=80&w=500&auto=format&fit=crop" 
                alt="Financial Support" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-6 text-center md:text-left order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue">
              Financial Support & <span className="text-primary-pink">0% EMI</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that financial constraints shouldn't come in the way of your dream to become parents. We offer flexible payment plans, transparent pricing, and 0% EMI options to make your IVF journey stress-free.
            </p>
            <div>
              <button className="bg-primary-pink text-white px-8 py-3 rounded-lg font-bold hover:bg-pink-600 transition-colors shadow-md">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
