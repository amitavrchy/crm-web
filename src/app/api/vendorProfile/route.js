import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

// GET Vendor Profile
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const db = await connectMongoDB();
    const vendor = await db.collection("users").findOne({ email });

    if (!vendor) {
      return NextResponse.json({ error: "Vendor not found" }, { status: 404 });
    }

    return NextResponse.json(vendor);
  } catch (error) {
    console.error("Error fetching vendor profile:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// UPDATE Vendor Profile
export async function PUT(req) {
  try {
    const { _id, username, contactInfo, manpowerCount, hasManpower } =
      await req.json();

    if (!_id) {
      return NextResponse.json({ error: "Vendor ID is required" }, { status: 400 });
    }

    const db = await connectMongoDB();
    const updatedVendor = await db.collection("users").updateOne(
      { _id: new ObjectId(_id) },
      { $set: { username, contactInfo, manpowerCount, hasManpower } }
    );

    if (!updatedVendor.modifiedCount) {
      return NextResponse.json({ error: "Update failed" }, { status: 500 });
    }

    return NextResponse.json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating vendor profile:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
