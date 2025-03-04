'use client';
import React, { useState, useEffect } from "react";

export default function JobHistory() {
    const [jobHistory, setJobHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobHistory = async () => {
            try {
                const response = await fetch("/api/jobHistoryEmployee");
                const data = await response.json();

                if (response.ok) {
                    setJobHistory(data);
                } else {
                    setError("Failed to fetch job history");
                }
            } catch (err) {
                setError("Error fetching data");
            } finally {
                setLoading(false);
            }
        };

        fetchJobHistory();
    }, []);

    if (loading) return <div className="text-center text-lg font-semibold">Loading...</div>;
    if (error) return <div className="text-center text-red-500 font-semibold">{error}</div>;

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 text-center">Job History</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl overflow-x-auto">
                <table className="w-full table-auto border-collapse border border-gray-300 text-sm md:text-base">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="border border-gray-300 p-3">Title</th>
                            <th className="border border-gray-300 p-3">Company</th>
                            <th className="border border-gray-300 p-3">Location</th>
                            <th className="border border-gray-300 p-3">Job Type</th>
                            <th className="border border-gray-300 p-3">Salary</th>
                            <th className="border border-gray-300 p-3">Status</th>
                            <th className="border border-gray-300 p-3">Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobHistory.length > 0 ? (
                            jobHistory.map((job) => (
                                <tr key={job._id} className="bg-white border-b border-gray-200 text-center hover:bg-gray-100">
                                    <td className="border border-gray-300 p-3">{job.title}</td>
                                    <td className="border border-gray-300 p-3">{job.company}</td>
                                    <td className="border border-gray-300 p-3">{job.location}</td>
                                    <td className="border border-gray-300 p-3">{job.jobType}</td>
                                    <td className="border border-gray-300 p-3">${job.salary}</td>
                                    <td className="border border-gray-300 p-3 font-semibold text-green-600">{job.status}</td>
                                    <td className="border border-gray-300 p-3">${job.payment}</td>
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
