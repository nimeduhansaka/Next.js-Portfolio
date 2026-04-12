'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Highlighter } from "@/components/ui/highlighter"
import { BlurFade } from "@/components/ui/blur-fade"
import DarkPortrait from '@/assets/DarkPortrait.png';

export default function Hero() {
    const [showIndicator, setShowIndicator] = useState(true);
    const heroRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);
    const [portraitVisible, setPortraitVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setPortraitVisible(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        if (typeof window !== "undefined") {
            // Defer initial check to next tick to avoid React set-state-in-effect linter warning
            setTimeout(() => {
                const isMobile = window.innerWidth < 768;
                if (isMobile || window.scrollY > 10) {
                    // Instantly trigger animation on mobile, or if already scrolled on desktop
                    setPortraitVisible(true);
                } else {
                    window.addEventListener('scroll', handleScroll, { passive: true });
                }
            }, 0);
        }
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const scrollToAbout = () => {
        const element = document.getElementById('about');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                const isVisible = entry.isIntersecting && entry.intersectionRatio > 0.6;
                setShowIndicator(isVisible);
                setShowPopup(isVisible);
            },
            { threshold: [0, 0.6, 1] }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section id="home" ref={heroRef} className="min-h-screen flex flex-col justify-start pt-[14vh] md:pt-[12vh] lg:pt-[14vh] xl:pt-[18vh] relative text-center overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 flex-shrink-0 mb-4 md:mb-6 xl:mb-8">
                <div className="flex flex-col items-center flex-1 max-w-4xl mx-auto text-center gap-4 md:gap-5 xl:gap-7">
                    <BlurFade>
                        <style>{`
                            @keyframes infinite-scroll {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-50%); }
                            }
                            .animate-infinite-scroll {
                                animation: infinite-scroll 20s linear infinite;
                            }
                        `}</style>
                        <div 
                            className="w-[260px] md:w-[400px] mx-auto overflow-hidden mb-3 md:mb-4 relative"
                            style={{
                                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                            }}
                        >
                            <div className="flex w-max animate-infinite-scroll hover:paused">
                                {[1, 2].map((group) => (
                                    <div key={group} className="flex gap-3 pr-3">
                                        {["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "UI/UX Design", "React Native"].map((skill, idx) => (
                                            <div 
                                                key={idx} 
                                                className="bg-[#1E1E1E] border border-white/5 opacity-90 px-4 py-2 rounded-full text-xs md:text-sm font-medium text-neutral-300 w-max"
                                            >
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h1 className="font-serif tracking-tight lg:mt-2 xl:mt-0">
                            <span className="block text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem] leading-[1.1] text-neutral-400 mb-1 xl:mb-2">
                                Creative,
                            </span>
                            <span className="block text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem] leading-[1.1] text-white font-medium">
                                Developer.
                            </span>
                        </h1>
                    </BlurFade>

                    <BlurFade delay={0.2}>
                        <p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto leading-relaxed md:px-6">
                            Crafting{" "}
                            <Highlighter action="underline" color="#FF9800">
                                Digital Experiences
                            </Highlighter>{" "}
                            with Precision and Passion. Specialized in Modern{" "}
                            <Highlighter action="highlight" color="#F5F5F4">
                                Web Development.
                            </Highlighter>
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.4}>
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 mt-1 md:mt-2 font-sans">
                            <a
                                href="#work"
                                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#d2f2cb] text-black font-medium rounded-[20px] shadow-[0_4px_20px_rgba(210,242,203,0.15)] hover:shadow-[0_15px_40px_rgba(210,242,203,0.4)] hover:bg-[#cbf0c2] hover:-translate-y-1 transition-all duration-400 ease-out tracking-wide text-sm md:text-base"
                            >
                                See work
                            </a>
                            <a
                                href="https://periodic-table-ui.pages.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-white/20 text-white hover:bg-white hover:text-black font-medium rounded-[20px] hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)] hover:-translate-y-1 transition-all duration-400 ease-out tracking-wide text-sm md:text-base"
                            >
                                Latest work
                            </a>
                        </div>
                    </BlurFade>
                </div>
            </div>

            <div className={`relative w-full h-[60vh] md:h-[80vh] max-w-5xl mx-auto flex justify-center items-end mt-auto pointer-events-none z-0 transition-all duration-[1200ms] ease-out transform ${portraitVisible ? 'translate-y-0 opacity-100' : 'translate-y-[15vh] opacity-0'}`}>
                {/* Overlay gradient to smoothly blend the image edges with the black background */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_50%_40%,transparent_50%,#000000_100%)] md:bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#000000_80%)]"></div>
                {/* Bottom dark shade to blend with background and hide the square edge */}
                <div className="absolute bottom-0 left-0 right-0 h-[16vh] bg-gradient-to-t from-black via-black/90 to-transparent z-10 pointer-events-none"></div>
                <Image
                    src={DarkPortrait}
                    alt="Dark Portrait"
                    fill
                    className="object-contain object-bottom opacity-100 brightness-110 md:opacity-90 md:brightness-100"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    priority={true}
                    quality={100}
                />
            </div>

        </section>
    );
}