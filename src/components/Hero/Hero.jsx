import React from 'react';
import CountUp from 'react-countup';
import { HiLocationMarker } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side */}
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <div className="relative mb-8">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: 'spring'
              }}
              className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
            >
              Find Your Dream<br /> Job Today
            </motion.h1>
          </div>
          <p className="text-gray-600 text-lg mb-6">
            Ready to take the next step in your career? Discover thousands of opportunities with JobFinder.
          </p>
          <div className="relative w-full flex items-center mb-8">
            <HiLocationMarker className="absolute left-4 text-blue-500 text-2xl" />
            <input
              type="text"
              placeholder="Search job titles, companies, locations..."
              className="w-full py-3 pl-12 pr-4 rounded-lg shadow-lg focus:outline-none"
            />
            <button className="absolute right-0 py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Search
            </button>
          </div>
          <div className="flex space-x-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-500">
                <CountUp start={1000} end={5000} duration={4} />
                <span>+</span>
              </span>
              <span className="text-gray-600">Job Listings</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-500">
                <CountUp start={500} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="text-gray-600">Companies Hiring</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-500">
                <CountUp end={100} />
                <span>+</span>
              </span>
              <span className="text-gray-600">Industry Awards</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <motion.div
            className="w-96 h-96 rounded-full overflow-hidden shadow-lg"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: 'spring'
            }}
            whileHover={{ rotate: [0, 10, -10, 10, -10, 0], transition: { duration: 0.6 } }}
          >
            <img src="./bbbb.jpg" alt="Professional Working on PC" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


