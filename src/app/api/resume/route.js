import { MongoClient, ObjectId, GridFSBucket } from "mongodb";
import { NextResponse } from "next/server";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const db = client.db("test"); // Change to your DB name
    const applicationsCollection = db.collection("applications");
    const bucket = new GridFSBucket(db, { bucketName: "resume" });

    // Fetch applications with resumes
    const applications = await applicationsCollection.find().toArray();

    // Map data for frontend
    const resumes = applications.map((app) => ({
      id: app._id.toString(),
      name: app.fullName,
      email: app.email,
      position: app.position,
      uploadedAt: new Date(app.appliedAt).toLocaleDateString(),
      resumeUrl: `/api/resume/${app.resumeId}`, // This will fetch the PDF
      status: "Pending", // Default to Pending (or fetch from DB if stored)
    }));

    return NextResponse.json(resumes);
  } catch (error) {
    console.error("Error fetching resumes:", error);
    return NextResponse.json({ error: "Failed to fetch resumes" }, { status: 500 });
  }
}
