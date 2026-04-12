'use client';
import Link from 'next/link';
import {useEffect, useState, useRef} from "react";
import Preloader from '@/components/PreloaderSection';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';
import AboutSection from '@/components/AboutSection';
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import WorkSection from '@/components/WorkSection';
import SnakeAnimationSection from '@/components/SnakeAnimationSection';
import BuyMeCoffeeWidget from "@/components/BuyMeCoffeeWidget";
import ScrollProgress from '@/components/ScrollProgress';
import FAQSection from '@/components/FAQSection';


export default function Home() {
    const [loading, setLoading] = useState(true);
    const [exiting, setExiting] = useState(false);


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
            <ScrollProgress />

            <main className="relative">
                <div className="relative z-20">
                    <HeroSection />
                </div>

                <div className="relative z-10 bg-[black]">
                    <AboutSection />
                    <WorkSection />
                    <SnakeAnimationSection />
                    <FAQSection />
                    <BuyMeCoffeeWidget />
                    <ContactSection />
                </div>
            </main>
        </>
    );
}
