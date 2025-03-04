import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  try {
    const db = await connectMongoDB();
    const jobsCollection = db.collection("jobs");
    
    const allJobs = await jobsCollection.find().toArray();
    const completedJobs = allJobs.filter(job => job.status === "Completed");
    
    return NextResponse.json({ allJobs, completedJobs });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch job history" }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const { jobId, rating } = await req.json();
    if (!jobId || typeof rating !== "number") {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
    }
    
    const db = await connectMongoDB();
    const jobsCollection = db.collection("jobs");
    
    await jobsCollection.updateOne(
      { _id: new ObjectId(jobId) },
      { $set: { rating } }
    );
    
    return NextResponse.json({ success: true, message: "Rating updated successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update rating" }, { status: 500 });
  }
}
