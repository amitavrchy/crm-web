import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

// GET Client Profile
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const db = await connectMongoDB();
    const client = await db.collection("users").findOne({ email });

    if (!client) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 });
    }

    return NextResponse.json(client);
  } catch (error) {
    console.error("Error fetching client profile:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// UPDATE Client Profile
export async function PUT(req) {
  try {
    const { _id, username, contactInfo, companyName, address } = await req.json();

    if (!_id) {
      return NextResponse.json({ error: "Client ID is required" }, { status: 400 });
    }

    const db = await connectMongoDB();
    const updatedClient = await db.collection("users").updateOne(
      { _id: new ObjectId(_id) },
      { $set: { username, contactInfo, companyName, address } }
    );

    if (!updatedClient.modifiedCount) {
      return NextResponse.json({ error: "Update failed" }, { status: 500 });
    }

    return NextResponse.json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating client profile:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
