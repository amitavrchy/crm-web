import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    const { email, status, ...rest } = await req.json();
    
    if (!email || !status) {
      return NextResponse.json({ success: false, message: "Email and status are required" }, { status: 400 });
    }

    const db = await connectMongoDB();
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    // Merge updated fields dynamically (handles both employee & vendor)
    const updateFields = { status: "approved", ...rest };

    const result = await db.collection("users").updateOne({ email }, { $set: updateFields });

    if (result.modifiedCount === 0) {
      return NextResponse.json({ success: false, message: "Data unchanged" }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "User approved successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
