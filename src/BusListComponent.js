// BusListComponent.js
import React from "react";
import { fakeBuses } from "./fakeData";

const BusListComponent = ({ onSelectBus }) => {
  return (
    <div>
      <h2>Available Buses</h2>
      <ul>
        {fakeBuses.map((bus) => (
          <li key={bus.id}>
            {bus.name} ({bus.totalSeats - bus.bookedSeats} seats available)
            <button onClick={() => onSelectBus(bus)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusListComponent;
