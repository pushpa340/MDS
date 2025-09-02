import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request: Request) {
  try {
    const testimonialData = await request.json();
    
    await addDoc(collection(db, "testimonials"), {
      ...testimonialData,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ message: "Testimonial submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error submitting testimonial:", error);
    return NextResponse.json({ message: "Could not submit your testimonial." }, { status: 500 });
  }
}
