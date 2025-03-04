import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";

export async function GET() {
    try {
        const db = await connectMongoDB();
        const jobsCollection = db.collection("jobs");
        
        const completedJobs = await jobsCollection.find({ status: "Completed" }).toArray();
        
        return NextResponse.json(completedJobs, { status: 200 });
    } catch (error) {
        console.error("Error fetching completed jobs:", error);
        return NextResponse.json({ message: "Failed to fetch completed jobs" }, { status: 500 });
    }
}
