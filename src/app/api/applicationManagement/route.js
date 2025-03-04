import { connectMongoDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// GET all applications
export async function GET() {
  try {
    const db = await connectMongoDB();
    const applications = await db.collection("applications").find().toArray();
    return NextResponse.json({ success: true, data: applications });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST: Create a new application
export async function POST(req) {
  try {
    const db = await connectMongoDB();
    const body = await req.json();
    const result = await db.collection("applications").insertOne(body);
    return NextResponse.json({ success: true, data: result.insertedId });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// PUT: Update an application status
export async function PUT(req) {
  try {
    const db = await connectMongoDB();
    const { id, status } = await req.json();

    // Convert `id` to ObjectId
    const objectId = new ObjectId(id);

    const result = await db.collection("applications").updateOne(
      { _id: objectId },
      { $set: { status } }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ success: false, message: "No document modified" }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Application updated" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// DELETE: Remove an application
export async function DELETE(req) {
  try {
    const db = await connectMongoDB();
    const { id } = await req.json();

    // Convert `id` to ObjectId
    const objectId = new ObjectId(id);

    const result = await db.collection("applications").deleteOne({ _id: objectId });

    if (result.deletedCount === 0) {
      return NextResponse.json({ success: false, message: "No document deleted" }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Application deleted" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
