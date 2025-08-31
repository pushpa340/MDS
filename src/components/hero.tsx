
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (
      <section className="relative bg-cover bg-center py-20 sm:py-32" style={{backgroundImage: "url('/cover-page.png')"}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Marcom Digital Solution
          </h1>
          <p className="mt-6 text-lg leading-8 text-blue-200">
            Your Ultimate Partner for Business Growth and Management Solutions
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started</Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Learn More &rarr;
            </Button>
          </div>
        </div>
      </section>
    );
  }
