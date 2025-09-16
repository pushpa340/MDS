
'use client';

import { useState, useEffect, type FormEvent, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
  MailCheck,
  DatabaseZap,
  Users2,
} from 'lucide-react';
import type { Testimonial } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { MotionWrapper } from '@/components/ui/motion-wrapper';
import { TypingEffect } from '@/components/ui/typing-effect';
import { WhatWeDoSection } from '@/components/what-we-do';
import { AiBackground } from '@/components/ai-background';
import { motion, type Variants } from 'framer-motion';

const services = [
  {
    title: 'Digital Marketing',
    description: 'Brand promotion, SEO Optimization, Google Analytics.',
    icons: [Megaphone, TrendingUp, LineChart],
    href: '/services/digital-marketing',
    image: { src: '/services-icon/1.avif', hint: 'marketing chart' },
  },
  {
    title: 'IT Solutions',
    description: 'Technical assistance and troubleshooting for your business.',
    icons: [Wrench, Server, Shield],
    href: '/services/it-solutions',
    image: { src: '/services-icon/2.avif', hint: 'server room' },
  },
  {
    title: 'Event Marketing',
    description: 'Promote and manage your events to attract the right audience.',
    icons: [Calendar, PartyPopper, Megaphone],
    href: '/services/event-marketing',
    image: { src: '/services-icon/3.avif', hint: 'concert crowd' },
  },
  {
    title: 'Stock Market',
    description: 'In-depth analysis of market trends and stocks.',
    icons: [TrendingUp, LineChart, DollarSign],
    href: '/services/stock-market-analysis',
    image: { src: '/services-icon/4.avif', hint: 'stock charts' },
  },
  {
    title: 'Cyber Security',
    description:
      'Protect your digital assets with our advanced security solutions.',
    icons: [ShieldCheck, Lock, KeyRound],
    href: '/services/cyber-security-solution',
    image: { src: '/services-icon/5.avif', hint: 'cyber lock' },
  },
  {
    title: 'ERP & CRM',
    description:
      'Integrate all your business management functions into one unified system.',
    icons: [Users, Briefcase, Database],
    href: '/services/erp-crm-solution',
    image: { src: '/services-icon/6.avif', hint: 'business meeting' },
  },
  {
    title: 'Data Modernization',
    description:
      'Unified Data Modernization with Microsoft Fabric & GCP.',
    icons: [DatabaseZap, Server, ShieldCheck],
    href: '/services/data-modernization',
    image: { src: '/services-icon/7.avif', hint: 'data cloud' },
  },
  {
    title: 'Hiring Talent',
    description: 'Find the right talent to power your data and tech vision.',
    icons: [Users2, Briefcase, ArrowRight],
    href: '/services/hiring-talent-services',
    image: { src: '/services-icon/8.avif', hint: 'team recruitment' },
  },
];

const brandLogos = [
  {
    src: '/brands/brand-1.png',
    alt: 'Brand 1',
    hint: 'logo design',
  },
  {
    src: '/brands/brand-2.png',
    alt: 'Brand 2',
    hint: 'logo design',
  },
  {
    src: '/brands/brand-3.png',
    alt: 'Brand 3',
    hint: 'logo design',
  },
  {
    src: '/brands/brand-4.png',
    alt: 'Brand 4',
    hint: 'logo design',
  },
  {
    src: '/brands/brand-5.png',
    alt: 'Brand 5',
    hint: 'logo design',
  },
];

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};


export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <WhatWeDoSection />
      <BrandLogosSection />
      <TestimonialsSection />
      <ContactAndNewsletterSection />
    </div>
  );
}

const ribbonServices = [
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
  {
    title: 'Data Modernization',
    icons: [DatabaseZap, Server, ShieldCheck],
  },
  {
    title: 'Hiring Talent',
    icons: [Users2, Briefcase, ArrowRight],
  },
];

function ServicesRibbon() {
  return (
    <section className="bg-black/20 text-white py-1 overflow-hidden mt-16">
      <div className="flex animate-marquee whitespace-nowrap">
        {ribbonServices.concat(ribbonServices).map((service, index) => {
          const Icon = service.icons[0];
          return (
            <span key={index} className="text-xs mx-6 flex items-center">
              <Icon className="mr-2 h-4 w-4 text-yellow-400" />
              {service.title}
            </span>
          );
        })}
      </div>
    </section>
  );
}


function HeroSection() {
  const [isDigitalTyped, setIsDigitalTyped] = useState(false);
  
  const iconContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const iconItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="relative w-full overflow-hidden py-16">
      <AiBackground />
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="container mx-auto px-4 z-20 relative flex flex-col">
        <MotionWrapper>
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              <span className="inline-block bg-header-blue px-4 py-2 text-white">
                MARCOM
              </span>{' '}
              <span>
                <TypingEffect
                  text="DIGITAL "
                  className="text-yellow-400"
                  onComplete={() => setIsDigitalTyped(true)}
                />
                 {isDigitalTyped && (
                  <TypingEffect
                    text="SOLUTION"
                    className="text-white"
                  />
                )}
              </span>
            </h1>
            <div className="text-center">
              <p className="mt-4 text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
                Empowering{' '}
                <span className="text-primary">Businesses with
                </span> Complete
                AI Powered Digital Solutions
              </p>
            </div>
          </div>
        </MotionWrapper>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-8 justify-items-center mt-8"
          variants={iconContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={iconItemVariants}>
              <Link
                href={service.href}
                className="group flex flex-col items-center text-center"
              >
                <div
                  className="relative w-[120px] h-[120px] transition-transform duration-300 group-hover:scale-110"
                  style={{
                    clipPath:
                      'polygon(29.29% 0%, 70.71% 0%, 100% 29.29%, 100% 70.71%, 70.71% 100%, 29.29% 100%, 0% 70.71%, 0% 29.29%)',
                  }}
                >
                  <Image
                    src={service.image.src}
                    alt={service.title}
                    fill
                    className="object-cover"
                    data-ai-hint={service.image.hint}
                  />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-white">
                  {service.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <MotionWrapper delay={0.5}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-header-blue text-white hover:bg-blue-900 transition-transform duration-300 hover:scale-105"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-yellow-400 text-header-blue hover:bg-yellow-500 transition-transform duration-300 hover:scale-105"
            >
              <Link href="/about">Know More</Link>
            </Button>
          </div>
        </MotionWrapper>
      </div>
      <ServicesRibbon />
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <MotionWrapper>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Services
            </h2>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive solutions to power your business.
            </p>
          </MotionWrapper>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <MotionWrapper key={service.title} delay={0.1 * (index + 1)} variants={zoomIn}>
              <Card className="group relative h-[350px] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={service.image.src}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  data-ai-hint={service.image.hint}
                />
                <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/60" />

                <div className="absolute bottom-0 left-0 w-full p-6">
                   <CardTitle className="text-white text-2xl font-bold">{service.title}</CardTitle>
                </div>

                <div className="absolute inset-0 flex translate-y-full flex-col items-center justify-center bg-black/70 p-6 text-center transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                  <CardTitle className="text-primary mb-2 text-2xl font-bold">{service.title}</CardTitle>
                  <p className="mb-4 text-sm text-primary-foreground/80">{service.description}</p>
                  <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href={service.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandLogosSection() {
  return (
    <section className="bg-card py-16">
      <div className="container mx-auto px-4">
        <MotionWrapper>
          <h2 className="text-center text-lg font-semibold leading-8">
            Trusted by the world’s most innovative teams
          </h2>
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <Carousel
            opts={{ align: 'start', loop: true }}
            plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
            className="w-full mt-10"
          >
            <CarouselContent>
              {brandLogos.map((brand, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="flex justify-center p-4">
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={158}
                      height={48}
                      className="object-contain"
                      data-ai-hint={brand.hint}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </MotionWrapper>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'testimonials'));
        if (querySnapshot.empty) {
          // Fallback to mock data if firestore is empty
          const mockTestimonials: Testimonial[] = [
            {
              id: '0',
              name: 'Promila - DigitalVerse India',
              photoUrl: '/testimonial/T1.jfif',
              message:
                'They’re always available when we need them. Their support and custom solutions helped our business grow.',
              data_ai_hint: 'man portrait',
            },
            {
              id: '1',
              name: 'Sarah L.',
              photoUrl: '/testimonial/T2.jfif',
              message:
                'Marcom Digital Solution transformed our sales process. Their lead management is top-notch!',
              data_ai_hint: 'woman portrait',
            },
            {
              id: '2',
              name: 'Michael B.',
              photoUrl: '/testimonial/T3.jfif',
              message:
                'The inventory system is a lifesaver. We have perfect clarity on our stock levels now.',
              data_ai_hint: 'man smiling',
            },
            {
              id: '3',
              name: 'Jass P.',
              photoUrl: '/testimonial/T4.jfif',
              message:
                'Their digital marketing strategies doubled our online engagement in just three months!',
              data_ai_hint: 'woman smiling',
            },
            {
              id: '4',
              name: 'David C.',
              photoUrl: '/testimonial/T5.jfif',
              message:
                'The IT solutions provided were seamless and significantly improved our workflow.',
              data_ai_hint: 'man professional',
            },
            {
              id: '5',
              name: 'Emily R.',
              photoUrl: '/testimonial/T6.jfif',
              message:
                'Exceptional event marketing services that made our annual conference a huge success.',
              data_ai_hint: 'woman professional',
            },
          ];
          setTestimonials(mockTestimonials);
        } else {
          const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          })) as Testimonial[];
          setTestimonials(data);
        }
      } catch (error) {
        console.error('Error fetching testimonials: ', error);
        // Fallback to mock data if firestore fails for other reasons
        const mockTestimonials: Testimonial[] = [
          {
            id: '0',
            name: 'Maloni Sharma',
            photoUrl: '/testimonial/T1.jfif',
            message:
              'They’re always available when we need them. Their support and custom solutions have really helped our business grow.',
            data_ai_hint: 'man portrait',
          },
          {
            id: '1',
            name: 'Sarah L.',
            photoUrl: '/testimonial/T2.jfif',
            message:
              'Marcom Digital Solution transformed our sales process. Their lead management is top-notch!',
            data_ai_hint: 'woman portrait',
          },
          {
            id: '2',
            name: 'Michael B.',
            photoUrl: '/testimonial/T3.jfif',
            message:
              'The inventory system is a lifesaver. We have perfect clarity on our stock levels now.',
              data_ai_hint: 'man smiling',
          },
          {
            id: '3',
            name: 'Jessica P.',
            photoUrl: '/testimonial/T4.jfif',
            message:
              'Their digital marketing strategies doubled our online engagement in just three months!',
            data_ai_hint: 'woman smiling',
          },
        ];
        setTestimonials(mockTestimonials);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#1e4a5f]">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <MotionWrapper>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              What Our Clients Say
            </h2>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="mt-4 text-lg text-gray-300">
              Real stories from businesses we've helped succeed.
            </p>
          </MotionWrapper>
        </div>

        {testimonials.length > 0 && (
          <Carousel
            opts={{ align: 'start', loop: true }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
            className="mx-auto mt-12 w-full max-w-4xl"
          >
            <CarouselContent>
              {testimonials.map(testimonial => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <Avatar className="h-20 w-20">
                          <AvatarImage
                            src={testimonial.photoUrl}
                            alt={testimonial.name}
                            data-ai-hint={testimonial.data_ai_hint}
                          />
                          <AvatarFallback>
                            {testimonial.name
                              ? testimonial.name
                                  .split(' ')
                                  .map(n => n[0])
                                  .join('')
                              : 'NA'}
                          </AvatarFallback>
                        </Avatar>
                        <p className="mt-4 text-base italic text-muted-foreground">
                          "{testimonial.message}"
                        </p>
                        <p className="mt-4 font-semibold">{testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </section>
  );
}

function ContactAndNewsletterSection() {
  const { toast } = useToast();
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittingContact(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: selectedService,
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/queries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit query');
      }

      toast({
        title: 'Query Submitted!',
        description:
          "Thank you for reaching out. We'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
      setSelectedService("");
    } catch (error) {
      console.error('Error submitting query: ', error);
      toast({
        title: 'Submission Failed',
        description: 'Could not submit your query. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmittingContact(false);
    }
  };

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittingNewsletter(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      toast({
        title: 'Subscribed!',
        description: 'You have been added to our newsletter.',
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error subscribing to newsletter: ', error);
      toast({
        title: 'Subscription Failed',
        description: 'Could not subscribe. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };
  
  const contactServices = [
    { title: "Digital Marketing" },
    { title: "IT Solutions" },
    { title: "Event Marketing" },
    { title: "Stock Market Analysis" },
    { title: "Cyber Security Solution" },
    { title: "ERP & CRM Solution" },
    { title: "Data Modernization" },
    { title: "Hiring Talent Services" },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12">
          <MotionWrapper variants={slideInLeft}>
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  Have a question? We'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <Input name="name" placeholder="Name" required disabled={isSubmittingContact} />
                  <Input name="email" type="email" placeholder="Email" required disabled={isSubmittingContact} />
                  <Input name="phone" type="tel" placeholder="Phone" disabled={isSubmittingContact} />
                   <Select name="service" required value={selectedService} onValueChange={setSelectedService} disabled={isSubmittingContact}>
                      <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                          {contactServices.map(s => <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>)}
                      </SelectContent>
                  </Select>
                  <Textarea name="message" placeholder="Your Message" required disabled={isSubmittingContact} />
                  <Button type="submit" className="w-full" disabled={isSubmittingContact}>
                    {isSubmittingContact ? 'Submitting...' : 'Submit'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </MotionWrapper>
          
          <MotionWrapper delay={0.2} variants={slideInRight}>
            <div className="rounded-lg bg-header-blue p-8 text-white">
                <div className="flex flex-col items-center text-center gap-6 sm:flex-row sm:text-left sm:gap-8">
                    <div className="flex-shrink-0">
                        <MailCheck className="h-16 w-16 text-yellow-400" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Subscribe to Our Newsletter</h3>
                        <p className="mt-2 text-blue-200">
                        Get the latest updates on digital trends, exclusive tips, and special offers delivered straight to your inbox.
                        </p>
                    </div>
                    <form onSubmit={handleNewsletterSubmit} className="w-full sm:w-auto flex-shrink-0 flex sm:flex-col gap-2">
                        <Input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            required
                            disabled={isSubmittingNewsletter}
                            className="bg-white/10 text-white placeholder:text-blue-200 border-blue-800 focus:ring-yellow-400 min-w-[200px]"
                        />
                        <Button type="submit" disabled={isSubmittingNewsletter} className="bg-yellow-400 text-header-blue hover:bg-yellow-500">
                            {isSubmittingNewsletter ? 'Subscribing...' : 'Subscribe'}
                        </Button>
                    </form>
                </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}

    
    
