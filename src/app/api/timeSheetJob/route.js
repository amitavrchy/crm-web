import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date"); // Format: "YYYY-MM-DD"

    if (!date) {
      return NextResponse.json({ error: "Date parameter is required" }, { status: 400 });
    }

    const db = await connectMongoDB();
    const jobsCollection = db.collection("jobs");

    // Convert date string to start and end timestamps for filtering
    const startOfDay = new Date(date);
    startOfDay.setUTCHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setUTCHours(23, 59, 59, 999);

    // Query jobs based on postedAt field
    const jobs = await jobsCollection
      .find({
        postedAt: {
          $gte: startOfDay,
          $lte: endOfDay,
        },
      })
      .toArray();

    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
