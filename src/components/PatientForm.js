import React, { useState } from 'react';

const PatientForm = ({ addPatient }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && contact) {
      addPatient({ name, age, contact });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Patient Details</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </label>
      <label>
        Contact:
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default PatientForm;
