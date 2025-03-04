"use client";
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import "leaflet/dist/leaflet.css";
import { faker } from "@faker-js/faker";
import "tailwindcss/tailwind.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);


function ReportsAnalyticsAdmin() {
    const generatePerformanceData = (num) => {
        return Array.from({ length: num }, () => ({
            name: faker.person.fullName(),
            performance: faker.number.int({ min: 50, max: 100 }),
        }));
    };
    

    const vendors = generatePerformanceData(5);
    const employees = generatePerformanceData(5);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Page Header */}
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            </header>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Sales", value: "2,382", change: "+8.2%", color: "text-green-500" },
                    { title: "Earnings", value: "$21,300", change: "+6.3%", color: "text-green-500" },
                    { title: "Visitors", value: "14,212", change: "-3.2%", color: "text-red-500" },
                    { title: "Orders", value: "64", change: "-2.3%", color: "text-red-500" },
                ].map((card, idx) => (
                    <div
                        key={idx}
                        className="p-4 bg-white rounded-lg shadow-md flex flex-col items-start"
                    >
                        <h2 className="text-sm text-gray-600 font-medium mb-1">
                            {card.title}
                        </h2>
                        <p className="text-2xl font-bold text-gray-800">{card.value}</p>
                        <p className={`text-sm ${card.color}`}>{card.change} Since last week</p>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                {/* Job Status Chart */}
                <div className="p-4 bg-white rounded-lg shadow-md col-span-2">
                    <h2 className="text-lg font-medium text-gray-700 mb-4">Job Status Overview</h2>
                    <div className="h-60">
                        <Bar
                            data={{
                                labels: ["Active Jobs", "Completed Jobs", "Pending Requests"],
                                datasets: [
                                    {
                                        label: "Jobs",
                                        data: [50, 120, 30],
                                        backgroundColor: ["#4F46E5", "#10B981", "#F59E0B"],
                                    },
                                ],
                            }}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                            }}
                        />
                    </div>
                </div>

                {/* Financial Overview Chart */}
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-lg font-medium text-gray-700 mb-4">Financial Overview</h2>
                    <div className="h-60">
                        <Line
                            data={{
                                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                                datasets: [
                                    {
                                        label: "Revenue",
                                        data: [5000, 7000, 8000, 6000, 9000, 10000],
                                        borderColor: "#10B981",
                                        fill: true,
                                        backgroundColor: "rgba(16, 185, 129, 0.1)",
                                    },
                                    {
                                        label: "Expenses",
                                        data: [3000, 4000, 3000, 5000, 4000, 6000],
                                        borderColor: "#EF4444",
                                        fill: true,
                                        backgroundColor: "rgba(239, 68, 68, 0.1)",
                                    },
                                ],
                            }}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Performance Metrics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Vendor Performance */}
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-lg font-medium text-gray-700 mb-4">Vendor Performance</h2>
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2">Vendor Name</th>
                                <th className="py-2">Performance (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vendors.map((vendor, idx) => (
                                <tr key={idx} className="text-center">
                                    <td className="py-2">{vendor.name}</td>
                                    <td className="py-2">{vendor.performance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Employee Performance */}
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-lg font-medium text-gray-700 mb-4">Employee Performance</h2>
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2">Employee Name</th>
                                <th className="py-2">Performance (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee, idx) => (
                                <tr key={idx} className="text-center">
                                    <td className="py-2">{employee.name}</td>
                                    <td className="py-2">{employee.performance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ReportsAnalyticsAdmin;


