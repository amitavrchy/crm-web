"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import logo from "../../../public/drWhiteLogo.png";
import Link from "next/link";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const router = useRouter();
    const { data: session, status } = useSession();
    const userType = session?.user?.userType?.toLowerCase();
    const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
    const [isInsightsMenuOpen, setIsInsightsMenuOpen] = useState(false);

    const handleMouseEnter = (menu) => {
        clearTimeout(dropdownTimeout);
        if (menu === "services") {
            setIsServicesMenuOpen(true);
            setIsInsightsMenuOpen(false);
        } else if (menu === "insights") {
            setIsInsightsMenuOpen(true);
            setIsServicesMenuOpen(false);
        }
    };

    const handleMouseLeave = () => {
        dropdownTimeout = setTimeout(() => {
            setIsServicesMenuOpen(false);
            setIsInsightsMenuOpen(false);
        }, 200)
    };
    let dropdownTimeout;

    const dashboardRoutes = {
        admin: "/dashboard/admin",
        vendor: "/dashboard/vendor",
        client: "/dashboard/client",
        employee: "/dashboard/employee",
    };

    const dashboardLink = userType ? dashboardRoutes[userType] || "/dashboard" : "/dashboard";

    useEffect(() => {
        console.log("User Type:", userType);
        console.log("Redirecting to:", dashboardLink);
    }, [userType]);

    const handleSignOut = async () => {
        await signOut({ callbackUrl: "/" });
    };

    const goToDashboard = () => {
        if (userType) {
            router.push(dashboardLink);
        } else {
            router.push("/dashboard");
        }
    };

    return (
        <div>
            {/* Top Navbar */}
            <div className="bg-gray-700 text-white text-sm py-3 px-6 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 mb-2 md:mb-0">
                    <div className="flex items-center space-x-1">
                        <FaEnvelope className="text-yellow-400" />
                        <span>info@demandrecruitmentservices.co.uk</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaPhoneAlt className="text-yellow-400" />
                        <span>+44 0203 876 1531</span>
                    </div>
                </div>
                <div className="flex space-x-6">
                    {status === "authenticated" ? (
                        <>
                            <button onClick={goToDashboard} className="hover:text-yellow-400 transition">
                                Dashboard
                            </button>
                            <button onClick={handleSignOut} className="hover:text-yellow-400 transition">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/signUp" className="hover:text-yellow-400 transition">
                                Become a vendor
                            </Link>
                            <Link href="/signIn" className="hover:text-yellow-400 transition">
                                Login
                            </Link>
                            <Link href="/signUp" className="hover:text-yellow-400 transition">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-gray-800 text-white py-4">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/">
                        <Image src={logo} alt="LOGO" width={80} height={60} className="opacity-70" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link href="/" className="hover:text-gray-400 transition">Home</Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("services")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link href="/services">
                                <button className="hover:text-gray-400 transition flex items-center">
                                    Our Services ▼
                                </button>
                            </Link>
                            {/* Submenu */}
                            {isServicesMenuOpen && (
                                <div className="absolute bg-white text-gray-800 shadow-xl w-48 mt-2 p-4 rounded-lg z-10">
                                    <Link href="/recruitment" className="block py-2 hover:text-[#EA580C] transition">Recruitment Services</Link>
                                    <Link href="/communityService" className="block py-2 hover:text-[#EA580C] transition">Community Services</Link>
                                    <Link href="/facilityService" className="block py-2 hover:text-[#EA580C] transition">Facility Management</Link>
                                </div>
                            )}
                        </div>
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("insights")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="hover:text-gray-400 transition flex items-center">
                                Insights ▼
                            </button>
                            {/* Submenu */}
                            {isInsightsMenuOpen && (
                                <div className="absolute bg-white text-gray-800 shadow-xl w-48 mt-2 p-4 rounded-lg z-10">
                                    <Link href="/employerResource" className="block py-2 hover:text-[#EA580C] transition">Employer Resource</Link>
                                    <Link href="/jobSeekerResource" className="block py-2 hover:text-[#EA580C] transition">Job Seeker Resource</Link>
                                </div>
                            )}
                        </div>

                        <Link href="/allJobs" className="hover:text-gray-400 transition">Find a Job</Link>
                        <Link href="/contactUs" className="hover:text-gray-400 transition">Contact Us</Link>
                        <Link href="/aboutUs" className="hover:text-gray-400 transition">About Us</Link>
                        <Link href="/employer" className="border-2 border-orange-500 bg-transparent hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition">Employer</Link>
                        <Link href="/employees" className="border-2 border-orange-500 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition">Employee</Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button type="button" onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-2xl focus:outline-none">
                        <FaBars />
                    </button>
                </div>

                {/* Mobile Sidebar */}
                {isSidebarOpen && (
                    <>
                        <div className="fixed inset-0 bg-black/50 z-30" onClick={() => setIsSidebarOpen(false)} />
                        <div className="fixed top-0 left-0 h-full w-64 bg-black text-white transform transition-transform duration-300 z-40">
                            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
                                <h2 className="text-xl font-bold">Menu</h2>
                                <button type="button" onClick={() => setIsSidebarOpen(false)} className="text-2xl focus:outline-none">
                                    <FaTimes />
                                </button>
                            </div>
                            <div className="flex flex-col space-y-6 my-6 px-4">
                                <Link href="/" className="text-lg hover:text-gray-400 transition">Home</Link>

                                {/* Services Dropdown */}
                                <div className="relative">
                                    <button className="text-lg hover:text-gray-400 transition flex items-center">
                                        Our Services ▼
                                    </button>
                                    <div className="ml-4 mt-2 space-y-2">
                                        <Link href="/services/recruitment" className="block text-gray-300 hover:text-[#EA580C]">Recruitment Service</Link>
                                        <Link href="/services/community" className="block text-gray-300 hover:text-[#EA580C]">Community Services</Link>
                                        <Link href="/services/facility" className="block text-gray-300 hover:text-[#EA580C]">Facility Management</Link>
                                    </div>
                                </div>

                                <Link href="/jobSearch" className="text-lg hover:text-gray-400 transition">Job Search</Link>
                                <Link href="/aboutUs" className="bg-orange-500 hover:bg-orange-600 text-white text-center px-6 py-2 rounded-lg transition">About Us</Link>
                                <Link href="/contactUs" className="text-lg hover:text-gray-400 transition">Contact Us</Link>
                            </div>
                        </div>
                    </>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
