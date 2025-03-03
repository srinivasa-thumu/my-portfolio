import React, { useState } from 'react';
import { supabase } from '../backend/supabaseClient';

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [resumeUrl, setResumeUrl] = useState('');

  const uploadResume = async () => {
    if (!file) return alert('Select a file first!');
    
    const { error } = await supabase.storage.from('resumes').upload(`resume.pdf`, file, { upsert: true });

    if (error) alert(error.message);
    else {
      const url = supabase.storage.from('resumes').getPublicUrl('resume.pdf').data.publicUrl;
      setResumeUrl(url);
      alert('Resume uploaded successfully!');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload Resume</h2>
      
      <div className="flex flex-col space-y-4">
        <input 
          type="file" 
          onChange={(e) => setFile(e.target.files[0])} 
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        
        <button 
          onClick={uploadResume} 
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark active:bg-primary-darker transition"
        >
          Upload
        </button>

        {resumeUrl && (
          <p className="text-blue-600 font-medium">
            Resume URL: <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="underline">{resumeUrl}</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default UploadResume;
