import React, { useState } from 'react';
import './index.css';

function App() {
  const [square1Color, setSquare1Color] = useState('red');
  const [square2Color, setSquare2Color] = useState('blue');

  const handleSquare1Click = () => {
    if (square1Color === 'red') {
      setSquare1Color('blue');
      setSquare2Color('red');
    } else {
      setSquare1Color('red');
      setSquare2Color('blue');
    }
  };

  const handleSquare2Click = () => {
    if (square2Color === 'red') {
      setSquare2Color('blue');
      setSquare1Color('red');
    } else {
      setSquare2Color('red');
      setSquare1Color('blue');
    }
  };

  return (
    <div className="App">
      <div
        className={`square ${square1Color}`}
        onClick={handleSquare1Click}
      ></div>
      <div
        className={`square ${square2Color}`}
        onClick={handleSquare2Click}
      ></div>
    </div>
  );
}

export default App;
