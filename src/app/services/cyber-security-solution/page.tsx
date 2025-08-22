
import { ShieldCheck, Lock, KeyRound, Fingerprint, Network, ShieldAlert } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    icon: Network,
    title: "Network Security",
    description: "Protect your network infrastructure from unauthorized access, misuse, or theft with robust firewalls and intrusion detection systems."
  },
  {
    icon: ShieldAlert,
    title: "Threat Intelligence",
    description: "Stay ahead of attackers with proactive threat detection, monitoring, and analysis of potential security risks."
  },
  {
    icon: Fingerprint,
    title: "Identity & Access Management",
    description: "Ensure that only authorized users can access sensitive data and systems with multi-factor authentication and strict access controls."
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description: "Secure your data both at rest and in transit with advanced encryption standards to prevent data breaches."
  },
];

export default function CyberSecurityPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-4 mb-4">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <Lock className="h-8 w-8 text-primary mx-2" />
            <KeyRound className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Cyber Security Solutions
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          Safeguard your digital assets with our comprehensive, multi-layered security strategies designed to protect your business from evolving cyber threats.
        </p>
      </header>

      <section className="mb-16">
        <Image
          src="https://placehold.co/1200x500.png"
          alt="Cyber Security Shield"
          width={1200}
          height={500}
          className="rounded-lg object-cover shadow-lg"
          data-ai-hint="cyber security"
        />
      </section>

      <section className="mb-16">
        <h2 className="text-center text-3xl font-bold mb-8">Our Cyber Security Services</h2>
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
        <h2 className="text-3xl font-bold mb-4">Is Your Business Secure?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Don't wait for a breach to happen. Contact us for a comprehensive security assessment and let us fortify your defenses.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Get a Security Audit</Link>
        </Button>
      </section>
    </div>
  );
}
