import React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [click, setClick] = useState(true);
  

  return (
    <div>
    <button onClick={()=> setClick(!click)}></button>
    {click &&  {x},{y}}
    </div>
  );
}
