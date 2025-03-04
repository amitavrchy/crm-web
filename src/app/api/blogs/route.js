import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

// Handle GET request (Fetch all blogs)
export async function GET() {
  try {
    const db = await connectMongoDB();
    const blogs = await db.collection("blogs").find().toArray();
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ message: "Internal Server Error." }, { status: 500 });
  }
}

// Handle POST request (Create a new blog)
export async function POST(req) {
  try {
    const body = await req.json();
    const { title, author, category, content, image, date_published } = body;

    // Validate required fields
    if (!title || !author || !category || !content || !image || !date_published) {
      return NextResponse.json({ message: "All fields are required!" }, { status: 400 });
    }

    // Validate date format
    const parsedDate = new Date(date_published);
    if (isNaN(parsedDate.getTime())) {
      return NextResponse.json({ message: "Invalid date format!" }, { status: 400 });
    }

    const db = await connectMongoDB();
    const result = await db.collection("blogs").insertOne({
      title,
      author,
      category,
      content,
      image,
      date_published: parsedDate,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Blog posted successfully!", blogId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error posting blog:", error);
    return NextResponse.json({ message: "Internal Server Error." }, { status: 500 });
  }
}
