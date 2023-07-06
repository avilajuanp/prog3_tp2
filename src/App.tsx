import './App.css';
import { MostrarPorConsola } from './components/AddToEscuela';
import { AutoApp } from './components/Auto';
import { CuentaBancariaApp } from './components/CuentaBancaria';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container bg-light mb-2">
      <h1 style={{textAlign:"center"}}>Bienvenido al TP2 - Programación III - IES 9-023</h1>
      <h5 style={{textAlign:"center"}}>Avila, Juan Pablo / García, Gustavo / Maldonado, Franco</h5>
      <AutoApp />
      <hr />
      <MostrarPorConsola />
      <hr />
      <CuentaBancariaApp />
    </div>
  );
}

export default App;
