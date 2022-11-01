import React, { useState, useEffect } from 'react';

export default function ScaleConversion() {
  //set state
  const [count, setCount] = useState(0);
  //define a cdivck handler
  const handleIncrement = (event) => setCount((prev) => prev + 1);
  const handleDecrement = (event) => setCount((prev) => prev - 1);
  const handleReset = (event) => setCount(0);
  //define useEffect
  useEffect(() => {
    console.log('App Component is rendered');
  }, []);

  //render
  return (
    <div>
      <h1>Scale Conversion App</h1>

      <div>
        <label>
          Select the scale you want to convert from:
          <select className="scale">
            <option value="centimeter">Centimeter</option>
            <option value="Meter">Meter</option>
            <option defaultValue="Inches">
              Inches
            </option>
            <option value="Feet">Feet</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Select the scale you want to convert to:
          <select className="scale">
            <option defaultValue="centimeter">
              Centimeter
            </option>
            <option value="Meter">Meter</option>
            <option value="Inches">Inches</option>
            <option value="Feet">Feet</option>
          </select>
        </label>
      </div>

      <h4>Count: {count} </h4>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
