
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
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
  ArrowRight,
  ShieldCheck,
  Lock,
  KeyRound,
} from 'lucide-react';
import { MotionWrapper } from '@/components/ui/motion-wrapper';

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'CEO & Founder',
    bio: "Alice drives the company's vision and strategy, with over 15 years of experience in digital marketing.",
    photoUrl: 'https://placehold.co/400x400.png',
    data_ai_hint: 'woman CEO',
  },
  {
    name: 'Bob Williams',
    role: 'CTO',
    bio: 'Bob is the technical mastermind behind our innovative solutions, specializing in scalable systems.',
    photoUrl: 'https://placehold.co/400x400.png',
    data_ai_hint: 'man CTO',
  },
  {
    name: 'Charlie Brown',
    role: 'Head of Sales',
    bio: 'Charlie leads our sales team, focusing on building strong client relationships and driving growth.',
    photoUrl: 'https://placehold.co/400x400.png',
    data_ai_hint: 'man sales',
  },
  {
    name: 'Diana Prince',
    role: 'Lead Developer',
    bio: 'Diana is a full-stack expert, ensuring our products are robust, secure, and user-friendly.',
    photoUrl: 'https://placehold.co/400x400.png',
    data_ai_hint: 'woman developer',
  },
];

const services = [
  {
    title: 'Digital Marketing',
    description: 'Brand promotion, SEO Optimization, Google Analytics.',
    icons: [Megaphone, TrendingUp, LineChart],
    href: '/services/digital-marketing',
  },
  {
    title: 'IT Solutions',
    description: 'Technical assistance and troubleshooting for your business.',
    icons: [Wrench, Server, Shield],
    href: '/services/it-solutions',
  },
  {
    title: 'Event Marketing',
    description: 'Promote and manage your events to attract the right audience.',
    icons: [Calendar, PartyPopper, Megaphone],
    href: '/services/event-marketing',
  },
  {
    title: 'Stock Market Analysis',
    description: 'In-depth analysis of market trends and stocks.',
    icons: [TrendingUp, LineChart, DollarSign],
    href: '/services/stock-market-analysis',
  },
  {
    title: 'Cyber Security Solution',
    description:
      'Protect your digital assets with our advanced security solutions.',
    icons: [ShieldCheck, Lock, KeyRound],
    href: '/services/cyber-security-solution',
  },
  {
    title: 'ERP & CRM Solution',
    description:
      'Integrate all your business management functions into one unified system.',
    icons: [Users, Briefcase, Database],
    href: '/services/erp-crm-solution',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      <header className="text-center">
        <MotionWrapper>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            About Marcom Digital Solution
          </h1>
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <p className="mt-6 text-xl text-muted-foreground">
            Empowering businesses with intelligent, streamlined solutions for
            growth and efficiency.
          </p>
        </MotionWrapper>
      </header>

      <MotionWrapper delay={0.4}>
        <section className="mt-16">
          <Image
            src="https://placehold.co/1200x500.png"
            alt="Company team working together"
            width={1200}
            height={500}
            className="rounded-lg object-cover"
            data-ai-hint="team meeting"
          />
        </section>
      </MotionWrapper>

      <section className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
        <MotionWrapper>
          <div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              Our mission is to provide businesses of all sizes with powerful,
              easy-to-use tools for marketing, sales, and management. We
              believe that the right technology can unlock immense potential,
              and we are dedicated to being the catalyst for our clients'
              success by simplifying complexities and fostering growth.
            </p>
          </div>
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <div>
            <h2 className="text-3xl font-bold">Our History</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2020, Marcom Digital Solution started with a small team
              of passionate entrepreneurs who saw a gap in the market for
              integrated business solutions. From a simple lead management
              tool, we've grown into a comprehensive platform serving clients
              across the globe in various industries, constantly innovating to
              meet their evolving needs.
            </p>
          </div>
        </MotionWrapper>
      </section>

      <section className="mt-16">
        <MotionWrapper>
          <h2 className="text-center text-3xl font-bold">Our Services</h2>
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <Accordion type="single" collapsible className="w-full mt-8">
            {services.map(service => (
              <AccordionItem key={service.title} value={service.title}>
                <AccordionTrigger className="text-xl font-semibold">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {service.icons.map((Icon, index) => (
                        <Icon
                          key={index}
                          className="h-6 w-6 text-primary"
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                    {service.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button asChild variant="link">
                    <Link href={service.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionWrapper>
      </section>

      <section className="mt-16">
        <MotionWrapper>
          <h2 className="text-center text-3xl font-bold">Our Values</h2>
        </MotionWrapper>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <MotionWrapper delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle>Customer-Centric</CardTitle>
              </CardHeader>
              <CardContent>
                We succeed when our customers succeed. We are committed to
                understanding their needs and delivering value that exceeds
                expectations.
              </CardContent>
            </Card>
          </MotionWrapper>
          <MotionWrapper delay={0.3}>
            <Card>
              <CardHeader>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                We thrive on creativity and ingenuity. We constantly explore
                new ideas and technologies to stay ahead of the curve.
              </CardContent>
            </Card>
          </MotionWrapper>
          <MotionWrapper delay={0.4}>
            <Card>
              <CardHeader>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                We operate with transparency and honesty. We build trust with
                our clients and partners through every interaction.
              </CardContent>
            </Card>
          </MotionWrapper>
        </div>
      </section>

      <section className="mt-20">
        <MotionWrapper>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Meet Our Team
          </h2>
        </MotionWrapper>
        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <MotionWrapper key={member.name} delay={0.1 * (index + 1)}>
              <div className="text-center">
                <Avatar className="mx-auto h-32 w-32">
                  <AvatarImage
                    src={member.photoUrl}
                    alt={member.name}
                    data-ai-hint={member.data_ai_hint}
                  />
                  <AvatarFallback>
                    {member.name
                      .split(' ')
                      .map(n => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="mt-6 text-lg font-medium">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>
    </div>
  );
}
