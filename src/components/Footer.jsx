import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-violet-500/20 bg-slate-950 px-4 py-8 sm:px-6 sm:py-10">

      {/* Gradient Glow */}
      <div className="pointer-events-none absolute -left-32 bottom-0 h-52 w-52 rounded-full bg-violet-600/15 blur-3xl sm:h-64 sm:w-64" />

      <div className="pointer-events-none absolute -right-32 top-0 h-52 w-52 rounded-full bg-fuchsia-600/15 blur-3xl sm:h-64 sm:w-64" />

      <div className="relative mx-auto max-w-6xl">

        {/* Footer Top */}
        <div className="flex flex-col items-center justify-between gap-7 md:flex-row md:gap-8">

          {/* Logo / Description */}
          <div className="text-center md:text-left">

            {/* Logo */}
            <a
              href="#home"
              className="group flex items-center justify-center gap-2 md:justify-start"
            >
              <Code2
                size={32}
                strokeWidth={3}
                className="text-violet-400 transition duration-300 group-hover:text-fuchsia-400"
              />

              <h2 className="text-2xl font-bold">
                <span className="text-white">
                  Dev
                </span>

                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                  Space
                </span>
              </h2>
            </a>

            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              Building ideas into digital experiences.
            </p>

          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 hover:text-white sm:h-11 sm:w-11"
            >
              <FaFacebookF size={17} />
            </a>

            {/* GitHub */}
            <a
              href="#"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 hover:text-white sm:h-11 sm:w-11"
            >
              <FaGithub size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 hover:text-white sm:h-11 sm:w-11"
            >
              <FaLinkedinIn size={17} />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent sm:my-8" />

        {/* Copyright */}
        <div className="text-center">

          <p className="text-xs text-slate-500 sm:text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              DevSpace
            </span>
            . All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;