'use client';
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "animate.css"; // Import Animate.css
import img from "../../../public/singleJob.jpg";
import img1 from "../../../public/about-us/about-1.jpg";
import img2 from "../../../public/about-us/about-2.jpg";
import img3 from "../../../public/about-us/about-3.jpg";

function BlogsHomePage() {
    const [blogs, setBlogs] = useState([]);
    const images = [img, img1, img2, img3];
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const res = await fetch("api/blogs");
                if (res.ok) {
                    const data = await res.json();
                    setBlogs(data.slice(0, 4));
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            }
        }

        fetchBlogs();
    }, []);

    // Intersection Observer for scroll-triggered animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="bg-gray-50 text-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className={`text-3xl font-extrabold mb-2 text-center animate__animated ${isVisible ? "animate__fadeInUp" : ""}`}>
                    Latest Blogs
                </h2>
                <p className={`text-center text-md mb-12 text-orange-500 font-bold animate__animated ${isVisible ? "animate__fadeInUp" : ""}`}>
                    Read our blogs to discover about the unknown.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogs.map((blog, index) => (
                        <div 
                            key={blog._id} 
                            className={`bg-white rounded-lg shadow-md overflow-hidden animate__animated ${isVisible ? "animate__fadeIn" : ""}`}
                        >
                            <Image
                                src={images[index % images.length]} // Dynamically select the image
                                alt={blog.title}
                                width={800}
                                height={600}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {new Date(blog.date_published).toLocaleDateString()} by {blog.author}
                                </p>
                                <p className="text-gray-700 text-sm mb-4">
                                    {blog.excerpt || "No summary available."}
                                </p>
                                <Link
                                    href={`/singleBlog/${blog._id}`}
                                    className="text-orange-600 font-semibold hover:underline"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <Link href="/blogs">
                        <button className={`bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition animate__animated ${isVisible ? "animate__fadeInUp animate__delay-2s" : ""}`}>
                            View More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogsHomePage;
