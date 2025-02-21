import StatsCard from './StatsCard';

const statsData = {
  topRow: [
    {
      title: "Industry Experience",
      value: "50+",
      description: "Years in Cyber Security, Cloud & Emerging Tech"
    },
    {
      title: "Certified Team",
      value: "20+",
      description: "CISSP, CISM, PMP, CIPM, AWS Certified Professionals"
    },
    {
      title: "Project Success",
      value: "150+",
      description: "Successfully Delivered Projects"
    }
  ],
  bottomRow: [
    {
      title: "Security Approach",
      description: "Security-first methodology in everything we do"
    },
    {
      title: "Expertise",
      description: "SoC, Data Privacy, Data Security, VAPT, EDR, MDR"
    }
  ]
};

export default function StatsGrid() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        {statsData.topRow.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        {statsData.bottomRow.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
} 