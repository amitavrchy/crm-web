import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: "All fields are required!" }, { status: 400 });
    }

    const db = await connectMongoDB();
    const result = await db.collection("enquiries").insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Your enquiry has been received!", enquiryId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting enquiry:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
