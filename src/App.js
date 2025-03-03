import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import UploadResume from './pages/UploadResume';

const App = () => {
  const [admin, setAdmin] = useState(null);

  return (
    <Router>
      {/* Navbar */}
      <nav className="p-4 bg-gray-100 flex justify-between items-center shadow-md">
        {/* Left Section - Home */}
        <Link 
          to="/" 
          className="text-gray-900 text-lg font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition"
        >
          Home
        </Link>

        {/* Right Section - Admin/Login */}
        <div>
          {admin ? (
            <Link 
              to="/upload-resume" 
              className="bg-blue-600 text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
            >
              Upload Resume
            </Link>
          ) : (
            <Link 
              to="/admin" 
              className="bg-green-600 text-white px-5 py-2 rounded-md shadow-md hover:bg-green-700 transition"
            >
              Admin Login
            </Link>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <div className="container mx-auto mt-6 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminLogin setAdmin={setAdmin} />} />
          <Route path="/upload-resume" element={admin ? <UploadResume /> : <p className="text-red-500 text-lg font-semibold">Access Denied</p>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
