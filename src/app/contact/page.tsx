"use client";

import { useState, type FormEvent } from "react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { MotionWrapper } from "@/components/ui/motion-wrapper";

const services = [
    { title: "Digital Marketing" },
    { title: "IT Solutions" },
    { title: "Event Marketing" },
    { title: "Stock Market Analysis" },
    { title: "Cyber Security Solution" },
    { title: "ERP & CRM Solution" },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        service: selectedService,
        message: formData.get("message"),
    };

    try {
        const response = await fetch('/api/queries', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. We'll be in touch soon.",
        });
        (e.target as HTMLFormElement).reset();
        setSelectedService("");
    } catch (error) {
        console.error("Error submitting query: ", error);
        toast({
            title: "Submission Failed",
            description: "Could not send your message. Please try again.",
            variant: "destructive",
        });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <header className="text-center">
        <MotionWrapper>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Contact Us
          </h1>
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <p className="mt-6 text-xl text-muted-foreground">
            We're here to help. Reach out to us with any questions.
          </p>
        </MotionWrapper>
      </header>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <MotionWrapper>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <MapPin className="h-8 w-8 text-primary" />
                <CardTitle>Our Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p>123 Business Avenue, Suite 100</p>
                <p>Metropolis, USA 12345</p>
              </CardContent>
            </Card>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Mail className="h-8 w-8 text-primary" />
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:marcommarketingsolution@outlook.com" className="hover:text-primary">marcommarketingsolution@outlook.com</a>
              </CardContent>
            </Card>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Phone className="h-8 w-8 text-primary" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+918447242558" className="hover:text-primary">+91-8447242558</a>
              </CardContent>
            </Card>
          </MotionWrapper>
        </div>

        <MotionWrapper delay={0.3}>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input name="name" placeholder="Name" required />
                  <Input name="email" type="email" placeholder="Email" required />
                  <Input name="phone" type="tel" placeholder="Phone" />
                  <Select name="service" required value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                          {services.map(s => <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>)}
                      </SelectContent>
                  </Select>
                  <Textarea name="message" placeholder="Your message..." required />
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </MotionWrapper>
      </div>

      <MotionWrapper delay={0.4}>
       <div className="mt-16">
          <h2 className="text-center text-3xl font-bold">Our Location</h2>
          <div className="mt-6 aspect-video w-full rounded-lg bg-muted flex items-center justify-center">
            {/* Replace this with a real map embed */}
            <p className="text-muted-foreground">[Google Map Embed Placeholder]</p>
          </div>
        </div>
      </MotionWrapper>

    </div>
  );
}
