import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

// ✅ GET: Fetch all jobs
export async function GET() {
    try {
        const db = await connectMongoDB();
        const jobsCollection = db.collection("jobs");

        const jobs = await jobsCollection.find().toArray();
        return NextResponse.json(jobs, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
    }
}

// ✅ POST: Add a new job
export async function POST(req) {
    try {
        const { title, description } = await req.json();
        if (!title || !description) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const db = await connectMongoDB();
        const jobsCollection = db.collection("jobs");

        const newJob = await jobsCollection.insertOne({
            title,
            description,
            status: "Pending",
            vendor: null,
        });

        return NextResponse.json(
            { _id: newJob.insertedId, title, description, status: "Pending", vendor: null },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ error: "Failed to add job" }, { status: 500 });
    }
}

// ✅ PUT: Update job status or assign vendor
export async function PUT(req) {
    try {
        const { id, status, vendor } = await req.json();
        if (!id || !ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid job ID" }, { status: 400 });
        }

        const db = await connectMongoDB();
        const jobsCollection = db.collection("jobs");

        const updateFields = {};
        if (status) updateFields.status = status;
        if (vendor) updateFields.vendor = vendor;

        await jobsCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updateFields }
        );

        return NextResponse.json({ message: "Job updated successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to update job" }, { status: 500 });
    }
}

// ✅ DELETE: Remove a job
export async function DELETE(req) {
    try {
        const { id } = await req.json();
        if (!id || !ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid job ID" }, { status: 400 });
        }

        const db = await connectMongoDB();
        const jobsCollection = db.collection("jobs");
        await jobsCollection.deleteOne({ _id: new ObjectId(id) });

        return NextResponse.json({ message: "Job deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete job" }, { status: 500 });
    }
}
