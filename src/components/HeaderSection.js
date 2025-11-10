'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import "./header.css"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed text-white top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="font-bbh text-xl font-normal hover:text-gray-300 transition-colors"
                    >
                        NIMEDU
                    </button>

                    <div className="hidden md:flex items-center gap-8">
                        {['home', 'about', 'work', 'contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors relative group"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                            </button>
                        ))}
                    </div>

                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
                        {['home', 'about', 'work', 'contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="text-left text-sm uppercase tracking-wider hover:text-gray-300 transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}
