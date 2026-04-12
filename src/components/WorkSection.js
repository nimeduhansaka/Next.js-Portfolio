'use client';
import { useState } from 'react';
import Image from 'next/image';
import { BlurFade } from "@/components/ui/blur-fade"

export default function WorkSection() {
    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured online store with payment integration and inventory management.',
            image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['React', 'Node.js', 'MongoDB'],
        },
        {
            title: 'Social Media Dashboard',
            description: 'Real-time analytics dashboard for tracking social media performance.',
            image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['TypeScript', 'Charts', 'API'],
        },
        {
            title: 'Portfolio Generator',
            description: 'Tool for creating beautiful portfolio websites with drag-and-drop interface.',
            image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['React', 'Tailwind', 'Firebase'],
        },
        {
            title: 'Fitness Tracking App',
            description: 'Mobile-first application for tracking workouts and nutrition goals.',
            image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['React Native', 'Redux', 'REST API'],
        },
    ];

    const visibleProjects = showAll ? projects : projects.slice(0, 2);

    return (
        <section id="work" className="py-20 md:py-32 relative text-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <BlurFade inView className="mb-16 md:mb-24">
                    <div className="flex items-center gap-4">
                        <h2 className="text-3xl md:text-5xl font-serif tracking-tight flex items-start gap-1">
                            Projects <span className="text-xs md:text-sm font-sans text-gray-500 font-normal mt-1 md:mt-2">({projects.length})</span>
                        </h2>
                        <div className="flex-1 h-[1px] bg-white/10 mx-2 md:mx-6"></div>
                        <button 
                            onClick={() => setShowAll(!showAll)}
                            className="text-lg font-sans font-bold text-[#d2f2cb] hover:text-white transition-colors whitespace-nowrap"
                        >
                            {showAll ? 'See less' : 'See all'}
                        </button>
                    </div>
                </BlurFade>

                <div className="flex flex-col gap-20">
                    {visibleProjects.map((project, index) => (
                        <BlurFade inView key={project.title} delay={0.2 + (index % 2) * 0.1}>
                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden mb-6 aspect-[4/3] md:aspect-[16/10] rounded-[24px]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 1024px"
                                    />
                                    <div className="absolute top-5 right-5 z-10 flex">
                                        <span className="text-xs font-sans px-4 py-2 bg-black/20 backdrop-blur-md border border-white/20 rounded-full text-white/90 shadow-sm">
                                            {project.tags.join(', ')}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-2xl md:text-3xl font-serif tracking-tight transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-400">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
