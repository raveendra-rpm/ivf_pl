"use client";

import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GoogleReviewsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const reviews = [
    {
      id: 2,
      name: "Anish Ansari",
      time: "a year ago",
      text: "Highly satisfied with the service and care at Popular IVF center. The staff is kind, the doctors are experts, and the results speak for themselves. Thank you Popular IVF center for completing my family.",
      rating: 5,
      avatar: "A"
    },
    {
      id: 3,
      name: "Bp Pandey",
      time: "a year ago",
      text: "Excellent experience at Popular IVF center. The team is highly professional, supportive, and caring. They provide top notch treatment with a personal touch. Highly recommend.",
      rating: 5,
      avatar: "B"
    },
    {
      id: 4,
      name: "Shubham Sahani",
      time: "a year ago",
      text: "No words can express the gratitude we feel for Popular IVF center. After years of trying, we had almost lost hope, but their expert and unwavering support made all the difference. We are now proud parents, and our family is complete ❤️",
      rating: 5,
      avatar: "S"
    },
    {
      id: 5,
      name: "Sarvesh Patel",
      time: "a year ago",
      text: "After years of waiting Popular IVF center gave us the greatest gift of our lives - our little angel. Their expertise kindness and encouragement Kept us strong. We will always be grateful for making our family complete",
      rating: 5,
      avatar: "S"
    },
    {
      id: 6,
      name: "Dheeraj Yadav",
      time: "a year ago",
      text: "Best IVF Center of varanasi and poorvanchal . They have the best team of doctors and their nursing staff is also very qualified. They are equipped with latest equipment. Best Places of varanasi for IVF Fertility treatment.",
      rating: 5,
      avatar: "D"
    },
    {
      id: 7,
      name: "Preeti Kumari",
      time: "a year ago",
      text: "Ab ghar ki khamoshi, bachhe ki hasi se bhari hui hai. Yeh sab aapki wajah se hai. Thank you popular IVF center 💗. Best IVF center of Varanasi with best doctors and nursing staff.",
      rating: 5,
      avatar: "P"
    },
    {
      id: 8,
      name: "Rahul Patel",
      time: "a year ago",
      text: "Popular IVF ne mere pariwaar ko poora kar diya, kaafi samay se hum apna pariwar poora karne ki koshish kar rahe the, kaafi koshish karne ke baad hum Popular IVF aa gaye aur humara parivar poora ho gaya. Mujhe Dr. Tanya aur staff ne aache se humara dhyan rakha.Dhanywaad Popular IVF",
      rating: 5,
      avatar: "R"
    },
    {
      id: 9,
      name: "Anandshri Gupta",
      time: "3 years ago",
      text: "Very affordable and good staff. I have recently visited ivf center, would like to appreciate the way doctors counsel my wife. I think counselling is very important role in IVF process. We are highly satisfied with the services. We have finally decided to go with popular IVF",
      rating: 5,
      avatar: "A"
    },
    {
      id: 10,
      name: "Aman Chauhan",
      time: "a year ago",
      text: "I had an amazing experience with PopuLar IVF Center. The doctor's and medical staffare highly skilled and supportive throughtout the treatment. Thank Popular IVF center",
      rating: 5,
      avatar: "A"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[#145390]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#ED2793]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#f8fbff] text-[#145390] text-xs font-bold px-5 py-2.5 rounded-full mb-6 tracking-wide uppercase border border-[#145390]/10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#145390] inline-block animate-pulse"></span>
              Patient Feedback
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#145390] mb-4 leading-tight">
              Google <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#145390] to-[#1a6ab8]">Reviews</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Read what our patients have to say about their journey and experience with our dedicated fertility experts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0">
            <a 
              href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LKnIKMiyyCkyYLRSNagwtrRINTZOTTRLMrBINjU3tzKoMDVNMzZPTU42TjRJSzM0SvISKsgvKM1JLFLILEtTSE7NK0ktAgAyPRb7&q=popular+ivf+center&oq=popular+ivf&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyBggAEEUYOTIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDIICAMQABgWGB4yCAgEEAAYFhgeMgYIBRBFGD0yBggGEEUYPDIGCAcQRRg80gEINjE5OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center bg-[#fcf8fa] px-6 py-4 rounded-3xl border border-[#ED2793]/10 shadow-lg transform transition-transform hover:scale-105 shrink-0"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="text-3xl font-extrabold text-gray-900">4.8</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mb-2">Based on 95+ reviews</p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-5" />
            </a>
            
            <div className="hidden md:flex gap-3 shrink-0">
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 bg-white border border-gray-100 hover:border-[#145390]/30 text-[#145390] rounded-full transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 bg-[#145390] hover:bg-[#0e3d6e] text-white rounded-full transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-[0_8px_20px_rgba(20,83,144,0.3)]"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* CSS to hide scrollbar but keep functionality */}
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />

        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth pb-8 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(20,83,144,0.08)] transition-all duration-300 group shrink-0 w-[320px] md:w-[380px] snap-center flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#145390] to-[#1a6ab8] text-white flex items-center justify-center text-xl font-bold shadow-md shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg leading-tight">{review.name}</h4>
                    <span className="text-xs text-gray-500 font-medium">{review.time}</span>
                  </div>
                </div>
                <a href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LKnIKMiyyCkyYLRSNagwtrRINTZOTTRLMrBINjU3tzKoMDVNMzZPTU42TjRJSzM0SvISKsgvKM1JLFLILEtTSE7NK0ktAgAyPRb7&q=popular+ivf+center&oq=popular+ivf&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyBggAEEUYOTIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDIICAMQABgWGB4yCAgEEAAYFhgeMgYIBRBFGD0yBggGEEUYPDIGCAcQRRg80gEINjE5OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer" className="shrink-0 hover:scale-110 transition-transform">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" className="w-6 h-6 opacity-80" />
                </a>
              </div>
              
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed italic flex-grow">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-2 md:hidden">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 bg-white border border-gray-100 text-[#145390] rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 bg-[#145390] text-white rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
        </div>
      </div>
    </section>
  );
}
