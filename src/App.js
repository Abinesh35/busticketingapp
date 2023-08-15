// App.js
import React, { useState } from "react";
import RegistrationComponent from "./RegistrationComponent";
import LoginComponent from "./LoginComponent";
import BusListComponent from "./BusListComponent";
import SeatSelectionComponent from "./SeatSelectionComponent";

const App = () => {
  const [user, setUser] = useState(null);
  const [selectedBus, setSelectedBus] = useState(null);

  const handleRegister = (userData) => {
    // Simulate registration logic
    // You can implement actual registration logic here
    console.log("Registered:", userData);
  };

  const handleLogin = (userData) => {
    // Simulate login logic
    // You can implement actual login logic here
    console.log("Logged in:", userData);
    setUser(userData);
  };

  const handleSelectBus = (bus) => {
    setSelectedBus(bus);
  };

  const handleSeatSelect = (seats) => {
    setSelectedSeats(seats);
  };

  return (
    <div className="App">
      <h1>Bus Ticket Booking App</h1>
      {!user ? (
        <>
          <RegistrationComponent onRegister={handleRegister} />
          <LoginComponent onLogin={handleLogin} />
        </>
      ) : selectedBus ? (
        <SeatSelectionComponent
          bus={selectedBus}
          onSeatSelect={handleSeatSelect}
        />
      ) : (
        <BusListComponent onSelectBus={handleSelectBus} />
      )}
    </div>
  );
};

export default App;
