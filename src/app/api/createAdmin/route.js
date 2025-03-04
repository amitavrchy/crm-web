import { connectMongoDB } from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function GET() {
  try {
    const db = await connectMongoDB();

    const hashedPassword = await bcrypt.hash("admin123", 10);
    await db.collection("users").insertOne({
      username: "admin",
      email: "admin@example.com",
      password: hashedPassword,
      userType: "Admin",
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "Admin created successfully" }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error", error: error.message }), { status: 500 });
  }
}
