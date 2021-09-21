import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [click, setClick] = useState(true);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const getXyPosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log('jhjh');
    window.addEventListener('mousemove', getXyPosition);
    return () => {
      console.log('jhjhdd');
      window.removeEventListener('mousemove', getXyPosition);
    };
  }, []);
  return (
    <div>
      <button onClick={() => setClick(!click)}>Remove Effect</button>
      {click && `the positions ${x} , ${y}`}
    </div>
  );
}
