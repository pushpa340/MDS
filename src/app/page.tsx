
"use client";

import { useState, useEffect, type FormEvent, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  KeyRound
} from "lucide-react";
import type { Testimonial } from "@/types";
import { useToast } from "@/hooks/use-toast";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";

const services = [
  {
    title: "Digital Marketing",
    description: "Brand promotion, SEO Optimization, Google Analytics.",
    icons: [Megaphone, TrendingUp, LineChart],
    href: "/services/digital-marketing"
  },
  {
    title: "IT Solutions",
    description: "Technical assistance and troubleshooting for your business.",
    icons: [Wrench, Server, Shield],
    href: "/services/it-solutions"
  },
  {
    title: "Event Marketing",
    description: "Promote and manage your events to attract the right audience.",
    icons: [Calendar, PartyPopper, Megaphone],
    href: "/services/event-marketing"
  },
  {
    title: "Stock Market Analysis",
    description: "In-depth analysis of market trends and stocks.",
    icons: [TrendingUp, LineChart, DollarSign],
    href: "/services/stock-market-analysis"
  },
  {
    title: "Cyber Security Solution",
    description: "Protect your digital assets with our advanced security solutions.",
    icons: [ShieldCheck, Lock, KeyRound],
    href: "/services/cyber-security-solution"
  },
  {
    title: "ERP & CRM Solution",
    description: "Integrate all your business management functions into one unified system.",
    icons: [Users, Briefcase, Database],
    href: "/services/erp-crm-solution"
  },
];

const brandLogos = [
  { src: "https://placehold.co/150x60.png", alt: "Brand 1", hint: "logo design" },
  { src: "https://placehold.co/150x60.png", alt: "Brand 2", hint: "logo design" },
  { src: "https://placehold.co/150x60.png", alt: "Brand 3", hint: "logo design" },
  { src: "https://placehold.co/150x60.png", alt: "Brand 4", hint: "logo design" },
  { src: "https://placehold.co/150x60.png", alt: "Brand 5", hint: "logo design" },
  { src: "https://placehold.co/150x60.png", alt: "Brand 6", hint: "logo design" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesRibbon />
      <ServicesSection />
      <BrandLogosSection />
      <TestimonialsSection />
      <ContactAndNewsletterSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <div className="relative h-full w-full">
            <Image
                src="/cover-img/photo-1.jpg"
                alt="Business Growth"
                fill
                className="object-cover"
                data-ai-hint="business meeting"
                priority
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-20">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                    Drive Your Business Growth
                </h1>
                <p className="mt-6 text-lg leading-8 text-blue-200 max-w-2xl">
                    Innovative strategies and solutions to take your business to the next level.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started</Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                        Learn More &rarr;
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
}

function ServicesRibbon() {
  return (
    <section className="bg-primary text-primary-foreground py-4 overflow-hidden">
      <div className="relative flex">
        <div className="animate-marquee whitespace-nowrap flex">
          {services.map((service, index) => {
            const Icon = service.icons[0];
            return (
              <span key={index} className="text-lg mx-6 flex items-center">
                <Icon className="mr-2 h-5 w-5" />
                {service.title}
              </span>
            );
          })}
        </div>
        <div className="animate-marquee whitespace-nowrap flex absolute top-0">
          {services.map((service, index) => {
            const Icon = service.icons[0];
            return (
              <span key={index + services.length} className="text-lg mx-6 flex items-center">
                <Icon className="mr-2 h-5 w-5" />
                {service.title}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">Comprehensive solutions to power your business.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="flex">
              <Card className="flex flex-col text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg w-full">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <div className="flex -space-x-2">
                          {service.icons.map((Icon, index) => (
                              <Icon key={index} className="h-6 w-6 text-primary" strokeWidth={1.5} />
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
        <h2 className="text-center text-lg font-semibold leading-8">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {brandLogos.map((brand) => (
            <Image
              key={brand.alt}
              className="col-span-1 max-h-12 w-full object-contain"
              src={brand.src}
              alt={brand.alt}
              width={158}
              height={48}
              data-ai-hint={brand.hint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Testimonial[];
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials: ", error);
        // Fallback to mock data if firestore fails
        const mockTestimonials: Testimonial[] = [
          { id: '1', name: 'Sarah L.', photoUrl: 'https://placehold.co/100x100.png', message: 'Marcom Digital Solution transformed our sales process. Their lead management is top-notch!', data_ai_hint: 'woman portrait' },
          { id: '2', name: 'Michael B.', photoUrl: 'https://placehold.co/100x100.png', message: 'The inventory system is a lifesaver. We have perfect clarity on our stock levels now.', data_ai_hint: 'man portrait' },
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from businesses we've helped succeed.
          </p>
        </div>
        {testimonials.length > 0 && (
          <Carousel
            opts={{ align: "start", loop: true }}
            className="mx-auto mt-12 w-full max-w-4xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src={testimonial.photoUrl} alt={testimonial.name} data-ai-hint={testimonial.data_ai_hint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
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

    const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmittingContact(true);
        const formData = new FormData(e.currentTarget);
        const data = {
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          message: formData.get("message"),
          submittedAt: serverTimestamp(),
        };
        
        try {
            await addDoc(collection(db, "queries"), data);
            toast({
                title: "Query Submitted!",
                description: "Thank you for reaching out. We'll get back to you soon.",
            });
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error("Error submitting query: ", error);
            toast({
                title: "Submission Failed",
                description: "Could not submit your query. Please try again.",
                variant: "destructive",
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
          email: formData.get("email"),
          subscribedAt: serverTimestamp(),
        };

        try {
            await addDoc(collection(db, "newsletter"), data);
             toast({
                title: "Subscribed!",
                description: "Thanks for joining our newsletter.",
            });
            (e.target as HTMLFormElement).reset();
        } catch (error) {
             console.error("Error subscribing: ", error);
             toast({
                title: "Subscription Failed",
                description: "Could not subscribe. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmittingNewsletter(false);
        }
    };


  return (
    <section id="contact" className="bg-card py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question or want to work with us? Fill out the form and
              we'll get back to you.
            </p>
            <form onSubmit={handleContactSubmit} className="mt-8 space-y-4">
              <Input name="name" placeholder="Name" required />
              <Input name="email" type="email" placeholder="Email" required />
              <Input name="phone" type="tel" placeholder="Phone" />
               <Select name="service" required>
                <SelectTrigger>
                    <SelectValue placeholder="Select a service you're interested in" />
                </SelectTrigger>
                <SelectContent>
                    {services.map(s => <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>)}
                </SelectContent>
              </Select>
              <Textarea name="message" placeholder="Message" required />
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmittingContact}>
                {isSubmittingContact ? "Submitting..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Subscribe to our Newsletter
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Stay updated with the latest trends, insights, and offers from
              Marcom Digital Solution.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-8 flex gap-x-2">
              <Input name="email" type="email" placeholder="Enter your email" required className="flex-1" />
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmittingNewsletter}>
                {isSubmittingNewsletter ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
