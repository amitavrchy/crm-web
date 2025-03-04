import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// Get available jobs and applications for a specific employee
export async function GET(req) {
  try {
    const db = await connectMongoDB();
    const jobsCollection = db.collection("jobs");
    const applicationsCollection = db.collection("applications");

    const { searchParams } = new URL(req.url);
    const employeeEmail = searchParams.get("email");

    // Fetch jobs that are NOT completed
    const availableJobs = await jobsCollection.find({ status: { $ne: "Completed" } }).toArray();

    // Fetch applications for the employee
    const appliedJobs = await applicationsCollection.find({ email: employeeEmail }).toArray();

    return NextResponse.json({ availableJobs, appliedJobs });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch jobs and applications" }, { status: 500 });
  }
}

// Apply for a job
export async function POST(req) {
  try {
    const db = await connectMongoDB();
    const applicationsCollection = db.collection("applications");
    const { fullName, email, phone, resume, coverLetter, jobId } = await req.json();

    // Check if the employee has already applied for this job
    const existingApplication = await applicationsCollection.findOne({ email, jobId });
    if (existingApplication) {
      return NextResponse.json({ error: "You have already applied for this job" }, { status: 400 });
    }

    // Create a new job application
    const newApplication = {
      fullName,
      email,
      phone,
      resume,
      coverLetter,
      jobId,
      appliedAt: new Date(),
      status: "Pending",
      statusJob: "In Progress",
    };

    await applicationsCollection.insertOne(newApplication);

    return NextResponse.json({ message: "Application submitted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to apply for job" }, { status: 500 });
  }
}
