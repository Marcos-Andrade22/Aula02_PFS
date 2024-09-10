import React, {useState, useRef} from 'react'
import logo from './logo.svg';
import './App.css';
import Loja from './components/Loja';

const textos = [
  {id: 1, texto: 'Texto 1'},
  {id: 2, texto: 'Texto 2'},
  {id: 3, texto: 'Texto 3'},
  {id: 4, texto: 'Texto 4'},
  {id: 5, texto: 'Texto 5'},
];

function Item({item}){
  return <li>{item.texto}</li>
}

function App() {
const [mensagem, setMensagem] = useState('');
const inputRef = useRef(null);

  return (
    <div>
      <label>Nome</label>
      <input 
       style={{marginLeft: '10px', marginRight: '10px'}}
       type='text'
       ref={inputRef}
       />
      <button onClick={() => setMensagem(`Olá ${inputRef.current.value}!`)}>Mostrar</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;
