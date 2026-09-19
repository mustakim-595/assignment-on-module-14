import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "https://img.magnific.com/free-vector/atom-science-education-icon-vector-neon-digital-graphic_53876-114080.jpg?t=st=1789778504~exp=1789782104~hmac=7dcd5ba46aba54eeb9b83032487d303061bfb2579d7009ea3cd1642310c3e463&w=1480",
      alt: "Developer workspace",
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
      alt: "Technology and coding",
    },
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=85",
      alt: "Code on computer screen",
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=85",
      alt: "Programming workspace",
    },
    {
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=85",
      alt: "Modern developer setup",
    },
  ];

  // Automatic Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Previous Image
  const handlePrevious = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Next Image
  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 md:py-28"
    >
      {/* Background Gradient Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl sm:h-80 sm:w-80" />

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

        {/* Right Image Slider */}
        <div className="relative flex justify-center md:justify-end">

          {/* Gradient Glow Behind Image */}
          <div className="absolute inset-6 rounded-3xl bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-pink-600/10 blur-3xl sm:inset-8" />

          {/* Image Container */}
          <div className="relative w-full max-w-[450px] overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-slate-900 to-fuchsia-500/10 p-2 shadow-2xl shadow-violet-950/50">

            {/* Sliding Images */}
            <div className="relative h-[260px] overflow-hidden rounded-2xl sm:h-[320px] md:h-[380px]">

              {images.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute inset-0 h-full w-full rounded-2xl object-cover mix-blend-lighten transition-all duration-2000 ease-in-out ${
                    index === currentImage
                      ? "translate-x-0 opacity-100"
                      : index < currentImage
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                  }`}
                />
              ))}

              {/* Image Overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-slate-950/40 via-transparent to-violet-500/20" />

              {/* Previous Button */}
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-violet-400/30 bg-slate-950/70 text-violet-300 backdrop-blur-sm transition duration-300 hover:border-fuchsia-400/60 hover:bg-violet-600 hover:text-white sm:h-10 sm:w-10 cursor-pointer"
              >
                <ChevronLeft size={20} strokeWidth={2.5} />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-violet-400/30 bg-slate-950/70 text-violet-300 backdrop-blur-sm transition duration-300 hover:border-fuchsia-400/60 hover:bg-fuchsia-600 hover:text-white sm:h-10 sm:w-10 cursor-pointer"
              >
                <ChevronRight size={20} strokeWidth={2.5} />
              </button>

              {/* Slider Indicators */}
              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      currentImage === index
                        ? "w-6 bg-gradient-to-r from-violet-400 to-fuchsia-400"
                        : "w-2 bg-slate-400/60"
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;