import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 md:py-28"
    >
      {/* Background Gradient Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-fuchsia-600/20 blur-3xl sm:h-80 sm:w-80" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-14">

        {/* Left Content */}
        <div className="text-center md:text-left">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 sm:text-sm sm:tracking-[0.25em]">
            Welcome to my website
          </p>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Building Ideas Into{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Digital Experiences.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 md:mx-0">
            I am learning React JS and modern web development to create
            clean, responsive, and user-friendly websites.
          </p>

          {/* Gradient Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="#about"
              className="inline-flex rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-900/30 sm:px-7 sm:py-3.5 sm:text-base"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center md:justify-end">

          {/* Gradient Glow Behind Image */}
          <div className="absolute inset-6 rounded-3xl bg-gradient-to-r from-violet-600/30 via-fuchsia-600/20 to-pink-600/30 blur-3xl sm:inset-8" />

          {/* Image Container */}
          <div className="relative w-full max-w-[450px] overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-slate-900 to-fuchsia-500/10 p-2 shadow-2xl shadow-violet-950/50">

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85"
              alt="Developer workspace"
              className="h-[260px] w-full rounded-2xl object-cover opacity-90 mix-blend-lighten sm:h-[320px] md:h-[380px]"
            />

            {/* Image Overlay */}
            <div className="pointer-events-none absolute inset-2 rounded-2xl bg-gradient-to-tr from-slate-950/40 via-transparent to-violet-500/20" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;