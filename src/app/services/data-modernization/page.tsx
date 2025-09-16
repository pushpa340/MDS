
import { DatabaseZap, BrainCircuit, ShieldCheck, Milestone, Star, Users, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { MotionWrapper } from '@/components/ui/motion-wrapper';

const teamCapabilities = [
  {
    role: "Data Engineers",
    icon: Briefcase,
    points: [
        "Expertise in Microsoft Fabric, Azure Data Factory, BigQuery, Dataproc",
        "Data lakehouse architecture with OneLake and multi-cloud integration",
        "Real-time ETL/ELT pipelines and data ingestion frameworks",
        "Security, compliance, and governance enforcement across clouds"
    ]
  },
  {
    role: "Data Scientists",
    icon: BrainCircuit,
    points: [
        "Advanced ML and AI model development using Azure ML & Vertex AI",
        "Predictive analytics, forecasting, and natural language processing (NLP)",
        "AI-powered dashboards and business intelligence with Power BI and Looker",
        "Model ops (MLOps) and responsible AI practices for production deployment"
    ]
  }
];

export default function DataModernizationPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <header className="text-center mb-12">
        <MotionWrapper>
          <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-4">
              <DatabaseZap className="h-8 w-8 text-primary" />
              <BrainCircuit className="h-8 w-8 text-primary mx-2" />
              <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Unified Data Modernization with Microsoft Fabric & GCP
          </h1>
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <p className="mt-6 text-xl text-muted-foreground">
            Accelerate your enterprise transformation with a single, AI-powered data platform backed by Microsoft Fabric and GCP’s scalable infrastructure.
          </p>
        </MotionWrapper>
      </header>

      <MotionWrapper delay={0.4}>
        <section className="mb-16">
          <Image
            src="https://picsum.photos/seed/datamodern/1200/500"
            alt="Data Modernization with Microsoft Fabric and GCP"
            width={1200}
            height={500}
            className="rounded-lg object-cover shadow-lg"
            data-ai-hint="data cloud"
          />
        </section>
      </MotionWrapper>

       <section className="mb-16">
        <MotionWrapper>
          <Card className="bg-card">
             <CardHeader>
                <div className="flex items-center gap-4">
                    <Milestone className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Summary</CardTitle>
                </div>
             </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">
                    MDS, in collaboration with Microsoft, offers a seamless path for enterprises to modernize their data landscape using Microsoft Fabric—a unified data platform powered by OneLake, embedded AI, and built-in governance. By extending these capabilities with Google Cloud Platform (GCP) services, we bring best-of-breed hybrid and multi-cloud solutions to unlock deeper analytics, better performance, and broader interoperability.
                </p>
                <p className="text-muted-foreground mt-4">
                    From data ingestion and real-time processing to visualization and AI modeling, our team of certified experts ensures a robust, scalable, and secure data modernization journey tailored to your business needs.
                </p>
             </CardContent>
          </Card>
        </MotionWrapper>
      </section>

      <section className="mb-16">
        <MotionWrapper>
            <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                    <div className="flex items-center gap-4">
                         <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
                        <CardTitle className="text-2xl">Client Review</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <blockquote className="text-lg italic text-foreground border-l-4 border-primary pl-4">
                        “Partnering with MDS transformed our data infrastructure. The integration of Microsoft Fabric and GCP enabled us to break down silos, automate reporting, and leverage AI insights we never thought possible. Their team truly understands enterprise data.”
                    </blockquote>
                    <p className="text-right mt-4 font-semibold text-muted-foreground">— Chief Data Officer, Global Retail Brand</p>
                </CardContent>
            </Card>
        </MotionWrapper>
      </section>

      <section className="mb-16">
        <MotionWrapper>
          <h2 className="text-center text-3xl font-bold mb-8">Team Capabilities</h2>
        </MotionWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {teamCapabilities.map((capability, index) => (
            <MotionWrapper key={capability.role} delay={0.1 * (index + 1)}>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <capability.icon className="h-10 w-10 text-primary" />
                  <CardTitle>{capability.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {capability.points.map(point => (
                        <li key={point} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{point}</span>
                        </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </section>

      <MotionWrapper>
        <section className="text-center bg-card p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your Data Platform?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's build a future-proof data strategy together. Contact us for a consultation on Microsoft Fabric and GCP integration.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </section>
      </MotionWrapper>
    </div>
  );
}

    