"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaBuilding, FaMapMarkerAlt, FaMoneyBillWave, FaBriefcase, FaUsers } from "react-icons/fa";

function AllJobsHomePage() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        async function fetchJobs() {
            try {
                const res = await fetch("/api/jobs");
                if (res.ok) {
                    const data = await res.json();
                    setJobs(data.slice(0, 6));
                } else {
                    setError("Failed to fetch jobs. Please try again later.");
                }
            } catch (error) {
                setError("An error occurred while fetching jobs.");
            } finally {
                setLoading(false);
            }
        }

        fetchJobs();
    }, []);

    const handleViewAllJobs = () => {
        router.push("/allJobs");
    };

    const handleJobClick = (jobId) => {
        router.push(`/singleJob/${jobId}`);
    };

    // Calculate stats
    const jobStats = jobs.reduce(
        (stats, job) => {
            stats.totalJobs += 1;
            stats.totalVacancies += job.vacancy || 0;
            if (!stats.companies.includes(job.company)) {
                stats.companies.push(job.company);
            }
            return stats;
        },
        { totalJobs: 0, totalVacancies: 0, companies: [] }
    );

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
                <p className="text-lg font-semibold">Loading jobs...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
                <p className="text-lg font-semibold">{error}</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 text-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4">
                {/* Stats Section */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-12">
                    <h2 className="text-base text-orange-500 font-bold text-center mb-6">Find the Right Job</h2>
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-8">Featured Job Opportunities</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-100 p-4 rounded-full">
                                <FaBriefcase className="text-blue-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-xl font-bold">{jobStats.totalJobs}</p>
                                <p className="text-sm text-gray-500">Live Jobs</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-green-100 p-4 rounded-full">
                                <FaUsers className="text-green-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-xl font-bold">{jobStats.totalVacancies}</p>
                                <p className="text-sm text-gray-500">Vacancies</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-yellow-100 p-4 rounded-full">
                                <FaBuilding className="text-yellow-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-xl font-bold">{jobStats.companies.length}</p>
                                <p className="text-sm text-gray-500">Companies</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-orange-100 p-4 rounded-full">
                                <FaMapMarkerAlt className="text-orange-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-xl font-bold">{jobs.length}</p>
                                <p className="text-sm text-gray-500">New Jobs</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Job Opportunities */}

                {/* Job Listings */}
                {jobs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <div
                                key={job._id}
                                onClick={() => handleJobClick(job._id)}
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all cursor-pointer"
                            >
                                <h2 className="text-xl font-bold text-gray-700 mb-2">{job.title}</h2>
                                <p className="flex items-center text-sm text-gray-600 mb-2">
                                    <FaBuilding className="mr-2" /> {job.company}
                                </p>
                                <p className="flex items-center text-sm text-gray-600 mb-2">
                                    <FaMapMarkerAlt className="mr-2" /> {job.location}
                                </p>
                                <p className="text-sm text-gray-700 mb-4">{job.description}</p>
                                {job.salary && (
                                    <p className="flex items-center text-sm text-green-600 font-semibold">
                                        <FaMoneyBillWave className="mr-2" /> Salary: ${job.salary}
                                    </p>
                                )}
                                <p className="text-xs text-gray-500 mt-4">
                                    Posted on: {new Date(job.postedAt).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">No jobs available at the moment.</p>
                )}

                {/* View All Jobs Button */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleViewAllJobs}
                        className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all"
                    >
                        View All Jobs
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AllJobsHomePage;
