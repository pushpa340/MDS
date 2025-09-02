import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json({ message: "Email is required." }, { status: 400 });
    }

    await addDoc(collection(db, "newsletter"), {
      email,
      subscribedAt: serverTimestamp(),
    });

    return NextResponse.json({ message: "Subscribed successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return NextResponse.json({ message: "Could not subscribe. Please try again." }, { status: 500 });
  }
}
