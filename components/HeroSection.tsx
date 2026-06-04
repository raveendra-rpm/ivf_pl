export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full min-h-[100svh] bg-gray-900">
        <video
          src="/videos/popularivf_herovid.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 z-10 bg-black/25" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-[50%] bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-8 pt-32 sm:pb-10 md:px-8 md:pb-12 lg:pb-14">
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
      </div>
    </section>
  );
}
