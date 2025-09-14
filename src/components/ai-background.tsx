
'use client';

import { useEffect, useRef } from 'react';

export function AiBackground() {
  const bgAnimationRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    
    const bgAnimation = bgAnimationRef.current;
    if (!bgAnimation) return;

    // Create animated particles
    function createParticles() {
        for (let i = 0; i < 25; i++) {
            setTimeout(() => {
                if (!bgAnimationRef.current) return;
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 8) + 's';
                bgAnimationRef.current.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 18000);
            }, i * 200);
        }
    }

    // Create neural network nodes
    function createNeuralNetwork() {
        const network = document.getElementById('neuralNetwork');
        if (!network) return;
        const nodeCount = 20;
        
        for (let i = 0; i < nodeCount; i++) {
            const neuron = document.createElement('div');
            neuron.className = 'neuron';
            neuron.style.left = Math.random() * 100 + '%';
            neuron.style.top = Math.random() * 100 + '%';
            neuron.style.animationDelay = Math.random() * 3 + 's';
            network.appendChild(neuron);
        }
    }

    // Create data streams
    function createDataStreams() {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                if (!bgAnimationRef.current) return;
                const stream = document.createElement('div');
                stream.className = 'data-stream';
                stream.style.top = Math.random() * 100 + '%';
                stream.style.width = Math.random() * 200 + 100 + 'px';
                stream.style.animationDelay = Math.random() * 4 + 's';
                stream.style.animationDuration = (Math.random() * 3 + 4) + 's';
                bgAnimationRef.current.appendChild(stream);
                
                setTimeout(() => {
                    if (stream.parentNode) {
                        stream.parentNode.removeChild(stream);
                    }
                }, 8000);
            }, i * 800);
        }
    }

    // Create binary code rain
    function createBinaryCode() {
        const binaryStrings = [
            '01010101', '11001100', '10101010', '01100110',
            '11110000', '00001111', '10010110', '01101001'
        ];
        
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                if (!bgAnimationRef.current) return;
                const binary = document.createElement('div');
                binary.className = 'binary-code';
                binary.textContent = binaryStrings[Math.floor(Math.random() * binaryStrings.length)];
                binary.style.left = Math.random() * 100 + '%';
                binary.style.animationDelay = Math.random() * 6 + 's';
                binary.style.animationDuration = (Math.random() * 4 + 6) + 's';
                bgAnimationRef.current.appendChild(binary);
                
                setTimeout(() => {
                    if (binary.parentNode) {
                        binary.parentNode.removeChild(binary);
                    }
                }, 10000);
            }, i * 750);
        }
    }

    // Initialize all animations
    function initializeAnimations() {
        createNeuralNetwork();
        createParticles();
        createDataStreams();
        createBinaryCode();
        
        const particleInterval = setInterval(createParticles, 15000);
        const streamInterval = setInterval(createDataStreams, 8000);
        const binaryInterval = setInterval(createBinaryCode, 12000);

        return () => {
            clearInterval(particleInterval);
            clearInterval(streamInterval);
            clearInterval(binaryInterval);
        }
    }

    const cleanup = initializeAnimations();

    return cleanup;

  }, []);

  return (
    <div className="bg-animation" ref={bgAnimationRef}>
        {/* Floating Service Widgets */}
        <div className="floating-element">
            <div className="service-widget">📊</div>
        </div>
        <div className="floating-element">
            <div className="service-widget">💻</div>
        </div>
        <div className="floating-element">
            <div className="service-widget">🎯</div>
        </div>
        <div className="floating-element">
            <div className="service-widget">📈</div>
        </div>
        <div className="floating-element">
            <div className="service-widget">🔐</div>
        </div>
        <div className="floating-element">
            <div className="service-widget">⚡</div>
        </div>
        <div className="floating-element">
            <div className="service-widget">🤖</div>
        </div>
        <div className="floating-element">
            <div className="service-widget">🌐</div>
        </div>
        <div className="floating-element">
            <div className="service-widget">🧠</div>
        </div>
        <div className="floating-element">
            <div className="service-widget">💡</div>
        </div>
        
        {/* Geometric Shapes */}
        <div className="geometric-shape triangle" style={{top: '20%', left: '30%', animationDelay: '2s'}}></div>
        <div className="geometric-shape square" style={{top: '60%', right: '20%', animationDelay: '4s'}}></div>
        <div className="geometric-shape hexagon" style={{bottom: '30%', left: '70%', animationDelay: '6s'}}></div>
        <div className="geometric-shape triangle" style={{top: '80%', left: '20%', animationDelay: '8s'}}></div>
        <div className="geometric-shape square" style={{top: '40%', right: '60%', animationDelay: '10s'}}></div>
        
        {/* Neural Network */}
        <div className="neural-network" id="neuralNetwork"></div>
        
        {/* Data Streams */}
        <div className="data-stream" id="dataStreams"></div>
        
        {/* Binary Code */}
        <div className="binary-code" id="binaryCode"></div>
    </div>
  );
}
