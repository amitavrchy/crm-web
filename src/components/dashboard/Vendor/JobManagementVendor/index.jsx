"use client";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { FaCheck, FaUserPlus, FaTrash } from "react-icons/fa";

export default function JobManagementVendor() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const loadJobs = async () => {
            try {
                const response = await fetch("/api/jobManagementVendor");
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };
        loadJobs();
    }, []);

    const updateJob = async (id, updateData, successMessage) => {
        try {
            const response = await fetch(`/api/jobManagementVendor`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, ...updateData }),
            });
            if (response.ok) {
                setJobs((prevJobs) =>
                    prevJobs.map((job) =>
                        job._id === id ? { ...job, ...updateData } : job
                    )
                );
                Swal.fire("Success!", successMessage, "success");
            }
        } catch (error) {
            console.error("Error updating job:", error);
        }
    };

    const handleAssignEmployee = async (id) => {
        const { value } = await Swal.fire({
            title: "Assign Employee",
            input: "text",
            inputLabel: "Enter Employee Name",
            showCancelButton: true,
            confirmButtonText: "Assign",
        });

        if (value) {
            updateJob(id, { employee: value }, `Employee ${value} assigned successfully.`);
        }
    };

    const handleCompleteJob = async (id) => {
        updateJob(id, { status: "Completed" }, "Job has been marked as completed.");
    };

    const handleRemoveJob = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, remove it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`/api/jobManagementVendor`, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ id }),
                    });

                    if (response.ok) {
                        setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
                        Swal.fire("Removed!", "Job has been removed.", "error");
                    }
                } catch (error) {
                    console.error("Error removing job:", error);
                }
            }
        });
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 text-center">Vendor Job Management</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl overflow-x-auto">
                <table className="w-full table-auto border-collapse border border-gray-300 text-sm md:text-base">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="border border-gray-300 p-3">Title</th>
                            <th className="border border-gray-300 p-3">Vendor</th>
                            <th className="border border-gray-300 p-3">Category</th>
                            <th className="border border-gray-300 p-3">Priority</th>
                            <th className="border border-gray-300 p-3">Location</th>
                            <th className="border border-gray-300 p-3">Salary</th>
                            <th className="border border-gray-300 p-3">Assigned Employee</th>
                            <th className="border border-gray-300 p-3">Status</th>
                            <th className="border border-gray-300 p-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <tr key={job._id} className="bg-white border-b border-gray-200 text-center hover:bg-gray-100">
                                <td className="border border-gray-300 p-3">{job.title}</td>
                                <td className="border border-gray-300 p-3 font-semibold">{job.vendor}</td>
                                <td className="border border-gray-300 p-3">{job.category}</td>
                                <td className="border border-gray-300 p-3">{job.priority}</td>
                                <td className="border border-gray-300 p-3">{job.location}</td>
                                <td className="border border-gray-300 p-3">${job.salary}</td>
                                <td className="border border-gray-300 p-3">{job.employee || "Not Assigned"}</td>
                                <td
                                    className={`border border-gray-300 p-3 font-semibold ${
                                        job.status === "Completed" ? "text-green-600" : "text-yellow-600"
                                    }`}
                                >
                                    {job.status}
                                </td>
                                <td className="border border-gray-300 p-3 flex justify-center gap-2 flex-wrap">
                                    {job.status !== "Completed" && (
                                        <button
                                            onClick={() => handleAssignEmployee(job._id)}
                                            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
                                        >
                                            <FaUserPlus />
                                        </button>
                                    )}
                                    {job.status !== "Completed" && (
                                        <button
                                            onClick={() => handleCompleteJob(job._id)}
                                            className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center"
                                        >
                                            <FaCheck />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => handleRemoveJob(job._id)}
                                        className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
