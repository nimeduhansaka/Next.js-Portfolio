'use client';
import Image from 'next/image';
import { ArrowDown, Download } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import profileImg from '@/assets/profile.jpg';
import { Highlighter } from "@/components/ui/highlighter"
import { BlurFade } from "@/components/ui/blur-fade"
import {Particles} from "@/components/ui/particles";

export default function Hero() {
    const [showIndicator, setShowIndicator] = useState(true);
    const heroRef = useRef(null);

    const scrollToAbout = () => {
        const element = document.getElementById('about');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => setShowIndicator(entry.isIntersecting && entry.intersectionRatio > 0.6),
            { threshold: [0, 0.6, 1] }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative">

            <Particles
                className="absolute inset-0 z-0"
                quantity={200}
                ease={30}
                // color={color}
                refresh
            />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="overflow-hidden">
                            <BlurFade>
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter animate-slide-up">
                <span className="gradient-sweep">
                  <span className="base">Creative</span>
                  <span className="fill" aria-hidden>Creative</span>
                </span>
                            </h1>
                            </BlurFade>
                        </div>

                        <div className="overflow-hidden">
                            <BlurFade>
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter animate-slide-up animation-delay-200">
                <span className="gradient-sweep">
                  <span className="base">Developer</span>
                  <span className="fill" aria-hidden>Developer</span>
                </span>
                            </h1>
                            </BlurFade>
             </div>


                        <div className="overflow-hidden">
                            <p className="leading-relaxed text-lg md:text-xl text-gray-400 max-w-md animate-slide-up animation-delay-400">
                                {/*Crafting digital experiences with precision and passion.*/}
                                {/*Specialized in modern web development.*/}
                                Crafting{" "}
                                <Highlighter action="underline" color="#FF9800">
                                    Digital Experiences
                                </Highlighter>{" "}
                                with Precision and Passion. Specialized in Modern{" "}
                                <Highlighter action="highlight" color="#F5F5F4">
                                     Web Development.
                                </Highlighter>{" "}

                            </p>
                        </div>

                        <div className="overflow-hidden">
                            <div className="animate-slide-up animation-delay-400">
                                <div className="group relative inline-block overflow-hidden">
                                    <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                                    <a
                                        href="/Nimedu-Hansaka-CV.pdf"
                                        download="Nimedu-Hansaka-CV.pdf"
                                        className="relative z-10 inline-flex items-center gap-2 px-6 py-3 border text-white border-white transition-colors duration-300 group-hover:text-black"
                                        aria-label="Download CV"
                                    >
                                        <Download size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                                        <span>Download CV</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <BlurFade>
                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-white to-gray-400 rounded-full opacity-20 group-hover:opacity-40 blur transition duration-500" />
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/20">

                                <Image
                                    src={profileImg}
                                    alt="Profile"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                    </BlurFade>
                </div>
            </div>

            {showIndicator && (
                <div className="mouse-container">
                    <div className="mouse">
                        <button className="scroll-down" onClick={scrollToAbout} aria-label="Scroll to About"></button>
                    </div>
                </div>
            )}
        </section>
    );
}
