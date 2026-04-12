'use client';
import { useEffect, useState } from 'react';
import { Dock } from '@/components/ui/dock';
import { Home, User, Briefcase, Mail, Download } from 'lucide-react';

export default function DockBar() {
    const items = [
        { label: 'Home', href: '#home', icon: (p) => <Home {...p} /> },
        { label: 'About', href: '#about', icon: (p) => <User {...p} /> },
        { label: 'Work', href: '#work', icon: (p) => <Briefcase {...p} /> },
        { label: 'Contact', href: '#contact', icon: (p) => <Mail {...p} /> },
        { label: 'Download CV', href: '/Nimedu-Hansaka-CV.pdf', download: true, icon: (p) => <Download {...p} /> },
    ];

    return <Dock items={items} className="opacity-100 translate-y-0 pointer-events-auto" />;
}
