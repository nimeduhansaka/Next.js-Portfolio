import {Code2, Palette, Zap, Award, Rocket} from 'lucide-react';
import { AuroraText } from "@/components/ui/aurora-text"

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
        {icon: Award, value: '10+', label: 'Projects Completed'},
        // { icon: Users, value: '30+', label: 'Happy Clients' },
        {icon: Rocket, value: '3+', label: 'Years Experience'},
    ];

    const technologies = [
        'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'UI/UX Design',
        'Next.js', 'GraphQL', 'AWS', 'Docker', 'PostgreSQL'
    ];

    return (
        <section id="about" className="min-h-screen flex items-center py-20 relative text-white">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"/>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"/>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-[2px] w-16 bg-white"/>
                    <span className="text-sm uppercase tracking-widest text-gray-400">Who I Am</span>
                </div>

                <div className="overflow-visible">
                <AuroraText className="text-5xl md:text-8xl font-bold tracking-tighter mb-20 m4-2 overflow-visible z-100">
                    About <span className="italic font-light inline-block overflow-visible z-100 whitespace-nowrap pr-[0.08em]">Me</span>
                </AuroraText>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 mb-20">
                    <div className="space-y-8">
                        <div className="relative pl-8 border-l-2 border-white/20">
                            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-6">
                                Crafting digital experiences with fresh vision and passion mastering the art of modern
                                creative design.
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                As a new yet passionate designer with 3 years of experience,
                                I specialize in crafting modern web applications that blend creativity and
                                functionality.
                                My fresh perspective and innovative ideas bring a unique touch to every project,
                                ensuring each design is both engaging and built with precision.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-8">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={stat.label}
                                        className="text-center animate-fade-in"
                                        style={{animationDelay: `${index * 100}ms`}}
                                    >
                                        <Icon className="mx-auto mb-3 opacity-50" size={28}/>
                                        <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                                        <div
                                            className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <div className="w-2 h-2 bg-white rounded-full"/>
                                Technical Skills
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {technologies.map((tech, index) => (
                                    <div
                                        key={tech}
                                        className="group relative overflow-hidden animate-fade-in"
                                        style={{animationDelay: `${index * 50}ms`}}
                                    >
                                        <div
                                            className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"/>
                                        <span
                                            className="relative z-10 px-5 py-2.5 text-sm border border-white/30 inline-block group-hover:text-black transition-colors duration-300">
                      {tech}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>



                        <div className="bg-white/5 p-8 backdrop-blur-sm border border-white/10">
                            <h3 className="text-xl font-bold mb-4">Philosophy</h3>
                            <div className="mt-2 pt-4 border-t border-white/10">
                                <p className="text-gray-300 italic">
                                    "Simplicity is true elegance design stripped of excess reveals purpose.
                                    Each line and form contributes meaning, shaping an experience that feels refined,
                                    balanced, and deeply human."
                                </p>
                                <p className="mt-2 text-xs uppercase tracking-wider text-gray-500">
                                    — Leonardo da Vinci
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={skill.title}
                                className="group relative overflow-hidden animate-fade-in"
                                style={{animationDelay: `${index * 150}ms`}}
                            >
                                <div
                                    className="absolute inset-0 bg-white/5 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"/>
                                <div
                                    className="relative p-10 border border-white/10 hover:border-white/30 transition-colors duration-300">
                                    <Icon
                                        size={48}
                                        className="mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                                    />
                                    <h3 className="text-2xl font-bold mb-4 tracking-tight">{skill.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{skill.description}</p>
                                    <div
                                        className="mt-6 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-500"/>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}