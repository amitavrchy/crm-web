"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const AccountApprovalEmployee = () => {
    const { data: session } = useSession();
    const [formData, setFormData] = useState({
        email: "",
        certification: "",
        skills: "",
        lastCompany: "",
    });
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (session?.user?.email) {
            setFormData((prevData) => ({ ...prevData, email: session.user.email }));
        }
    }, [session]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put("/api/user", { ...formData, status: "approved" });
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Error approving user");
        }
    };

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full text-white">
                    <h2 className="text-2xl font-bold mb-4">Employee Approval</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            className="w-full p-3 rounded bg-gray-700 text-white cursor-not-allowed"
                            readOnly
                        />
                        <input
                            type="text"
                            name="certification"
                            placeholder="Certification"
                            className="w-full p-3 rounded bg-gray-700 text-white"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="skills"
                            placeholder="Skills"
                            className="w-full p-3 rounded bg-gray-700 text-white"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="lastCompany"
                            placeholder="Last Company"
                            className="w-full p-3 rounded bg-gray-700 text-white"
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="w-full bg-orange-500 p-3 rounded hover:bg-orange-600 transition">
                            Approve
                        </button>
                    </form>
                    {message && <p className="mt-4 text-center text-orange-400">{message}</p>}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AccountApprovalEmployee;
