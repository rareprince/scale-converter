import React, { useState, useContext, useEffect } from 'react';
import './style.css';
import ScaleConversion from './counter.jsx';



export default function App() {
 
  return (
    <section className ="main-container">
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
     <ScaleConversion />
     </section>
  );
}
