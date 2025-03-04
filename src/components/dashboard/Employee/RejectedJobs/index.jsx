"use client";
import React, { useEffect, useState } from "react";

function RejectedJobs() {
    const [allJobs, setAllJobs] = useState([]);
    const [rejectedJobs, setRejectedJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("/api/applicationManagement");
                const data = await response.json();

                if (data.success) {
                    setAllJobs(data.data); // Store all jobs
                    const rejected = data.data.filter(job => job.status === "Rejected"); // Filter rejected jobs
                    setRejectedJobs(rejected);
                } else {
                    setError("Failed to fetch data");
                }
            } catch (err) {
                setError("Error fetching data");
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if (loading) {
        return <div className="text-center text-lg font-semibold">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 font-semibold">{error}</div>;
    }

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Rejected Jobs</h1>
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 shadow-lg rounded-lg">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="p-3 text-left">Full Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Phone</th>
                            <th className="p-3 text-left">Cover Letter</th>
                            <th className="p-3 text-left">Applied At</th>
                            <th className="p-3 text-left">Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rejectedJobs.length > 0 ? (
                            rejectedJobs.map((job, index) => (
                                <tr key={job._id || index} className="border-b border-gray-300 hover:bg-gray-100">
                                    <td className="p-3">{job.fullName}</td>
                                    <td className="p-3">{job.email}</td>
                                    <td className="p-3">{job.phone}</td>
                                    <td className="p-3">{job.coverLetter}</td>
                                    <td className="p-3">{new Date(job.appliedAt).toLocaleDateString()}</td>
                                    <td className="p-3">{job.reason || "N/A"}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="p-3 text-center text-gray-500">No rejected jobs found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RejectedJobs;
