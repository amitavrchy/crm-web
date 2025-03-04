"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import img from "../../../../../public/Job.jpg";

function PostBlogs() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    content: "",
    image: "",
    date_published: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const categories = ["Technology", "EOR", "HR", "Marketing", "Finance", "Other"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.author || !formData.category || !formData.content || !formData.image) {
      return toast.error("Please fill all fields");
    }

    try {
      setLoading(true);
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to post blog");

      toast.success("Blog posted successfully!");
      router.refresh();
      router.push("/blogs");
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Image */}
        <div className="relative hidden md:block">
          <Image src={img} alt="Blog" layout="fill" objectFit="cover" className="rounded-l-xl" />
        </div>

        {/* Right Side - Form */}
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Post a Blog</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
            <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} className="w-full p-3 border rounded-lg" required />

            {/* Category Dropdown */}
            <select name="category" value={formData.category} onChange={handleChange} className="w-full p-3 border rounded-lg" required>
              <option value="">Select a Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Image Upload */}
            <input type="text" name="image" placeholder="Enter Image URL" value={formData.image} onChange={handleChange} className="w-full p-3 border rounded-lg" />
            <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-3 border rounded-lg" />

            {/* Date Input */}
            <input type="date" name="date_published" value={formData.date_published} onChange={handleChange} className="w-full p-3 border rounded-lg" required />

            <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} className="w-full p-3 border rounded-lg" rows="4" required></textarea>

            <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-orange-600" disabled={loading}>
              {loading ? "Posting..." : "Post Blog"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostBlogs;
