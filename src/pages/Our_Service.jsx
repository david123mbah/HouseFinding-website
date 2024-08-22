import React from 'react';
import { FaSearch, FaFileAlt, FaUsers, FaBriefcase, FaHandshake, FaPhoneAlt } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="services py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="service-box p-8 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform">
            <FaSearch className="text-blue-500 text-6xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Job Search</h3>
            <p className="text-gray-600">Find your dream job with our advanced job search tools.</p>
          </div>
          <div className="service-box p-8 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform">
            <FaFileAlt className="text-blue-500 text-6xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Resume Builder</h3>
            <p className="text-gray-600">Create a professional resume that stands out to employers.</p>
          </div>
          <div className="service-box p-8 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform">
            <FaUsers className="text-blue-500 text-6xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Candidate Management</h3>
            <p className="text-gray-600">Easily manage and track your job applications.</p>
          </div>
          <div className="service-box p-8 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform">
            <FaBriefcase className="text-blue-500 text-6xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Employer Services</h3>
            <p className="text-gray-600">Access a large pool of qualified candidates for your job openings.</p>
          </div>
          <div className="service-box p-8 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform">
            <FaHandshake className="text-blue-500 text-6xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Interview Preparation</h3>
            <p className="text-gray-600">Get tips and resources to ace your job interviews.</p>
          </div>
          <div className="service-box p-8 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform">
            <FaPhoneAlt className="text-blue-500 text-6xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Receive assistance whenever you need it with our round-the-clock support.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
