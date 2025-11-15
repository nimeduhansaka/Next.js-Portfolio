'use client';
import { useEffect, useRef } from 'react';
import { AuroraText } from "@/components/ui/aurora-text"

export default function SnakeAnimationSection() {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const root = wrapperRef.current;
        if (!root) return;

        const svg = root.querySelector('#svg');
        const path = root.querySelector('#track');
        const snakeG = root.querySelector('#snake');
        const headLayer = root.querySelector('#headLayer');

        const speedControl = root.querySelector('#speed');
        const ampControl = root.querySelector('#amp');
        const segControl = root.querySelector('#segments');

        if (!svg || !path || !snakeG || !headLayer || !speedControl || !ampControl || !segControl) {
            console.warn('SnakeAnimation: missing required DOM elements, aborting animation.');
            return;
        }

        let segments = parseInt(segControl.value, 10);
        let speed = parseFloat(speedControl.value);
        let amplitude = parseFloat(ampControl.value);

        function buildSegments(n) {
            snakeG.innerHTML = '';
            headLayer.innerHTML = '';
            for (let i = 0; i < n; i++) {
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                const r = 12 * (1 - (i / n) * 0.6) + 2;
                circle.setAttribute('r', r);
                circle.setAttribute('fill', `rgb(${255 - i * 3}, ${200 - i * 4}, ${80 + i})`);
                circle.setAttribute('stroke', 'rgba(0,0,0,0.15)');
                circle.setAttribute('stroke-width', '1');
                circle.setAttribute('transform', 'translate(-100,-100)');
                circle.dataset.r = r;
                snakeG.appendChild(circle);
            }
            const head = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
            head.setAttribute('rx', 10);
            head.setAttribute('ry', 8);
            head.setAttribute('fill', 'white');
            head.setAttribute('opacity', 0.95);
            headLayer.appendChild(head);

            const headEye = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            headEye.setAttribute('r', 2.2);
            headEye.setAttribute('fill', 'black');
            headLayer.appendChild(headEye);
        }

        buildSegments(segments);

        let pathLen = path.getTotalLength();
        let headPos = 0;
        let last = performance.now();
        let rafId = null;

        function resize() {
            pathLen = path.getTotalLength();
        }
        window.addEventListener('resize', resize);

        const onVisibility = () => {
            if (!document.hidden) last = performance.now();
        };
        document.addEventListener('visibilitychange', onVisibility);

        function animate(now) {
            const dt = (now - last) / 1000;
            last = now;
            speed = parseFloat(speedControl.value);
            amplitude = parseFloat(ampControl.value);
            const newSegments = parseInt(segControl.value, 10);
            if (newSegments !== segments) {
                segments = newSegments;
                buildSegments(segments);
            }

            const baseSpeedFactor = 0.08;
            headPos = (headPos + dt * speed * baseSpeedFactor * pathLen) % pathLen;

            const segSpacing = Math.max(8, pathLen / 120);
            const circles = snakeG.querySelectorAll('circle');

            for (let i = 0; i < segments; i++) {
                const targetLen = (headPos - i * segSpacing + pathLen * 100) % pathLen;
                const p = path.getPointAtLength(targetLen);

                const delta = 0.5;
                const p1 = path.getPointAtLength((targetLen + delta) % pathLen);
                const p2 = path.getPointAtLength((targetLen - delta + pathLen) % pathLen);
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const ang = (Math.atan2(dy, dx) * 180) / Math.PI;

                const nx = -dy;
                const ny = dx;
                const nlen = Math.hypot(nx, ny) || 1;
                const nxn = nx / nlen;
                const nyn = ny / nlen;

                const taper = 1 - i / segments;
                const wobble = Math.sin((now / 1000) * 8 + i * 0.6) * amplitude * taper * 0.6;

                const cx = p.x + nxn * wobble;
                const cy = p.y + nyn * wobble;

                const el = circles[i];
                if (el) el.setAttribute('transform', `translate(${cx}, ${cy}) rotate(${ang})`);
            }

            const headPosLen = headPos;
            const pp = path.getPointAtLength(headPosLen);
            const deltaH = 0.8;
            const p1h = path.getPointAtLength((headPosLen + deltaH) % pathLen);
            const p2h = path.getPointAtLength((headPosLen - deltaH + pathLen) % pathLen);
            const dxh = p1h.x - p2h.x;
            const dyh = p1h.y - p2h.y;
            const angh = (Math.atan2(dyh, dxh) * 180) / Math.PI;
            const nxh = -dyh;
            const nyh = dxh;
            const nhlen = Math.hypot(nxh, nyh) || 1;
            const nxhn = nxh / nhlen;
            const nyhn = nyh / nhlen;
            const headWob = Math.sin((now / 1000) * 10) * amplitude * 0.9;
            const hx = pp.x + nxhn * headWob;
            const hy = pp.y + nyhn * headWob;

            if (headLayer.children.length >= 2) {
                const head = headLayer.children[0];
                const eye = headLayer.children[1];
                head.setAttribute('transform', `translate(${hx}, ${hy}) rotate(${angh})`);
                const eyeOffsetX = Math.cos((angh * Math.PI) / 180) * 6 - Math.sin((angh * Math.PI) / 180) * 2;
                const eyeOffsetY = Math.sin((angh * Math.PI) / 180) * 6 + Math.cos((angh * Math.PI) / 180) * 2;
                eye.setAttribute('transform', `translate(${hx + eyeOffsetX}, ${hy + eyeOffsetY})`);
            }

            rafId = requestAnimationFrame(animate);
        }

        rafId = requestAnimationFrame((t) => {
            last = t;
            rafId = requestAnimationFrame(animate);
        });

        const resizeTimeout = setTimeout(resize, 300);

        return () => {
            window.removeEventListener('resize', resize);
            document.removeEventListener('visibilitychange', onVisibility);
            clearTimeout(resizeTimeout);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div className="snake-stage-wrapper tracking-wider -mb-20" ref={wrapperRef} style={{marginTop: 30}}>
            <div className="stage">

                <h1 className="mt-[3em] whitespace-normal wrap-break-word">Need a break<span
                        className="inline-block mx-1 align-baseline leading-[0.7] text-[2.5em] md:text-[3em]"> ? </span> {' '}
                    Chill with my UI.
                </h1>

                <svg id="svg" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid meet"
                     xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="g1" x1="0" x2="1">
                            <stop offset="0%" stopColor="#88f" stopOpacity="0.12"/>
                            <stop offset="100%" stopColor="#6f8" stopOpacity="0.07"/>
                        </linearGradient>
                        <radialGradient id="snakeGrad">
                            <stop offset="0%" stopColor="#ffe58a"/>
                            <stop offset="55%" stopColor="#ffb248"/>
                            <stop offset="100%" stopColor="#ff7b33"/>
                        </radialGradient>
                    </defs>

                    <path id="track" d="M40 160 C 180 40, 380 260, 540 160 S 860 40, 1040 160" fill="none"
                          stroke="url(#g1)" strokeWidth="2" strokeOpacity="0.15"/>

                    <path id="glow" d="M40 160 C 180 40, 380 260, 540 160 S 860 40, 1040 160" fill="none"
                          stroke="#9fb1ff" strokeWidth="6" strokeLinecap="round" strokeOpacity="0.06"/>

                    <g id="snake"></g>
                    <g id="headLayer"></g>
                </svg>

                <div className="controls">
                    <label>Speed <input id="speed" type="range" min="0.5" max="4" step="0.1"
                                        defaultValue="1.6"/></label>
                    <label>Wiggle <input id="amp" type="range" min="0" max="30" step="1" defaultValue="12"/></label>
                    <label>Segments <input id="segments" type="range" min="6" max="40" step="1"
                                           defaultValue="22"/></label>
                </div>
            </div>
        </div>
    );
}
