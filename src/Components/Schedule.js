import React from 'react';
import './schedule.css'; // Ensure this stylesheet is correctly linked

const flights = [
  {
    flightNo: 'AB123',
    departurePlace: 'New York',
    departureDate: '2024-08-01',
    departureTime: '10:00 AM',
    arrivalPlace: 'Los Angeles',
    arrivalDate: '2024-08-01',
    arrivalTime: '01:00 PM',
    flightDuration: '5 hours',
    name: 'John Doe',
    gender: 'Male',
    dob: '1990-01-01',
    terminalNo: 'T1',
  },
  {
    flightNo: 'CD456',
    departurePlace: 'San Francisco',
    departureDate: '2024-08-05',
    departureTime: '02:00 PM',
    arrivalPlace: 'Chicago',
    arrivalDate: '2024-08-05',
    arrivalTime: '06:00 PM',
    flightDuration: '4 hours',
    name: 'Jane Smith',
    gender: 'Female',
    dob: '1985-05-15',
    terminalNo: 'T2',
  },
  // Add more flight details as needed
];

const Schedule = () => {
  return (
    <div className="schedule-container">
      <div className="schedule-content">
        <h1>Your flight is booked <span role="img" aria-label="checkmark">✅</span></h1>
        <div className="boarding-passes">
          {flights.map((flight, index) => (
            <div className="boarding-pass" key={index}>
              <h2>Boarding Pass</h2>
              <div className="flight-details">
                <p><strong>Flight No.:</strong> {flight.flightNo}</p>
                <p><strong>Departure:</strong> {flight.departurePlace} on {flight.departureDate} at {flight.departureTime}</p>
                <p><strong>Arrival:</strong> {flight.arrivalPlace} on {flight.arrivalDate} at {flight.arrivalTime}</p>
                <p><strong>Duration:</strong> {flight.flightDuration}</p>
                <p><strong>Name:</strong> {flight.name}</p>
                <p><strong>Gender:</strong> {flight.gender}</p>
                <p><strong>Date of Birth:</strong> {flight.dob}</p>
                <p><strong>Terminal No.:</strong> {flight.terminalNo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
