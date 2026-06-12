// components/sidebar.tsx

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md flex flex-col">
      
      {/* Logo area */}
      <div className="px-6 py-5 border-b">
        <h1 className="text-xl font-bold text-blue-600">MyApp</h1>
      </div>

      {/* Navigation links */}
      <nav className="flex flex-col gap-1 p-4">
        <Link
          href="/dashboard"
          className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
        >
          Overview
        </Link>
        <Link
          href="/profile"
          className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
        >
          Profile
        </Link>
        <Link
          href="/settings"
          className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
        >
          Settings
        </Link>
        <Link
          href="/analytics"
          className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
        >
          Analytics
        </Link>
      </nav>

    </div>
  );
}