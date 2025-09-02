import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request: Request) {
  try {
    const queryData = await request.json();
    
    await addDoc(collection(db, "queries"), {
      ...queryData,
      submittedAt: serverTimestamp(),
    });

    return NextResponse.json({ message: "Query submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error submitting query:", error);
    return NextResponse.json({ message: "Could not send your message. Please try again." }, { status: 500 });
  }
}
