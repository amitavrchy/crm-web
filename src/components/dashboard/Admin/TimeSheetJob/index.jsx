"use client";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "react-calendar/dist/Calendar.css";

export default function TimeSheetJob() {
  const [date, setDate] = useState(new Date());
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const selectedDate = date.toISOString().split("T")[0];
        const response = await fetch(`/api/timeSheetJob?date=${selectedDate}`);
        const data = await response.json();

        if (!response.ok) {
          console.error("Failed to fetch jobs:", data.error);
          return;
        }

        setFilteredJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [date]);

  const statusCounts = {
    Completed: filteredJobs.filter((job) => job.status === "Completed").length,
    Ongoing: filteredJobs.filter((job) => job.status === "Ongoing").length,
    Pending: filteredJobs.filter((job) => job.status === "Pending").length,
  };

  const chartData = Object.keys(statusCounts).map((key) => ({
    name: key,
    count: statusCounts[key],
  }));

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-orange-600">TimeSheet Job Dashboard</h1>
      <p className="text-gray-600 mb-6 text-center">Select a date to view job statistics.</p>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        {/* Calendar */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg flex-1">
          <h2 className="text-xl font-semibold mb-4">Select Date</h2>
          <Calendar onChange={setDate} value={date} className="rounded-lg w-full bg-white p-4 shadow-md" />
        </div>

        {/* Job Stats Chart */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg flex-1">
          <h2 className="text-xl font-semibold mb-4">Job Status Overview</h2>
          {filteredJobs.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData}>
                <XAxis dataKey="name" stroke="#333" />
                <YAxis stroke="#333" />
                <Tooltip cursor={{ fill: "#ddd" }} />
                <Bar dataKey="count" fill="#f97316" barSize={50} radius={10} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-gray-500 text-center mt-10">No jobs available on this date.</p>
          )}
        </div>
      </div>

      {/* Job List */}
      <div className="mt-8 w-full max-w-5xl bg-gray-100 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Jobs on {date.toDateString()}</h2>
        {filteredJobs.length > 0 ? (
          <ul className="space-y-3">
            {filteredJobs.map((job) => (
              <li key={job._id} className="bg-white p-3 rounded-lg shadow text-gray-700">
                <span className="font-semibold">{job.status}</span> - Job ID: {job._id}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No jobs available on this date.</p>
        )}
      </div>
    </div>
  );
}
