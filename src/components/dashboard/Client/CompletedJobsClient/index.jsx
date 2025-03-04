"use client";
import React, { useState, useEffect } from 'react';
import { toast } from "react-hot-toast";

function CompletedJobsClient() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [completedJobs, setCompletedJobs] = useState([]);
    const jobsPerPage = 5;

    useEffect(() => {
        const fetchCompletedJobs = async () => {
            try {
                const response = await fetch("/api/completedJobs");
                const data = await response.json();
                setCompletedJobs(data);
            } catch (error) {
                console.error("Error fetching completed jobs:", error);
                toast.error("Failed to fetch completed jobs!");
            }
        };
        
        fetchCompletedJobs();
    }, []);

    const filteredJobs = completedJobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Completed Jobs</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 shadow-lg rounded-lg">
                    <thead>
                        <tr className="bg-orange-800 text-white">
                            <th className="p-3 text-left">Job Title</th>
                            <th className="p-3 text-left">Company</th>
                            <th className="p-3 text-left">Location</th>
                            <th className="p-3 text-left">Job Type</th>
                            <th className="p-3 text-left">Salary</th>
                            <th className="p-3 text-left">Posted At</th>
                            <th className="p-3 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentJobs.map((job, index) => (
                            <tr key={index} className="border-b border-gray-300 hover:bg-gray-100">
                                <td className="p-3">{job.title}</td>
                                <td className="p-3">{job.company}</td>
                                <td className="p-3">{job.location}</td>
                                <td className="p-3">{job.jobType}</td>
                                <td className="p-3">${job.salary}</td>
                                <td className="p-3">{new Date(job.postedAt).toLocaleDateString()}</td>
                                <td className="p-3 font-semibold text-green-600">{job.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-4 py-2 mx-1 border rounded ${currentPage === i + 1 ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CompletedJobsClient;
