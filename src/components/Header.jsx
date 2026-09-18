import React, { useState } from "react";
import { Code2, Menu, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border-b border-violet-500/20 bg-slate-950">
            <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-5">

                {/* Header Top */}
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <a
                        href="#home"
                        className="group flex items-center gap-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Code2
                            size={32}
                            strokeWidth={3}
                            className="text-violet-400 transition duration-300 group-hover:text-fuchsia-400 sm:h-10 sm:w-10"
                        />

                        <span className="text-2xl font-bold sm:text-3xl">
                            <span className="text-white">
                                Dev
                            </span>

                            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                                Space
                            </span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-8">

                            <li>
                                <a
                                    href="#home"
                                    className="font-medium text-violet-400 transition duration-300 hover:bg-gradient-to-r hover:from-violet-400 hover:to-fuchsia-400 hover:bg-clip-text hover:text-transparent"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#about"
                                    className="font-medium text-slate-300 transition duration-300 hover:bg-gradient-to-r hover:from-violet-400 hover:to-fuchsia-400 hover:bg-clip-text hover:text-transparent"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="rounded-lg border border-violet-500/40 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 px-5 py-2.5 font-medium text-violet-300 transition duration-300 hover:border-fuchsia-500/60 hover:from-violet-600 hover:to-fuchsia-600 hover:text-white"
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="rounded-lg border border-violet-500/30 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 p-2 text-violet-400 transition duration-300 hover:border-fuchsia-500/50 hover:text-fuchsia-400 md:hidden"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X size={20} strokeWidth={2} />
                        ) : (
                            <Menu size={20} strokeWidth={2} />
                        )}
                    </button>

                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="mt-5 border-t border-violet-500/20 pt-5 md:hidden">
                        <ul className="flex flex-col gap-3">

                            <li>
                                <a
                                    href="#home"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block rounded-lg px-4 py-3 font-medium text-violet-400 transition duration-300 hover:bg-gradient-to-r hover:from-violet-600/10 hover:to-fuchsia-600/10"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#about"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block rounded-lg px-4 py-3 font-medium text-slate-300 transition duration-300 hover:bg-gradient-to-r hover:from-violet-600/10 hover:to-fuchsia-600/10 hover:text-white"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block rounded-lg border border-violet-500/30 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 px-4 py-3 font-medium text-violet-300 transition duration-300 hover:from-violet-600 hover:to-fuchsia-600 hover:text-white"
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>
                    </nav>
                )}

            </div>
        </header>
    );
};

export default Header;