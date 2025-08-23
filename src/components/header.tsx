
"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogOut, LayoutDashboard, Building2, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

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

export default function Header() {
  const { user, role, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const getDashboardHref = () => {
    if (role === 'admin') return '/admin';
    if (role === 'client') return '/client';
    return '/login';
  }

  const servicesMenu = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="transition-colors hover:text-primary px-0 sm:px-2">
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="font-bold">Marcom Media Solution</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-primary">Home</Link>
            <Link href="/about" className="transition-colors hover:text-primary">About</Link>
            {servicesMenu}
            <Link href="/careers" className="transition-colors hover:text-primary">Careers</Link>
            <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                  <Building2 className="h-6 w-6 text-primary" />
                  <span className="font-bold">Marcom Media Solution</span>
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
          
          <nav className="flex items-center">
            {loading ? (
              <div className="h-8 w-24 animate-pulse rounded-md bg-muted" />
            ) : user ? (
              <>
                <Button variant="ghost" asChild>
                  <Link href={getDashboardHref()}>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <div className="space-x-2">
                <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
