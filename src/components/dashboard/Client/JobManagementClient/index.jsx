'use client';
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { FaMoneyBillWave, FaClock } from "react-icons/fa";

export default function JobManagementClient() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("/api/jobManagementClient");
      const data = await response.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  const handleSetDeadline = async (job) => {
    const { value: deadline } = await Swal.fire({
      title: "Set Deadline",
      input: "date",
      inputValue: job.deadline,
      showCancelButton: true,
      confirmButtonText: "Update",
    });

    if (deadline) {
      await fetch("/api/jobManagementClient", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId: job._id, deadline }),
      });
      setJobs(jobs.map(j => j._id === job._id ? { ...j, deadline } : j));
      Swal.fire("Updated!", "Deadline updated successfully.", "success");
    }
  };

  const handleMakePayment = async (job) => {
    if (job.status !== "Completed") {
      return Swal.fire("Error!", "You can only make payments for completed jobs.", "error");
    }

    const { value: payment } = await Swal.fire({
      title: "Enter Payment Amount",
      input: "number",
      inputValue: job.payment || "",
      showCancelButton: true,
      confirmButtonText: "Pay",
    });

    if (payment) {
      await fetch("/api/jobManagementClient", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId: job._id, payment }),
      });
      setJobs(jobs.map(j => j._id === job._id ? { ...j, payment } : j));
      Swal.fire("Success!", "Payment made successfully.", "success");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Client Job Management</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3">Title</th>
              <th className="border p-3">Description</th>
              <th className="border p-3">Deadline</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Payment</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(job => (
              <tr key={job._id} className="border">
                <td className="p-3 border">{job.title}</td>
                <td className="p-3 border">{job.description}</td>
                <td className="p-3 border">{job.deadline || "Not set"}</td>
                <td className="p-3 border font-semibold">{job.status}</td>
                <td className="p-3 border">{job.payment ? `$${job.payment}` : "Not paid"}</td>
                <td className="p-3 border flex justify-center gap-2">
                  {job.status !== "Completed" && !job.payment && (
                    <button
                      onClick={() => handleSetDeadline(job)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                      <FaClock /> Set Deadline
                    </button>
                  )}
                  {job.status === "Completed" && !job.payment && (
                    <button
                      onClick={() => handleMakePayment(job)}
                      className="bg-green-500 text-white px-4 py-2 rounded-md"
                    >
                      <FaMoneyBillWave /> Pay
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
