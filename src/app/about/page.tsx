import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  { name: "Alice Johnson", role: "CEO & Founder", bio: "Alice drives the company's vision and strategy, with over 15 years of experience in digital marketing.", photoUrl: "https://placehold.co/400x400.png", data_ai_hint: "woman CEO" },
  { name: "Bob Williams", role: "CTO", bio: "Bob is the technical mastermind behind our innovative solutions, specializing in scalable systems.", photoUrl: "https://placehold.co/400x400.png", data_ai_hint: "man CTO" },
  { name: "Charlie Brown", role: "Head of Sales", bio: "Charlie leads our sales team, focusing on building strong client relationships and driving growth.", photoUrl: "https://placehold.co/400x400.png", data_ai_hint: "man sales" },
  { name: "Diana Prince", role: "Lead Developer", bio: "Diana is a full-stack expert, ensuring our products are robust, secure, and user-friendly.", photoUrl: "https://placehold.co/400x400.png", data_ai_hint: "woman developer" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          About LeadFlow Central
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          Empowering businesses with intelligent, streamlined solutions for growth and efficiency.
        </p>
      </header>

      <section className="mt-16">
        <Image
          src="https://placehold.co/1200x500.png"
          alt="Company team working together"
          width={1200}
          height={500}
          className="rounded-lg object-cover"
          data-ai-hint="team meeting"
        />
      </section>

      <section className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="mt-4 text-muted-foreground">
            Our mission is to provide businesses of all sizes with powerful, easy-to-use tools for marketing, sales, and management. We believe that the right technology can unlock immense potential, and we are dedicated to being the catalyst for our clients' success by simplifying complexities and fostering growth.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Our History</h2>
          <p className="mt-4 text-muted-foreground">
            Founded in 2020, LeadFlow Central started with a small team of passionate entrepreneurs who saw a gap in the market for integrated business solutions. From a simple lead management tool, we've grown into a comprehensive platform serving clients across the globe in various industries, constantly innovating to meet their evolving needs.
          </p>
        </div>
      </section>
      
      <section className="mt-16">
        <h2 className="text-center text-3xl font-bold">Our Values</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardHeader><CardTitle>Customer-Centric</CardTitle></CardHeader>
                <CardContent>We succeed when our customers succeed. We are committed to understanding their needs and delivering value that exceeds expectations.</CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle>Innovation</CardTitle></CardHeader>
                <CardContent>We thrive on creativity and ingenuity. We constantly explore new ideas and technologies to stay ahead of the curve.</CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle>Integrity</CardTitle></CardHeader>
                <CardContent>We operate with transparency and honesty. We build trust with our clients and partners through every interaction.</CardContent>
            </Card>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Meet Our Team
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <Avatar className="mx-auto h-32 w-32">
                <AvatarImage src={member.photoUrl} alt={member.name} data-ai-hint={member.data_ai_hint} />
                <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <h3 className="mt-6 text-lg font-medium">{member.name}</h3>
              <p className="text-primary">{member.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
