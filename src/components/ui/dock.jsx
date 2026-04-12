'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Dock({ items = [], className = '' }) {
    const [activeHash, setActiveHash] = useState('');

    // Track active section based on the window hash and scrolling
    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash || '#home');
        };
        
        let observers = [];
        let interval;
        
        const setupObservers = () => {
            // Check what sections exist
            const hashItems = items.filter(item => item.href.startsWith('#'));
            const targets = hashItems.map(item => ({
                href: item.href,
                element: document.getElementById(item.href.substring(1))
            }));
            
            // If the sections aren't in the DOM yet (e.g. due to Preloader), wait and retry
            if (targets.some(target => !target.element)) {
                return false;
            }

            // Cleanup any existing observers before attaching new ones
            observers.forEach(obs => obs.disconnect());
            observers = [];

            targets.forEach(target => {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setActiveHash(target.href);
                        }
                    },
                    { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
                );
                observer.observe(target.element);
                observers.push(observer);
            });
            
            return true;
        };

        // Retry every 500ms until sections are loaded into DOM
        if (!setupObservers()) {
            interval = setInterval(() => {
                if (setupObservers()) {
                    clearInterval(interval);
                }
            }, 500);
        }

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            clearInterval(interval);
            observers.forEach(obs => obs.disconnect());
        };
    }, [items]);

    return (
        <nav
            className={[
                'fixed inset-x-0 top-6 z-50 flex justify-center',
                'transition-all duration-300',
                'pointer-events-none',
                className,
            ].join(' ')}
            aria-label="Dock navigation"
        >
            <div
                className={[
                    'pointer-events-auto',
                    'flex items-center gap-4 px-4 py-3',
                    'rounded-full',
                    'bg-[#121212]/40 backdrop-blur-2xl',
                    'border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)]',
                    'w-max max-w-[92vw]',
                ].join(' ')}
            >
                {items.map((item) => {
                    const isActive = activeHash === item.href;
                    
                    const content = (
                        <div
                            title={item.label}
                            className={[
                                'relative size-12',
                                'flex items-center justify-center',
                                'transition-colors duration-200 ease-out z-10',
                                isActive 
                                    ? 'text-white' 
                                    : 'text-neutral-500 hover:text-white',
                            ].join(' ')}
                            aria-label={item.label}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="dock-active-circle"
                                    className="absolute inset-0 bg-[#2a2a2a]/80 shadow-md backdrop-blur-sm border border-white/5 rounded-full -z-10"
                                    transition={{
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 30,
                                    }}
                                />
                            )}
                            {typeof item.icon === 'function' ? item.icon({ size: 22, strokeWidth: isActive ? 2.5 : 2 }) : item.icon}
                        </div>
                    );

                    if (item.external || item.download) {
                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noopener noreferrer" : undefined}
                                download={item.download ? true : undefined}
                                aria-label={item.label}
                                className="focus:outline-none"
                            >
                                {content}
                            </a>
                        );
                    }

                    return (
                        <Link 
                            key={item.label} 
                            href={item.href} 
                            aria-label={item.label}
                            className="focus:outline-none"
                            onClick={(e) => {
                                if (item.href.startsWith('#')) {
                                    e.preventDefault();
                                    const targetId = item.href.substring(1);
                                    const element = document.getElementById(targetId);
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                        setActiveHash(item.href);
                                        window.history.pushState(null, '', item.href);
                                    }
                                } else {
                                    setActiveHash(item.href);
                                }
                            }}
                        >
                            {content}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
