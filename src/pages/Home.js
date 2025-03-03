import React, { useState } from 'react';
import About from './About';
import Experience from './Experience';
import Certifications from './Certifications';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import img from '../images/Srinivasa Reddy Thumu high - Photo.jpg'

const Home = () => {
  const [activeTab, setActiveTab] = useState('About');

  const renderTab = () => {
    switch (activeTab) {
      case 'About': return <About />;
      case 'Experience': return <Experience />;
      case 'Certifications': return <Certifications />;
      case 'Projects': return <Projects />;
      case 'Skills': return <Skills />;
      case 'Education': return <Education />;
      default: return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8 text-center">
      {/* Profile Image */}
      <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4">
        <img 
          src={img} 
          alt="Profile"
          className="w-full h-full"
        />
      </div>

      {/* Title and Subtitle */}
      <h1 className="text-5xl font-extrabold text-gray-800 mb-2">Srinivasa Reddy Thumu</h1>
      <p className="text-lg text-gray-600 mb-6">C# | React Developer | .NET | Python</p>

      {/* Navigation Tabs */}
      <nav className="flex flex-wrap justify-center space-x-2 md:space-x-4 bg-white shadow-lg rounded-lg p-4 mb-6">
        {['About', 'Experience', 'Certifications', 'Projects', 'Skills', 'Education'].map(tab => (
          <button
            key={tab}
            className={`px-5 py-2 rounded-lg text-lg font-medium transition-all duration-300
              ${activeTab === tab 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white hover:shadow-lg'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Content Section */}
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-6">
        {renderTab()}
      </div>
    </div>
  );
};

export default Home;
