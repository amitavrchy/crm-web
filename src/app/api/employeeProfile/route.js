import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

// GET - Fetch employee profile by email
export async function GET(req) {
  try {
    const url = new URL(req.url);
    const email = url.searchParams.get("email");

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
    }

    const db = await connectMongoDB();
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    // Ensure `skills` is an array
    if (typeof user.skills === "string") {
      user.skills = user.skills.split(",").map(skill => skill.trim());
    }

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    console.error("Error fetching employee profile:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

// PUT - Update employee profile
export async function PUT(req) {
  try {
    const { _id, ...updateData } = await req.json();

    if (!_id) {
      return NextResponse.json({ success: false, message: "User ID is required" }, { status: 400 });
    }

    const db = await connectMongoDB();
    const user = await db.collection("users").findOne({ _id: new ObjectId(_id) });

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    // Convert skills array to a comma-separated string for storage
    if (Array.isArray(updateData.skills)) {
      updateData.skills = updateData.skills.join(", ");
    }

    const result = await db.collection("users").updateOne(
      { _id: new ObjectId(_id) },
      { $set: updateData }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ success: false, message: "No changes made" }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Profile updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error updating employee profile:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
