"use client";

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import img from "../../../public/singleJob.jpg";

// Raw image imports
import img1 from '../../../public/about-us/about-1.jpg';
import img2 from '../../../public/about-us/about-2.jpg';
import img3 from '../../../public/about-us/about-3.jpg';
import img5 from '../../../public/about-us-wte/2.jpg';
import img6 from '../../../public/about-us-wte/3.jpg';
import img7 from '../../../public/about-us-wte/4.jpg';

const imageMap = {
    "Project Alpha": img1,
    "Project Beta": img2,
    "Project Gamma": img3,
    "Project Delta": img5,
    "Project Epsilon": img6,
    "Project Zeta": img7
};

function ProjectsPage() {
    const [ongoingProjects, setOngoingProjects] = useState([]);
    const [completedProjects, setCompletedProjects] = useState([]);

    useEffect(() => {
        fetch('/api/projects')
            .then(response => response.json())
            .then(data => {
                const ongoing = data.filter(project => project.status === 'ongoing')
                                    .map(project => ({ ...project, src: imageMap[project.name] || img }));
                const completed = data.filter(project => project.status === 'completed')
                                      .map(project => ({ ...project, src: imageMap[project.name] || img }));
                setOngoingProjects(ongoing);
                setCompletedProjects(completed);
            })
            .catch(error => console.error("Error fetching projects:", error));
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />

            {/* Banner Section */}
            <div className="relative w-full h-64 md:h-80 lg:h-96">
                <Image src={img} alt="Projects Banner" layout="fill" objectFit="cover" className="opacity-80" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                    <h1 className="text-5xl font-bold drop-shadow-lg">Our Projects</h1>
                    <p className="text-lg mt-2 max-w-2xl px-4">
                        Explore our ongoing and completed projects that showcase our expertise and dedication.
                    </p>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="max-w-7xl mx-auto py-16 px-6">
                <Tab.Group>
                    <Tab.List className="flex justify-center space-x-4 bg-orange-500 text-white rounded-xl p-2">
                        <Tab className={({ selected }) =>
                            `px-6 py-2 font-semibold rounded-lg focus:outline-none ${
                                selected ? 'bg-white text-orange-600 shadow' : 'hover:bg-orange-600'
                            }`
                        }>
                            Ongoing Projects
                        </Tab>
                        <Tab className={({ selected }) =>
                            `px-6 py-2 font-semibold rounded-lg focus:outline-none ${
                                selected ? 'bg-white text-orange-600 shadow' : 'hover:bg-orange-600'
                            }`
                        }>
                            Completed Projects
                        </Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-8">
                        <Tab.Panel className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {ongoingProjects.map((project, index) => (
                                <div key={index} className="relative group rounded-2xl overflow-hidden shadow-xl">
                                    <Image src={project.src} alt={project.name} layout="responsive" width={600} height={400} className="transition-transform duration-300 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-center p-4">
                                        <FaSearch className="text-4xl mb-2" />
                                        <p className="text-lg font-semibold">{project.name}</p>
                                        <p className="text-sm">{project.location}</p>
                                        <p className="text-sm">{project.date}</p>
                                    </div>
                                </div>
                            ))}
                        </Tab.Panel>
                        <Tab.Panel className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {completedProjects.map((project, index) => (
                                <div key={index} className="relative group rounded-2xl overflow-hidden shadow-xl">
                                    <Image src={project.src} alt={project.name} layout="responsive" width={600} height={400} className="transition-transform duration-300 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-center p-4">
                                        <FaSearch className="text-4xl mb-2" />
                                        <p className="text-lg font-semibold">{project.name}</p>
                                        <p className="text-sm">{project.location}</p>
                                        <p className="text-sm">{project.date}</p>
                                    </div>
                                </div>
                            ))}
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>

            <Footer />
        </div>
    );
}

export default ProjectsPage;
