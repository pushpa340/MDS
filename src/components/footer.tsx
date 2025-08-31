
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-footer-blue text-white border-t border-blue-900/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center">
                <div className="bg-white rounded-full p-1 group">
                  <Image src="/logo.png" alt="Marcom Digital Solution Logo" width={32} height={32} className="transition-transform duration-2000 group-hover:rotate-[360deg]" />
                </div>
            </div>
            <p className="mt-4 text-sm text-blue-200">
              Your partner in business growth and management. We provide solutions to help you succeed.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <Button key={social.label} variant="ghost" size="icon" asChild className="text-blue-200 hover:bg-white/10 hover:text-white">
                  <Link href={social.href}>
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            <div>
              <h3 className="font-semibold text-white">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-blue-200 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Contact Us</h3>
              <ul className="mt-4 space-y-2 text-sm text-blue-200">
                <li>Email: marcommarketingsolution@outlook.com</li>
                <li>Phone: +91-8447242558</li>
              </ul>
            </div>
             <div>
              <h3 className="font-semibold text-white">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-sm text-blue-200 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-blue-200 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-blue-900/50 pt-8 text-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} Marcom Digital Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
