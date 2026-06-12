// app/dashboard/layout.tsx

import Navbar from "@/components/navabr";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Right side: Navbar on top + page content below */}
      <div className="flex flex-col flex-1 overflow-hidden">
        
        {/* Top Navbar */}
        <Navbar />

        {/* Page content (this is where dashboard/page.tsx renders) */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

      </div>
    </div>
  );
}