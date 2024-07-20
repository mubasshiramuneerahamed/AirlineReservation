import React from 'react';
import Calendar from './Components/Calendar';
import './book.css';

function BookedFlights() {
  return (
    <div className="booked-flights-container">
      <h2 className="booked-flights-title">Booked Flights</h2>
      <div className="message-container">
        <h3 className="message">Checkout your upcoming Journey!!</h3>
      </div>
      <Calendar highlightedDates={[1, 15, 22]} />
    </div>
  );
}

export default BookedFlights;
