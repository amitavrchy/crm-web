"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useParams } from "next/navigation";
import singleJob from "../../../../public/singleJob.jpg";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

function SingleJob() {
  const params = useParams();
  const jobId = params?.jobId;

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!jobId) return; // Ensure jobId is available before fetching

    async function fetchJob() {
      try {
        const res = await fetch(`/api/jobs`);
        if (!res.ok) {
          throw new Error("Failed to fetch job details.");
        }
        const data = await res.json();
        const selectedJob = data.find((job) => job._id === jobId);
        if (selectedJob) {
          setJob(selectedJob);
        } else {
          setError("Job not found.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchJob();
  }, [jobId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
        <p className="text-lg font-semibold">Loading job details...</p>
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
    <div>
      <Navbar />

      {/* Banner Section */}
      <div className="relative w-full h-96">
        <Image
          src={singleJob}
          alt="Job Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{job.title}</h1>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen text-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 flex flex-col justify-between">
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <p className="flex items-center text-lg text-gray-600">
                <FaCalendarAlt className="mr-2 text-red-500" /> Posted on: {" "}
                {new Date(job.postedAt).toLocaleDateString()}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h2 className="text-2xl font-semibold mb-3 text-gray-800">Job Description</h2>
                <p className="text-gray-700 text-sm leading-relaxed">{job.description}</p>
              </div>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h2 className="text-2xl font-semibold mb-3 text-gray-800">Responsibilities</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Respond to all enquiries professionally and promptly.</li>
                  <li>Collect payments and manage financial transactions.</li>
                  <li>Assess borrowers' circumstances and provide solutions.</li>
                  <li>Handle telephone queries and maintain detailed records.</li>
                  <li>Collaborate with team members to improve processes.</li>
                </ul>
              </div>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h2 className="text-2xl font-semibold mb-3 text-gray-800">Requirements</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Previous experience in collections or financial services.</li>
                  <li>Excellent communication and problem-solving skills.</li>
                  <li>Ability to manage multiple tasks efficiently.</li>
                  <li>Strong attention to detail and organizational skills.</li>
                  <li>Proficiency with financial software and tools.</li>
                </ul>
              </div>
            </div>
            <div className="flex my-4 gap-8 justify-between">
              <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 shadow-md" onClick={() => window.location.href = '/allJobs'}>
                Back to Search
              </button>
              <Link href={`/singleJob/${jobId}/apply`}>
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
                  Apply Now
                </button>
              </Link>
            </div>
            <div className="my-4">
              <div className="flex gap-6 sm:gap-8 justify-center items-center border border-orange-400 rounded-lg p-4 shadow-md">
                <FaFacebook className="text-orange-600 text-3xl cursor-pointer transition-transform duration-200 hover:scale-110" />
                <FaTwitter className="text-orange-400 text-3xl cursor-pointer transition-transform duration-200 hover:scale-110" />
                <FaLinkedin className="text-orange-700 text-3xl cursor-pointer transition-transform duration-200 hover:scale-110" />
              </div>
            </div>

          </div>
          <div className="md:col-span-1 sticky top-20 flex flex-col gap-6">
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
              <FaBuilding className="text-3xl text-blue-500 mb-3" />
              <p className="font-bold text-lg">{job.company}</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
              <FaMapMarkerAlt className="text-3xl text-green-500 mb-3" />
              <p className="font-bold text-lg">{job.location}</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
              <FaMoneyBillWave className="text-3xl text-yellow-500 mb-3" />
              <p className="font-bold text-lg">{job.salary ? `$${job.salary}` : "Not specified"}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleJob;
