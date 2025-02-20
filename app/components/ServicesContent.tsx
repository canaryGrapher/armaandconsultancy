import services from "../data/services";

export default function ServicesContent() {
  return (
    <main className="px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {services.map((service) => (
          <div key={service.name} className="mb-12">
            {/* Service Name */}
            <h2 className="text-2xl font-light mb-6">{service.name}</h2>
            
            {/* KPIs Grid */}
            <div className="grid grid-cols-2 gap-3">
              {service.KPIs.map((kpi) => (
                <div
                  key={kpi.name}
                  className="bg-gray-50 p-3 rounded-lg text-sm"
                >
                  <h3 className="font-medium mb-1">{kpi.name}</h3>
                  <p className="text-gray-600 text-xs leading-snug">{kpi.targets}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 