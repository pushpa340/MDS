import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const queryData = await request.json();

    // Save to Firestore
    await addDoc(collection(db, "queries"), {
      ...queryData,
      submittedAt: serverTimestamp(),
    });

    // Send an email
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "marcomdigitalsolution@gmail.com",
      subject: `New contact form submission: ${queryData.service}`,
      text: `
        Name: ${queryData.name}
        Email: ${queryData.email}
        Phone: ${queryData.phone}
        Service: ${queryData.service}
        Message: ${queryData.message}
      `,
    });

    return NextResponse.json({ message: "Query submitted successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error submitting query:", error);
    return NextResponse.json(
      { message: "Could not send your message. Please try again.", error: error.message },
      { status: 500 }
    );
  }
}
