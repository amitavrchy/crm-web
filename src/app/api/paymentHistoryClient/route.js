import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await connectMongoDB();
    const jobsCollection = db.collection("jobs");
    
    const completedPaidJobs = await jobsCollection.find({
      status: "Completed",
      payment: { $exists: true, $ne: "" }
    }).toArray();
    
    return NextResponse.json(completedPaidJobs);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch payment history" }, { status: 500 });
  }
}
