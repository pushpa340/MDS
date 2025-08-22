"use client";

import { useState, useEffect, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import type { JobOpening, JobApplication } from "@/types";
import { db } from "@/lib/firebase";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";

function ApplicationForm({ job }: { job: JobOpening }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const applicationData = {
      jobId: job.id,
      jobTitle: job.title,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      linkedin: formData.get("linkedin") as string,
      resumeUrl: formData.get("resumeUrl") as string,
      submittedAt: serverTimestamp(),
    };

    try {
        await addDoc(collection(db, "job_applications"), applicationData);
        toast({
            title: "Application Sent!",
            description: `Your application for the ${job.title} position has been submitted.`,
        });
        setIsOpen(false);
    } catch (error) {
        console.error("Application submission failed:", error);
        toast({
            title: "Submission Failed",
            description: "There was an error submitting your application.",
            variant: "destructive",
        });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Apply Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Apply for {job.title}</DialogTitle>
          <DialogDescription>
            Fill out the form below to submit your application. We look forward to hearing from you!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">Name</Label>
              <Input id="name" name="name" className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">Email</Label>
              <Input id="email" name="email" type="email" className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="linkedin" className="text-right">LinkedIn</Label>
              <Input id="linkedin" name="linkedin" type="url" className="col-span-3" placeholder="https://linkedin.com/in/..." />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="resumeUrl" className="text-right">Resume URL</Label>
              <Input id="resumeUrl" name="resumeUrl" type="url" className="col-span-3" placeholder="Link to your resume (e.g., Google Drive)" required />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Application"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default function CareersPage() {
  const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "job_openings"));
        const jobs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as JobOpening[];
        setJobOpenings(jobs);
      } catch (error) {
        console.error("Error fetching job openings: ", error);
        // Fallback to mock data if firestore fails
        const mockJobs: JobOpening[] = [
          { id: '1', title: 'Senior Frontend Developer', location: 'Remote', description: 'We are looking for an experienced Frontend Developer to build beautiful and performant user interfaces.' },
          { id: '2', title: 'Product Marketing Manager', location: 'New York, NY', description: 'Join our marketing team to shape the voice of our products and drive growth.' },
          { id: '3', title: 'Cloud Solutions Architect', location: 'Remote', description: 'Design and implement scalable cloud infrastructure for our suite of products.' },
        ];
        setJobOpenings(mockJobs);
      }
      setIsLoading(false);
    };

    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Join Our Team
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          We're looking for passionate people to join us on our mission.
        </p>
      </header>

      <div className="mt-12 space-y-8">
        {isLoading ? (
            <p className="text-center">Loading job openings...</p>
        ) : jobOpenings.length > 0 ? (
            jobOpenings.map((job) => (
                <Card key={job.id} className="transition-shadow duration-300 hover:shadow-md">
                    <CardHeader>
                        <CardTitle>{job.title}</CardTitle>
                        <CardDescription>{job.location}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">{job.description}</p>
                    </CardContent>
                    <CardFooter>
                        <ApplicationForm job={job} />
                    </CardFooter>
                </Card>
            ))
        ) : (
            <p className="text-center text-muted-foreground">There are currently no open positions. Please check back later.</p>
        )}
      </div>
    </div>
  );
}
