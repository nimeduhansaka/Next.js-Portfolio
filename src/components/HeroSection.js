'use client';
import Image from 'next/image';
import { ArrowDown, Download } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import profileImg from '@/assets/profile.jpg';
import { Highlighter } from "@/components/ui/highlighter"
import { BlurFade } from "@/components/ui/blur-fade"
import {Particles} from "@/components/ui/particles";
import TiltedCard from '@/components/TiltedCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
    const [showIndicator, setShowIndicator] = useState(true);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
    const [showTooltip, setShowTooltip] = useState(false);
    const [isColorful, setIsColorful] = useState(false);
    const [textState, setTextState] = useState('creative');

    useEffect(() => {
        const interval = setInterval(() => {
            setTextState(prev => prev === 'creative' ? 'newyear' : 'creative');
        }, 6000);
        return () => clearInterval(interval);
    }, []);
    

    const heroRef = useRef(null);

    const scrollToAbout = () => {
        const element = document.getElementById('about');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltipPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleImageClick = () => {
        setIsColorful(prev => !prev);
    };

    const [showPopup, setShowPopup] = useState(false);

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
        <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative">

            <Particles
                className="absolute inset-0 z-0"
                quantity={200}
                ease={30}
                // color={color}
                refresh
            />

            <div className="container mx-auto px-6">
                {/* <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="overflow-hidden">
                            <BlurFade>
                                <div className="relative inline-block">
                                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter animate-slide-up">
                                        <span className="gradient-sweep">
                                          <span className="base">Creative</span>
                                          <span className="fill" aria-hidden>Creative</span>
                                        </span>
                                    </h1>

                                </div>
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
             </div> */}

            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="relative">
                            <AnimatePresence mode="wait">
                                {textState === 'creative' ? (
                                    <motion.div
                                        key="creative"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="relative inline-block">
                                                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
                                                    <span className="gradient-sweep">
                                                        <span className="base">Creative</span>
                                                        <span className="fill" aria-hidden>Creative</span>
                                                    </span>
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden">
                                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
                                                <span className="gradient-sweep">
                                                    <span className="base">Developer</span>
                                                    <span className="fill" aria-hidden>Developer</span>
                                                </span>
                                            </h1>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="newyear"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="relative inline-block">
                                                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
                                                    Happy
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden">
                                            <h1
                                                className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text"
                                                style={{ backgroundImage: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #f59e0b, #10b981)' }}
                                            >
                                                New Year!
                                            </h1>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
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
                                <div
                                    className="absolute -inset-1 bg-linear-to-r from-white to-gray-400 rounded-full opacity-20 group-hover:opacity-40 blur transition duration-500"/>
                                <div
                                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/20"
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}
                                    onClick={handleImageClick}
                                >
                                    <Image
                                        src={profileImg}
                                        alt="Profile"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                        className={`w-full h-full object-cover transition-all duration-500 ${
                                            isColorful ? '' : 'grayscale'
                                        } md:grayscale md:hover:grayscale-0`}
                                    />
                                </div>

                                {/* Santa Hat Overlay */}
                                {/* <motion.div
                                    initial={{ y: -200, opacity: 0 }}
                                    animate={{ y: 8, opacity: 1, rotate: 14, x: 8 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 120,
                                        damping: 10,
                                        delay: 1.5 // Delay slightly to appear after other elements
                                    }}
                                    className="absolute -top-14 -right-2 md:-top-18 md:-right-4 w-36 h-36 md:w-48 md:h-48 z-20 pointer-events-none"
                                >
                                    <Image
                                        src="/hat.png"
                                        alt="Santa Hat"
                                        fill
                                        sizes="(max-width: 768px) 150px, 200px"
                                        className="object-contain drop-shadow-[5px_20px_10px_rgba(0,0,0,0.6)]"
                                        priority
                                    />
                                </motion.div> */}
                                
                                <div
                                    className={`absolute pointer-events-none transition-opacity duration-200 ${showTooltip ? 'opacity-100' : 'opacity-0'}`}
                                    style={{
                                        left: `${tooltipPos.x}px`,
                                        top: `${tooltipPos.y}px`,
                                        transform: 'translate(-50%, -150%)'
                                    }}
                                >
                                    <div className="font-bbh text-sm bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
                                        Nimedu Hansaka
                                    </div>
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

            {/* Latest Work Popup */}
            <div
                className={`fixed bottom-6 right-15 z-50 transition-all duration-700 transform hidden md:block ${
                    showPopup ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
                }`}
            >
                <div className="relative w-44 h-18 overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300 group border border-white/10">
                    <Image
                        src="/periodic-preview.png"
                        alt="Latest Work"
                        fill
                        sizes="176px"
                        className="object-cover blur-[2px] brightness-80 transition-all duration-500 group-hover:scale-110 group-hover:blur-0 group-hover:brightness-75"
                    />
                    <a href='https://periodic-table-ui.pages.dev/' target="_blank">
                        <div className="absolute inset-0 flex flex-col justify-center px-4 z-10">
                            <p className="text-[10px] text-gray-200 uppercase tracking-widest font-medium mb-0.5 drop-shadow-md">Latest Work</p>
                            <h3 className="text-white font-bold text-sm drop-shadow-md group-hover:text-blue-300 transition-colors">Periodic Table</h3>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}