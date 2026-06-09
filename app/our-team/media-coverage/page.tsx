import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Newspaper, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Media Coverage | Popular IVF Centre',
  description: 'Read the latest news, press releases, and media mentions featuring Popular IVF Centre and our expert fertility specialists.',
};

const mediaArticles = [
  {
    publisher: 'Times of India',
    date: 'March 15, 2025',
    title: 'Popular IVF Centre Brings Advanced Laser Hatching to Varanasi',
    excerpt: 'In a major leap for fertility treatments in Eastern UP, Popular IVF has introduced Class 100 clean room facilities with advanced laser hatching technology, promising higher success rates for couples.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop',
  },
  {
    publisher: 'Hindustan Times',
    date: 'January 22, 2025',
    title: 'Dr. Expert Highlights the Importance of Early Fertility Screening',
    excerpt: 'During the recent IMA conference, our lead IVF specialist discussed the changing demographics of infertility and why early screening is crucial for modern couples.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop',
  },
  {
    publisher: 'Dainik Jagran',
    date: 'November 10, 2024',
    title: 'Free Fertility Consultation Camp Draws Hundreds',
    excerpt: 'Popular IVF Centre organized a free consultation and awareness camp in Purvanchal, helping over 500 couples understand their fertility options and providing free preliminary scans.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
  },
];

export default function MediaCoveragePage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      
      <main className="flex-grow pt-[72px] xl:pt-[84px]">
        {/* Page Hero */}
        <section className="relative h-[280px] md:h-[360px] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/media_coverage_banner.jpg" alt="Media Coverage" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#145390]/80 via-[#ED2793]/70 to-[#ff7eb3]/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
              Media Coverage
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto font-medium">
              Stay updated with our latest news, press releases, and features in leading publications. Discover how we are making headlines in the field of reproductive medicine.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaArticles.map((article, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#145390]">
                      {article.publisher}
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">
                      {article.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 group-hover:text-[#ED2793] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <a 
                      href={article.link} 
                      className="inline-flex items-center gap-2 text-[#145390] dark:text-blue-400 font-bold hover:text-[#ED2793] dark:hover:text-pink-400 transition-colors mt-auto"
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-semibold px-8 py-4 rounded-full transition-colors inline-flex items-center gap-2">
                Load More Articles
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
