import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { blogData } from '@/lib/blogData';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const blog = blogData.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col font-sans bg-[#f5f5f5]">
      <Navbar alwaysDark={true} />
      
      <main className="flex-grow pt-[100px] xl:pt-[120px] pb-24">
        
        {/* CONSTRAINED CONTAINER */}
        <div className="container mx-auto px-4 md:px-8 max-w-[800px]">
          
          {/* Back Button (Subtle UX addition) */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-800 text-sm font-medium transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </Link>
          
          {/* CATEGORY PILL */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-[#dcfce7] text-[#166534] text-xs font-semibold rounded-full tracking-wide">
              {blog.category}
            </span>
          </div>
          
          {/* DATE */}
          <p className="text-gray-400 text-sm font-medium mb-6">
            {blog.date}
          </p>
          
          {/* TITLE */}
          <h1 className="text-4xl md:text-[44px] font-bold text-gray-900 leading-tight mb-10 tracking-tight">
            {blog.title}
          </h1>

          {/* FEATURED IMAGE */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden mb-12">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div 
            className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-gray-900 prose-headings:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
