
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
} from 'lucide-react';
import type { Testimonial } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { MotionWrapper } from '@/components/ui/motion-wrapper';

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
];

const brandLogos = [
  {
    src: 'https://placehold.co/150x60.png',
    alt: 'Brand 1',
    hint: 'logo design',
  },
  {
    src: 'https://placehold.co/150x60.png',
    alt: 'Brand 2',
    hint: 'logo design',
  },
  {
    src: 'https://placehold.co/150x60.png',
    alt: 'Brand 3',
    hint: 'logo design',
  },
  {
    src: 'https://placehold.co/150x60.png',
    alt: 'Brand 4',
    hint: 'logo design',
  },
  {
    src: 'https://placehold.co/150x60.png',
    alt: 'Brand 5',
    hint: 'logo design',
  },
  {
    src: 'https://placehold.co/150x60.png',
    alt: 'Brand 6',
    hint: 'logo design',
  },
  {
    src: 'https://placehold.co/150x60.png',
    alt: 'Brand 7',
    hint: 'logo design',
  },
  {
    src: 'https://placehold.co/150x60.png',
    alt: 'Brand 8',
    hint: 'logo design',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <BrandLogosSection />
      <TestimonialsSection />
      <ContactAndNewsletterSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-16">
      <div className="absolute inset-0">
        <Image
          src="/cover-img/photo-1.jpg"
          alt="Business Growth"
          fill
          className="object-cover"
          data-ai-hint="business meeting"
          priority
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
      </div>
      <div className="container mx-auto px-4 z-20 relative flex flex-col justify-start">
        <MotionWrapper>
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              MARCOM DIGITAL SOLUTION
            </h1>
            <p className="mt-4 text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
              Empowering <span className="text-primary">Business Growth</span> with Scalable Digital IT Solutions
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 justify-items-center mt-8">
          {services.map((service, index) => (
            <MotionWrapper key={service.title} delay={0.1 * (index + 1)}>
              <Link href={service.href} className="group flex flex-col items-center text-center">
                <div className="relative w-[120px] h-[120px] transition-transform duration-300 group-hover:scale-110" style={{ clipPath: 'polygon(29.29% 0%, 70.71% 0%, 100% 29.29%, 100% 70.71%, 70.71% 100%, 29.29% 100%, 0% 70.71%, 0% 29.29%)' }}>
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
            </MotionWrapper>
          ))}
        </div>
        <MotionWrapper delay={0.5}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-primary transition-transform duration-300 hover:scale-105"
            >
              <Link href="/about">Know More</Link>
            </Button>
          </div>
        </MotionWrapper>
      </div>
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
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <MotionWrapper key={service.title} delay={0.1 * (index + 1)}>
              <Link href={service.href} className="flex h-full">
                <Card className="flex flex-col text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg w-full">
                  <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <div className="flex -space-x-2">
                        {service.icons.map((Icon, index) => (
                          <Icon
                            key={index}
                            className="h-6 w-6 text-primary"
                            strokeWidth={1.5}
                          />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="mx-auto">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
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
              name: 'Mohit Sharma - DigitalVerse India',
              photoUrl: '/testimonial/T-1.jpg',
              message:
                'They’re always available when we need them. Their support and custom solutions have really helped our business grow.',
              data_ai_hint: 'man portrait',
            },
            {
              id: '1',
              name: 'Sarah L.',
              photoUrl: '/testimonial/T-2.jpg',
              message:
                'Marcom Digital Solution transformed our sales process. Their lead management is top-notch!',
              data_ai_hint: 'woman portrait',
            },
            {
              id: '2',
              name: 'Michael B.',
              photoUrl: '/testimonial/T-3.jpg',
              message:
                'The inventory system is a lifesaver. We have perfect clarity on our stock levels now.',
              data_ai_hint: 'man smiling',
            },
            {
              id: '3',
              name: 'Jessica P.',
              photoUrl: '/testimonial/T-4.jpg',
              message:
                'Their digital marketing strategies doubled our online engagement in just three months!',
              data_ai_hint: 'woman smiling',
            },
            {
              id: '4',
              name: 'David C.',
              photoUrl: 'https://picsum.photos/100/100?random=10',
              message:
                'The IT solutions provided were seamless and significantly improved our workflow.',
              data_ai_hint: 'man professional',
            },
            {
              id: '5',
              name: 'Emily R.',
              photoUrl: 'https://picsum.photos/100/100?random=11',
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
            name: 'Mohit Sharma - DigitalVerse India',
            photoUrl: '/testimonial/T-1.jpg',
            message:
              'They’re always available when we need them. Their support and custom solutions have really helped our business grow.',
            data_ai_hint: 'man portrait',
          },
          {
            id: '1',
            name: 'Sarah L.',
            photoUrl: '/testimonial/T-2.jpg',
            message:
              'Marcom Digital Solution transformed our sales process. Their lead management is top-notch!',
            data_ai_hint: 'woman portrait',
          },
          {
            id: '2',
            name: 'Michael B.',
            photoUrl: '/testimonial/T-3.jpg',
            message:
              'The inventory system is a lifesaver. We have perfect clarity on our stock levels now.',
            data_ai_hint: 'man smiling',
          },
          {
            id: '3',
            name: 'Jessica P.',
            photoUrl: '/testimonial/T-4.jpg',
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
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <MotionWrapper>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Clients Say
            </h2>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="mt-4 text-lg text-muted-foreground">
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
    const data = {
      email: formData.get('email'),
    };

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      toast({
        title: 'Subscribed!',
        description: 'Thanks for joining our newsletter.',
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error subscribing: ', error);
      toast({
        title: 'Subscription Failed',
        description: 'Could not subscribe. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };

  return (
    <section id="contact" className="bg-card py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <MotionWrapper>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Have a question or want to work with us? Fill out the form and
                we'll get back to you.
              </p>
              <form onSubmit={handleContactSubmit} className="mt-8 space-y-4">
                <Input name="name" placeholder="Name" required />
                <Input name="email" type="email" placeholder="Email" required />
                <Input name="phone" type="tel" placeholder="Phone" />
                <Select name="service" required value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service you're interested in" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(s => (
                      <SelectItem key={s.title} value={s.title}>
                        {s.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea name="message" placeholder="Message" required />
                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  disabled={isSubmittingContact}
                >
                  {isSubmittingContact ? 'Submitting...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Subscribe to our Newsletter
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Stay updated with the latest trends, insights, and offers from
                Marcom Digital Solution.
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="mt-8 flex gap-x-2"
              >
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1"
                />
                <Button
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  disabled={isSubmittingNewsletter}
                >
                  {isSubmittingNewsletter ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}

    