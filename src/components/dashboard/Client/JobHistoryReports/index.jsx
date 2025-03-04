import React, { useEffect, useState } from "react";

function JobHistoryReports() {
  const [jobHistory, setJobHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch("/api/jobHistoryClient");
        const data = await response.json();

        if (response.ok) {
          setJobHistory(data.allJobs);
        } else {
          throw new Error(data.error || "Failed to fetch job history");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  const handleRatingUpdate = async (jobId, newRating) => {
    try {
      const response = await fetch("/api/jobHistoryClient", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId, rating: newRating }),
      });

      const data = await response.json();

      if (response.ok) {
        setJobHistory((prevJobs) =>
          prevJobs.map((job) =>
            job._id === jobId ? { ...job, rating: newRating } : job
          )
        );
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert("Failed to update rating");
    }
  };

  if (loading) return <p className="text-center mt-6">Loading job history...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const completedJobs = jobHistory.filter((job) => job.status === "Completed");
  const averageRating =
    completedJobs.length > 0
      ? (
          completedJobs.reduce((sum, job) => sum + (job.rating || 0), 0) /
          completedJobs.filter((job) => job.rating).length
        ).toFixed(1)
      : "N/A";

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Job History & Reports
        </h1>
        <p className="text-gray-600 mb-6">View past jobs and performance reports.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow-lg rounded-lg p-6 border">
            <h3 className="text-xl font-semibold text-gray-700">Total Jobs</h3>
            <p className="text-3xl font-bold text-orange-500 mt-2">
              {jobHistory.length}
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border">
            <h3 className="text-xl font-semibold text-gray-700">Completed Jobs</h3>
            <p className="text-3xl font-bold text-green-500 mt-2">
              {completedJobs.length}
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border">
            <h3 className="text-xl font-semibold text-gray-700">Average Rating</h3>
            <p className="text-3xl font-bold text-blue-500 mt-2">{averageRating}</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 border overflow-x-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job History</h2>
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 text-left border">Job Title</th>
                <th className="p-3 text-left border">Status</th>
                <th className="p-3 text-left border">Date</th>
                <th className="p-3 text-left border">Rating</th>
                <th className="p-3 text-left border">Update Rating</th>
              </tr>
            </thead>
            <tbody>
              {jobHistory.map((job) => (
                <tr key={job._id} className="border">
                  <td className="p-3 border">{job.title}</td>
                  <td
                    className={`p-3 border font-semibold ${
                      job.status === "Completed" ? "text-green-600" : "text-orange-500"
                    }`}
                  >
                    {job.status}
                  </td>
                  <td className="p-3 border">{job.postedAt}</td>
                  <td className="p-3 border">
                    {job.rating ? (
                      <span className="text-yellow-500 font-semibold">{job.rating} ⭐</span>
                    ) : (
                      <span className="text-gray-400">N/A</span>
                    )}
                  </td>
                  <td className="p-3 border">
                    {job.status === "Completed" && (
                      <input
                        type="number"
                        min="1"
                        max="5"
                        className="border p-2 w-16"
                        placeholder="Rate"
                        onBlur={(e) =>
                          handleRatingUpdate(job._id, parseFloat(e.target.value))
                        }
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default JobHistoryReports;
