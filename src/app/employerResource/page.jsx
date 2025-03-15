"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "animate.css";

const resources = [
    {
        title: "Hiring Solutions",
        description: "Find the right talent with our tailored recruitment and staffing solutions.",
        image: "/services/1.jpg",
        link: "/hiring-solutions",
        type: "Staffing",
        tags: ["Recruitment", "HR"],
        date: "2024-03-10"
    },
    {
        title: "Workforce Management",
        description: "Optimize your workforce with our management and productivity solutions.",
        image: "/services/2.jpg",
        link: "/workforce-management",
        type: "Management",
        tags: ["Workforce", "HR"],
        date: "2024-02-25"
    },
    {
        title: "Market Insights",
        description: "Stay ahead with the latest industry trends and hiring forecasts.",
        image: "/services/3.jpg",
        link: "/market-insights",
        type: "Reports",
        tags: ["Industry", "Analytics"],
        date: "2024-01-15"
    },
    {
        title: "Talent Retention Strategies",
        description: "Discover the best ways to retain top talent in your industry.",
        image: "/services/4.jpg",
        link: "/talent-retention",
        type: "HR Strategy",
        tags: ["HR", "Retention"],
        date: "2024-02-18"
    },
    {
        title: "AI in Hiring",
        description: "Leverage AI tools to improve recruitment efficiency.",
        image: "/services/5.jpg",
        link: "/ai-hiring",
        type: "Technology",
        tags: ["AI", "Recruitment"],
        date: "2024-02-05"
    },
    {
        title: "Diversity & Inclusion",
        description: "Implement strategies for an inclusive workplace.",
        image: "/services/6.jpg",
        link: "/diversity-inclusion",
        type: "Culture",
        tags: ["HR", "Diversity"],
        date: "2024-01-28"
    }
];

// Extract unique filter options
const types = [...new Set(resources.map(item => item.type))];
const tags = [...new Set(resources.flatMap(item => item.tags))];

const EmployerResource = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedTag, setSelectedTag] = useState("");
    const [sortByDate, setSortByDate] = useState("newest");
    const [currentPage, setCurrentPage] = useState(1);
    const resourcesPerPage = 6;

    // Intersection Observer for scroll animations
    const itemsRef = useRef([]);
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

        itemsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Filtered & Sorted Data
    const filteredResources = resources
        .filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter(item => (selectedType ? item.type === selectedType : true))
        .filter(item => (selectedTag ? item.tags.includes(selectedTag) : true))
        .sort((a, b) => sortByDate === "newest"
            ? new Date(b.date) - new Date(a.date)
            : new Date(a.date) - new Date(b.date)
        );

    // Pagination Logic
    const indexOfLastItem = currentPage * resourcesPerPage;
    const indexOfFirstItem = indexOfLastItem - resourcesPerPage;
    const currentResources = filteredResources.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredResources.length / resourcesPerPage);

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 to-gray-700 relative w-full h-60 flex flex-col items-center justify-center text-white text-center px-6">
                <h1 className="text-5xl font-extrabold">Employer Resources</h1>
                <p className="mt-4 text-lg max-w-3xl">
                    Explore essential resources designed to help your business grow, from talent solutions to industry insights.
                </p>
            </div>

            {/* Filters & Search */}
            <div className="max-w-7xl mx-auto px-6 py-6 bg-white shadow-md rounded-lg mt-8">
                <div className="flex flex-wrap items-center gap-4">
                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="Search resources..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500"
                    />

                    {/* Type Filter */}
                    <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="px-4 py-2 border rounded-lg shadow-sm"
                    >
                        <option value="">All Types</option>
                        {types.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>

                    {/* Tag Filter */}
                    <select
                        value={selectedTag}
                        onChange={(e) => setSelectedTag(e.target.value)}
                        className="px-4 py-2 border rounded-lg shadow-sm"
                    >
                        <option value="">All Tags</option>
                        {tags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
                    </select>

                    {/* Date Sorting */}
                    <select
                        value={sortByDate}
                        onChange={(e) => setSortByDate(e.target.value)}
                        className="px-4 py-2 border rounded-lg shadow-sm"
                    >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                    </select>
                </div>
            </div>

            {/* Resource Sections */}
            <section className="py-8 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentResources.length > 0 ? (
                        currentResources.map((resource, index) => (
                            <div 
                                key={index} 
                                ref={el => itemsRef.current[index] = el} 
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition opacity-0"
                            >
                                <Image src={resource.image} alt={resource.title} width={400} height={250} className="rounded-md" />
                                <h2 className="text-xl font-semibold text-orange-500 mt-4">{resource.title}</h2>
                                <p className="text-gray-600 mt-2">{resource.description}</p>
                                <Link href={resource.link} className="text-blue-600 hover:underline mt-2 inline-block">Learn More →</Link>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600 col-span-3">No matching resources found.</p>
                    )}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center gap-4 mt-6">
                    <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 bg-gray-300 rounded cursor-pointer">Previous</button>
                    <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-300 rounded cursor-pointer">Next</button>
                </div>
            </section>

            <Footer />
        </>
    );
}
export default EmployerResource