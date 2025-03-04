import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
    try {
        const db = await connectMongoDB();
        const usersCollection = db.collection("users");

        // Fetch all users except admins
        const users = await usersCollection.find({ userType: { $ne: "Admin" } }).toArray();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const { name, email, userType } = await req.json();
        if (!name || !email || !userType) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const db = await connectMongoDB();
        const usersCollection = db.collection("users");

        const newUser = await usersCollection.insertOne({ name, email, userType, job: "Not Assigned" });
        return NextResponse.json({ _id: newUser.insertedId, name, email, userType, job: "Not Assigned" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to add user" }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const body = await req.json(); // <-- Extract JSON body correctly
        const { id } = body;

        if (!id || !ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
        }

        const db = await connectMongoDB();
        const usersCollection = db.collection("users");
        await usersCollection.deleteOne({ _id: new ObjectId(id) });

        return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const body = await req.json(); // <-- Extract JSON body correctly
        const { id, job } = body;

        if (!id || !ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
        }

        const db = await connectMongoDB();
        const usersCollection = db.collection("users");
        await usersCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { job } }
        );

        return NextResponse.json({ message: "Job updated successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to update job" }, { status: 500 });
    }
}

