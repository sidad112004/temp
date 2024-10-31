"use client"
import { useState } from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function MainNavbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center py-4 px-6 md:px-10 bg-gray-800 shadow-lg">
      <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wider transition-colors duration-300">
        <Link href="/dashboard">API Hub</Link>
      </h1>

      {/* Hamburger menu for mobile mode */}
      <button className="md:hidden text-white" onClick={toggleDropdown}>
        {isOpen ? (
          <XIcon className="h-6 w-6" />
        ) : (
          <MenuIcon className="h-6 w-6" />
        )}
      </button>

      {/* Navigation links for desktop and mobile */}
      <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="md:flex space-x-6">
          <li>
            <Link href="/dashboard/allcustomapi">
              <span className="inline-block px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 transition-colors duration-300">
              Your-Api
              </span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/createapi">
              <span className="inline-block px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 transition-colors duration-300">
                
                Create-Endpoint
              </span>
            </Link>
          </li>
          <li>
            <button onClick={() => signOut()}>
              <span className="inline-block px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 transition-colors duration-300">
                Logout
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
