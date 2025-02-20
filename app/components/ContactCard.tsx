interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

export default function ContactCard({ icon, title, content }: ContactCardProps) {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 border-2 border-black bg-black rounded-full flex items-center justify-center mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center">
        {content}
      </p>
    </div>
  );
} 