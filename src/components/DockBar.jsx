// my-next-portfolio/src/components/DockBar.jsx
// 'use client';
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
//     return <Dock items={items} />;
// }


// my-next-portfolio/src/components/DockBar.jsx
'use client';
import { useEffect, useState } from 'react';
import { Dock } from '@/components/ui/dock';
import { Home, User, Briefcase, Mail, Github } from 'lucide-react';

export default function DockBar() {
    const items = [
        { label: 'Home', href: '#home', icon: (p) => <Home {...p} /> },
        { label: 'About', href: '#about', icon: (p) => <User {...p} /> },
        { label: 'Projects', href: '#projects', icon: (p) => <Briefcase {...p} /> },
        { label: 'Contact', href: '#contact', icon: (p) => <Mail {...p} /> },
        { label: 'GitHub', href: 'https://github.com/nimeduhansaka', external: true, icon: (p) => <Github {...p} /> },
    ];

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = document.querySelector('#home');

        // Fallback: show when scrolled some distance if #home is missing
        if (!el) {
            const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.3);
            onScroll();
            window.addEventListener('scroll', onScroll, { passive: true });
            return () => window.removeEventListener('scroll', onScroll);
        }

        const io = new IntersectionObserver(
            ([entry]) => {
                // Show dock when home is not intersecting enough
                setVisible(!entry.isIntersecting);
            },
            { threshold: 0.6 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    const visibilityClasses = visible
        ? 'opacity-100 translate-y-0 pointer-events-auto'
        : 'opacity-0 translate-y-4 pointer-events-none';

    return <Dock items={items} className={visibilityClasses} />;
}
