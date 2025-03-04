import { MongoClient, ObjectId, GridFSBucket } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function GET(req, { params }) {
  try {
    await client.connect();
    const db = client.db("test");
    const bucket = new GridFSBucket(db, { bucketName: "resumes" });

    const { resumeId } = params;
    if (!ObjectId.isValid(resumeId)) {
      return new Response("Invalid Resume ID", { status: 400 });
    }

    // Stream PDF from GridFS
    const stream = bucket.openDownloadStream(new ObjectId(resumeId));

    return new Response(stream, {
      headers: { "Content-Type": "application/pdf" },
    });
  } catch (error) {
    console.error("Error fetching resume:", error);
    return new Response("Resume not found", { status: 404 });
  }
}
