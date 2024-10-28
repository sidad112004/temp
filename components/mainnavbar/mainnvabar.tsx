import Link from 'next/link';

export default function mainnavbar() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center py-4 px-6 md:px-10 bg-gray-800 shadow-lg">
      <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wider transition-colors duration-300">
      <Link href="/dashboard"> API Hub</Link>
      </h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/signin">
              <span className="inline-block px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 transition-colors duration-300">
                Create-Endpoint
              </span>
            </Link>
          </li>
          <li>
            <button >
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
