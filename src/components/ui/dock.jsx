
// 'use client';
// import Link from 'next/link';
// import { useRef, useState, useEffect } from 'react';
//
// export function Dock({ items = [], className = '' }) {
//     const containerRef = useRef(null);
//     const itemRefs = useRef([]);
//     const [scales, setScales] = useState(() => items.map(() => 1));
//
//     useEffect(() => {
//         itemRefs.current = itemRefs.current.slice(0, items.length);
//     }, [items.length]);
//
//     const updateScales = (clientX) => {
//         const maxScale = 1.8;
//         const influence = 140; // px range of influence
//         const next = itemRefs.current.map((el) => {
//             if (!el) return 1;
//             const rect = el.getBoundingClientRect();
//             const center = rect.left + rect.width / 2;
//             const distance = Math.abs(clientX - center);
//             const ratio = Math.max(0, (influence - distance) / influence);
//             return 1 + ratio * (maxScale - 1);
//         });
//         setScales(next);
//     };
//
//     const handleMouseMove = (e) => updateScales(e.clientX);
//     const handleMouseLeave = () => setScales(items.map(() => 1));
//
//     return (
//         <nav
//             ref={containerRef}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             className={[
//                 'fixed bottom-4 left-1/2 -translate-x-1/2 z-50',
//                 'mb-[env(safe-area-inset-bottom)]',
//                 className,
//             ].join(' ')}
//             aria-label="Dock navigation"
//         >
//             <div
//                 className={[
//                     'flex items-end gap-2 px-3 py-2',
//                     'rounded-2xl border border-white/15',
//                     'bg-white/10 dark:bg-black/30',
//                     'backdrop-blur-md shadow-lg',
//                 ].join(' ')}
//             >
//                 {items.map((item, i) => {
//                     const content = (
//                         <div
//                             ref={(el) => (itemRefs.current[i] = el)}
//                             title={item.label}
//                             className={[
//                                 'size-12 md:size-14',
//                                 'rounded-xl overflow-hidden',
//                                 'flex items-center justify-center',
//                                 'bg-white/10 hover:bg-white/15',
//                                 'border border-white/10',
//                                 'transition-[background,transform] duration-150',
//                                 'text-white',
//                             ].join(' ')}
//                             style={{
//                                 transform: `translateY(${(1 - scales[i]) * 6}px) scale(${scales[i]})`,
//                                 transformOrigin: 'center bottom',
//                             }}
//                             aria-label={item.label}
//                         >
//                             {typeof item.icon === 'function' ? item.icon({ size: 22 }) : item.icon}
//                         </div>
//                     );
//
//                     if (item.external) {
//                         return (
//                             <a
//                                 key={item.label}
//                                 href={item.href}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 aria-label={item.label}
//                             >
//                                 {content}
//                             </a>
//                         );
//                     }
//
//                     return (
//                         <Link key={item.label} href={item.href} aria-label={item.label}>
//                             {content}
//                         </Link>
//                     );
//                 })}
//             </div>
//         </nav>
//     );
// }

// 'use client';
// import { useEffect, useState } from 'react';
// import { Dock } from '@/components/ui/dock';
// import { Home, User, Briefcase, Mail, Github } from 'lucide-react';
//
// export default function DockBar() {
//     const items = [
//         { label: 'Home', href: '#home', icon: (p) => <Home {...p} /> },
//         { label: 'About', href: '#about', icon: (p) => <User {...p} /> },
//         { label: 'Projects', href: '#projects', icon: (p) => <Briefcase {...p} /> },
//         { label: 'Contact', href: '#contact', icon: (p) => <Mail {...p} /> },
//         { label: 'GitHub', href: 'https://github.com/nimeduhansaka', external: true, icon: (p) => <Github {...p} /> },
//     ];
//
//     const [visible, setVisible] = useState(false);
//
//     useEffect(() => {
//         const el = document.querySelector('#home');
//
//         // Fallback: show when scrolled some distance if #home is missing
//         if (!el) {
//             const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.3);
//             onScroll();
//             window.addEventListener('scroll', onScroll, { passive: true });
//             return () => window.removeEventListener('scroll', onScroll);
//         }
//
//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 // Show dock when home is not intersecting enough
//                 setVisible(!entry.isIntersecting);
//             },
//             { threshold: 0.6 }
//         );
//
//         io.observe(el);
//         return () => io.disconnect();
//     }, []);
//
//     const visibilityClasses = visible
//         ? 'opacity-100 translate-y-0 pointer-events-auto'
//         : 'opacity-0 translate-y-4 pointer-events-none';
//
//     return <Dock items={items} className={visibilityClasses} />;
// }

'use client';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export function Dock({ items = [], className = '' }) {
    const containerRef = useRef(null);
    const itemRefs = useRef([]);
    const [scales, setScales] = useState(() => items.map(() => 1));

    useEffect(() => {
        itemRefs.current = itemRefs.current.slice(0, items.length);
    }, [items.length]);

    const updateScales = (clientX) => {
        const maxScale = 1.8;
        const influence = 140;
        const next = itemRefs.current.map((el) => {
            if (!el) return 1;
            const rect = el.getBoundingClientRect();
            const center = rect.left + rect.width / 2;
            const distance = Math.abs(clientX - center);
            const ratio = Math.max(0, (influence - distance) / influence);
            return 1 + ratio * (maxScale - 1);
        });
        setScales(next);
    };

    const handleMouseMove = (e) => updateScales(e.clientX);
    const handleMouseLeave = () => setScales(items.map(() => 1));

    return (
        <nav
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={[
                'fixed bottom-4 left-1/2 -translate-x-1/2 z-50',
                'mb-[env(safe-area-inset-bottom)]',
                // Smooth show/hide
                'transition-all duration-300',
                className,
            ].join(' ')}
            aria-label="Dock navigation"
        >
            <div
                className={[
                    'flex items-end gap-2 px-3 py-2',
                    'rounded-lg border border-white/15',
                    'bg-white/10 dark:bg-black/30',
                    'backdrop-blur-md shadow-lg',
                ].join(' ')}
            >
                {items.map((item, i) => {
                    const content = (
                        <div
                            ref={(el) => (itemRefs.current[i] = el)}
                            title={item.label}
                            className={[
                                'size-12 md:size-14',
                                'rounded-md overflow-hidden',
                                'flex items-center justify-center',
                                'bg-white/10 hover:bg-white/15',
                                'border border-white/10',
                                'transition-[background,transform] duration-150',
                                'text-white',
                            ].join(' ')}
                            style={{
                                transform: `translateY(${(1 - scales[i]) * 6}px) scale(${scales[i]})`,
                                transformOrigin: 'center bottom',
                            }}
                            aria-label={item.label}
                        >
                            {typeof item.icon === 'function' ? item.icon({ size: 22 }) : item.icon}
                        </div>
                    );

                    if (item.external) {
                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.label}
                            >
                                {content}
                            </a>
                        );
                    }

                    return (
                        <Link key={item.label} href={item.href} aria-label={item.label}>
                            {content}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}

