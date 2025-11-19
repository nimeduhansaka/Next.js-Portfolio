'use client';
import { ExternalLink } from 'lucide-react';

export default function Work() {
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

    return (
        <section id="work" className="min-h-screen flex items-center text-white py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16">
                    Selected Work
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="group cursor-pointer animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative overflow-hidden mb-4 aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                                />
                                
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <ExternalLink size={32} />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-3 py-1 border border-white/20 rounded-full"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
