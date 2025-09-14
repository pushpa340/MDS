
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
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <ChatbotWidget />
      </body>
    </html>
  );
}
