"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const VendorProfileManagement = () => {
  const { data: session } = useSession();
  const [vendor, setVendor] = useState(null);
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (session?.user?.email) {
      fetchVendorData(session.user.email);
    }
  }, [session]);

  const fetchVendorData = async (email) => {
    try {
      const response = await axios.get(`/api/vendorProfile?email=${email}`);
      setVendor(response.data);
    } catch (error) {
      console.error("Error fetching vendor data:", error);
      setError("Failed to load vendor profile.");
    }
  };

  const handleChange = (e) => {
    setVendor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    try {
      await axios.put("/api/vendorProfile", vendor);
      setMessage("Profile updated successfully");
      setEditing(false);
      setError("");
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("Failed to update profile.");
    }
  };

  if (!vendor) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-500">{message}</p>}

        <h2 className="text-2xl font-semibold mb-4">Vendor Profile</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Name:</label>
          {editing ? (
            <input
              type="text"
              name="username"
              value={vendor.username}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          ) : (
            <p className="p-2 border rounded bg-gray-50">{vendor.username}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email:</label>
          <p className="p-2 border rounded bg-gray-50">{vendor.email}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Contact Info:</label>
          {editing ? (
            <input
              type="text"
              name="contactInfo"
              value={vendor.contactInfo || ""}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          ) : (
            <p className="p-2 border rounded bg-gray-50">{vendor.contactInfo}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Has Manpower:</label>
          {editing ? (
            <select
              name="hasManpower"
              value={vendor.hasManpower || ""}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          ) : (
            <p className="p-2 border rounded bg-gray-50">{vendor.hasManpower}</p>
          )}
        </div>

        {vendor.hasManpower === "yes" && (
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Manpower Count:</label>
            {editing ? (
              <input
                type="number"
                name="manpowerCount"
                value={vendor.manpowerCount || ""}
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />
            ) : (
              <p className="p-2 border rounded bg-gray-50">{vendor.manpowerCount}</p>
            )}
          </div>
        )}

        <button
          onClick={() => (editing ? handleSave() : setEditing(true))}
          className="mt-4 w-full px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          {editing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default VendorProfileManagement;
