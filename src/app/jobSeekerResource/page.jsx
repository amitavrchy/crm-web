"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "animate.css";

const resources = [
    {
        title: "Resume Building Tips",
        description: "Craft a compelling resume to stand out in the job market.",
        image: "/services/7.jpg",
        link: "/resume-tips",
        type: "Career Guidance",
        tags: ["Resume", "Job Search"],
        date: "2024-03-08"
    },
    {
        title: "Interview Preparation",
        description: "Ace your interviews with expert guidance and best practices.",
        image: "/services/8.jpg",
        link: "/interview-prep",
        type: "Job Readiness",
        tags: ["Interview", "Preparation"],
        date: "2024-02-22"
    },
    {
        title: "Career Growth Strategies",
        description: "Plan your career progression with proven growth techniques.",
        image: "/services/9.jpg",
        link: "/career-growth",
        type: "Development",
        tags: ["Career", "Growth"],
        date: "2024-01-30"
    }
];

const JobSeekerResource = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedType, setSelectedType] = useState("");
    const [selectedTag, setSelectedTag] = useState("");
    const [sortByDate, setSortByDate] = useState("newest");
    const resourcesPerPage = 6;
    const itemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__animated", "animate__fadeInUp");
                }
            });
        }, { threshold: 0.2 });

        itemsRef.current.forEach(el => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);
    const filteredResources = resources.
    filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(item => (selectedType ? item.type === selectedType : true))
    .filter(item => (selectedTag ? item.tags.includes(selectedTag) : true))
    .sort((a, b) => sortByDate === "newest" ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date))
    const indexOfLastItem = currentPage * resourcesPerPage;
    const indexOfFirstItem = indexOfLastItem - resourcesPerPage;
    const currentResources = filteredResources.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredResources.length / resourcesPerPage);
    const types = [...new Set(resources.map(item => item.type))];
    const tags = [...new Set(resources.flatMap(item => item.tags))];

    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-r from-green-900 to-gray-700 w-full h-60 flex flex-col items-center justify-center text-white text-center px-6">
                <h1 className="text-5xl font-extrabold">JobSeeker Resources</h1>
                <p className="mt-4 text-lg max-w-3xl">Find essential resources to help you land your dream job.</p>
            </div>
            <div className="max-w-7xl mx-auto px-6 py-6 bg-white shadow-md rounded-lg mt-8">
                <div className="flex flex-wrap items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search resources..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500"
                    />
                    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="px-4 py-2 border rounded-lg shadow-sm">
                        <option value="">All Types</option>
                        {types.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                    <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)} className="px-4 py-2 border rounded-lg shadow-sm">
                        <option value="">All Tags</option>
                        {tags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
                    </select>
                    <select value={sortByDate} onChange={(e) => setSortByDate(e.target.value)} className="px-4 py-2 border rounded-lg shadow-sm">
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                    </select>
                </div>
            </div>
            <section className="py-8 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentResources.length > 0 ? (
                        currentResources.map((resource, index) => (
                            <div key={index} ref={el => (itemsRef.current[index] = el)} className="bg-white p-6 rounded-lg shadow-lg opacity-0">
                                <Image src={resource.image} alt={resource.title} width={400} height={250} className="rounded-md" />
                                <h2 className="text-xl font-semibold text-green-500 mt-4">{resource.title}</h2>
                                <p className="text-gray-600 mt-2">{resource.description}</p>
                                <Link href={resource.link} className="text-blue-600 hover:underline mt-2 inline-block">Learn More →</Link>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600 col-span-3">No matching resources found.</p>
                    )}
                </div>
                <div className="flex justify-center gap-4 mt-6">
                    <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 bg-gray-300 rounded">Previous</button>
                    <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-300 rounded">Next</button>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default JobSeekerResource;
