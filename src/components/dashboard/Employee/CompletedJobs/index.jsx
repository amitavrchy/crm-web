"use client";
import React, { useEffect, useState } from "react";

function CompletedJobs() {
    const [completedJobs, setCompletedJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("/api/completedJobsEmployee");
                const data = await response.json();

                if (data.success) {
                    const completed = data.data.filter(job => job.status === "Completed");
                    setCompletedJobs(completed);
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
            <h1 className="text-4xl font-bold text-center mb-6">Completed Jobs</h1>
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 shadow-lg rounded-lg">
                    <thead>
                        <tr className="bg-green-800 text-white">
                            <th className="p-3 text-left">Job Title</th>
                            <th className="p-3 text-left">Company</th>
                            <th className="p-3 text-left">Location</th>
                            <th className="p-3 text-left">Job Type</th>
                            <th className="p-3 text-left">Salary</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {completedJobs.length > 0 ? (
                            completedJobs.map(job => (
                                <tr key={job._id} className="border-b border-gray-300 hover:bg-gray-100">
                                    <td className="p-3">{job.title}</td>
                                    <td className="p-3">{job.company}</td>
                                    <td className="p-3">{job.location}</td>
                                    <td className="p-3">{job.jobType}</td>
                                    <td className="p-3">${job.salary}</td>
                                    <td className="p-3">{job.status}</td>
                                    <td className="p-3 font-semibold text-green-600">{job.payment}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="p-3 text-center text-gray-500">No completed jobs found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CompletedJobs;