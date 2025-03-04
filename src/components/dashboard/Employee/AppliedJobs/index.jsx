"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const AppliedJobs = () => {
  const { data: session, status } = useSession();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      const fetchAppliedJobs = async () => {
        try {
          const response = await fetch(`/api/applicationManagementEmployee?email=${session.user.email}`);
          if (!response.ok) {
            throw new Error("Failed to fetch applied jobs");
          }
          const data = await response.json();

          // Ensure correct data format
          if (Array.isArray(data.appliedJobs)) {
            setAppliedJobs(data.appliedJobs);
          } else {
            throw new Error("Unexpected response format");
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchAppliedJobs();
    }
  }, [session, status]);

  if (status === "loading" || loading) return <p className="text-center text-gray-600">Loading jobs...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;
  if (!session?.user?.email) return <p className="text-center text-gray-600">Please sign in to view your applied jobs.</p>;

  return (
    <div className="flex flex-col items-start w-full px-8 py-6">
      <h1 className="text-3xl font-bold mb-4">Applied Jobs</h1>
      <p className="text-gray-600 mb-6">Here are the jobs you have applied for:</p>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium">Job Title</th>
              <th className="text-left px-6 py-3 text-sm font-medium">full Name</th>
              <th className="text-left px-6 py-3 text-sm font-medium">Applied At</th>
              <th className="text-left px-6 py-3 text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {appliedJobs.map((job) => (
              <tr key={job._id} className="border-t hover:bg-gray-100 transition duration-150">
                <td className="px-6 py-4 text-sm text-gray-800">{job.position}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{job.fullName}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{new Date(job.appliedAt).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{job.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;
