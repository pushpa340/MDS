
'use client';

import React, { useEffect, useRef } from 'react';

export function AboutHero() {
    const particlesRef = useRef<HTMLDivElement>(null);
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current || typeof window === 'undefined') return;
        initialized.current = true;

        const container = particlesRef.current;
        if (!container) return;

        const createParticles = () => {
            if (!particlesRef.current) return;
            for (let i = 0; i < 30; i++) {
                setTimeout(() => {
                    if (!particlesRef.current) return;
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.animationDelay = Math.random() * 8 + 's';
                    particle.style.animationDuration = (Math.random() * 6 + 8) + 's';
                    
                    const colors = ['#3b82f6', '#dc2626', '#ffffff', '#60a5fa'];
                    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                    
                    particlesRef.current.appendChild(particle);
                    
                    setTimeout(() => {
                        if (particle.parentNode) {
                            particle.parentNode.removeChild(particle);
                        }
                    }, 15000);
                }, i * 300);
            }
        };

        const createTechIcons = () => {
            if (!particlesRef.current) return;
            const icons = ['⚙️', '💻', '🔧', '📊', '🚀', '💡', '⚡', '🌐'];
            
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    if (!particlesRef.current) return;
                    const icon = document.createElement('div');
                    icon.className = 'tech-icon';
                    icon.textContent = icons[i];
                    icon.style.left = Math.random() * 100 + '%';
                    icon.style.top = Math.random() * 100 + '%';
                    icon.style.animationDelay = Math.random() * 10 + 's';
                    icon.style.animationDuration = (Math.random() * 5 + 10) + 's';
                    
                    particlesRef.current.appendChild(icon);
                }, i * 1000);
            }
        };

        const createDataLines = () => {
            if (!particlesRef.current) return;
            for (let i = 0; i < 6; i++) {
                setTimeout(() => {
                    if (!particlesRef.current) return;
                    const line = document.createElement('div');
                    line.className = 'data-line';
                    line.style.top = Math.random() * 100 + '%';
                    line.style.width = Math.random() * 300 + 200 + 'px';
                    line.style.animationDelay = Math.random() * 4 + 's';
                    line.style.animationDuration = (Math.random() * 2 + 4) + 's';
                    
                    particlesRef.current.appendChild(line);
                    
                    setTimeout(() => {
                        if (line.parentNode) {
                            line.parentNode.removeChild(line);
                        }
                    }, 8000);
                }, i * 1500);
            }
        };

        const createCircuitPatterns = () => {
            if (!particlesRef.current) return;
            for (let i = 0; i < 5; i++) {
                const pattern = document.createElement('div');
                pattern.className = 'circuit-pattern';
                pattern.style.left = Math.random() * 100 + '%';
                pattern.style.top = Math.random() * 100 + '%';
                pattern.style.animationDelay = Math.random() * 4 + 's';
                pattern.innerHTML = `
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <path d="M10 10 L90 10 L90 50 L50 50 L50 90 L10 90 Z" stroke="#3b82f6" stroke-width="2"/>
                        <circle cx="30" cy="30" r="5" fill="#3b82f6"/>
                        <circle cx="70" cy="70" r="5" fill="#dc2626"/>
                    </svg>
                `;
                
                particlesRef.current.appendChild(pattern);
            }
        };
        
        const handleMouseMove = (e: MouseEvent) => {
            const shapes = document.querySelectorAll('.shape');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            shapes.forEach((shape, index) => {
                const htmlShape = shape as HTMLElement;
                const offsetX = (mouseX - 0.5) * 20;
                const offsetY = (mouseY - 0.5) * 20;
                
                htmlShape.style.transform += ` translate(${offsetX}px, ${offsetY}px)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        const initializeAnimations = () => {
            createParticles();
            createTechIcons();
            createDataLines();
            createCircuitPatterns();
            
            const pInterval = setInterval(createParticles, 20000);
            const dInterval = setInterval(createDataLines, 12000);
            return {pInterval, dInterval};
        };

        const { pInterval, dInterval } = initializeAnimations();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            clearInterval(pInterval);
            clearInterval(dInterval);
        }

    }, []);

    return (
        <div className="banner-container">
            <div className="tech-particles" ref={particlesRef}></div>
            
            <div className="geometric-bg">
                <div className="shape triangle" style={{top: '20%', right: '20%', animationDelay: '1s'}}></div>
                <div className="shape square" style={{top: '60%', right: '30%', animationDelay: '2s'}}></div>
                <div className="shape circle" style={{top: '40%', right: '10%', animationDelay: '3s'}}></div>
                <div className="shape triangle" style={{top: '80%', right: '50%', animationDelay: '4s'}}></div>
            </div>
            
            <div className="figure-silhouette"></div>
            
            <div className="content-wrapper">
                <h1 className="main-title">
                    Unlock the Power of<br/>
                    Technology and Business<br/>
                    Transformation with our
                </h1>
                
                <div className="highlight-box">
                    <h2 className="highlight-title">
                        Modernization<br/>
                        Engineering
                    </h2>
                </div>
            </div>
        </div>
    );
}
