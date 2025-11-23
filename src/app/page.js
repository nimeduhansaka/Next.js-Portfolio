'use client';
import {useEffect, useState, useRef} from "react";
import Preloader from '@/components/PreloaderSection';
import HeroSection from '@/components/HeroSection';
import HeaderSection from '@/components/HeaderSection';
import ContactSection from '@/components/ContactSection';
import AboutSection from '@/components/AboutSection';
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import WorkSection from '@/components/WorkSection';
import SnakeAnimationSection from '@/components/SnakeAnimationSection';


export default function Home() {
    const [loading, setLoading] = useState(true);
    const [exiting, setExiting] = useState(false);
    const rafId = useRef(null);
    const ticking = useRef(false);


    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                rafId.current = requestAnimationFrame(() => {
                    const scrolled = window.scrollY;
                    const hero = document.querySelector('.sticky-hero');
                    if (hero && scrolled < window.innerHeight) {
                        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                        hero.style.opacity = 1 - (scrolled / window.innerHeight);
                    }
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);


    useEffect(() => {
        const MIN_LOADER_TIME = 1200;
        const FADE_OUT_TIME = 320;
        const start = performance.now();
        let minTimer, fadeTimer;
        let onLoad;

        const finish = () => {
            const elapsed = performance.now() - start;
            const wait = Math.max(0, MIN_LOADER_TIME - elapsed);
            minTimer = setTimeout(() => {
                setExiting(true);
                fadeTimer = setTimeout(() => setLoading(false), FADE_OUT_TIME);
            }, wait);
        };

        if (document.readyState === 'complete') {
            finish();
        } else {
            onLoad = () => {
                finish();
                window.removeEventListener('load', onLoad);
            };
            window.addEventListener('load', onLoad);
        }

        return () => {
            clearTimeout(minTimer);
            clearTimeout(fadeTimer);
            if (onLoad) window.removeEventListener('load', onLoad);
        };
    }, []);

    if (loading) {
        return <Preloader hide={exiting} />;
    }

    return (
        <>
            <SmoothCursor />
            <HeaderSection />

            <main className="relative">
                <div className="sticky-hero">
                    <HeroSection />
                </div>

                <div className="relative z-10 bg-black">
                    <AboutSection />
                    <WorkSection />
                    <SnakeAnimationSection />
                    <ContactSection />
                </div>
            </main>
        </>
    );
}
