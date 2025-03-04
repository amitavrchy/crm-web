import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { categoryName, description, department, priorityLevel, isActive } = body;

    if (!categoryName?.trim()) {
      return NextResponse.json({ error: "Category name is required." }, { status: 400 });
    }

    const db = await connectMongoDB();
    const result = await db.collection("jobCategories").insertOne({
      categoryName,
      description: description?.trim() || "",
      department: department?.trim() || "",
      priorityLevel: priorityLevel?.trim() || "",
      isActive: Boolean(isActive),
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Category created successfully!", data: result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json({ error: "Failed to create category." }, { status: 500 });
  }
}
