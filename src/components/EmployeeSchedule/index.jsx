"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Select from "react-select";

const months = [
    { value: "oct-2019", label: "October 2019" },
    { value: "nov-2018", label: "November 2018" },
    { value: "dec-2018", label: "December 2018" },
    { value: "jan-2019", label: "January 2019" },
    { value: "feb-2019", label: "February 2019" },
];

const totalsOptions = [
    { value: "none", label: "None" },
    { value: "shift-hours", label: "Shift count/hours" },
    { value: "competencies", label: "Competencies/Skills" },
    { value: "manning", label: "Manning Levels" },
];

function EmployeeSchedule() {
    const [selectedMonth, setSelectedMonth] = useState(months[0]);
    const [selectedTotal, setSelectedTotal] = useState(totalsOptions[0]);

    return (
        <div className="bg-gray-100 p-8 py-20 flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
                {/* Left Section: Controls */}
                <div className="space-y-6">
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md w-full">
                        Show Planner
                    </button>

                    <div>
                        <label
                            htmlFor="month"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            View Month
                        </label>
                        <Select
                            id="month"
                            options={months}
                            value={selectedMonth}
                            onChange={setSelectedMonth}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="totals"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Show Totals
                        </label>
                        <Select
                            id="totals"
                            options={totalsOptions}
                            value={selectedTotal}
                            onChange={setSelectedTotal}
                        />
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between">
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md flex items-center">
                            <FaChevronLeft className="mr-2" /> Prev Month
                        </button>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md flex items-center">
                            Next Month <FaChevronRight className="ml-2" />
                        </button>
                    </div>
                </div>

                {/* Right Section: Text */}
                <div className="text-gray-800 space-y-4 space-x-4">
                    <p className="text-orange-600 leading-relaxed font-bold">Templated Shifts</p>
                    <h1 className="text-3xl font-bold mb-4">Smart Employee Scheduling</h1>
                    <p className="text-gray-600 leading-relaxed">
                        Create employee schedules and build team rotas in minutes. Use
                        agile planning to avoid conflicts, select skill sets, set staffing
                        levels, manage tasks, and ensure the right mix of people day-in,
                        day-out.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default EmployeeSchedule;
