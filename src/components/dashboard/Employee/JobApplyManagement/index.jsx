"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FaPaperPlane } from "react-icons/fa";

export default function JobApplyManagement() {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const userEmail = "kyduhij@mailinator.com";
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(`/api/applicationManagementEmployee?email=${userEmail}`);
      const data = await response.json();
      setJobs(data.availableJobs);
      setAppliedJobs(data.appliedJobs);
    };
    fetchJobs();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">Job Application & Management</h1>

      {/* Available Jobs */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Available Jobs</h2>
        <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-3">Title</th>
              <th className="border border-gray-300 p-3">Company</th>
              <th className="border border-gray-300 p-3">Location</th>
              <th className="border border-gray-300 p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id} className="border-b border-gray-200 text-center hover:bg-gray-100">
                <td className="border border-gray-300 p-3">{job.title}</td>
                <td className="border border-gray-300 p-3">{job.company}</td>
                <td className="border border-gray-300 p-3">{job.location}</td>
                <td className="border border-gray-300 p-3 flex justify-center">
                  <button
                    onClick={() => router.push(`/singleJob/${job._id}`)}
                    className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
                  >
                    <FaPaperPlane className="mr-2" /> Apply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Applied Jobs */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl mt-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Jobs You've Applied For</h2>
        <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-3">Title</th>
              <th className="border border-gray-300 p-3">Status</th>
              <th className="border border-gray-300 p-3">Applied On</th>
            </tr>
          </thead>
          <tbody>
            {appliedJobs.map((job) => (
              <tr key={job._id} className="border-b border-gray-200 text-center hover:bg-gray-100">
                <td className="border border-gray-300 p-3">{job.title}</td>
                <td className={`border border-gray-300 p-3 font-semibold ${job.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
                  {job.status}
                </td>
                <td className="border border-gray-300 p-3">{new Date(job.appliedAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
