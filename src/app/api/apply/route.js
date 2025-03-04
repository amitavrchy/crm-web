import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import { Readable } from "stream";
import { GridFSBucket } from "mongodb";

export async function POST(req) {
  try {
    const db = await connectMongoDB();
    const applications = db.collection("applications");

    const formData = await req.formData();
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const coverLetter = formData.get("coverLetter");
    const jobId = formData.get("jobId");
    const position = formData.get("position");
    const resume = formData.get("resume"); // File object

    if (!fullName || !email || !phone || !resume || !jobId || !position) {
      return NextResponse.json(
        { error: "All required fields must be filled!" },
        { status: 400 }
      );
    }

    // Convert file to a readable stream
    const readableResumeStream = new Readable();
    readableResumeStream.push(Buffer.from(await resume.arrayBuffer()));
    readableResumeStream.push(null);

    const gfs = new GridFSBucket(db, { bucketName: "resumes" });

    // Ensure upload completes before proceeding
    const uploadStream = gfs.openUploadStream(resume.name, {
      contentType: resume.type,
    });

    return new Promise((resolve, reject) => {
      readableResumeStream.pipe(uploadStream);

      uploadStream.on("finish", async () => {
        const newApplication = {
          fullName,
          email,
          phone,
          position,
          coverLetter,
          jobId,
          resumeId: uploadStream.id, // Store file ID instead of name
          appliedAt: new Date(),
        };

        await applications.insertOne(newApplication);
        resolve(
          NextResponse.json(
            { message: "Application submitted successfully!" },
            { status: 201 }
          )
        );
      });

      uploadStream.on("error", (error) => {
        console.error("File Upload Error:", error);
        reject(
          NextResponse.json({ error: "Failed to upload resume." }, { status: 500 })
        );
      });
    });
  } catch (error) {
    console.error("Application Submission Error:", error);
    return NextResponse.json(
      { error: "Failed to submit application." },
      { status: 500 }
    );
  }
}
