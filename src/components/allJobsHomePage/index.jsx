"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaBuilding, FaMapMarkerAlt, FaMoneyBillWave, FaBriefcase, FaUsers } from "react-icons/fa";
import Image from "next/image";
import "animate.css";

function AllJobsHomePage() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const sectionsRef = useRef([]);

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate__animated", "animate__fadeInUp");
                    }
                });
            },
            { threshold: 0.2 }
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const handleViewAllJobs = () => {
        router.push("/allJobs");
    };

    const handleJobClick = (jobId) => {
        router.push(`/singleJob/${jobId}`);
    };

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
                <p className="text-lg font-semibold animate__animated animate__fadeIn">Loading jobs...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
                <p className="text-lg font-semibold animate__animated animate__fadeIn">{error}</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 text-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div ref={(el) => sectionsRef.current.push(el)} className="bg-white rounded-lg shadow-md p-8 mb-12">
                    <h2 className="text-base text-orange-500 font-bold text-center mb-6">Find the Right Job</h2>
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-8">
                        Featured Job Opportunities
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <FaBriefcase className="text-blue-500 text-xl" />, count: jobStats.totalJobs, label: "Live Jobs", bg: "bg-blue-100" },
                            { icon: <FaUsers className="text-green-500 text-xl" />, count: jobStats.totalVacancies, label: "Vacancies", bg: "bg-green-100" },
                            { icon: <FaBuilding className="text-yellow-500 text-xl" />, count: jobStats.companies.length, label: "Companies", bg: "bg-yellow-100" },
                            { icon: <FaMapMarkerAlt className="text-orange-500 text-xl" />, count: jobs.length, label: "New Jobs", bg: "bg-orange-100" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                ref={(el) => sectionsRef.current.push(el)}
                                className="flex items-center space-x-4"
                            >
                                <div className={`${stat.bg} p-4 rounded-full`}>{stat.icon}</div>
                                <div>
                                    <p className="text-xl font-bold">{stat.count}</p>
                                    <p className="text-sm text-gray-500">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {jobs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <div
                                key={job._id}
                                ref={(el) => sectionsRef.current.push(el)}
                                onClick={() => handleJobClick(job._id)}
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all cursor-pointer flex justify-between items-center"
                            >
                                <div className="w-3/4">
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
                                <div className="w-24 h-24 relative">
                                    <Image
                                        src={"/demo_company.png"}
                                        alt={job.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p ref={(el) => sectionsRef.current.push(el)} className="text-center text-gray-600">
                        No jobs available at the moment.
                    </p>
                )}

                {/* View All Jobs Button */}
                <div ref={(el) => sectionsRef.current.push(el)} className="flex justify-center mt-8">
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
