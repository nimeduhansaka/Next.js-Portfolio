'use client';
import { Code2, Palette, Zap, Award, Rocket } from 'lucide-react';
import { BlurFade } from "@/components/ui/blur-fade"

export default function AboutSection() {
    const skills = [
        {
            icon: Code2,
            title: 'Development',
            description: 'Building scalable and performant web applications with modern technologies.',
        },
        {
            icon: Palette,
            title: 'Design',
            description: 'Creating beautiful, intuitive interfaces that users love to interact with.',
        },
        {
            icon: Zap,
            title: 'Performance',
            description: 'Optimizing every detail for lightning-fast experiences.',
        },
    ];

    const stats = [
        { icon: Award, value: '10+', label: 'Projects Completed' },
        { icon: Rocket, value: '3+', label: 'Years Experience' },
    ];

    return (
        <section id="about" className="py-20 md:py-32 relative text-white">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center max-w-4xl mx-auto text-center gap-6 mb-20 md:mb-32">
                    <BlurFade inView>
                        <h2 className="font-serif tracking-tight mb-2">
                            <span className="block text-5xl md:text-7xl lg:text-[7rem] leading-[1.1] text-neutral-400">
                                About
                            </span>
                            <span className="block text-5xl md:text-7xl lg:text-[7rem] leading-[1.1] text-white font-medium">
                                Me.
                            </span>
                        </h2>
                    </BlurFade>

                    <BlurFade inView delay={0.2}>
                        <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-serif max-w-2xl mx-auto mt-6">
                            Crafting digital experiences with fresh vision and passion mastering the art of modern creative design.
                        </p>
                    </BlurFade>

                    <BlurFade inView delay={0.2}>
                        <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto mt-4">
                            As a new yet passionate designer with 3 years of experience, I specialize in crafting modern web applications that blend creativity and functionality. My fresh perspective and innovative ideas bring a unique touch to every project, ensuring each design is both engaging and built with precision.
                        </p>
                    </BlurFade>

                    <BlurFade inView delay={0.2}>
                        <div className="flex flex-wrap justify-center gap-12 mt-12">
                            {stats.map((stat) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={stat.label} className="text-center">
                                        <div className="text-4xl md:text-5xl font-serif tracking-tight mb-2 text-white">{stat.value}</div>
                                        <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-neutral-500 uppercase tracking-widest">
                                            <Icon size={16} />
                                            {stat.label}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </BlurFade>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20 md:mb-32">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <BlurFade inView key={skill.title} delay={0.2 + index * 0.1}>
                                <div className="group relative overflow-hidden rounded-[20px] h-full">
                                    <div className="absolute inset-0 bg-white/5 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-[20px]" />
                                    <div className="relative p-10 border border-white/10 hover:border-white/30 transition-colors duration-300 rounded-[20px] h-full flex flex-col items-center text-center">
                                        <Icon
                                            size={40}
                                            className="mb-6 text-neutral-400 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                                        />
                                        <h3 className="text-2xl font-serif tracking-tight mb-4 text-white">{skill.title}</h3>
                                        <p className="text-neutral-400 leading-relaxed">{skill.description}</p>
                                        <div className="mt-8 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-500" />
                                    </div>
                                </div>
                            </BlurFade>
                        );
                    })}
                </div>

                <div className="max-w-4xl mx-auto text-center border-t border-white/10 pt-20">
                    <BlurFade inView delay={0.6}>
                        <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-8 font-sans">Philosophy</h3>
                        <p className="text-2xl md:text-3xl text-neutral-300 italic font-serif leading-relaxed mb-8">
                            &quot;Simplicity is true elegance design stripped of excess reveals purpose.
                            Each line and form contributes meaning, shaping an experience that feels refined,
                            balanced, and deeply human.&quot;
                        </p>
                        <p className="text-sm uppercase tracking-wider text-neutral-500 font-medium">
                            — Leonardo da Vinci
                        </p>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
}