
"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogOut, LayoutDashboard, ChevronDown, User, LogIn, UserPlus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Image from "next/image";

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

  const userMenu = (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/10">
                <User className="h-5 w-5" />
                <span className="sr-only">User Menu</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            {user ? (
                <>
                    <DropdownMenuItem asChild>
                        <Link href={getDashboardHref()}>
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            Dashboard
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </DropdownMenuItem>
                </>
            ) : (
                <>
                    <DropdownMenuItem asChild>
                        <Link href="/login">
                            <LogIn className="mr-2 h-4 w-4" />
                            Login
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/signup">
                            <UserPlus className="mr-2 h-4 w-4" />
                            Sign Up
                        </Link>
                    </DropdownMenuItem>
                </>
            )}
        </DropdownMenuContent>
    </DropdownMenu>
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
                <Image src="/logo.png" alt="Marcom Digital Solution Logo" width={150} height={40} />
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
                    <Image src="/logo.png" alt="Marcom Digital Solution Logo" width={180} height={50} className="hidden md:inline-block" />
                    <Image src="/logo.png" alt="Marcom Digital Solution Logo" width={150} height={40} className="md:hidden" />
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
            {loading ? (
              <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
            ) : (
                userMenu
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
