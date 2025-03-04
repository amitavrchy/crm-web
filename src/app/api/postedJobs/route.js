import { connectMongoDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// Get all posted jobs
export async function GET() {
    try {
        const db = await connectMongoDB();
        const jobs = await db.collection("jobs").find({}).toArray();
        return NextResponse.json(jobs);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
    }
}
