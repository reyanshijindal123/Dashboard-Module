// app/dashboard/page.tsx

import { cookies } from "next/headers";
import DashboardCard from "@/components/dashboardcard";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const user = cookieStore.get("token");

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Dashboard Overview
      </h1>

      <p className="mb-6">
        Logged in as: {user?.value}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <DashboardCard title="Users" value="1,250" />
        <DashboardCard title="Orders" value="830" />
        <DashboardCard title="Revenue" value="$12,500" />
      </div>
    </div>
  );
}