import React, { useState } from 'react';
import './cancel.css'; // Ensure this stylesheet is in place

const bookedFlights = [
  {
    flightNo: 'AB123',
    departurePlace: 'New York',
    departureDate: '2024-08-01',
    departureTime: '10:00 AM',
    arrivalPlace: 'Los Angeles',
    arrivalDate: '2024-08-01',
    arrivalTime: '01:00 PM',
    name: 'John Doe',
  },
  {
    flightNo: 'CD456',
    departurePlace: 'San Francisco',
    departureDate: '2024-08-05',
    departureTime: '02:00 PM',
    arrivalPlace: 'Chicago',
    arrivalDate: '2024-08-05',
    arrivalTime: '06:00 PM',
    name: 'Jane Smith',
  },
  // Add more booked flights as needed
];

const Cancel = () => {
  const [flights, setFlights] = useState(bookedFlights);

  const handleEdit = (flight) => {
    // Implement edit functionality
    alert(`Edit functionality for flight ${flight.flightNo}`);
  };

  const initiateRefund = async (flight) => {
    try {
      const response = await fetch('/api/refund', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flight }),
      });
      const data = await response.json();
      alert(`Refund processed: ${data.message}`);
    } catch (error) {
      console.error('Error processing refund:', error);
      alert('Failed to process refund.');
    }
  };

  const handleCancel = async (flight) => {
    // Confirm cancellation
    if (window.confirm(`Are you sure you want to cancel flight ${flight.flightNo}?`)) {
      // Remove flight from list
      setFlights(flights.filter(f => f.flightNo !== flight.flightNo));
      // Initiate refund
      await initiateRefund(flight);
    }
  };

  return (
    <div className="cancel-container">
      <h1>Manage Your Bookings</h1>
      <div className="flight-list">
        {flights.length === 0 ? (
          <p>No booked flights to display.</p>
        ) : (
          flights.map((flight, index) => (
            <div className="flight-item" key={index}>
              <h2>Flight {flight.flightNo}</h2>
              <p><strong>Departure:</strong> {flight.departurePlace} on {flight.departureDate} at {flight.departureTime}</p>
              <p><strong>Arrival:</strong> {flight.arrivalPlace} on {flight.arrivalDate} at {flight.arrivalTime}</p>
              <p><strong>Name:</strong> {flight.name}</p>
              <div className="actions">
                <button onClick={() => handleEdit(flight)}>Edit</button>
                <button onClick={() => handleCancel(flight)}>Cancel</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cancel;
