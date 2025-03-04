'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import img from '../../../public/singleJob.jpg';
import Link from 'next/link';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const res = await fetch('/api/blogs');
                if (res.ok) {
                    const data = await res.json();
                    setBlogs(data);
                    setFilteredBlogs(data);
                    const uniqueCategories = ['All', ...new Set(data.map(blog => blog.category))];
                    setCategories(uniqueCategories);
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            }
        }

        fetchBlogs();
    }, []);

    useEffect(() => {
        const filtered = blogs.filter(blog =>
            (selectedCategory === "All" || blog.category === selectedCategory) &&
            (blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.author.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        setFilteredBlogs(filtered);
        setCurrentPage(1);
    }, [searchQuery, selectedCategory, blogs]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div>
            <Navbar />
            <div className="bg-gray-50 min-h-screen text-gray-800">
                {/* Header Section */}
                <div className="relative text-white py-32 text-center">
                    <Image
                        src={img}
                        alt="Blogs"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 w-full h-full z-0"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                            Blogs
                        </h1>
                        <p className="mt-6 text-lg md:text-2xl font-light max-w-2xl mx-auto">
                            Stay updated with our latest insights and articles
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="md:col-span-1 bg-white p-5 rounded-lg shadow">
                        <h2 className="text-xl font-bold mb-4">Categories</h2>
                        <ul>
                            {categories.map(category => (
                                <li key={category} className="mb-2">
                                    <button
                                        className={`w-full text-left px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-3">
                        {/* Search Bar */}
                        <div className="flex justify-center mb-6">
                            <div className="relative w-full max-w-md">
                                <input
                                    type="text"
                                    placeholder="Search for something"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full p-3 pl-10 border rounded-lg shadow-sm focus:ring focus:ring-orange-200"
                                />
                                <FaSearch className="absolute left-3 top-4 text-gray-500" />
                            </div>
                        </div>

                        {/* Blog Listings */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {currentPosts.length > 0 ? (
                                currentPosts.map((blog) => (
                                    <Link key={blog._id} href={`/singleBlog/${blog._id}`}>
                                        <div
                                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                                        >
                                            <Image
                                                src={img}
                                                alt={blog.title}
                                                width={800}
                                                height={600}
                                                className="w-full h-48 object-cover"
                                            />
                                            <div className="p-5">
                                                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                                                <p className="text-sm text-gray-600 mb-2">
                                                    {new Date(blog.date_published).toLocaleDateString()} by {blog.author}
                                                </p>
                                                <p className="text-sm text-gray-700 mb-4">{blog.excerpt}</p>
                                                <button className="text-orange-600 font-semibold hover:underline">
                                                    Read More
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p className="text-center text-gray-600">No blogs found.</p>
                            )}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-6">
                            {Array.from({ length: Math.ceil(filteredBlogs.length / postsPerPage) }, (_, i) => (
                                <button key={i}
                                    className={`mx-1 px-4 py-2 rounded-lg ${currentPage === i + 1 ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                                    onClick={() => setCurrentPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blogs;
