"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function () {
  const router = useRouter();
  const [apiName, setApiName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [link, setLink] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newApi = {
      apiName,
      description,
      link,
    };

    console.log('New API Added:', newApi);
    router.push('/'); // Redirect after submission
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <h1 className="text-4xl font-bold text-white mb-6 tracking-tight text-center">
        Add New API
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-300 mb-1 text-lg font-semibold" htmlFor="apiName">
            API Name
          </label>
          <input
            type="text"
            id="apiName"
            value={apiName}
            onChange={(e) => setApiName(e.target.value)}
            required
            className="w-full p-3 bg-transparent border-2 border-gray-600 text-white rounded-md focus:outline-none focus:ring-0 focus:border-indigo-500 transition duration-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1 text-lg font-semibold" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={3}
            className="w-full p-3 bg-transparent border-2 border-gray-600 text-white rounded-md focus:outline-none focus:ring-0 focus:border-indigo-500 transition duration-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1 text-lg font-semibold" htmlFor="link">
            API Website Link
          </label>
          <input
            type="url"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
            className="w-full p-3 bg-transparent border-2 border-gray-600 text-white rounded-md focus:outline-none focus:ring-0 focus:border-indigo-500 transition duration-200"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-6 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-700 transition-colors duration-300"
        >
          Add API
        </button>
      </form>
    </div>
  );
}
