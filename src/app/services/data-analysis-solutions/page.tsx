
import { BarChart, BrainCircuit, PieChart, Database, ShoppingCart, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    icon: ShoppingCart,
    title: "Sales & Inventory Insights",
    description: "Analyze sales data to identify trends, forecast demand, and optimize inventory levels for maximum profitability."
  },
  {
    icon: Users,
    title: "Customer Behavior Analysis",
    description: "Understand customer segments, purchase patterns, and lifetime value to tailor marketing and improve retention."
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Consolidate data from various sources (Sales, Marketing, Operations) into a single source of truth for holistic analysis."
  },
  {
    icon: BrainCircuit,
    title: "Predictive Analytics",
    description: "Utilize machine learning models to predict future outcomes, from customer churn to inventory shortages."
  },
];

export default function DataAnalysisPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-4">
            <BarChart className="h-8 w-8 text-primary" />
            <PieChart className="h-8 w-8 text-primary mx-2" />
            <BrainCircuit className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Data Analysis Solutions
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          Turn your data into your most valuable asset. We help you unlock actionable insights to drive strategic decisions and fuel business growth.
        </p>
      </header>

      <section className="mb-16">
        <Image
          src="https://placehold.co/1200x500.png"
          alt="Data Analysis Dashboard"
          width={1200}
          height={500}
          className="rounded-lg object-cover shadow-lg"
          data-ai-hint="data dashboard"
        />
      </section>

      <section className="mb-16">
        <h2 className="text-center text-3xl font-bold mb-8">Our Data Analysis Capabilities</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader className="flex flex-row items-center gap-4">
                <feature.icon className="h-10 w-10 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center bg-card p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Make Data-Driven Decisions?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Let's connect to discuss how our data analysis solutions can be tailored to your specific business needs and goals.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </section>
    </div>
  );
}
