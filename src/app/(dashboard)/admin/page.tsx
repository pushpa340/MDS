"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { db } from "@/lib/firebase";
// import { collection, getDocs, orderBy, query } from "firebase/firestore";

// Mock Data
const mockQueries = [
    { id: 'q1', name: 'John Doe', email: 'john@example.com', service: 'Digital Marketing', message: 'Interested in SEO.', submittedAt: { toDate: () => new Date() } },
    { id: 'q2', name: 'Jane Smith', email: 'jane@example.com', service: 'Inventory Management', message: 'Need a demo.', submittedAt: { toDate: () => new Date() } },
];
const mockNewsletter = [
    { id: 'n1', email: 'test1@example.com', subscribedAt: { toDate: () => new Date() } },
    { id: 'n2', email: 'test2@example.com', subscribedAt: { toDate: () => new Date() } },
];
const mockApplications = [
    { id: 'a1', name: 'Peter Pan', email: 'peter@neverland.com', jobTitle: 'Senior Frontend Developer', submittedAt: { toDate: () => new Date() } },
];
const mockTestimonials = [
    { id: 't1', name: 'Sarah L.', message: 'Transformed our sales process!', userId: 'uid1', createdAt: { toDate: () => new Date() } },
];

export default function AdminDashboardPage() {
    const { user, role, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && role && role !== 'admin') {
            router.push('/client');
        }
    }, [user, role, loading, router]);
    
    if (loading || !user || role !== 'admin') {
        return <div className="container p-8 text-center">Loading admin dashboard...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <header className="mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <p className="text-muted-foreground">Manage all aspects of LeadFlow Central.</p>
            </header>
            <Tabs defaultValue="queries">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="queries">Service Queries</TabsTrigger>
                    <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
                    <TabsTrigger value="applications">Job Applications</TabsTrigger>
                    <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                </TabsList>
                
                <TabsContent value="queries"><DataTab collectionName="queries" headers={['Name', 'Email', 'Service', 'Message']} data={mockQueries} /></TabsContent>
                <TabsContent value="newsletter"><DataTab collectionName="newsletter" headers={['Email', 'Subscribed At']} data={mockNewsletter} /></TabsContent>
                <TabsContent value="applications"><DataTab collectionName="job_applications" headers={['Name', 'Email', 'Position', 'Submitted At']} data={mockApplications} /></TabsContent>
                <TabsContent value="testimonials"><DataTab collectionName="testimonials" headers={['Name', 'Message', 'Submitted At']} data={mockTestimonials} /></TabsContent>
            </Tabs>
        </div>
    );
}

interface DataTabProps {
    collectionName: string;
    headers: string[];
    data: any[]; // Replace with more specific types
}

function DataTab({ collectionName, headers, data: mockData }: DataTabProps) {
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            // MOCK: In a real app, you would fetch from Firestore here
            setData(mockData);
            // try {
            //     const q = query(collection(db, collectionName), orderBy("submittedAt", "desc"));
            //     const querySnapshot = await getDocs(q);
            //     setData(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            // } catch (error) {
            //     console.error(`Error fetching ${collectionName}:`, error);
            // }
            setIsLoading(false);
        };
        fetchData();
    }, [collectionName, mockData]);

    const renderCell = (item: any, header: string) => {
        const key = header.toLowerCase().replace(' ', '');
        let value = item[key];
        
        if (collectionName === 'job_applications' && key === 'position') value = item['jobTitle'];
        if (key.includes('at')) value = value?.toDate()?.toLocaleString() ?? 'N/A';

        return <TableCell>{value}</TableCell>;
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="capitalize">{collectionName.replace('_', ' ')}</CardTitle>
                <CardDescription>A list of recent submissions.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            {headers.map(header => <TableHead key={header}>{header}</TableHead>)}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            <TableRow><TableCell colSpan={headers.length} className="text-center">Loading...</TableCell></TableRow>
                        ) : data.length > 0 ? (
                            data.map(item => (
                                <TableRow key={item.id}>
                                    {headers.map(header => renderCell(item, header))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow><TableCell colSpan={headers.length} className="text-center">No data found.</TableCell></TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
