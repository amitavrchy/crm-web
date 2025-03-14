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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    let dropdownTimeout;

    const handleMouseEnter = () => {
        clearTimeout(dropdownTimeout);
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        dropdownTimeout = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 200); // 200ms delay before closing
    };

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
                        <span>admin@user.com</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaPhoneAlt className="text-yellow-400" />
                        <span>+00000000000</span>
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
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => handleMouseLeave}
                        >
                            <button className="hover:text-gray-400 transition flex items-center">
                                Our Services ▼
                            </button>
                        </div>
                        <Link href="/allJobs" className="hover:text-gray-400 transition">Job Search</Link>
                        <Link href="/contactUs" className="hover:text-gray-400 transition">Contact Us</Link>
                        <Link href="/aboutUs" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition">About Us</Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button type="button" onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-2xl focus:outline-none">
                        <FaBars />
                    </button>
                </div>
                {/* Mega Menu (Full Width Under Logo) */}
                {isDropdownOpen && (
    <div
        className="absolute w-full left-0 mx-auto bg-gradient-to-b from-gray-100 to-gray-300 shadow-2xl rounded-lg py-6 px-12 grid grid-cols-3 gap-8 text-gray-800 z-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        {/* Recruitment Services */}
        <div className="bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105">
            <h3 className="font-bold text-lg text-gray-800 border-b pb-2 mb-4">🚀 Recruitment Service</h3>
            <ul className="space-y-3">
            <li className="font-semibold">
                    <i className="fas fa-user-tie mr-2"></i> <span className="text-gray-900 font-bold">Job Placement & Staffing</span>
                    <ul className="ml-4 mt-2 space-y-2">
                        <li><Link href="/permanentRecruitment"><i className="fas fa-check-circle mr-2"></i>Permanent Recruitment</Link></li>
                        <li><Link href="/temporary"><i className="fas fa-check-circle mr-2"></i>Temporary & Contract Staffing</Link></li>
                        <li><Link href="/searchHunting"><i className="fas fa-check-circle mr-2"></i>Executive Search & Headhunting</Link></li>
                        <li><Link href="/managedServiceProvider"><i className="fas fa-check-circle mr-2"></i>Managed Service Provider</Link></li>
                        <li><Link href="/staffingSolution"><i className="fas fa-check-circle mr-2"></i>Staffing Solution Company</Link></li>
                        <li><Link href="/staffingBank"><i className="fas fa-check-circle mr-2"></i>Staffing Bank Solutions</Link></li>
                        <li><Link href="/referral"><i className="fas fa-check-circle mr-2"></i>Referral : Refer a Friend</Link></li>
                    </ul>
                </li>
                <li className="font-semibold">
                    <i className="fas fa-user-tie mr-2"></i> <span className="text-gray-900 font-bold">Employer Support</span>
                    <ul className="ml-4 mt-2 space-y-2">
                        <li><Link href="/talentAcquisition"><i className="fas fa-check-circle mr-2"></i> Talent Acquisition & Workforce Planning</Link></li>
                        <li><Link href="/backgroundChecks"><i className="fas fa-check-circle mr-2"></i> Background Checks & Screening</Link></li>
                        <li><Link href="/diversityInclusion"><i className="fas fa-check-circle mr-2"></i> Diversity & Inclusion Hiring Solutions</Link></li>
                    </ul>
                </li>
                <li className="font-semibold">
                    <i className="fas fa-graduation-cap mr-2"></i> <span className="text-gray-900 font-bold">Candidate Services</span>
                    <ul className="ml-4 mt-2 space-y-2">
                        <li><Link href="/cvWriting"><i className="fas fa-check-circle mr-2"></i> CV Writing & Interview Coaching</Link></li>
                        <li><Link href="/careerCounseling"><i className="fas fa-check-circle mr-2"></i> Career Counseling & Job Matching</Link></li>
                        <li><Link href="/skillDevelopment"><i className="fas fa-check-circle mr-2"></i> Skill Development & Training</Link></li>
                    </ul>
                </li>
                <li className="font-semibold">
                    <i className="fas fa-search mr-2"></i> <span className="text-gray-900 font-bold">Specialized Recruitment</span>
                    <ul className="ml-4 mt-2 space-y-2">
                        <li><Link href="/itTechStaffing"><i className="fas fa-check-circle mr-2"></i> IT & Tech Staffing</Link></li>
                        <li><Link href="/healthcareNursing"><i className="fas fa-check-circle mr-2"></i> Healthcare & Nursing Placement</Link></li>
                        <li><Link href="/financeAccounting"><i className="fas fa-check-circle mr-2"></i> Finance & Accounting Recruitment</Link></li>
                        <li><Link href="/engineeringConstruction"><i className="fas fa-check-circle mr-2"></i> Engineering & Construction Recruitment</Link></li>
                    </ul>
                </li>
            </ul>
        </div>

        {/* Community Management Service */}
        <div className="bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105">
            <h3 className="font-bold text-lg text-gray-800 border-b pb-2 mb-4">🏡 Community Management</h3>
            <ul className="space-y-3">
                <li className="font-semibold">
                    <i className="fas fa-users mr-2"></i> <span className="text-gray-900 font-bold">Resident & Tenant Relations</span>
                    <ul className="ml-4 mt-2 space-y-2">
                        <li><Link href="/onboarding"><i className="fas fa-check-circle mr-2"></i> Onboarding & Welcome Services</Link></li>
                        <li><Link href="/conflictResolution"><i className="fas fa-check-circle mr-2"></i> Conflict Resolution & Mediation</Link></li>
                        <li><Link href="/communityEngagement"><i className="fas fa-check-circle mr-2"></i> Community Engagement & Events</Link></li>
                    </ul>
                </li>
                <li className="font-semibold">
                    <i className="fas fa-cogs mr-2"></i> <span className="text-gray-900 font-bold">Property & HOA Management</span>
                    <ul className="ml-4 mt-2 space-y-2">
                        <li><Link href="/leaseManagement"><i className="fas fa-check-circle mr-2"></i> Lease & Rental Management</Link></li>
                        <li><Link href="/policyImplementation"><i className="fas fa-check-circle mr-2"></i> Policy Implementation & Compliance</Link></li>
                        <li><Link href="/vendorCoordination"><i className="fas fa-check-circle mr-2"></i> Vendor & Service Coordination</Link></li>
                    </ul>
                </li>
                <li className="font-semibold">
                    <i className="fas fa-laptop-house mr-2"></i> <span className="text-gray-900 font-bold">Digital & Social Engagement</span>
                    <ul className="ml-4 mt-2 space-y-2">
                        <li><Link href="/socialMediaModeration"><i className="fas fa-check-circle mr-2"></i> Social Media & Online Community Moderation</Link></li>
                        <li><Link href="/announcementManagement"><i className="fas fa-check-circle mr-2"></i> Communication & Announcement Management</Link></li>
                        <li><Link href="/emergencyCommunication"><i className="fas fa-check-circle mr-2"></i> Emergency & Crisis Communication</Link></li>
                    </ul>
                </li>
            </ul>
        </div>

        {/* Facility Management Service */}
        <div className="bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105">
            <h3 className="font-bold text-lg text-gray-800 border-b pb-2 mb-4">🏢 Facility Management</h3>
            <ul className="space-y-3">
                <li className="font-semibold">
                    <i className="fas fa-tools mr-2"></i> <span className="text-gray-900 font-bold">Building & Property Maintenance</span>
                    <ul className="ml-4 mt-2 space-y-2">
                        <li><Link href="/preventativeMaintenance"><i className="fas fa-check-circle mr-2"></i> Preventative Maintenance & Repairs</Link></li>
                        <li><Link href="/janitorialServices"><i className="fas fa-check-circle mr-2"></i> Janitorial & Housekeeping Services</Link></li>
                        <li><Link href="/landscapingServices"><i className="fas fa-check-circle mr-2"></i> Landscaping & Groundskeeping</Link></li>
                    </ul>
                </li>
                <li className="font-semibold">
                    <i className="fas fa-shield-alt mr-2"></i> <span className="text-gray-900 font-bold">Security & Safety Management</span>
                    <ul className="ml-4 mt-2 space-y-2">
                        <li><Link href="/cctvSurveillance"><i className="fas fa-check-circle mr-2"></i> CCTV Surveillance & Security Staffing</Link></li>
                        <li><Link href="/fireSafety"><i className="fas fa-check-circle mr-2"></i> Fire Safety & Emergency Response</Link></li>
                        <li><Link href="/accessControl"><i className="fas fa-check-circle mr-2"></i> Access Control & Visitor Management</Link></li>
                    </ul>
                </li>
                <li className="font-semibold">
                    <i className="fas fa-bolt mr-2"></i> <span className="text-gray-900 font-bold">Utility & Energy Management</span>
                    <ul className="ml-4 mt-2 space-y-2">
                        <li><Link href="/hvacServices"><i className="fas fa-check-circle mr-2"></i> HVAC, Electrical, & Plumbing Services</Link></li>
                        <li><Link href="/energyEfficiency"><i className="fas fa-check-circle mr-2"></i> Energy Efficiency & Sustainability Consulting</Link></li>
                        <li><Link href="/wasteManagement"><i className="fas fa-check-circle mr-2"></i> Waste Management & Recycling Solutions</Link></li>
                    </ul>
                </li>
                <li className="font-semibold">
                    <i className="fas fa-building mr-2"></i> <span className="text-gray-900 font-bold">Workplace & Office Support</span>
                    <ul className="ml-4 mt-2 space-y-2">
                        <li><Link href="/officeSpacePlanning"><i className="fas fa-check-circle mr-2"></i> Office Space Planning & Setup</Link></li>
                        <li><Link href="/cleaningServices"><i className="fas fa-check-circle mr-2"></i> Cleaning & Sanitization Services</Link></li>    
                    </ul>
                </li>
            </ul>
        </div>
    </div>
)}

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
                                        <Link href="/services/recruitment" className="block text-gray-300 hover:text-white transition">Recruitment</Link>
                                        <Link href="/services/community" className="block text-gray-300 hover:text-white transition">Community Services</Link>
                                        <Link href="/services/facility" className="block text-gray-300 hover:text-white transition">Facility Management</Link>
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