"use client";

import { useState, useEffect, type FormEvent } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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
  Target,
  Boxes,
  ShoppingCart,
  LineChart,
  Users,
  Package,
  CreditCard,
  TrendingUp,
  Filter,
  ClipboardList,
  Printer,
  Wrench,
  Server,
  Shield,
  Briefcase,
  Lightbulb,
  Calendar,
  PartyPopper,
} from "lucide-react";
import type { Testimonial } from "@/types";
import { useToast } from "@/hooks/use-toast";
// import { db } from "@/lib/firebase";
// import { collection, addDoc, getDocs } from "firebase/firestore";

const services = [
  {
    title: "Digital Marketing",
    description: "Brand promotion, SEO Optimization, Google Analytics.",
    icons: [Megaphone, TrendingUp, LineChart],
  },
  {
    title: "Sales Lead Management",
    description: "Generating high-quality leads for USA, Canada, Australia.",
    icons: [Target, Users, Filter],
  },
  {
    title: "Inventory Management",
    description: "Track and manage inventory in real-time.",
    icons: [Boxes, Package, ClipboardList],
  },
  {
    title: "Point of Sale (POS) Management",
    description: "Manage transactions and billing efficiently.",
    icons: [ShoppingCart, CreditCard, Printer],
  },
  {
    title: "IT Support",
    description: "Technical assistance and troubleshooting for your business.",
    icons: [Wrench, Server, Shield],
  },
  {
    title: "Consultancy",
    description: "Expert advice to help you grow your business.",
    icons: [Briefcase, Lightbulb, Users],
  },
  {
    title: "Event Marketing",
    description: "Promote and manage your events to attract the right audience.",
    icons: [Calendar, PartyPopper, Megaphone],
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
      <ServicesSection />
      <BrandLogosSection />
      <TestimonialsSection />
      <ContactAndNewsletterSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
          Marcom Media Solution
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Your Ultimate Partner for Business Growth and Management Solutions
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started</Button>
          <Button size="lg" variant="outline">
            Learn More &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide comprehensive solutions to streamline your business operations.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
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
            </Card>
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
      // MOCK DATA: Replace with Firestore fetch
      const mockTestimonials: Testimonial[] = [
        { id: '1', name: 'Sarah L.', photoUrl: 'https://placehold.co/100x100.png', message: 'Marcom Media Solution transformed our sales process. Their lead management is top-notch!', data_ai_hint: 'woman portrait' },
        { id: '2', name: 'Michael B.', photoUrl: 'https://placehold.co/100x100.png', message: 'The inventory system is a lifesaver. We have perfect clarity on our stock levels now.', data_ai_hint: 'man portrait' },
        { id: '3', name: 'Emily C.', photoUrl: 'https://placehold.co/100x100.png', message: 'Exceptional digital marketing services that delivered real results for our brand.', data_ai_hint: 'woman professional' },
        { id: '4', name: 'David R.', photoUrl: 'https://placehold.co/100x100.png', message: 'The POS system is intuitive and has streamlined our entire checkout process. Highly recommend!', data_ai_hint: 'man smiling' },
      ];
      setTestimonials(mockTestimonials);
      // try {
      //   const querySnapshot = await getDocs(collection(db, "testimonials"));
      //   const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Testimonial[];
      //   setTestimonials(data);
      // } catch (error) {
      //   console.error("Error fetching testimonials: ", error);
      // }
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
        const data = Object.fromEntries(formData.entries());
        
        try {
            // MOCK SUBMISSION: Replace with Firestore write
            console.log("Submitting query:", data);
            // await addDoc(collection(db, "queries"), data);
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
        const email = formData.get("email");

        try {
            // MOCK SUBMISSION: Replace with Firestore write
            console.log("Subscribing to newsletter:", { email });
            // await addDoc(collection(db, "newsletter"), { email });
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
              Marcom Media Solution.
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
