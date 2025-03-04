// Backend: app/api/jobManagementClient/route.js
import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  try {
    const db = await connectMongoDB();
    const jobsCollection = db.collection("jobs");
    const jobs = await jobsCollection.find().toArray();
    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const { jobId, deadline, payment } = await req.json();
    if (!jobId) {
      return NextResponse.json({ error: "Job ID is required" }, { status: 400 });
    }
    
    const db = await connectMongoDB();
    const jobsCollection = db.collection("jobs");
    const updateFields = {};
    
    if (deadline) {
      updateFields.deadline = deadline;
    }
    
    if (payment !== undefined) {
      updateFields.payment = payment;
    }
    
    await jobsCollection.updateOne(
      { _id: new ObjectId(jobId) },
      { $set: updateFields }
    );
    
    return NextResponse.json({ success: true, message: "Job updated successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update job" }, { status: 500 });
  }
}