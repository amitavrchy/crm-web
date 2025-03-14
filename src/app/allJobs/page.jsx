"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaBuilding, FaMapMarkerAlt, FaMoneyBillWave, FaSearch } from "react-icons/fa";

function AllJobs() {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedLocation, setSelectedLocation] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 12;

    const router = useRouter();

    useEffect(() => {
        async function fetchJobs() {
            try {
                const res = await fetch("/api/jobs");
                if (res.ok) {
                    const data = await res.json();
                    setJobs(data);
                    setFilteredJobs(data);
                    setCategories(["All Categories", ...new Set(data.map((job) => job.category))]);
                    setLocations(["All Locations    ", ...new Set(data.map((job) => job.location))]);
                } else {
                    setError("Failed to fetch jobs. Please try again later.");
                }
            } catch (error) {
                console.error("Error fetching jobs:", error);
                setError("An error occurred while fetching jobs.");
            } finally {
                setLoading(false);
            }
        }

        fetchJobs();
    }, []);


    useEffect(() => {
        let filtered = jobs;

        if (selectedCategory !== "All") {
            filtered = filtered.filter((job) => job.category === selectedCategory);
        }

        if (selectedLocation !== "All") {
            filtered = filtered.filter((job) => job.location === selectedLocation);
        }

        if (searchQuery) {
            filtered = filtered.filter((job) =>
                job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                job.company.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredJobs(filtered);
        setCurrentPage(1);
    }, [selectedCategory, selectedLocation, searchQuery, jobs]);

    const handleJobClick = (jobId) => {
        router.push(`/singleJob/${jobId}`);
    };

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

    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    const currentJobs = filteredJobs.slice(
        (currentPage - 1) * jobsPerPage,
        currentPage * jobsPerPage
    );

    return (
        <div>
            <Navbar />
            <div className="bg-gray-50 min-h-screen text-gray-800 flex flex-col">
                <div className="w-4/5 mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
                        Explore Your Next Opportunity
                    </h1>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4 justify-center mb-6">
                        <select
                            className="p-2 rounded border border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>

                        <select
                            className="p-2 rounded border border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                        >
                            {locations.map((location) => (
                                <option key={location} value={location}>
                                    {location}
                                </option>
                            ))}
                        </select>

                        <div className="relative">
                            <input
                                type="text"
                                className="p-2 pl-10 rounded border border-gray-300 shadow-sm focus:ring focus:ring-blue-200 w-[450px]"
                                placeholder="Search jobs by keyword, name or salary"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <FaSearch className="absolute left-3 top-3 text-gray-500" />
                        </div>
                    </div>

                    {/* Job Listings */}
                    {filteredJobs.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6">
                            {currentJobs.map((job) => (
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
                                    <div className="flex items-center justify-between">
                                        {job.salary && (
                                            <p className="flex items-center text-sm text-green-600 font-semibold">
                                                <FaMoneyBillWave className="mr-2" /> Salary: ${job.salary}
                                            </p>
                                        )}
                                        <p className="text-xs text-gray-500 mt-4">
                                            Posted on: {new Date(job.postedAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-600">No jobs available at the moment.</p>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-6">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`px-4 py-2 mx-1 rounded ${page === currentPage
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200 text-gray-700"
                                        } hover:bg-blue-100`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AllJobs;
