import React from 'react';
import { FaTrophy, FaUsers, FaBriefcase, FaChartLine } from 'react-icons/fa';

function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy className="text-5xl text-orange-500 mx-auto" />,
      title: 'Award-Winning Service',
      description: 'Recognized for excellence in recruitment services.',
    },
    {
      icon: <FaUsers className="text-5xl text-orange-500 mx-auto" />,
      title: '10,000+ Happy Clients',
      description: 'Successfully matched thousands of candidates with top companies.',
    },
    {
      icon: <FaBriefcase className="text-5xl text-orange-500 mx-auto" />,
      title: 'Diverse Job Placements',
      description: 'Placed candidates in various industries worldwide.',
    },
    {
      icon: <FaChartLine className="text-5xl text-orange-500 mx-auto" />,
      title: 'Consistent Growth',
      description: 'Achieved a 50% growth rate year over year.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center space-y-4 transform transition duration-500 hover:scale-105"
            >
              {achievement.icon}
              <h3 className="text-xl font-semibold text-gray-800">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
