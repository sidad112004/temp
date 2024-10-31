"use client";
import { ExternalLinkIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function MyApiComponent({ id }: any) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    const acutalid=Number(id.id);
    const handleApi = async () => {
        try {
            const res = await axios.get(`/api/user/myapi`);
            const actualData = res.data.data;
            setData(actualData);
        } catch (err) {
            setError('Failed to load data');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleApi();
    }, []);

    if (loading) {
        return <p className="text-center text-white">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="grid gap-6 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {data.map((temp, index) => (
                <div
                    key={index}
                    className="p-6 rounded-lg shadow-lg bg-gray-800 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer"
                >
                    <h2 className="text-2xl font-semibold text-white mb-2">{temp['title']}</h2>
                    <p className="text-sm text-gray-400 mb-4">
                        ID: <span className="font-medium">{temp['id']}</span>
                    </p>
                    <a 
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${acutalid}/${temp['id']}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-indigo-400 hover:text-indigo-600 font-semibold"
                    >
                        <ExternalLinkIcon className="h-5 w-5 mr-1" />
                        Visit API Website
                    </a>
                </div>
            ))}
        </div>
    );
}
