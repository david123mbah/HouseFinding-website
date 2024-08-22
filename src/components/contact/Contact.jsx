import React from 'react';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
  // Function to open WhatsApp with pre-filled message
  const openWhatsApp = (phoneNumber, message) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-8">
            We are always ready to assist you. Reach out to us through any of the following methods.
          </p>

          <div className="space-y-6">
            {/* Call */}
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-blue-600 text-white rounded-full">
                <MdCall size={25} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                <p className="text-gray-600">652892462</p>
              </div>
              <button
                onClick={() => openWhatsApp('652892462', 'Hello!')}
                className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
              >
                Call Now
              </button>
            </div>

            {/* Chat */}
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-blue-600 text-white rounded-full">
                <BsFillChatDotsFill size={25} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Chat with Us</h3>
                <p className="text-gray-600">652892462</p>
              </div>
              <button
                onClick={() => openWhatsApp('652892462', 'Hello!')}
                className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
              >
                Chat Now
              </button>
            </div>

            {/* Video Call */}
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-blue-600 text-white rounded-full">
                <HiChatBubbleBottomCenter size={25} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Video Call Us</h3>
                <p className="text-gray-600">652892462</p>
              </div>
              <button
                onClick={() => openWhatsApp('652892462', 'Hello!')}
                className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
              >
                Video Call Now
              </button>
            </div>

            {/* Message */}
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-blue-600 text-white rounded-full">
                <HiChatBubbleBottomCenter size={25} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Send a Message</h3>
                <p className="text-gray-600">652892462</p>
              </div>
              <button
                onClick={() => openWhatsApp('652892462', 'Hello!')}
                className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
              >
                Message Now
              </button>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative">
            <div className="bg-blue-600 p-10 rounded-full animate-pulse">
              <MdCall className="text-white text-8xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
