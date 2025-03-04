"use client";

import React, { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import img from "../../../../../public/Job.jpg";

function PostProjects() {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        date: "",
        status: "ongoing",
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = await fetch("/api/projects", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            
            const data = await res.json();
            
            if (res.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Project added successfully!",
                });
                setFormData({ name: "", location: "", date: "", status: "ongoing" });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: data.message || "Something went wrong",
                });
            }
        } catch (error) {
            console.error("Error submitting project:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to submit project.",
            });
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen flex justify-center items-center p-6">
            <div className="bg-white shadow-xl rounded-xl overflow-hidden max-w-6xl w-full grid grid-cols-1 md:grid-cols-2">
                {/* Left Side - Image */}
                <div className="relative hidden md:block">
                    <Image src={img} alt="Project Illustration" layout="fill" objectFit="cover" className="rounded-l-xl" />
                </div>

                {/* Right Side - Form */}
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add a New Project</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Project Name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            className="w-full p-3 border rounded-lg" 
                            required
                        />
                        <input 
                            type="text" 
                            name="location" 
                            placeholder="Project Location" 
                            value={formData.location} 
                            onChange={handleChange} 
                            className="w-full p-3 border rounded-lg" 
                            required
                        />
                        <input 
                            type="date" 
                            name="date" 
                            value={formData.date} 
                            onChange={handleChange} 
                            className="w-full p-3 border rounded-lg" 
                            required
                        />
                        <select 
                            name="status" 
                            value={formData.status} 
                            onChange={handleChange} 
                            className="w-full p-3 border rounded-lg"
                        >
                            <option value="ongoing">Ongoing</option>
                            <option value="completed">Completed</option>
                        </select>
                        <button 
                            type="submit" 
                            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-orange-600"
                        >
                            Add Project
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PostProjects;
