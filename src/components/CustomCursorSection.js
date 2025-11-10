'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON'
            );
        };

        const handleMouseEnter = () => setIsHidden(false);
        const handleMouseLeave = () => setIsHidden(true);

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <>
            <div
                className={`custom-cursor ${isPointer ? 'pointer' : ''} ${isHidden ? 'hidden' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
            <div
                className={`custom-cursor-dot ${isHidden ? 'hidden' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
        </>
    );
}
