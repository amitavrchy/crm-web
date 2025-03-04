import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const ReportsAnalyticsVendor = () => {
    const barData = {
        labels: ["Collaboration", "Data Center", "Borderless Network"],
        datasets: [
            {
                label: "Specialization",
                data: [90, 120, 80],
                backgroundColor: ["#4ADE80", "#3B82F6", "#8B5CF6"],
            },
        ],
    };

    const doughnutData = {
        labels: ["Not Expiring", "Expiring"],
        datasets: [
            {
                data: [85, 15],
                backgroundColor: ["#22C55E", "#EF4444"],
            },
        ],
    };

    const financialSummary = [
        { category: "Collaboration", spent: 28565, remaining: 5728 },
        { category: "Data Center", spent: 30825, remaining: 0 },
        { category: "Borderless Networks", spent: 30365, remaining: 9772 },
    ];

    return (
        <div className="p-6 bg-gray-50 text-gray-800 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
                Vendor KPI Dashboard
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Role Holder Alerts */}
                <div className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
                    <h2 className="font-semibold text-lg mb-2 text-gray-700">Role Holder Alerts</h2>
                    <div className="text-center">
                        <p className="text-4xl font-extrabold text-green-500">3</p>
                        <p className="text-sm text-gray-500">Expiring in 90 days</p>
                    </div>
                </div>

                {/* Expiring Certifications */}
                <div className="p-4 bg-white shadow-md rounded-lg">
                    <h2 className="font-semibold text-lg mb-2 text-gray-700">Expiring Certifications</h2>
                    <div className="h-48">
                        <Doughnut data={doughnutData} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>

                {/* Role Holder Summary */}
                <div className="p-4 bg-white shadow-md rounded-lg">
                    <h2 className="font-semibold text-lg mb-2 text-gray-700">Role Holder Summary</h2>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>
                            Partner Status: <span className="text-yellow-500">Gold</span>
                        </li>
                        <li>15 Employees</li>
                        <li>18 Roles</li>
                        <li>35 Certifications</li>
                    </ul>
                </div>

                {/* Specialization Chart */}
                <div className="p-4 bg-white shadow-md rounded-lg sm:col-span-2 lg:col-span-3">
                    <h2 className="font-semibold text-lg mb-4 text-gray-700">Specialization Chart</h2>
                    <div className="h-64">
                        <Bar data={barData} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>

                {/* Financial Summary */}
                <div className="p-4 bg-white shadow-md rounded-lg sm:col-span-2">
                    <h2 className="font-semibold text-lg mb-4 text-gray-700">Financial Summary</h2>
                    <table className="w-full text-left text-sm text-gray-600 border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="p-2">Category</th>
                                <th className="p-2">Spent</th>
                                <th className="p-2">Remaining</th>
                            </tr>
                        </thead>
                        <tbody>
                            {financialSummary.map((item, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td className="p-2">{item.category}</td>
                                    <td className="p-2">${item.spent.toLocaleString()}</td>
                                    <td className="p-2">${item.remaining.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className="p-2 font-semibold">Total</td>
                                <td className="p-2 font-semibold">
                                    ${financialSummary.reduce((sum, item) => sum + item.spent, 0).toLocaleString()}
                                </td>
                                <td className="p-2 font-semibold">
                                    ${financialSummary.reduce((sum, item) => sum + item.remaining, 0).toLocaleString()}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                {/* Import Status */}
                <div className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
                    <h2 className="font-semibold text-lg mb-2 text-gray-700">Import Status</h2>
                    <p className="text-sm text-gray-500">Last Successful Import:</p>
                    <p className="text-2xl font-bold text-green-500">15/06/17</p>
                </div>
            </div>
        </div>

    );
};

export default ReportsAnalyticsVendor;
