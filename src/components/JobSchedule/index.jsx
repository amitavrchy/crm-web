"use client";
import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, User } from "lucide-react";
import { motion } from "framer-motion";
import "animate.css";

function JobSchedule() {
  const users = [
    { name: "Andy Bennard", role: "Full User" },
    { name: "Jarryd Manson", role: "Full User" },
    { name: "Andy Benson", role: "Full User" },
    { name: "Contractor A", role: "Tradesman" },
  ];

  const jobDetails = {
    "Andy Bennard": [
      { task: "FERG-17A - Replace Spouting", address: "45 Duke St, Auckland Central", details: "Spouting on the front is holding water.", color: "border-blue-500" },
      { task: "FERG-554A - Fred Jones", address: "15 Seaview Road, Piha", details: "Take 100mm pipe and fittings", color: "border-green-500" },
    ],
    "Andy Benson": [
      { task: "FERG-17A - Replace Spouting", address: "45 Duke St, Auckland Central", details: "Spouting on the front is holding water.", color: "border-blue-500" },
      { task: "FERG-554A - Fred Jones", address: "15 Seaview Road, Piha", details: "Take 100mm pipe and fittings", color: "border-green-500" },
    ],
    "Jarryd Manson": [
      { task: "FERG-22B - Roof Maintenance", address: "12 Ocean Drive, Wellington", details: "Inspect and repair minor leaks.", color: "border-yellow-500" }
    ],
    "Contractor A": [
      { task: "FERG-17A - Quote", address: "45 Porritt Ave", details: "Replace Carpet", color: "border-orange-500" },
    ],
  };

  const [selectedUser, setSelectedUser] = useState(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeInUp");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between bg-white p-10 max-w-7xl mx-auto py-20 gap-5">
      <div ref={(el) => sectionsRef.current.push(el)} className="lg:w-1/2 text-left">
        <h3 className="text-orange-500 font-bold text-sm uppercase">Job Scheduling</h3>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">See what's going on at a glance</h2>
        <p className="text-gray-600 mt-4">
          Get a complete overview of your booked jobs, unassigned jobs, and team availability. Forget double-booking – you’ll know at a glance who is best placed to get the job done.
        </p>
        <ul className="mt-6 space-y-3">
          {["Assign team members to jobs in seconds", "Schedule team meetings, holidays etc", "Day/Week/Fortnight View"].map((item, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <CheckCircle className="text-orange-500 w-5 h-5 mr-3" /> {item}
            </li>
          ))}
        </ul>
      </div>
      
      <div ref={(el) => sectionsRef.current.push(el)} className="lg:w-1/2 mt-10 lg:mt-0 bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-lg flex flex-col">
        {users.map((user, index) => (
          <div
            key={index}
            className={`flex items-center space-x-4 py-3 border-b last:border-b-0 border-gray-300 cursor-pointer hover:bg-gray-200 transition-all ${selectedUser === user.name ? "bg-gray-300" : ""}`}
            onClick={() => setSelectedUser(user.name)}
          >
            <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full">
              <User className="text-gray-600" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{user.name}</p>
              <p className="text-gray-500 text-sm">{user.role}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedUser && jobDetails[selectedUser]?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          ref={(el) => sectionsRef.current.push(el)}
          className="lg:w-1/3 bg-white p-4 rounded-lg shadow-md ml-6"
        >
          <h3 className="text-lg font-bold text-gray-900">Tasks for {selectedUser}</h3>
          {jobDetails[selectedUser].map((job, idx) => (
            <div key={idx} className={`mt-3 p-3 border-l-4 ${job.color} bg-gray-50 shadow-sm rounded`}> 
              <p className="font-semibold text-gray-800">{job.task}</p>
              <p className="text-gray-600 text-sm">{job.address}</p>
              <p className="text-gray-500 text-xs">{job.details}</p>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default JobSchedule;