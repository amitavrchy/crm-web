import { connectMongoDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// GET all approved jobs
export async function GET() {
  try {
    const db = await connectMongoDB();
    const approvedJobs = await db
      .collection("applications")
      .find({ status: "Approved" })
      .toArray();

    return NextResponse.json({ success: true, data: approvedJobs });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// PUT: Update job status (Complete or Resign)
export async function PUT(req) {
  try {
    const db = await connectMongoDB();
    const { id, action } = await req.json();

    const objectId = new ObjectId(id);
    let newStatus = action === "complete" ? "Completed" : "Resigned";

    const result = await db.collection("applications").updateOne(
      { _id: objectId },
      { $set: { statusJob: newStatus } }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { success: false, message: "No document updated" },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, message: `Job marked as ${newStatus}` });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
