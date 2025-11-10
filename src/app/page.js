'use client';
import {useEffect, useState} from "react";
import Preloader from '@/components/PreloaderSection';
import HeroSection from '@/components/HeroSection';
import HeaderSection from '@/components/HeaderSection';
import ContactSection from '@/components/ContactSection';
import AboutSection from '@/components/AboutSection';
// import CustomCursor from '@/components/CustomCursorSection';
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import WorkSection from '@/components/WorkSection';
import SnakeAnimationSection from '@/components/SnakeAnimationSection';


export default function Home() {

    const [loading, setLoading] = useState(true);
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        const MIN_LOADER_TIME = 1200;   // minimum time to show loader
        const FADE_OUT_TIME = 320;      // must match CSS transition
        const start = performance.now();
        let minTimer, fadeTimer;
        let onLoad;

        const finish = () => {
            const elapsed = performance.now() - start;
            const wait = Math.max(0, MIN_LOADER_TIME - elapsed);
            minTimer = setTimeout(() => {
                setExiting(true); // start CSS fade
                fadeTimer = setTimeout(() => setLoading(false), FADE_OUT_TIME); // unmount after fade
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

        <main>

            <HeroSection />
            <AboutSection />
            <WorkSection />
            <SnakeAnimationSection />
            <ContactSection />

        </main>

        </>
    );
}
