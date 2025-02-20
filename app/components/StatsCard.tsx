interface StatsCardProps {
  title: string;
  value?: string | number;
  description: string;
}

export default function StatsCard({ title, value, description }: StatsCardProps) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h3 className="font-semibold text-lg">{title}</h3>
      {value && <p className="text-3xl font-bold mt-2">{value}</p>}
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
} 