"use client";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { FaCheck, FaTimes, FaUserPlus } from "react-icons/fa";

export default function JobManagementAdmin() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  // Fetch Jobs from API
  const fetchJobs = async () => {
    try {
      const res = await fetch("/api/jobManagement");
      const data = await res.json();
      setJobs(data);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    }
  };

  // Approve Job
  const handleApprove = async (id) => {
    try {
      const res = await fetch("/api/jobManagement", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: "Approved" }),
      });
      const updatedJob = await res.json();
      console.log("Updated Job:", updatedJob);
      fetchJobs(); // Refresh job list
      Swal.fire("Approved!", "Job has been approved.", "success");
    } catch (error) {
      Swal.fire("Error", "Failed to approve job", "error");
    }
  };


  // Reject Job
  const handleReject = async (id) => {
    try {
      await fetch("/api/jobManagement", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: "Rejected" }),
      });
      setJobs((prevJobs) =>
        prevJobs.map((job) => (job._id === id ? { ...job, status: "Rejected" } : job))
      );
      Swal.fire("Rejected!", "Job has been rejected.", "error");
    } catch (error) {
      Swal.fire("Error", "Failed to reject job", "error");
    }
  };

  // Assign Vendor
  const handleAssignVendor = async (id) => {
    const { value: vendor } = await Swal.fire({
      title: "Assign Vendor",
      input: "text",
      inputLabel: "Enter Vendor Name",
      showCancelButton: true,
      confirmButtonText: "Assign",
    });

    if (vendor) {
      try {
        await fetch("/api/jobManagement", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, vendor }),
        });
        setJobs((prevJobs) =>
          prevJobs.map((job) => (job._id === id ? { ...job, vendor } : job))
        );
        Swal.fire("Success!", "Vendor assigned successfully.", "success");
      } catch (error) {
        Swal.fire("Error", "Failed to assign vendor", "error");
      }
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">Job Management</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300 text-sm md:text-base">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border border-gray-300 p-3">Title</th>
              <th className="border border-gray-300 p-3">Description</th>
              <th className="border border-gray-300 p-3">Status</th>
              <th className="border border-gray-300 p-3">Vendor</th>
              <th className="border border-gray-300 p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr
                key={job._id}
                className="bg-white border-b border-gray-200 text-center hover:bg-gray-100"
              >
                <td className="border border-gray-300 p-3">{job.title}</td>
                <td className="border border-gray-300 p-3">{job.description}</td>
                <td
                  className={`border border-gray-300 p-3 font-semibold ${job.status === "Approved"
                      ? "text-green-600"
                      : job.status === "Rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                >
                  {job.status}
                </td>
                <td className="border border-gray-300 p-3">
                  {job.vendor || "Not Assigned"}
                </td>
                <td className="border border-gray-300 p-3 flex justify-center gap-2 flex-wrap">
                  {job.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handleApprove(job._id)}
                        className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center"
                      >
                        <FaCheck className="mr-2" /> Approve
                      </button>
                      <button
                        onClick={() => handleReject(job._id)}
                        className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center"
                      >
                        <FaTimes className="mr-2" /> Reject
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => handleAssignVendor(job._id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
                  >
                    <FaUserPlus className="mr-2" /> Assign Vendor
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
