// components/DashboardCard.tsx

type DashboardCardProps = {
  title: string;
  value: string;
};

export default function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
}