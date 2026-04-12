'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { BlurFade } from "@/components/ui/blur-fade"

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What types of digital products do you design?",
            answer: "I specialize in designing premium web applications, landing pages, and interactive digital experiences tailored to your brand's unique needs."
        },
        {
            question: "What is your design process like?",
            answer: "My process starts with understanding your goals, followed by wireframing, high-fidelity UI design, and finally, development handoff or implementation."
        },
        {
            question: "What is your typical timeline for projects?",
            answer: "A typical project timeline ranges from 2 to 6 weeks, depending on the scope and complexity of the requirements."
        },
        {
            question: "What do you need from me to get started?",
            answer: "To get started, I need a brief outlining your project goals, any existing branding assets, and your specific functional requirements."
        },
        {
            question: "How do you handle revisions and feedback?",
            answer: "I provide regular updates and include structured rounds of revisions at key milestones to ensure the final product aligns perfectly with your vision."
        },
        {
            question: "What is your communication style during projects?",
            answer: "I maintain clear and open communication through regular syncs, Slack or email updates, and collaborative discussions via tools like Figma."
        }
    ];

    return (
        <section id="faq" className="py-20 md:py-32 relative bg-[#0a0a0a]">
            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                <BlurFade inView>
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-5xl font-serif tracking-tight flex items-start gap-1 text-white">
                            Most asked questions <span className="text-xs md:text-sm font-sans text-gray-500 font-normal mt-1 md:mt-2">(6)</span>
                        </h2>
                        <div className="flex-1 h-[1px] bg-white/10 mx-2 md:mx-6"></div>
                    </div>
                </BlurFade>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <BlurFade inView key={faq.question} delay={0.1 + index * 0.1}>
                                <div 
                                    className={`bg-[#121212] hover:bg-[#18181a] transition-colors duration-300 rounded-[20px] overflow-hidden mb-1`}
                                >
                                    <button 
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full flex items-center justify-between p-6 md:px-8 md:py-6 text-left"
                                    >
                                        <span className="text-[#f4f4f5] text-base md:text-[17px] font-medium pr-8 font-sans">
                                            {faq.question}
                                        </span>
                                        <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/30 flex items-center justify-center shrink-0">
                                            {isOpen ? <Minus size={20} strokeWidth={1.5} className="text-[#f4f4f5]" /> : <Plus size={20} strokeWidth={1.5} className="text-[#f4f4f5]" />}
                                        </div>
                                    </button>
                                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                            <div className="pb-6 md:pb-8 px-6 md:px-8">
                                                <p className="text-[#a1a1aa] leading-relaxed text-sm md:text-base font-sans">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BlurFade>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
