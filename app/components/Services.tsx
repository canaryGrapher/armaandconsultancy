interface Service {
    title: string;
    description: string;
  }
  
function ServiceGrid({ services }: { services: Service[] }) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-gray-50 rounded-2xl">
            {/* <div className="w-12 h-12 bg-black rounded-full mb-4"></div> */}
            <h3 className="text-xl font-medium mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    );
  }

  export default ServiceGrid;