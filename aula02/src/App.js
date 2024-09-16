import React, { useState, createContext } from 'react'
import Loja from './components/Loja';
import './App.css';
import ContadorCliques from './ContadorCliques';

export const CliqueContext = createContext(0, () => { });

function App() {
  const [cliques, setCliques] = useState(0);
  return (
    <div>
      <Loja />
    </div>
  );
}

export default App;
