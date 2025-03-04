"use client";
import React, { useState, useEffect } from "react";

export default function ApplicationManagementE() {
  const [applications, setApplications] = useState([]);

  // Fetch applications from the backend
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch("/api/applicationManagement");
        const data = await response.json();
        if (data.success) setApplications(data.data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };
    fetchApplications();
  }, []);

  // Update application status
  const updateStatus = async (id, newStatus) => {
    try {
      const response = await fetch("/api/applicationManagement", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });

      const data = await response.json();
      if (data.success) {
        setApplications((prev) =>
          prev.map((app) => (app._id === id ? { ...app, status: newStatus } : app))
        );
      } else {
        console.error("Failed to update status:", data.message);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Application Management Dashboard</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left border-b">Name</th>
              <th className="py-3 px-4 text-left border-b">Email</th>
              <th className="py-3 px-4 text-left border-b">Position</th>
              <th className="py-3 px-4 text-left border-b">Status</th>
              <th className="py-3 px-4 text-left border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{app.fullName}</td>
                <td className="py-3 px-4">{app.email}</td>
                <td className="py-3 px-4">{app.position}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      app.status === "Approved" ? "bg-green-500" :
                      app.status === "Rejected" ? "bg-red-500" :
                      "bg-yellow-500"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <select
                    value={app.status}
                    onChange={(e) => updateStatus(app._id, e.target.value)}
                    className="p-2 border rounded-lg"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
