
import { Megaphone, TrendingUp, LineChart, Search, Users, Pencil } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { MotionWrapper } from '@/components/ui/motion-wrapper';
import { type Variants } from 'framer-motion';

const features = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your search engine rankings to attract organic traffic and connect with customers actively looking for your services."
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    description: "Build and engage your community across social platforms with targeted campaigns and compelling content."
  },
  {
    icon: Pencil,
    title: "Content Marketing",
    description: "Establish your brand as an authority with valuable, relevant content that attracts and retains a clearly defined audience."
  },
  {
    icon: LineChart,
    title: "Analytics and Reporting",
    description: "Track your performance with in-depth analytics and regular reporting to measure ROI and refine your strategy."
  },
];

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function DigitalMarketingPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <header className="text-center mb-12">
        <MotionWrapper>
          <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-4">
              <Megaphone className="h-8 w-8 text-primary" />
              <TrendingUp className="h-8 w-8 text-primary mx-2" />
              <LineChart className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Digital Marketing Services
          </h1>
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <p className="mt-6 text-xl text-muted-foreground">
            Amplify your brand's voice and reach in the digital world. We craft data-driven strategies to boost your online presence and achieve measurable results.
          </p>
        </MotionWrapper>
      </header>
      
      <MotionWrapper delay={0.4} variants={zoomIn}>
        <section className="mb-16">
          <Image
            src="/services-icon/1.avif"
            alt="Digital Marketing Campaign"
            width={1200}
            height={500}
            className="rounded-lg object-cover shadow-lg"
            data-ai-hint="digital marketing"
          />
        </section>
      </MotionWrapper>

      <section className="mb-16">
        <MotionWrapper>
          <h2 className="text-center text-3xl font-bold mb-8">Our Core Digital Marketing Services</h2>
        </MotionWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <MotionWrapper key={feature.title} delay={0.1 * (index + 1)} variants={zoomIn}>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <feature.icon className="h-10 w-10 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </section>

      <MotionWrapper>
        <section className="text-center bg-card p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Online Presence?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's discuss how we can elevate your brand's digital strategy.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </section>
      </MotionWrapper>
    </div>
  );
}
