"use client";

import { useState, useEffect } from 'react';
import { Field, FieldType, GenerateDataResponse } from '@/utilite/type';
import axios from 'axios';
import { getSession } from 'next-auth/react';

export default function GenerateDataComponent() {
  const [fields, setFields] = useState<Field[]>([{ name: 'id', type: 'number' }, { name: 'name', type: 'string' }]);
  const [count, setCount] = useState<number>(5);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [session, setSession] = useState<any | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
      console.log(sessionData);
    };
    fetchSession();
  }, []);

  const addField = () => {
    setFields([...fields, { name: '', type: 'string' }]);
  };

  const handleFieldChange = (index: number, key: keyof Field, value: string) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value as FieldType;
    setFields(updatedFields);
  };

  const generateData = async () => {
    const response = await axios.post('/api/user/createapi', { fields, count });
    console.log(response.data);
    // Set download URL or handle response data here
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-semibold mb-6">Generate Sample Data</h1>
      
      <div className="mb-4 w-full max-w-md">
        <label className="block font-medium mb-2">Number of entries:</label>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="bg-gray-800 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {session && (
        <a href={`http://localhost:3000/api/user/${session.id}`} className="text-blue-600 underline">
          View User API
        </a>
      )}

      <h2 className="text-2xl font-semibold mb-4">Fields</h2>

      <div className="w-full max-w-md space-y-4">
        {fields.map((field, index) => (
          <div key={index} className="flex space-x-2">
            <input
              type="text"
              placeholder="Field Name"
              value={field.name}
              onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
              className="bg-gray-800 flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={field.type}
              onChange={(e) => handleFieldChange(index, 'type', e.target.value)}
              className="bg-gray-800 flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="string">String</option>
              <option value="number">Number</option>
              <option value="boolean">Boolean</option>
            </select>
          </div>
        ))}
      </div>

      <div className="flex space-x-4 mt-6">
        <button
          onClick={addField}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Field
        </button>
        <button
          onClick={generateData}
          className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Generate Data
        </button>
      </div>

      {downloadUrl && (
        <div className="mt-6">
          <a
            href={downloadUrl}
            download="generatedData.json"
            className="text-blue-600 underline font-medium hover:text-blue-800"
          >
            Download JSON File
          </a>
        </div>
      )}
    </div>
  );
}
