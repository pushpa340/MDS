import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request: Request) {
  try {
    const applicationData = await request.json();
    
    await addDoc(collection(db, "job_applications"), {
      ...applicationData,
      submittedAt: serverTimestamp(),
    });

    return NextResponse.json({ message: "Application submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Application submission failed:", error);
    return NextResponse.json({ message: "There was an error submitting your application." }, { status: 500 });
  }
}
