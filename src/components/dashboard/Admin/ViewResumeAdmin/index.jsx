"use client";
import React, { useEffect, useState } from "react";
import { FiSearch, FiDownload } from "react-icons/fi";

function ViewResumeAdmin() {
  const [resumes, setResumes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch resumes from API
    const fetchResumes = async () => {
      try {
        const res = await fetch("/api/resume");
        const data = await res.json();
        setResumes(data);
      } catch (error) {
        console.error("Error fetching resumes:", error);
      }
    };

    fetchResumes();
  }, []);

  const filteredResumes = resumes.filter((resume) =>
    resume.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Resume Dashboard</h1>

      {/* Search Bar */}
      <div className="mb-6 flex items-center bg-gray-100 p-3 rounded-lg shadow-md">
        <FiSearch className="mr-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search resumes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent outline-none w-full"
        />
      </div>

      {/* Resume Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResumes.map((resume) => (
          <div
            key={resume.id}
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-900">{resume.name}</h2>
            <p className="text-gray-600">{resume.email}</p>
            <p className="text-gray-600">Applied for: {resume.position}</p>
            <p className="text-gray-600">Uploaded: {resume.uploadedAt}</p>

            <div className="mt-4 flex justify-between items-center">
              {/* Download Resume */}
              <a
                href={resume.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 flex items-center"
              >
                <FiDownload className="mr-1" /> Download Resume
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewResumeAdmin;
