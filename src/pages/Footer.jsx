import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="about-us">
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            Our job portal is designed to connect talented professionals with exciting career opportunities.
            We provide a platform for job seekers to explore diverse roles and for employers to find the perfect
            candidates to grow their teams.
          </p>
        </div>
        <div className="for-job-seekers">
          <h3 className="text-xl font-semibold mb-4">For Job Seekers</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Search Jobs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Create Profile</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Job Alerts</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Career Advice</a></li>
          </ul>
        </div>
        <div className="for-employers">
          <h3 className="text-xl font-semibold mb-4">For Employers</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Post a Job</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Search Resumes</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Recruitment Solutions</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Pricing Plans</a></li>
          </ul>
        </div>
        <div className="contact-info">
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p className="text-gray-400 mb-2">+1 (555) 123-4567</p>
          <p className="text-gray-400 mb-2">support@jobportal.com</p>
          <p className="text-gray-400">789 Career Avenue, Employment City, 54321</p>
        </div>
        <div className="follow-us">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
