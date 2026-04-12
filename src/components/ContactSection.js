'use client';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import DarkPortrait from '../assets/DarkPortrait.png';

export default function ContactSection() {
    const socials = [
        { icon: Twitter, label: 'X', href: 'https://x.com/nimedu' },
        { icon: Github, label: 'GitHub', href: 'https://github.com/nimeduhansaka' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nimedu-hansaka-9721b4383' },
        { icon: Mail, label: 'Email', href: 'mailto:nimeduhansaka@gmail.com' },
    ];

    return (
        <section id="contact" className="min-h-[90vh] md:min-h-screen relative flex flex-col items-center justify-between pt-24 md:pt-32 overflow-hidden bg-[#0a0a0a] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.04] via-[#0a0a0a] to-[#0a0a0a]">
            {/* The wrapper ID is required for BuyMeCoffeeWidget */}
            <div id="bottom-section" className="container mx-auto px-6 relative z-10 flex flex-col items-center pt-10">
                
                <div className="text-center mb-10 md:mb-12">
                    <p className="text-3xl md:text-4xl font-serif text-gray-400 mb-1 md:mb-2 tracking-tight">
                        Let&apos;s create something
                    </p>
                    <p className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
                        awesome together.
                    </p>
                </div>
                
                <div className="flex items-center justify-center gap-8 mb-10 md:mb-0">
                    {socials.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-400 transition-colors duration-300"
                                aria-label={social.label}
                            >
                                <Icon size={24} strokeWidth={1.5} />
                            </a>
                        );
                    })}
                </div>
            </div>

            <div className="w-full flex-1 min-h-[400px] mt-auto relative z-0 max-w-[800px] mx-auto">
                <Image 
                    src={DarkPortrait}
                    alt="Dark Portrait"
                    fill
                    sizes="(max-width: 800px) 100vw, 800px"
                    className="object-contain object-bottom pointer-events-none"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                    }}
                    priority
                />
            </div>
            
            {/* Dark overlay at the very bottom to ensure blending */}
            <div className="absolute bottom-0 left-0 w-full h-70 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        </section>
    );
}
