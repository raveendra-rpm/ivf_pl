import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { blogData } from '@/lib/blogData';

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar alwaysDark={true} />
      
      <main className="flex-grow pt-[72px] xl:pt-[84px] bg-[#f8fbff]">
        
        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-[#145390] via-[#ED2793] to-[#ff7eb3] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Blog</h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Insights, news, and expert advice to guide you through your fertility journey.
            </p>
          </div>
        </section>

        {/* BLOG LISTING SECTION */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogData.map((blog, index) => (
                <Link 
                  href={`/blog/${blog.slug}`}
                  key={index} 
                  className="group relative bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(20,83,144,0.1)] transition-all duration-500 cursor-pointer border border-transparent hover:border-gray-100 flex flex-col hover:-translate-y-2 block"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating Date Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 transform group-hover:scale-105 transition-transform duration-300">
                      <Calendar className="w-4 h-4 text-[#ED2793]" />
                      <span className="text-sm font-bold text-[#145390]">{blog.date}</span>
                    </div>
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-[#ED2793] shrink-0" />
                      <span className="text-sm font-semibold text-[#ED2793] uppercase tracking-wide">
                        {blog.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-[22px] font-bold text-[#145390] leading-snug mb-6 group-hover:text-[#ED2793] transition-colors">
                      {blog.title}
                    </h3>
                    
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-gray-500 font-medium text-[15px] group-hover:text-[#145390] transition-colors">Read Article</span>
                      <div className="w-10 h-10 rounded-full bg-[#f8fbff] group-hover:bg-[#ED2793] text-[#145390] group-hover:text-white flex items-center justify-center transition-colors shadow-sm group-hover:shadow-[0_4px_12px_rgba(237,39,147,0.3)]">
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
