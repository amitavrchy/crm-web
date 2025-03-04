import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await connectMongoDB();
    const jobsCollection = db.collection("jobs");

    const jobs = await jobsCollection.find({}).toArray();
    // Send only the required fields for now
    const jobsData = jobs.map((job) => ({
      _id: job._id,
      title: job.title,
      company: job.company,
      location: job.location,
      jobType: job.jobType,
      category: job.category,
      postedAt: job.postedAt,
      description: job.description,
      salary: job.salary,
      status: job.status, // status determines the progress
    }));

    return NextResponse.json(jobsData, { status: 200 });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Failed to fetch job data" }, { status: 500 });
  }
}
