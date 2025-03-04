"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ApprovedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch approved jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/approvedJobsEmployee");
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Failed to fetch jobs");

        setJobs(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const updateJobStatus = async (id, action) => {
    const confirmText =
      action === "complete"
        ? "You are about to mark this job as completed."
        : "You will resign from this job.";

    const result = await Swal.fire({
      title: "Are you sure?",
      text: confirmText,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${action}!`,
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch("/api/approvedJobsEmployee", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, action }),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Failed to update job");

        setJobs((prevJobs) =>
          prevJobs.map((job) =>
            job._id === id ? { ...job, statusJob: action === "complete" ? "Completed" : "Resigned" } : job
          )
        );

        Swal.fire("Success!", `Job marked as ${action}.`, "success");
      } catch (error) {
        Swal.fire("Error!", error.message, "error");
      }
    }
  };

  const handleArrangeMeeting = async (jobTitle) => {
    await Swal.fire({
      title: "Meeting Arranged!",
      text: `Meeting has been arranged for: ${jobTitle}`,
      icon: "success",
      confirmButtonColor: "#3085d6",
    });
  };

  if (loading) return <p className="text-center text-gray-600">Loading jobs...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Approved Jobs</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-6 py-3 text-gray-600 font-medium">Job Title</th>
              <th className="px-6 py-3 text-gray-600 font-medium">Schedule</th>
              <th className="px-6 py-3 text-gray-600 font-medium">Status</th>
              <th className="px-6 py-3 text-gray-600 font-medium">Arrange Meeting</th>
              <th className="px-6 py-3 text-gray-600 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4">{job.position}</td>
                <td className="px-6 py-4">{job.appliedAt}</td>
                <td
                  className={`px-6 py-4 font-medium ${job.statusJob === "Completed"
                      ? "text-green-600"
                      : job.statusJob === "Resigned"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                >
                  {job.statusJob || "Approved"}
                </td>
                <td className="px-6 py-4">
                  <Link href="/scheduleMeet">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                      onClick={() => handleArrangeMeeting(job.jobTitle)}
                    >
                      Arrange Meeting
                    </button>
                  </Link>
                </td>
                <td className="px-6 py-4 space-x-2">
                  {job.statusJob !== "Completed" && job.statusJob !== "Resigned" && (
                    <>
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        onClick={() => updateJobStatus(job._id, "complete")}
                      >
                        Mark as Complete
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                        onClick={() => updateJobStatus(job._id, "resign")}
                      >
                        Resign
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedJobs;
