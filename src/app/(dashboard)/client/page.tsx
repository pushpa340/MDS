"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { db } from "@/lib/firebase";
import { doc, updateDoc, collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";

// Mock data, replace with Firestore data
const mockServiceRequests = [
    { id: 'req1', service: 'Digital Marketing', status: 'In Progress', submitted: new Date('2023-10-01') },
    { id: 'req2', service: 'Sales Lead Management', status: 'Completed', submitted: new Date('2023-09-15') },
];

export default function ClientDashboardPage() {
    const { user, userProfile, role, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && role && role !== 'client') {
            router.push('/admin'); // Or a generic access-denied page
        }
    }, [user, role, loading, router]);

    if (loading || !userProfile || role !== 'client') {
        return <div className="container p-8 text-center">Loading client dashboard...</div>;
    }

    return (
        <div className="container mx-auto max-w-4xl px-4 py-12">
            <header className="mb-8">
                <h1 className="text-3xl font-bold">Client Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, {userProfile.name}!</p>
            </header>

            <Tabs defaultValue="profile">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="requests">Service Requests</TabsTrigger>
                    <TabsTrigger value="testimonial">Submit Testimonial</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                    <ProfileSection />
                </TabsContent>
                <TabsContent value="requests">
                    <ServiceRequestsSection />
                </TabsContent>
                <TabsContent value="testimonial">
                    <TestimonialFormSection />
                </TabsContent>
            </Tabs>
        </div>
    );
}

function ProfileSection() {
    const { user, userProfile } = useAuth();
    const { toast } = useToast();
    const [name, setName] = useState(userProfile?.name || "");
    const [isLoading, setIsLoading] = useState(false);

    const handleProfileUpdate = async (e: FormEvent) => {
        e.preventDefault();
        if (!user) return;
        setIsLoading(true);
        try {
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ uid: user.uid, name }),
            });

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }
            
            toast({ title: "Profile Updated", description: "Your profile has been successfully updated." });
        } catch (error) {
            console.error(error);
            toast({ title: "Update Failed", description: "Could not update your profile.", variant: "destructive" });
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <Card>
            <CardHeader>
                <CardTitle>Your Profile</CardTitle>
                <CardDescription>Update your personal information here.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" value={user?.email || ""} disabled />
                    </div>
                    <Button type="submit" disabled={isLoading}>{isLoading ? "Saving..." : "Save Changes"}</Button>
                </form>
            </CardContent>
        </Card>
    );
}

function ServiceRequestsSection() {
    // In a real app, you would fetch this data for the logged in user
    const serviceRequests = mockServiceRequests;
    return (
        <Card>
            <CardHeader>
                <CardTitle>Service Request Status</CardTitle>
                <CardDescription>Here's the current status of your submitted requests.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {serviceRequests.map(req => (
                        <li key={req.id} className="flex justify-between items-center p-4 rounded-md border">
                           <div>
                                <p className="font-semibold">{req.service}</p>
                                <p className="text-sm text-muted-foreground">Submitted: {req.submitted.toLocaleDateString()}</p>
                           </div>
                           <span className={`px-2 py-1 text-xs font-semibold rounded-full ${req.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                               {req.status}
                           </span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}

function TestimonialFormSection() {
    const { user, userProfile } = useAuth();
    const { toast } = useToast();
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleTestimonialSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!user || !userProfile) return;
        setIsLoading(true);

        try {
            const response = await fetch('/api/testimonials', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: userProfile.name,
                    message: message,
                    photoUrl: user.photoURL || `https://placehold.co/100x100.png?text=${userProfile.name.charAt(0)}`,
                    userId: user.uid,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit testimonial');
            }

            toast({ title: "Testimonial Submitted", description: "Thank you for your feedback!" });
            setMessage("");
        } catch (error) {
            console.error(error);
            toast({ title: "Submission Failed", description: "Could not submit your testimonial.", variant: "destructive" });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Submit a Testimonial</CardTitle>
                <CardDescription>Share your experience with our services. We'd love to hear from you!</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleTestimonialSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="testimonial-message">Your Message</Label>
                        <Textarea id="testimonial-message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your experience..." required />
                    </div>
                    <Button type="submit" disabled={isLoading}>{isLoading ? "Submitting..." : "Submit Testimonial"}</Button>
                </form>
            </CardContent>
        </Card>
    );
}
