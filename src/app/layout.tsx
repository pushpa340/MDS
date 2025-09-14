
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  Megaphone,
  LineChart,
  TrendingUp,
  Wrench,
  Server,
  Shield,
  Calendar,
  PartyPopper,
  DollarSign,
  Users,
  Briefcase,
  Database,
  ShieldCheck,
  Lock,
  KeyRound,
} from 'lucide-react';
import { ChatbotWidget } from '@/components/chatbot-widget';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Marcom Digital Solution',
  description: 'Your partner in business growth and management.',
};

const services = [
  {
    title: 'Digital Marketing',
    icons: [Megaphone, TrendingUp, LineChart],
  },
  {
    title: 'IT Solutions',
    icons: [Wrench, Server, Shield],
  },
  {
    title: 'Event Marketing',
    icons: [Calendar, PartyPopper, Megaphone],
  },
  {
    title: 'Stock Market',
    icons: [TrendingUp, LineChart, DollarSign],
  },
  {
    title: 'Cyber Security',
    icons: [ShieldCheck, Lock, KeyRound],
  },
  {
    title: 'ERP & CRM',
    icons: [Users, Briefcase, Database],
  },
];

function ServicesRibbon() {
  return (
    <section className="bg-primary text-primary-foreground py-1 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {services.concat(services).map((service, index) => {
          const Icon = service.icons[0];
          return (
            <span key={index} className="text-xs mx-6 flex items-center">
              <Icon className="mr-2 h-4 w-4" />
              {service.title}
            </span>
          );
        })}
      </div>
    </section>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <ServicesRibbon />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <ChatbotWidget />
      </body>
    </html>
  );
}
