import { connectMongoDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // Ensures fresh data every time

export async function POST(req) {
    try {
        const db = await connectMongoDB();
        const jobsCollection = db.collection("jobs"); // ✅ Store jobs in "jobs" collection

        const { title, description, vendor, category, priority, location, salary } = await req.json();

        if (!title || !description || !vendor || !category || !priority || !location || !salary) {
            return NextResponse.json({ error: "All fields are required." }, { status: 400 });
        }

        const newJob = {
            title,
            description,
            vendor,
            employee: null,
            createdAt: new Date(),
            status: "Pending",
            category,
            priority,
            location,
            salary,
        };

        await jobsCollection.insertOne(newJob);
        return NextResponse.json({ message: "Job created successfully", job: newJob }, { status: 201 });
    } catch (error) {
        console.error("Error creating job:", error);
        return NextResponse.json({ error: "Failed to create job." }, { status: 500 });
    }
}

export async function GET() {
    try {
        const db = await connectMongoDB();
        const jobsCollection = db.collection("jobs"); // ✅ Fetch from "jobs" collection

        const jobs = await jobsCollection.find({}).toArray();
        return NextResponse.json(jobs, { status: 200 });
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return NextResponse.json({ error: "Failed to fetch jobs." }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const db = await connectMongoDB();
        const jobsCollection = db.collection("jobs");

        const { id, employee, status, category, priority, location, salary } = await req.json();

        if (!id || !ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Valid Job ID is required." }, { status: 400 });
        }

        const updateFields = {};
        if (employee !== undefined) updateFields.employee = employee;
        if (status !== undefined) updateFields.status = status;
        if (category !== undefined) updateFields.category = category;
        if (priority !== undefined) updateFields.priority = priority;
        if (location !== undefined) updateFields.location = location;
        if (salary !== undefined) updateFields.salary = salary;

        const result = await jobsCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updateFields }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json({ error: "Job not found." }, { status: 404 });
        }

        return NextResponse.json({ message: "Job updated successfully." }, { status: 200 });
    } catch (error) {
        console.error("Error updating job:", error);
        return NextResponse.json({ error: "Failed to update job." }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const db = await connectMongoDB();
        const jobsCollection = db.collection("jobs");

        const { id } = await req.json();
        if (!id || !ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Valid Job ID is required." }, { status: 400 });
        }

        const result = await jobsCollection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return NextResponse.json({ error: "Job not found." }, { status: 404 });
        }

        return NextResponse.json({ message: "Job deleted successfully." }, { status: 200 });
    } catch (error) {
        console.error("Error deleting job:", error);
        return NextResponse.json({ error: "Failed to delete job." }, { status: 500 });
    }
}
