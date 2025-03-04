import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

// ✅ GET: Fetch all employees (userType check)
export async function GET() {
    try {
        const db = await connectMongoDB();
        const usersCollection = db.collection("users");

        const employees = await usersCollection.find({ userType: "Employee" }).toArray();
        return NextResponse.json(employees, { status: 200 });
    } catch (error) {
        console.error("Error fetching employees:", error);
        return NextResponse.json({ error: "Failed to fetch employees" }, { status: 500 });
    }
}

// ✅ PUT: Update employee performance or role
export async function PUT(req) {
    try {
        const body = await req.json();  // Ensure body is correctly parsed
        const { id, role, performance } = body;

        if (!id || !ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid employee ID" }, { status: 400 });
        }

        const db = await connectMongoDB();
        const usersCollection = db.collection("users");

        const result = await usersCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { role, performance } }
        );

        if (result.modifiedCount === 0) {
            return NextResponse.json({ error: "No updates made. Employee not found." }, { status: 404 });
        }

        return NextResponse.json({ message: "Employee updated successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error updating employee:", error);
        return NextResponse.json({ error: "Failed to update employee" }, { status: 500 });
    }
}

// ✅ DELETE: Remove an employee (using query parameters)
export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id"); // Get ID from URL

        if (!id || !ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid employee ID" }, { status: 400 });
        }

        const db = await connectMongoDB();
        const usersCollection = db.collection("users");

        const result = await usersCollection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return NextResponse.json({ error: "Employee not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Employee deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting employee:", error);
        return NextResponse.json({ error: "Failed to delete employee" }, { status: 500 });
    }
}
