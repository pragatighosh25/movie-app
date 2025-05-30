import React from 'react';
import { useNavigate } from 'react-router-dom';
import myPhoto from '/varsha.jpg'; 

const AboutUs = () => {
  const navigate = useNavigate();
  document.title ="TF | ABOUT US " 

  return (
    <div className="bg-[#1e1e2f] min-h-screen text-white px-8 py-12 w-full">
      <div className="w-full mx-auto space-y-10">
        <h1 className="text-2xl w-[20%] text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          
        </h1>

        <h1 className="text-4xl font-bold">About The Films</h1>

        <div className="flex flex-col md:flex-row items-start gap-10">
          <img
            src={myPhoto}
            alt="Developer Varsha"
            className="w-60 h-60 rounded-full object-cover border-4 border-purple-600"
          />

          <div>
            <p className="text-lg mb-4">
              <span className="font-bold text-purple-400">The Films</span> is a modern web application for exploring trending and popular movies, TV shows, and celebrities. Inspired by top entertainment databases, our platform offers:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-1">
              <li>Live trending and popular feed</li>
              <li>Dedicated pages for movies, shows, and people</li>
              <li>Sleek and responsive UI using Tailwind CSS</li>
              <li>Dynamic routing with React Router</li>
            </ul>
            <p className="text-lg">
              This is <span className="font-semibold text-yellow-300">Version 1.0</span> of The Films. We have many exciting features in the pipeline, including search filters, user profiles, and much more. Stay tuned for updates!
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-12 mb-4">About the Developer</h2>
          <p className="text-lg mb-2">
            I'm <span className="text-purple-400 font-semibold">Pragati Ghosh</span>, a passionate frontend developer who loves bringing interfaces to life. I specialize in:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>React.js & Redux</li>
            <li>Tailwind CSS & Bootstrap</li>
            <li>JavaScript, CSS, and HTML</li>
          </ul>
          <p className="mt-4 text-lg">
            I enjoy building aesthetic, user-friendly, and scalable web applications. The Films is a result of combining my passion for frontend development with my love for movies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;