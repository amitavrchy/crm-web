import React, { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../../../../../public/Job.jpg";

function CreateJobCategory() {
  const [formData, setFormData] = useState({
    categoryName: "",
    description: "",
    // Additional fields
    department: "",
    priorityLevel: "",
    isActive: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.categoryName.trim()) {
      toast.error("Category name is required.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/category", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        setFormData({
          categoryName: "",
          description: "",
          department: "",
          priorityLevel: "",
          isActive: false,
        });
      } else {
        toast.error(data.error || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to create category.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="flex w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-1/2 relative">
          <Image
            src={img}
            alt="Job Category"
            layout="fill"
            objectFit="cover"
            className="rounded-l-xl"
          />
        </div>

        {/* Form Section */}
        <div className="w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Create Job Category
          </h1>
          <p className="text-gray-600 mb-6">
            Fill out the form below to add a new job category.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Category Name
              </label>
              <input
                type="text"
                name="categoryName"
                value={formData.categoryName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter category name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter category description (optional)"
              />
            </div>

            {/* Additional Fields */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Department
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter department"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Priority Level
              </label>
              <select
                name="priorityLevel"
                value={formData.priorityLevel}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select priority level</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
                className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"
              />
              <label className="ml-2 block text-gray-700">
                Active
              </label>
            </div>

            <button
              type="submit"
              className={`w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 transition duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Category"}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default CreateJobCategory;
