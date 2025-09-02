
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { TypingEffect } from "./ui/typing-effect";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // Services dropdown will be manually inserted here
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services/digital-marketing", label: "Digital Marketing" },
  { href: "/services/it-solutions", label: "IT Solutions" },
  { href: "/services/event-marketing", label: "Event Marketing" },
  { href: "/services/stock-market-analysis", label: "Stock Market Analysis" },
  { href: "/services/cyber-security-solution", label: "Cyber Security Solution" },
  { href: "/services/erp-crm-solution", label: "ERP & CRM Solution" },
];

const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2.4l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2.4l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
    </svg>
);
  
export default function Header() {
  const [isTyping, setIsTyping] = useState(true);

  const servicesMenu = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="transition-all hover:text-primary hover:scale-105 px-0 sm:px-2 text-white hover:text-white">
          Services
          <ChevronDown className="relative top-[1px] ml-1 h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {services.map((service) => (
          <DropdownMenuItem key={service.href} asChild>
            <Link href={service.href}>{service.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const Logo = ({size = 32, isTyping}: {size?: number, isTyping: boolean}) => (
    <div className="relative group flex items-center justify-center">
        <SettingsIcon className={`text-white absolute h-12 w-12 transition-transform duration-2000 ${isTyping ? 'animate-spin-slow' : ''} group-hover:rotate-[360deg]`} />
        <div className="bg-transparent rounded-full relative">
            <Image src="/logo.png" alt="Marcom Digital Solution Logo" width={size} height={size} className="bg-white rounded-full" />
        </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-header-blue text-white">
      <div className="container flex h-16 items-center">
        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                <Logo size={36} isTyping={isTyping} />
                <span className="font-bold text-lg text-black">Marcom Digital</span>
              </Link>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                {/* Add services links to mobile menu too */}
                 <div className="flex flex-col space-y-2 pl-4 border-l">
                   <p className="font-semibold">Services</p>
                  {services.map((service) => (
                      <Link key={service.href} href={service.href} className="transition-colors hover:text-primary text-sm">
                      {service.label}
                      </Link>
                  ))}
                 </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
                 <Link href="/" className="flex items-center space-x-2">
                    <div className="hidden md:block">
                        <Logo size={36} isTyping={isTyping} />
                    </div>
                     <div className="md:hidden">
                        <Logo size={32} isTyping={isTyping} />
                    </div>
                    <div className="flex flex-col">
                        <TypingEffect text="MARCOM DIGITAL SOLUTION" className="font-bold tracking-tight leading-none text-base" onComplete={() => setIsTyping(false)} />
                        <TypingEffect text="marcomdigitalsolution.com" className="text-xs text-blue-200" />
                    </div>
                </Link>
            </div>
            
            <div className="hidden md:flex flex-1 justify-center">
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="/" className="transition-all hover:text-primary hover:scale-105">Home</Link>
                    <Link href="/about" className="transition-all hover:text-primary hover:scale-105">About</Link>
                    {servicesMenu}
                    <Link href="/careers" className="transition-all hover:text-primary hover:scale-105">Careers</Link>
                    <Link href="/contact" className="transition-all hover:text-primary hover:scale-105">Contact</Link>
                </nav>
            </div>
          
          <div className="flex items-center">
            {/* User menu removed */}
          </div>
        </div>
      </div>
    </header>
  );
}
