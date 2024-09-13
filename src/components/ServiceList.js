import React, { useState } from 'react';

const ServiceList = ({ services, selectService }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceChange = (service) => {
    const updatedServices = selectedServices.includes(service)
      ? selectedServices.filter((s) => s !== service)
      : [...selectedServices, service];
    setSelectedServices(updatedServices);
    selectService(updatedServices);
  };

  return (
    <div>
      <h2>Select Services</h2>
      {services.map((service, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={service.name}
            onChange={() => handleServiceChange(service)}
          />
          {service.name} - ${service.price}
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
