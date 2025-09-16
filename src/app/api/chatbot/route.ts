
import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const queryData = await request.json();
    const { email, name, phone, query } = queryData;

    if (!email || !query) {
      return NextResponse.json(
        { message: "Email and query are required." },
        { status: 400 }
      );
    }

    // Save to Firestore
    await addDoc(collection(db, "chatbot_queries"), {
      ...queryData,
      submittedAt: serverTimestamp(),
    });

    // Send emails
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "marcomdigitalsolution@gmail.com",
      subject: `New Chatbot Query from ${name || email}`,
      text: `
        You have received a new query from the chatbot.
        
        Name: ${name || "Not provided"}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Query: ${query}
      `,
      html: `
        <h3>New Chatbot Query</h3>
        <p><strong>Name:</strong> ${name || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Query:</strong></p>
        <p>${query}</p>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "We've received your query!",
      text: `
        Hi ${name || ""},

        Thank you for contacting Marcom Digital Solution! We have received your query and one of our team members will get back to you shortly.

        Your query:
        "${query}"

        Best regards,
        The Marcom Digital Solution Team
      `,
      html: `
        <h3>Thank you for contacting us!</h3>
        <p>Hi ${name || ""},</p>
        <p>We have received your query and one of our team members will get back to you shortly.</p>
        <p><strong>Your query:</strong> <em>"${query}"</em></p>
        <br/>
        <p>Best regards,</p>
        <p><strong>The Marcom Digital Solution Team</strong></p>
      `,
    });

    return NextResponse.json(
      { message: "Query submitted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error submitting chatbot query:", error);
    return NextResponse.json(
      {
        message: "Could not send your message. Please try again.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
