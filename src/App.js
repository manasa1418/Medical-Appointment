import React, { useState } from 'react';
import PatientForm from './components/PatientForm';
import ServiceList from './components/ServiceList';
import BillSummary from './components/BillSummary';
import './App.css';

const App = () => {
  const [patient, setPatient] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const services = [
    { name: 'Consultation', price: 50 },
    { name: 'X-ray', price: 100 },
    { name: 'Surgery', price: 500 },
    { name: 'Medication', price: 200 },
  ];
  const taxRate = 0.15; // 15% tax

  const addPatient = (newPatient) => {
    setPatient(newPatient);
  };

  const selectService = (selected) => {
    setSelectedServices(selected);
  };

  return (
    <div className="App">
      <h1>Hospital Billing System</h1>
      <PatientForm addPatient={addPatient} />
      <ServiceList services={services} selectService={selectService} />
      <BillSummary patient={patient} selectedServices={selectedServices} taxRate={taxRate} />
    </div>
  );
};

export default App;
