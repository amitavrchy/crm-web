import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

const imageMap = {
  "Project Alpha": "/about-us/about-1.jpg",
  "Project Beta": "/about-us/about-2.jpg",
  "Project Gamma": "/about-us/about-3.jpg",
  "Project Delta": "/about-us-wte/2.jpg",
  "Project Epsilon": "/about-us-wte/3.jpg",
  "Project Zeta": "/about-us-wte/4.jpg",
};

export const dynamic = "force-dynamic"; // Ensures fresh data on every request

export async function GET() {
  try {
    const db = await connectMongoDB();
    const projectsCollection = db.collection("projects");
    const projects = await projectsCollection.find({}).toArray();

    const projectsWithImages = projects.map((project) => ({
      ...project,
      src: imageMap[project.name] || "/placeholder.jpg",
    }));

    return NextResponse.json(projectsWithImages, { status: 200 });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { name, location, date, status } = await req.json();

    if (!name || !location || !date || !status) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    const db = await connectMongoDB();
    const projectsCollection = db.collection("projects");

    const newProject = {
      name,
      location,
      date,
      status,
      src: imageMap[name] || "/placeholder.jpg",
    };

    await projectsCollection.insertOne(newProject);
    return NextResponse.json(
      { message: "Project added successfully.", project: newProject },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding project:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
