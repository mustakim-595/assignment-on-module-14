import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-900 px-4 py-16 sm:px-6 sm:py-20 md:py-28"
    >
      {/* Background Gradient Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-64 w-64 rounded-full bg-fuchsia-600/10 blur-3xl sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 sm:text-sm sm:tracking-[0.25em]">
            Get To Know Me
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 sm:w-20" />
        </div>

        {/* About Content */}
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">

          {/* Left Card */}
          <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-slate-950/60 to-fuchsia-500/10 p-6 shadow-xl shadow-violet-950/20 sm:p-8">

            <h3 className="mb-5 text-xl font-bold leading-snug text-white sm:text-2xl">
              Passionate About{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Web Development
              </span>
            </h3>

            <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              I am a passionate learner who enjoys building modern and
              interactive websites with React JS. I love turning ideas into
              clean, responsive, and user-friendly digital experiences.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              My goal is to continuously improve my development skills,
              explore modern technologies, and create meaningful projects
              that solve real-world problems.
            </p>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 sm:p-8">

              <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 sm:gap-5">

                {/* Item 1 */}
                <div className="rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-transparent p-5">
                  <h4 className="text-2xl font-bold text-white sm:text-3xl">
                    React
                  </h4>

                  <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                    Frontend Development
                  </p>
                </div>

                {/* Item 2 */}
                <div className="rounded-xl border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/10 to-transparent p-5">
                  <h4 className="text-2xl font-bold text-white sm:text-3xl">
                    Node
                  </h4>

                  <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                    Backend Development
                  </p>
                </div>

                {/* Item 3 */}
                <div className="rounded-xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-transparent p-5">
                  <h4 className="text-2xl font-bold text-white sm:text-3xl">
                    MongoDB
                  </h4>

                  <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                    Database
                  </p>
                </div>

                {/* Item 4 */}
                <div className="rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-transparent p-5">
                  <h4 className="text-2xl font-bold text-white sm:text-3xl">
                    JS
                  </h4>

                  <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                    Programming
                  </p>
                </div>

              </div>

            </div>

            {/* Gradient Glow */}
            <div className="pointer-events-none absolute -bottom-6 -right-6 -z-0 h-24 w-24 rounded-full bg-fuchsia-600/20 blur-3xl sm:h-32 sm:w-32" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;