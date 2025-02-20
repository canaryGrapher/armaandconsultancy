import Header from "../components/Header";
// import ServiceIn
import services from "../data/services";
import ServiceGrid from "../components/Services";



export default function Services() {
  return (
    <div className="min-h-screen w-full">
      <Header activePage="services" />

      {/* Services Hero Section */}
      <main className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-light mb-8">Our Services</h1>
          
          <ServiceGrid services={services.map(service => ({
            title: service.name,
            description: service.KPIs.map(kpi => kpi.name).join(", ")
          }))} />

        </div>
      </main>
    </div>
  );
} 