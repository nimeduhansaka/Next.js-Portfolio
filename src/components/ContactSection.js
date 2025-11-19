import CurvedLoop from './CurvedLoop';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactSection() {
    const socials = [
        { icon: Github, label: 'GitHub', href: 'https://github.com/nimeduhansaka' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nimedu-hansaka-9721b4383' },
        { icon: Twitter, label: 'Twitter', href: 'https://x.com/nimedu' },
        { icon: Mail, label: 'Email', href: 'mailto:nimeduhansaka@gmail.com' },
    ];

    return (
        <section id="contact" className="min-h-screen min-h-[50vh] md:min-h-screen flex items-center py-8 md:py-10 overflow-visible">
            <div className="container mx-auto px-8 overflow-visible">

                <CurvedLoop
                    marqueeText="Let's ✦ Build ✦ Something ✦ Great ✦ Together ✦"
                    speed={3}
                    curveAmount={500}
                    direction="right"
                    interactive={true}
                    className="custom-text-style"
                />

                <div className="max-w-4xl mx-auto text-center mt-30 md:mt-50">

                    {/*<h2 className="text-5xl md:text-7xl font-bold tracking-tighter pb-4 mb-8 text-transparent bg-clip-text bg-[linear-gradient(90deg,#06b6d4,#8b5cf6,#f59e0b,#10b981)]">*/}
                    {/*    Let&apos;s Work Together*/}
                    {/*</h2>*/}

                    <p className="text-2xl font-bold text-gray-400 mb-12 -mt-4 max-w-2xl mx-auto">
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#06b6d4,#8b5cf6,#f59e0b,#10b981)]">Have a project in mind?</span> I&apos;d love to hear about it. Drop me a line and let&apos;s
                        create something amazing together.
                    </p>

                    <a
                        href="mailto:nimeduhansaka@gmail.com"
                        className="text-gray-400 inline-block text-2xl md:text-5xl font-bold hover:text-gray-300 transition-colors mb-12 group"
                    >
                        nimeduhansaka@gmail.com
                        <span className="block h-0.5 w-0 bg-white group-hover:w-full transition-all duration-500" />
                    </a>

                    <div className="text-gray-400 flex items-center justify-center gap-8 mb-16">
                        {socials.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 animate-fade-in"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    aria-label={social.label}
                                >
                                    <Icon size={24} />
                                </a>
                            );
                        })}
                    </div>

                    <div className="text-gray-500 text-sm">
                        <p>&copy; 2025 Portfolio. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
