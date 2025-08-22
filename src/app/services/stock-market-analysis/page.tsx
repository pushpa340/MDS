
import { TrendingUp, LineChart, DollarSign, CandlestickChart, Newspaper, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    icon: CandlestickChart,
    title: "Technical Analysis",
    description: "In-depth analysis of chart patterns, indicators, and price action to identify trading opportunities."
  },
  {
    icon: Newspaper,
    title: "Fundamental Analysis",
    description: "Evaluate securities by measuring their intrinsic value, examining economic, financial, and other qualitative and quantitative factors."
  },
  {
    icon: Brain,
    title: "Quantitative Analysis",
    description: "Leverage statistical models and machine learning to uncover market trends and anomalies that are not obvious to the naked eye."
  },
  {
    icon: DollarSign,
    title: "Portfolio Management",
    description: "Strategic advice on asset allocation and risk management to help you build a resilient and profitable investment portfolio."
  },
];

export default function StockMarketAnalysisPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-4">
            <TrendingUp className="h-8 w-8 text-primary" />
            <LineChart className="h-8 w-8 text-primary mx-2" />
            <DollarSign className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Stock Market Analysis
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          Navigate the complexities of the stock market with confidence. Our expert analysis provides you with the insights needed to make informed investment decisions.
        </p>
      </header>

      <section className="mb-16">
        <Image
          src="https://placehold.co/1200x500.png"
          alt="Stock market chart"
          width={1200}
          height={500}
          className="rounded-lg object-cover shadow-lg"
          data-ai-hint="stock market"
        />
      </section>

      <section className="mb-16">
        <h2 className="text-center text-3xl font-bold mb-8">Our Analytical Approach</h2>
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
        <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Investment Strategy?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Reach out to our analysts to discover how our insights can help you achieve your financial goals in the stock market.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Consult an Analyst</Link>
        </Button>
      </section>
    </div>
  );
}
