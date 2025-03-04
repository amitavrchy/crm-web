import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // Ensures fresh data every time

export async function POST(req) {
  try {
    const { name, email, phone, additionalInfo, meetingDate, meetingTime } = await req.json();

    if (!name || !email || !phone || !meetingDate || !meetingTime) {
      return NextResponse.json({ error: "All required fields must be filled." }, { status: 400 });
    }

    const db = await connectMongoDB();
    const result = await db.collection("meetings").insertOne({
      name,
      email,
      phone,
      additionalInfo,
      meetingDate: new Date(meetingDate),
      meetingTime,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Meeting scheduled successfully", data: result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error scheduling meeting:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
