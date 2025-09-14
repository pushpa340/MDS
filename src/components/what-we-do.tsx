
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { MotionWrapper } from './ui/motion-wrapper';

const tabs = [
  { id: 'about', label: 'About Us', icon: 'fa-bullseye' },
  { id: 'mission', label: 'Mission', icon: 'fa-rocket' },
  { id: 'vision', label: 'Vision', icon: 'fa-eye' },
];

const content = {
  about: 'We are a next-generation IT and digital services company focused on empowering startups and growing businesses through AI-powered solutions and smart automation. Our integrated offerings cover everything from software development, digital and event marketing, to ERP/CRM implementation, cybersecurity, and even stock market technology solutions.',
  mission: 'To empower startups and growing businesses by delivering AI-driven IT and digital services that drive innovation, efficiency, and sustainable growth. We aim to simplify complex operations through automation, enhance customer engagement, and provide secure, scalable solutions that evolve with your business.',
  vision: 'To become the leading tech enabler for startups and small businesses worldwide — transforming how they operate, market, and grow through the power of artificial intelligence, automation, and human-centered innovation.',
};

export function WhatWeDoSection() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section className="bg-primary min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          
          {/* Image Section */}
          <MotionWrapper className="group relative h-[400px] lg:h-[600px] order-2 lg:order-1">
            <div className="absolute top-[-30px] left-[-30px] w-[120px] h-[120px] bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:rotate-12 hover:scale-110 z-10">
              <div className="text-black font-bold text-center leading-tight tracking-wider transform -rotate-12">
                <span className="block text-xs mb-0.5">Agency</span>
                <span className="block text-xs mb-0.5">Creative</span>
                <span className="block text-[10px]">Development</span>
              </div>
            </div>
            
            <Image 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop" 
              alt="Professional Team Meeting" 
              width={600}
              height={600}
              className="main-image w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
            
            <div 
              className="absolute bottom-24 left-24 w-48 h-24 opacity-20" 
              style={{ background: 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="2" fill="%23ffd700" opacity="0.3"/></svg>\')' }}
            ></div>
          </MotionWrapper>

          {/* Content Section */}
          <MotionWrapper className="text-white order-1 lg:order-2 text-center lg:text-left">
            <p className="text-yellow-400 text-sm font-semibold tracking-widest mb-5 uppercase">WHAT WE DO!</p>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-10 bg-gradient-to-br from-white to-gray-300 text-transparent bg-clip-text">
              Innovative IT Solutions<br/>
              Driving Growth
            </h1>

            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row mb-10 justify-center lg:justify-start">
              {tabs.map((tab, index) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center justify-center gap-2 border-2 border-yellow-400 text-yellow-400 py-3 px-6 text-sm font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:-translate-y-0.5",
                    { "bg-yellow-400 text-black": activeTab === tab.id },
                    index === 0 ? "sm:rounded-l-lg sm:rounded-r-none rounded-t-lg" : "",
                    index === tabs.length - 1 ? "sm:rounded-r-lg sm:rounded-l-none rounded-b-lg sm:rounded-b-none" : "",
                    index > 0 ? "sm:border-l-0 border-t-0 sm:border-t-2" : ""
                  )}
                >
                  <i className={`fas ${tab.icon}`}></i>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content Description */}
            <div className="text-gray-200 text-base leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              {Object.entries(content).map(([key, value]) => (
                 <div key={key} className={cn("transition-opacity duration-300", activeTab === key ? 'block' : 'hidden')}>
                    {value}
                 </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <i className="fas fa-phone text-black text-xl"></i>
              </div>
              <div>
                <p className="text-gray-200 text-sm mb-1">Contact Number</p>
                <a href="tel:+918447242558" className="text-yellow-400 text-lg font-bold hover:text-orange-400 transition-colors">
                  +91-8447242558
                </a>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
    </section>
  );
}
