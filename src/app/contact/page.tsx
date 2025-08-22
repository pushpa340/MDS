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
// import { db } from "@/lib/firebase";
// import { collection, addDoc } from "firebase/firestore";

const services = [
    { title: "Digital Marketing" },
    { title: "Sales Lead Management" },
    { title: "Inventory Management" },
    { title: "Point of Sale (POS) Management" },
    { title: "IT Support" },
    { title: "Consultancy" },
    { title: "Event Marketing" },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
        // MOCK SUBMISSION: Replace with Firestore write
        console.log("Submitting query:", data);
        // await addDoc(collection(db, "queries"), data);
        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. We'll be in touch soon.",
        });
        (e.target as HTMLFormElement).reset();
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
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          We're here to help. Reach out to us with any questions.
        </p>
      </header>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="space-y-8">
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
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Mail className="h-8 w-8 text-primary" />
              <CardTitle>Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:info@example.com" className="hover:text-primary">info@example.com</a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Phone className="h-8 w-8 text-primary" />
              <CardTitle>Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="tel:+15551234567" className="hover:text-primary">+1 (555) 123-4567</a>
            </CardContent>
          </Card>
        </div>

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
                <Select name="service" required>
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
      </div>

       <div className="mt-16">
          <h2 className="text-center text-3xl font-bold">Our Location</h2>
          <div className="mt-6 aspect-video w-full rounded-lg bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">[Google Map Embed Placeholder]</p>
          </div>
        </div>

    </div>
  );
}
