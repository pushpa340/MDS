
import { Users, Briefcase, Database, Workflow, BarChart3, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { MotionWrapper } from '@/components/ui/motion-wrapper';
import { type Variants } from 'framer-motion';

const features = [
  {
    icon: Workflow,
    title: "Unified Operations",
    description: "Streamline your core business processes from finance and HR to supply chain and manufacturing in a single system."
  },
  {
    icon: Users,
    title: "360-Degree Customer View",
    description: "Manage all your customer interactions and data throughout the customer lifecycle, from lead to support."
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Gain comprehensive insights into your business performance with powerful, real-time reporting and analytics."
  },
  {
    icon: Settings,
    title: "Customizable & Scalable",
    description: "Our solutions are tailored to your specific industry needs and scalable to grow with your business."
  },
];

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function ErpCrmPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <header className="text-center mb-12">
        <MotionWrapper>
          <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-4">
              <Users className="h-8 w-8 text-primary" />
              <Briefcase className="h-8 w-8 text-primary mx-2" />
              <Database className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            ERP & CRM Solutions
          </h1>
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <p className="mt-6 text-xl text-muted-foreground">
            Integrate your entire business from end to end. Our comprehensive ERP and CRM solutions drive efficiency, improve customer relationships, and foster growth.
          </p>
        </MotionWrapper>
      </header>

      <MotionWrapper delay={0.4} variants={zoomIn}>
        <section className="mb-16">
          <Image
            src="/services-icon/6.avif"
            alt="Integrated ERP and CRM system"
            width={1200}
            height={300}
            className="rounded-lg object-cover shadow-lg"
            data-ai-hint="business software"
          />
        </section>
      </MotionWrapper>

      <section className="mb-16">
        <MotionWrapper>
          <h2 className="text-center text-3xl font-bold mb-8">Why Choose Our Integrated Solutions?</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Unify Your Business?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Learn how our ERP and CRM solutions can be customized to fit your unique business processes and drive you towards your goals.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Schedule a Demo</Link>
          </Button>
        </section>
      </MotionWrapper>
    </div>
  );
}
