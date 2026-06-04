import { ArrowRight, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import { blogData } from '@/lib/blogData';

export default function BlogsSection() {
  const blogs = blogData.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-[#f8fbff] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-pink/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#145390]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#fdf0f7] text-[#ED2793] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-wide uppercase border border-[#ED2793]/10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ED2793] inline-block animate-pulse shadow-[0_0_8px_rgba(237,39,147,0.8)]"></span>
              Insights & News
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#145390] mb-4 leading-tight">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED2793] to-[#ff7eb3]">Blogs</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Read our latest articles to stay informed and confident throughout your fertility journey.
            </p>
          </div>
          <div className="hidden md:block">
            <Link href="/blog" className="bg-white hover:bg-[#fcf8fa] text-[#145390] hover:text-[#ED2793] font-bold text-[15px] px-8 py-3.5 rounded-full shadow-md border border-gray-100 transition-all flex items-center gap-3 group active:scale-[0.98]">
              View All Articles
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog, index) => (
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

        <div className="flex justify-center mt-10 md:hidden">
          <button className="bg-white hover:bg-[#fcf8fa] text-[#145390] hover:text-[#ED2793] font-bold text-[15px] w-full py-4 rounded-2xl shadow-sm border border-gray-100 transition-all flex items-center justify-center gap-3 group active:scale-[0.98]">
            View All Articles
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
