import './App.css';
import { NavBar } from './components/NavBar';
import Card from './components/Card';

function App() {
  const title='INDICE DE MASA CORPORAL'
  return (
    <div className="App">
      <NavBar title={title}/>
      <Card/>
    </div>
  );
}

export default App;
