"use client";
import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-hot-toast";

function JobProgressVendor() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobProgress");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        toast.error("Failed to fetch job data!");
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Job Progress Dashboard</h1>
      <div className="mb-6 flex items-center bg-gray-100 p-3 rounded-lg shadow-md">
        <FiSearch className="mr-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent outline-none w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job._id}
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
            <p className="text-gray-600">Client: {job.client}</p>
            <p className="text-gray-600">Location: {job.location}</p>
            <p className="text-gray-600">Job Type: {job.jobType}</p>
            <p className="text-gray-600">Category: {job.category}</p>
            <p className="text-gray-600">Posted At: {new Date(job.postedAt).toLocaleDateString()}</p>
            <p className="text-gray-600">Description: {job.description}</p>
            <p className="text-gray-600">Salary: ${job.salary}</p>

            <p
              className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-medium text-white ${
                job.status === "Completed"
                  ? "bg-green-500"
                  : job.status === "In Progress"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            >
              {job.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobProgressVendor;