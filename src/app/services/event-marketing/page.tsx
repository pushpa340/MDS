
import { Calendar, PartyPopper, Megaphone, Ticket, Users, Presentation } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { MotionWrapper } from '@/components/ui/motion-wrapper';

const features = [
  {
    icon: Ticket,
    title: "Event Strategy & Planning",
    description: "From concept to execution, we handle all aspects of event planning to ensure a seamless and impactful experience."
  },
  {
    icon: Megaphone,
    title: "Promotional Campaigns",
    description: "Utilize multi-channel marketing to create buzz, drive registrations, and maximize attendance for your event."
  },
  {
    icon: Users,
    title: "Audience Engagement",
    description: "Create memorable experiences with interactive elements and engaging content that resonates with your attendees."
  },
  {
    icon: Presentation,
    title: "On-site & Virtual Management",
    description: "We provide comprehensive support for both in-person and virtual events to ensure everything runs smoothly."
  },
];

export default function EventMarketingPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <header className="text-center mb-12">
        <MotionWrapper>
          <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-4">
              <Calendar className="h-8 w-8 text-primary" />
              <PartyPopper className="h-8 w-8 text-primary mx-2" />
              <Megaphone className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Event Marketing Services
          </h1>
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <p className="mt-6 text-xl text-muted-foreground">
            Create unforgettable experiences that connect with your audience. We manage and promote your events to ensure maximum impact and success.
          </p>
        </MotionWrapper>
      </header>
      
      <MotionWrapper delay={0.4}>
        <section className="mb-16">
          <Image
            src="https://placehold.co/1200x500.png"
            alt="Corporate Event"
            width={1200}
            height={500}
            className="rounded-lg object-cover shadow-lg"
            data-ai-hint="conference event"
          />
        </section>
      </MotionWrapper>

      <section className="mb-16">
        <MotionWrapper>
          <h2 className="text-center text-3xl font-bold mb-8">Our Event Marketing Expertise</h2>
        </MotionWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <MotionWrapper key={feature.title} delay={0.1 * (index + 1)}>
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
          <h2 className="text-3xl font-bold mb-4">Planning Your Next Big Event?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let us handle the marketing, so you can focus on delivering a great experience. Get in touch to start planning.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Plan Your Event</Link>
          </Button>
        </section>
      </MotionWrapper>
    </div>
  );
}
