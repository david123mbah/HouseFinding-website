import React from 'react';
import './Card.css';
import { BiTimeFive } from 'react-icons/bi';

function Card({ props }) {
  const jobItems = props.map((job) => (
    <div
      key={job.property_id}
      className="job-card w-full sm:w-[350px] p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="card-header flex items-center mb-4">
        <img className="w-20 h-20 object-cover rounded-full border-2 border-gray-200" src={job.image} alt="Company Logo" />
        <div className="ml-4">
          <h1 className="text-lg font-semibold text-gray-800">{job.location}</h1>
          <h6 className="text-gray-600">{job.category}</h6>
          <p className="text-md text-gray-700 mt-1">{job.cost} FCFA</p>
        </div>
      </div>
      <p className="text-gray-600 mt-2">{job.description}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
          Show Details
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300">
          Apply Now
        </button>
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="search-bar-container mb-12 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search job titles, companies, locations..."
            className="w-full py-3 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-0 top-0 mt-2 mr-2 py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Search
          </button>
        </div>
      </div>

      <div className="heading text-center mb-12">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Explore Job Opportunities</h1>
        <p className="text-gray-600">Find your next career move with us</p>
      </div>

      <div className="job-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {jobItems}
      </div>
    </div>
  );
}

export default Card;
