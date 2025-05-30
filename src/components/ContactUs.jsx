import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();
  document.title ="TF | CONTACT US " 

  return (
    <div className="bg-[#1e1e2f] min-h-screen text-white py-12 px-4 w-full">
      <div className="w-full max-w-3xl mx-auto bg-[#2a2a3b] p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl w-[20%] text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          
        </h1>
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg mb-6 text-center">
          We'd love to hear from you! Reach out with any suggestions, feedback, or queries.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded bg-[#2e2e42] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded bg-[#2e2e42] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full p-3 rounded bg-[#2e2e42] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded text-white font-semibold w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};


export default ContactUs;
