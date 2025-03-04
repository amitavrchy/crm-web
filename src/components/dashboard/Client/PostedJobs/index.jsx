"use client";

import React, { useState, useEffect } from 'react';

function PostedJobs() {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5;

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('/api/postedJobs');
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };
        fetchJobs();
    }, []);

    // Filter and search logic
    const filteredJobs = jobs.filter((job) => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = 
            filterStatus === 'All' || 
            (filterStatus === 'Completed' && job.status === 'Completed') || 
            (filterStatus === 'Not Completed' && job.status !== 'Completed');
        
        return matchesSearch && matchesStatus;
    });

    // Pagination logic
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Posted Jobs</h1>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search by job title..."
                    className="p-2 border border-gray-300 rounded mb-2 md:mb-0 md:mr-2"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className="p-2 border border-gray-300 rounded"
                    onChange={(e) => setFilterStatus(e.target.value)}
                >
                    <option value="All">All Statuses</option>
                    <option value="Completed">Completed</option>
                    <option value="Not Completed">Not Completed</option>
                </select>
            </div>

            {/* Job Table */}
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 shadow-lg rounded-lg">
                    <thead>
                        <tr className="bg-orange-800 text-white">
                            <th className="p-3 text-left">Job Title</th>
                            <th className="p-3 text-left">Company</th>
                            <th className="p-3 text-left">Location</th>
                            <th className="p-3 text-left">Job Type</th>
                            <th className="p-3 text-left">Category</th>
                            <th className="p-3 text-left">Salary</th>
                            <th className="p-3 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentJobs.map((job) => (
                            <tr key={job._id} className="border-b border-gray-300 hover:bg-gray-100">
                                <td className="p-3">{job.title}</td>
                                <td className="p-3">{job.company}</td>
                                <td className="p-3">{job.location}</td>
                                <td className="p-3">{job.jobType}</td>
                                <td className="p-3">{job.category}</td>
                                <td className="p-3">${job.salary}</td>
                                <td className={`p-3 font-semibold ${job.status === "Completed" ? "text-green-600" : "text-red-600"}`}>
                                    {job.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 mx-1 border ${currentPage === index + 1 ? 'bg-orange-800 text-white' : 'bg-white text-orange-800'}`}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PostedJobs;
