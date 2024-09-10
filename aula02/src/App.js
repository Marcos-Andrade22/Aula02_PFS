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
  return (
    <div>
      <ul>
        {
          textos.map(x => <Item key={x.id} item={x}/>)
        }
      </ul>
    </div>
  );
}

export default App;
