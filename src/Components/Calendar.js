import React from 'react';
import './calendar.css'; // Ensure this stylesheet is correctly linked

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const getDaysInMonth = (month, year) => {
  const daysInMonth = new Date(year, month, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

const Calendar = ({ highlightedDates = [] }) => {
  const year = 2024;

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-row">
          {months.slice(0, 6).map((month, index) => (
            <div className="calendar-month" key={index}>
              <h3>{month}</h3>
              <div className="calendar-days">
                {getDaysInMonth(index + 1, year).map(day => (
                  <span
                    key={day}
                    className={`calendar-day ${highlightedDates.includes(day) ? 'highlighted' : ''}`}
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="calendar-row">
          {months.slice(6).map((month, index) => (
            <div className="calendar-month" key={index + 6}>
              <h3>{month}</h3>
              <div className="calendar-days">
                {getDaysInMonth(index + 7, year).map(day => (
                  <span
                    key={day}
                    className={`calendar-day ${highlightedDates.includes(day) ? 'highlighted' : ''}`}
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
