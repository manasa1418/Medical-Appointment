import React from 'react';

const BillSummary = ({ patient, selectedServices, taxRate }) => {
  const totalServiceCost = selectedServices.reduce((total, service) => total + service.price, 0);
  const taxAmount = totalServiceCost * taxRate;
  const totalAmount = totalServiceCost + taxAmount;

  if (!patient || selectedServices.length === 0) return null;

  return (
    <div>
      <h2>Bill Summary</h2>
      <p>Patient: {patient.name}</p>
      <p>Age: {patient.age}</p>
      <p>Contact: {patient.contact}</p>
      <h3>Services:</h3>
      <ul>
        {selectedServices.map((service, index) => (
          <li key={index}>
            {service.name} - ${service.price}
          </li>
        ))}
      </ul>
      <p>Tax: ${taxAmount.toFixed(2)}</p>
      <p>Total: ${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default BillSummary;
