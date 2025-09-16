
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  Info,
  Rocket,
  Eye,
  DatabaseZap,
} from 'lucide-react';
import { MotionWrapper } from '@/components/ui/motion-wrapper';
import { AboutHero } from '@/components/about-hero';

const teamMembers = [
  {
    name: 'Rohit Sahu',
    role: 'CEO & Founder',
    bio: "Mr. Rohit drives the company's vision and strategy, with over 15 years of experience in digital marketing.",
    photoUrl: '/about/F-1.jpg',
    data_ai_hint: 'man Founder',
  },
  {
    name: 'Rahul Sahu',
    role: 'Vice President',
    bio: 'Rahul is the technical mastermind behind our innovative solutions, specializing in Business operation and Brand Building.',
    photoUrl: '/about/F-2.jpeg',
    data_ai_hint: 'man',
  },
  {
    name: 'Ashutosh',
    role: 'Sales Director',
    bio: 'Ashutosh leads our sales team, focusing on building strong client relationships and driving growth.',
    photoUrl: '/about/F-3.jpg',
    data_ai_hint: 'man sales',
  },
  {
    name: 'Diana Prince',
    role: 'Product Developer',
    bio: 'Diana is a full-stack expert, ensuring our products are robust, secure, and user-friendly.',
    photoUrl: '/about/F5.jfif',
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
  {
    title: 'Data Modernization',
    description:
      'Unified Data Modernization with Microsoft Fabric & GCP.',
    icons: [DatabaseZap, Server, ShieldCheck],
    href: '/services/data-modernization',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      <header className="text-center">
        <MotionWrapper>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            About Marcom
          </h1>
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <p className="mt-6 text-xl text-muted-foreground">
          Unlock the Power of Technology and Business Transformation with our modernized Engineering
          </p>
        </MotionWrapper>
      </header>

      <MotionWrapper delay={0.4}>
        <section className="mt-16">
          <AboutHero />
        </section>
      </MotionWrapper>

      <section className="mt-16">
        <MotionWrapper>
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">
                <Info className="mr-2 h-4 w-4" /> About Us
              </TabsTrigger>
              <TabsTrigger value="mission">
                <Rocket className="mr-2 h-4 w-4" /> Mission
              </TabsTrigger>
              <TabsTrigger value="vision">
                <Eye className="mr-2 h-4 w-4" /> Vision
              </TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-4 text-muted-foreground">
              <p>
              We are a next-generation IT and digital services company focused on empowering startups and growing businesses through AI-powered solutions and smart automation. Our integrated offerings cover everything from software development, digital and event marketing, to ERP/CRM implementation, cybersecurity, and even stock market technology solutions.
              By blending human expertise with the latest in artificial intelligence and automation, we help you streamline operations, optimize performance, and accelerate growth — all while reducing cost and complexity. Whether you're launching a new venture or scaling your operations, we are your strategic tech partner, delivering agile, intelligent, and impactful results.
              </p>
            </TabsContent>
            <TabsContent value="mission" className="mt-4 text-muted-foreground">
              <p>
                Our mission is to <b>empower businesses</b> by providing{' '}
                <b>cutting-edge IT solutions</b> that help them grow and succeed
                in the digital age. We are committed to delivering{' '}
                <b>high-quality, customized services</b> that drive brand
                visibility, enhance user engagement, and increase business
                performance. Through constant innovation and a customer-first
                approach, we aim to be your trusted partner in{' '}
                <b>digital transformation</b>.
              </p>
            </TabsContent>
            <TabsContent value="vision" className="mt-4 text-muted-foreground">
              <p>
                To be a <b>global leader</b> in providing{' '}
                <b>innovative digital solutions</b> that enable businesses to
                thrive in an ever-evolving digital landscape. Our vision is to
                create lasting, positive impacts through{' '}
                <b>customized technology</b>, empowering businesses to achieve
                their goals and expand their reach.
              </p>
            </TabsContent>
          </Tabs>
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

    