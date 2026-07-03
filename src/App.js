import "./styles.css";
import React from "react";
import { useState } from "react";
function App() {
  const [car, setcar] = useState({
    year: "2024",
    model: "Z",
    makeof: "BMW",
  });
  function getyear(event) {
    setcar({ ...car, year: event.target.value });
  }
  function getmodel(event) {
    setcar({ ...car, model: event.target.value });
  }
  function getmakeof(event) {
    setcar({ ...car, makeof: event.target.value });
  }
  return (
    <div>
      <p>
        {" "}
        your favourite car is: {car.makeof} {car.model} {car.year}{" "}
      </p>
      <input type="number" value={car.year} onChange={getyear} />
      <input type="text" value={car.model} onChange={getmodel} />
      <input type="text" value={car.makeof} onChange={getmakeof} />
    </div>
  );
}
export default App;
