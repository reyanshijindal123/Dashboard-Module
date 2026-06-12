// components/navbr.tsx

export default function Navbar() {
  return (
    <div className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <h2 className="text-lg font-semibold text-gray-700">Dashboard</h2>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500">Welcome, Admin</span>
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
          A
        </div>
      </div>
    </div>
  );
}