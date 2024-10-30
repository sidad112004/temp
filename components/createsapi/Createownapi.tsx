"use client";
import { useState } from 'react';

export default function() {
  const [schema, setSchema] = useState<string>('');


  const handleGenerateApi = () => {
    try {

    } catch (error) {
      alert("Invalid schema format. Please ensure it's valid JSON.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Create Your Own API</h1>
      <textarea
        value={schema}
        onChange={(e) => setSchema(e.target.value)}
        placeholder='Enter your schema in JSON format, e.g., {"name": "string", "email": "string"}'
        className="w-full max-w-lg h-48 p-4 bg-gray-700 text-white rounded-lg border-2 border-gray-600 focus:outline-none focus:border-indigo-500 mb-4"
      />
      <button
        onClick={handleGenerateApi}
        className="bg-indigo-600 py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        Generate Sample Data
      </button>

      
    </div>
  );
}
