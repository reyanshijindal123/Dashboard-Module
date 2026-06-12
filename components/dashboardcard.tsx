// components/DashboardCard.tsx

type DashboardCardProps = {
  title: string;
  value: string;
};

export default function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className="bg-purple-100 rounded-xl shadow p-6 flex flex-col gap-2">
      <p className="text-sm text-black-500 font-medium">{title}</p>
      <p className="text-2xl font-bold text-black-800">{value}</p>
    </div>
  );
}