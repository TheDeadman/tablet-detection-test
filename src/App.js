import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [updated, setUpdated] = useState(0);

  const handleChange = () => {
    setUpdated(performance.now());
  }

  useEffect(() => {
    /* The primary input mechanism of the device includes a 
    pointing device of limited accuracy. */
    window.matchMedia("(pointer: coarse)").addEventListener('change', handleChange)

    /* The primary input mechanism of the device 
    includes an accurate pointing device. */
    window.matchMedia("(pointer: fine)").addEventListener('change', handleChange)

    /* The primary input mechanism of the 
    device does not include a pointing device. */
    window.matchMedia("(pointer: none)").addEventListener('change', handleChange)

    /* Primary input mechanism system can 
       hover over elements with ease */
    window.matchMedia("(hover: hover)").addEventListener('change', handleChange)

    /* Primary input mechanism cannot hover 
       at all or cannot conveniently hover 
       (e.g., many mobile devices emulate hovering
       when the user performs an inconvenient long tap), 
       or there is no primary pointing input mechanism */
    window.matchMedia("(hover: none)").addEventListener('change', handleChange)

    /* One or more available input mechanism(s) 
       can hover over elements with ease */
    window.matchMedia("(any-hover: hover)").addEventListener('change', handleChange)


    /* One or more available input mechanism(s) cannot 
       hover (or there are no pointing input mechanisms) */
    window.matchMedia("(any-hover: none)").addEventListener('change', handleChange)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Last Updated - {updated}
        <br />
        <br />

        <div>
          <div>Always small</div>
          <div className='desktop'>Big Desktop</div>
          <div className='tablet'>Big Tablet</div>
          <div className='docked'>Big Docked</div>
        </div>
        <br />
        <br />
        {JSON.stringify(window.matchMedia("(pointer: coarse)").media)}-
        {JSON.stringify(window.matchMedia("(pointer: coarse)").matches)}
        <br />
        <br />
        {JSON.stringify(window.matchMedia("(pointer: fine)").media)}-
        {JSON.stringify(window.matchMedia("(pointer: fine)").matches)}
        <br />
        <br />
        {JSON.stringify(window.matchMedia("(pointer: none)").media)}-
        {JSON.stringify(window.matchMedia("(pointer: none)").matches)}
        <br />
        <br />
        {JSON.stringify(window.matchMedia("(hover: hover)").media)}-
        {JSON.stringify(window.matchMedia("(hover: hover)").matches)}
        <br />
        <br />
        {JSON.stringify(window.matchMedia("(hover: none)").media)}-
        {JSON.stringify(window.matchMedia("(hover: none)").matches)}
        <br />
        <br />
        {JSON.stringify(window.matchMedia("(any-hover: hover)").media)}-
        {JSON.stringify(window.matchMedia("(any-hover: hover)").matches)}
        <br />
        <br />
        {JSON.stringify(window.matchMedia("(any-hover: none)").media)}-
        {JSON.stringify(window.matchMedia("(any-hover: none)").matches)}
        <br />
      </header>
    </div>
  );
}


export default App;
