// SeatSelectionComponent.js
import React, { useState } from "react";

const SeatSelectionComponent = ({ bus, onSeatSelect }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seat) => {
    // Toggle seat selection
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div>
      <h2>Select Seats for {bus.name}</h2>
      <p>Available seats: {bus.totalSeats - bus.bookedSeats}</p>
      <div className="seat-container">
        {Array.from({ length: bus.totalSeats }, (_, index) => (
          <button
            key={index}
            onClick={() => handleSeatSelect(index + 1)}
            disabled={
              selectedSeats.includes(index + 1) ||
              bus.bookedSeats >= bus.totalSeats
            }
            className={
              selectedSeats.includes(index + 1)
                ? "selected"
                : bus.bookedSeats >= bus.totalSeats
                ? "booked"
                : ""
            }
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button onClick={() => onSeatSelect(selectedSeats)}>
        Proceed to Confirm
      </button>
    </div>
  );
};

export default SeatSelectionComponent;
