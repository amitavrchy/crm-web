import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectMongoDB();
    const jobs = await db.collection("jobs").find().toArray();

    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      title,
      company,
      location,
      jobType,
      category,
      description,
      salary,
      jobReference,
      vacancy,
      featured,
    } = body;

    if (!title || !company || !location || !jobType || !category || !description || !jobReference || !vacancy) {
      return NextResponse.json({ message: "Please fill out all required fields!" }, { status: 400 });
    }

    const parsedVacancy = parseInt(vacancy, 10);
    if (isNaN(parsedVacancy) || parsedVacancy < 1) {
      return NextResponse.json({ message: "Vacancy must be a positive number." }, { status: 400 });
    }

    const db = await connectMongoDB();
    const result = await db.collection("jobs").insertOne({
      title,
      company,
      location,
      jobType,
      category,
      description,
      salary: salary ? Number(salary) : null,
      jobReference,
      vacancy: parsedVacancy,
      featured: Boolean(featured),
      postedAt: new Date(),
    });

    return NextResponse.json({ message: "Job posted successfully!", jobId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error("Error posting job:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
