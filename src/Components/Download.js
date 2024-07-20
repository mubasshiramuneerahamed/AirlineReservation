import React from 'react';
import './download.css'; // Ensure this stylesheet is in place

const tickets = [
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
  // Add more tickets as needed
];

const Download = () => {

  const handlePrint = () => {
    window.print();
  };

  const handleEmail = (ticket) => {
    // Generate the ticket data as a string and encode it
    const emailBody = `
      Flight No.: ${ticket.flightNo}
      Departure: ${ticket.departurePlace} on ${ticket.departureDate} at ${ticket.departureTime}
      Arrival: ${ticket.arrivalPlace} on ${ticket.arrivalDate} at ${ticket.arrivalTime}
      Name: ${ticket.name}
    `;
    window.location.href = `mailto:?subject=Your E-Ticket&body=${encodeURIComponent(emailBody)}`;
  };

  const handleWhatsApp = (ticket) => {
    // Generate the ticket data as a string and encode it
    const message = `
      Flight No.: ${ticket.flightNo}
      Departure: ${ticket.departurePlace} on ${ticket.departureDate} at ${ticket.departureTime}
      Arrival: ${ticket.arrivalPlace} on ${ticket.arrivalDate} at ${ticket.arrivalTime}
      Name: ${ticket.name}
    `;
    window.location.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="download-container">
      <h1>Download Your Tickets</h1>
      <div className="tickets">
        {tickets.map((ticket, index) => (
          <div className="ticket" key={index}>
            <h2>Boarding Pass for Flight {ticket.flightNo}</h2>
            <p><strong>Departure:</strong> {ticket.departurePlace} on {ticket.departureDate} at {ticket.departureTime}</p>
            <p><strong>Arrival:</strong> {ticket.arrivalPlace} on {ticket.arrivalDate} at {ticket.arrivalTime}</p>
            <p><strong>Name:</strong> {ticket.name}</p>
            <div className="actions">
              <button onClick={() => handlePrint()}>Print</button>
              <button onClick={() => handleEmail(ticket)}>Email</button>
              <button onClick={() => handleWhatsApp(ticket)}>WhatsApp</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Download;
