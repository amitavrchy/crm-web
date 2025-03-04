"use client";
import React, { useState, useEffect } from "react";
import { FiSearch, FiDownload } from "react-icons/fi";

function ViewResumeVendor() {
  const [resumes, setResumes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await fetch("/api/resume");
        const data = await response.json();

        // Debugging: Log API response to check the structure
        console.log("Fetched Resumes:", data);

        setResumes(data);
      } catch (error) {
        console.error("Error fetching resumes:", error);
      }
    };

    fetchResumes();
  }, []);

  const filteredResumes = resumes.filter((resume) =>
    resume.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Vendor Resumes</h1>

      {/* Search Bar */}
      <div className="mb-6 flex items-center bg-gray-100 p-3 rounded-lg shadow-md">
        <FiSearch className="mr-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search vendor resumes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent outline-none w-full"
        />
      </div>

      {/* Resume List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResumes.map((resume) => (
          <div
            key={resume.id || resume._id} // Ensure valid key
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-900">{resume.name || resume.fullName}</h2>
            <p className="text-gray-600">Applied for: {resume.position}</p>
            <p className="text-gray-600">Email: {resume.email}</p>
            <p className="text-gray-600">Phone: {resume.phone}</p>

            {/* Download Button */}
            <div className="mt-4">
              <a
                href={resume.resumeUrl || `/api/resume/${resume.resumeId}`} // Ensure valid URL
                download
                className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600 transition"
              >
                <FiDownload /> <span>Download Resume</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewResumeVendor;
