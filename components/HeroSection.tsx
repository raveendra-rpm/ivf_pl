"use client";

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, User, Mail, MessageSquare, Check, ChevronDown } from 'lucide-react';

const slides = [
  { type: 'video', src: '/videos/popularivf_herovid.mp4' },
  { type: 'image', src: '/best_ivf_centre_in_india.png' },
  { type: 'image', src: '/popular_ivf_banner_img.png' },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFormActive, setIsFormActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play video from start when video slide becomes active
  useEffect(() => {
    if (currentSlide === 0 && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => console.log("Video play error:", err));
    }
  }, [currentSlide]);

  // Handle slide timing
  useEffect(() => {
    const activeSlide = slides[currentSlide];

    // If current slide is video, do not auto-play via timer
    if (activeSlide.type === 'video') {
      return;
    }

    // If user is interacting with form, do not auto-slide
    if (isFormActive) {
      return;
    }

    // If current slide is image, wait 10 seconds before transitioning
    const timer = setTimeout(() => {
      nextSlide();
    }, 10000);

    return () => clearTimeout(timer);
  }, [currentSlide, isFormActive]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full min-h-[100svh] bg-gray-900 group">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 h-full w-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
          >
            {slide.type === 'video' ? (
              <video
                ref={videoRef}
                src={slide.src}
                autoPlay
                muted
                playsInline
                onEnded={nextSlide}
                className="h-full w-full object-cover"
              />
            ) : (
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        ))}

        <div className="absolute inset-0 z-10 bg-black/30 pointer-events-none" />
        <div className={`absolute inset-x-0 bottom-0 z-10 h-[50%] bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'
          }`} />

        <div className={`absolute inset-x-0 bottom-0 z-20 px-4 pb-8 pt-32 sm:pb-10 md:px-8 md:pb-12 lg:pb-14 pointer-events-none transition-opacity duration-500 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'
          }`}>
          <div className="mx-auto flex max-w-[1080px] flex-col items-center text-center">
            <h1 className="mx-auto max-w-[1040px] text-[2rem] font-extrabold leading-[1.04] tracking-normal text-white drop-shadow-2xl sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] xl:text-[3.65rem]">
              Your Journey to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-pink-300">
                Parenthood
              </span>{' '}
              <br className="hidden lg:block" />
              Starts Here
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-sm font-medium leading-relaxed text-white/80 drop-shadow-lg sm:text-base md:text-lg">
              Providing advanced IVF treatments with a compassionate touch. Start your journey to parenthood today with our expert care.
            </p>
          </div>
        </div>

        {/* Banner Form (Image Slides Only) */}
        <div
          className={`hidden md:block absolute right-[5%] xl:right-[10%] top-1/2 -translate-y-1/2 z-30 w-full max-w-[360px] md:max-w-[400px] px-4 md:px-0 transition-all duration-700 ${currentSlide !== 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'
            }`}
          onMouseEnter={() => setIsFormActive(true)}
          onMouseLeave={() => setIsFormActive(false)}
          onFocus={() => setIsFormActive(true)}
          onBlur={() => setIsFormActive(false)}
        >
          <div className="bg-white rounded-2xl p-5 md:p-6 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-5">
              Book Free IVF Consultation
            </h3>

            <form className="flex flex-col gap-3.5">
              {/* Name Input */}
              <div className="flex items-center border border-gray-300 rounded-xl p-2 bg-white focus-within:border-primary-pink focus-within:ring-1 focus-within:ring-primary-pink transition-all">
                <div className="bg-gray-50 rounded-full w-9 h-9 flex items-center justify-center shrink-0">
                  <User className="h-4 w-4 text-[#823b82]" strokeWidth={2.5} />
                </div>
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="bg-transparent focus:outline-none ml-3 w-full text-gray-700 font-medium placeholder:font-normal placeholder:text-gray-400 text-sm md:text-base"
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="flex items-center border border-gray-300 rounded-xl p-2 bg-white focus-within:border-primary-pink focus-within:ring-1 focus-within:ring-primary-pink transition-all">
                <div className="flex items-center gap-1.5 border-r border-gray-200 pr-3 shrink-0 ml-1">
                  <span className="text-gray-700 font-bold text-sm md:text-base tracking-wide">IN</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600 font-medium text-sm md:text-base ml-1">+91</span>
                </div>
                <input
                  type="tel"
                  placeholder="Mobile Number*"
                  className="bg-transparent focus:outline-none ml-3 w-full text-gray-700 font-medium placeholder:font-normal placeholder:text-gray-400 text-sm md:text-base tracking-wide"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="flex items-center border border-gray-300 rounded-xl p-2 bg-white focus-within:border-primary-pink focus-within:ring-1 focus-within:ring-primary-pink transition-all">
                <div className="bg-gray-50 rounded-full w-9 h-9 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-[#823b82]" strokeWidth={2.5} />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent focus:outline-none ml-3 w-full text-gray-700 font-medium placeholder:font-normal placeholder:text-gray-400 text-sm md:text-base"
                />
              </div>

              {/* Message Input */}
              <div className="flex items-start border border-gray-300 rounded-xl p-2 bg-white focus-within:border-primary-pink focus-within:ring-1 focus-within:ring-primary-pink transition-all">
                <div className="bg-gray-50 rounded-full w-9 h-9 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare className="h-4 w-4 text-[#823b82]" strokeWidth={2.5} />
                </div>
                <textarea
                  placeholder="Message"
                  rows={2}
                  className="h-12 bg-transparent focus:outline-none ml-3 w-full text-gray-700 font-medium placeholder:font-normal placeholder:text-gray-400 text-sm md:h-auto md:text-base resize-none"
                ></textarea>
              </div>

              {/* Checkboxes */}
              <div className="pt-2 space-y-2.5">
                <label className="flex items-start justify-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                    <input type="checkbox" className="peer appearance-none w-4 h-4 rounded-[4px] border border-gray-300 checked:bg-primary-blue checked:border-primary-blue transition-all cursor-pointer" defaultChecked />
                    <Check className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none stroke-[3]" />
                  </div>
                  <span className="text-[12px] text-gray-500 font-medium leading-tight">
                    You hereby affirm & authorize Popular IVF to process the personal data as per the Privacy Policy.
                  </span>
                </label>

                <label className="flex items-center justify-start gap-2 cursor-pointer group mt-2">
                  <div className="relative flex items-center justify-center shrink-0">
                    <input type="checkbox" className="peer appearance-none w-4 h-4 rounded-[4px] border border-gray-300 checked:bg-primary-blue checked:border-primary-blue transition-all cursor-pointer" defaultChecked />
                    <Check className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none stroke-[3]" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 bg-[#25D366] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                    </div>
                    <span className="text-[13px] text-gray-600 font-medium">Opt-in for WhatsApp updates</span>
                  </div>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white font-bold text-lg rounded-xl py-3.5 transition-colors shadow-md shadow-primary-blue/20 mt-1"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="absolute bottom-6 left-4 z-30 flex gap-4 md:left-8 transition-opacity duration-300">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center rounded-full bg-[#333333]/90 p-3 md:p-4 text-white transition-all hover:bg-[#4a4a4a] hover:scale-105 shadow-lg"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2.5} />
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center rounded-full bg-[#333333]/90 p-3 md:p-4 text-white transition-all hover:bg-[#4a4a4a] hover:scale-105 shadow-lg"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2.5} />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 w-2 rounded-full transition-all duration-300 md:h-2.5 md:w-2.5 ${index === currentSlide ? 'bg-primary-pink w-6 md:w-8' : 'bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
