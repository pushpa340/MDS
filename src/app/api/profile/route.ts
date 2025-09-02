import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export async function POST(request: Request) {
  try {
    const { uid, name } = await request.json();

    if (!uid || !name) {
      return NextResponse.json({ message: "User ID and name are required." }, { status: 400 });
    }
    
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, { name });

    return NextResponse.json({ message: "Profile updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json({ message: "Could not update your profile." }, { status: 500 });
  }
}
