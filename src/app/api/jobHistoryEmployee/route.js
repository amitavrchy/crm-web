import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await connectMongoDB();
    const jobsCollection = db.collection("jobs");

    // Fetch only completed jobs
    const completedJobs = await jobsCollection.find({ status: "Completed" }).toArray();

    return NextResponse.json(completedJobs);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch job history" }, { status: 500 });
  }
}
