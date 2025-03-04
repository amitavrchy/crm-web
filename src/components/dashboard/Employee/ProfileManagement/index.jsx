"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const EmployeeProfile = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  const [newInterest, setNewInterest] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (session?.user?.email) {
      fetchUserData(session.user.email);
    }
  }, [session]);

  const fetchUserData = async (email) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/employeeProfile?email=${email}`);
      setUser(response.data.data);
      setError("");
    } catch (error) {
      console.error("Error fetching user data", error);
      setError("Failed to load profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const handleAddItem = useCallback((field, valueSetter, value) => {
    if (value.trim()) {
      setUser((prevUser) => ({ ...prevUser, [field]: [...(prevUser[field] || []), value] }));
      valueSetter("");
    }
  }, []);

  const handleRemoveItem = useCallback((field, index) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: prevUser[field].filter((_, i) => i !== index),
    }));
  }, []);

  const handleSave = async () => {
    try {
      await axios.put("/api/employeeProfile", user);
      setMessage("Profile updated successfully");
      setEditing(false);
      setError("");
    } catch (error) {
      console.error("Error updating profile", error);
      setError("Failed to update profile");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-500">{message}</p>}

        <div className="flex flex-col items-center mb-6">
          {editing ? (
            <input type="text" name="name" value={user.name} onChange={handleChange} className="text-xl font-semibold mb-2 text-center border p-1 rounded bg-gray-200" />
          ) : (
            <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
          )}
          <p className="text-gray-500">{user.jobTitle} - {user.department}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {editing ? <input type="text" name="phone" value={user.phone} onChange={handleChange} className="border p-1 rounded bg-gray-200" /> : user.phone}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Skills</h3>
          <ul>
            {user.skills?.map((skill, index) => (
              <li key={index} className="flex justify-between">
                {skill}
                {editing && <button onClick={() => handleRemoveItem("skills", index)} className="text-red-500 ml-2">x</button>}
              </li>
            ))}
          </ul>
          {editing && (
            <div className="mt-2 flex gap-2">
              <input type="text" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} className="border p-1 rounded bg-gray-200" />
              <button onClick={() => handleAddItem("skills", setNewSkill, newSkill)} className="px-3 py-1 bg-green-500 text-white rounded">Add</button>
            </div>
          )}
        </div>

        <button onClick={() => (editing ? handleSave() : setEditing(true))} className="mt-4 w-full px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition">
          {editing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default EmployeeProfile;
